'use client';
import { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  Eye, EyeOff, Lock, Loader2,
  CheckCircle2, AlertCircle, MailOpen, RefreshCw,
} from 'lucide-react';
import { apiFetch } from '@/lib/api';

// ── Token status returned by POST /v1/email/verify-setup-token ───────────────
type TokenStatus = 'checking' | 'valid' | 'expired' | 'used' | 'invalid';

// Admin panel login URL — update this to an env var when deploying
const ADMIN_LOGIN_URL = process.env.NEXT_PUBLIC_ADMIN_PANEL_URL
  ? `${process.env.NEXT_PUBLIC_ADMIN_PANEL_URL}/sign-in`
  : 'http://localhost:4200/sign-in';

// ─── Password strength helper ─────────────────────────────────────────────────
function getStrength(pw: string): { label: string; color: string; pct: string } {
  if (!pw) return { label: '', color: 'bg-slate-200', pct: 'w-0' };
  if (pw.length < 8) return { label: 'Too short', color: 'bg-red-400', pct: 'w-1/4' };
  const score = [/[a-z]/, /[A-Z]/, /\d/, /[^a-zA-Z0-9]/].filter(r => r.test(pw)).length;
  if (score <= 2) return { label: 'Weak', color: 'bg-orange-400', pct: 'w-2/4' };
  if (score === 3) return { label: 'Good', color: 'bg-yellow-400', pct: 'w-3/4' };
  return { label: 'Strong', color: 'bg-emerald-500', pct: 'w-full' };
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function SetupPasswordPage() {
  const params = useSearchParams();
  const token = params.get('token') || '';

  const [tokenStatus, setTokenStatus] = useState<TokenStatus>('checking');
  const [firstName, setFirstName] = useState('');
  const [expiredEmail, setExpiredEmail] = useState('');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [resending, setResending] = useState(false);
  const [resendDone, setResendDone] = useState(false);
  const [resendMsg, setResendMsg] = useState('');

  const didVerify = useRef(false); // prevent React StrictMode double-fire

  // ── Step 1: verify token on mount ────────────────────────────────────
  useEffect(() => {
    if (didVerify.current) return;
    didVerify.current = true;

    if (!token) { setTokenStatus('invalid'); return; }

    apiFetch('/v1/email/verify-setup-token', {
      method: 'POST',
      body: JSON.stringify({ token }),
    }).then(({ data, error: apiErr }) => {
      if (apiErr || !data) { setTokenStatus('invalid'); return; }
      const d = (data as any).data;
      setTokenStatus(d.token_status as TokenStatus);
      if (d.first_name) setFirstName(d.first_name);
      if (d.email) setExpiredEmail(d.email);
    });
  }, [token]);

  // ── Step 2: submit password ───────────────────────────────────────────
  async function handleSubmit() {
    setError(null);

    if (!password)
      return setError('Please enter a password.');
    if (password.length < 8)
      return setError('Password must be at least 8 characters.');
    if (!/[a-zA-Z]/.test(password) || !/\d/.test(password))
      return setError('Password must contain at least one letter and one number.');
    if (password !== confirmPassword)
      return setError('Passwords do not match.');

    setSubmitting(true);
    const { data, error: apiErr } = await apiFetch<any>(
      `/v1/email/setup-password?token=${encodeURIComponent(token)}`,
      { method: 'POST', body: JSON.stringify({ password }) },
    );
    setSubmitting(false);

    if (apiErr) { setError(apiErr); return; }

    // Backend returns token_expired: true if token expired between verify + submit
    const d = (data as any)?.data;
    if (d?.token_expired) {
      setExpiredEmail(d.email || '');
      setTokenStatus('expired');
      return;
    }

    setSuccess(true);
  }

  // ── Step 3 (if expired): request a new link ───────────────────────────
  async function handleResend() {
    setResending(true);
    const body = token ? { token } : { email: expiredEmail };
    const { data } = await apiFetch<any>('/v1/email/resend-setup-email', {
      method: 'POST',
      body: JSON.stringify(body),
    });
    setResending(false);
    setResendDone(true);
    setResendMsg((data as any)?.message || 'A new setup link has been sent to your email.');
  }

  const strength = getStrength(password);

  // ─────────────────────────────────────────────────────────────────────
  // Render states
  // ─────────────────────────────────────────────────────────────────────

  if (tokenStatus === 'checking') {
    return (
      <StatusScreen
        icon={<Loader2 className="w-10 h-10 text-blue-600 animate-spin" />}
        title="Checking your link…"
        subtitle="Please wait a moment."
        bg="bg-blue-100"
      />
    );
  }

  if (tokenStatus === 'invalid') {
    return (
      <StatusScreen
        icon={<AlertCircle className="w-10 h-10 text-red-500" />}
        title="Invalid link"
        bg="bg-red-100"
        subtitle={
          <>
            This setup link is invalid or does not exist. Please contact{' '}
            <a href="mailto:support@ctas.in" className="underline">support@ctas.in</a>.
          </>
        }
      />
    );
  }

  if (tokenStatus === 'used') {
    return (
      <StatusScreen
        icon={<CheckCircle2 className="w-10 h-10 text-emerald-500" />}
        title="Already activated"
        bg="bg-emerald-100"
        subtitle="Your account is already active. Please log in to the admin panel."
        cta={
          <Link
            href={ADMIN_LOGIN_URL}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-6 py-2.5 text-sm font-semibold hover:opacity-90"
          >
            Log In to Admin Panel
          </Link>
        }
      />
    );
  }

  if (tokenStatus === 'expired') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm px-10 py-14 max-w-md w-full text-center">
          <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
            <MailOpen className="w-10 h-10 text-amber-500" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Link expired</h1>
          <p className="text-slate-500 text-sm mb-8">
            This password setup link has expired (links are valid for 24 hours).
            Click below to receive a fresh link.
          </p>

          {resendDone ? (
            <div className="rounded-2xl bg-emerald-50 border border-emerald-100 px-5 py-4 mb-6">
              <p className="text-sm font-semibold text-emerald-700">{resendMsg}</p>
              <p className="text-xs text-slate-500 mt-1">
                Check your inbox and spam folder. The new link expires in 24 hours.
              </p>
            </div>
          ) : (
            <button
              onClick={handleResend}
              disabled={resending}
              className="w-full h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-900 text-white
                         text-sm font-semibold shadow-lg hover:opacity-90 transition-opacity
                         disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {resending
                ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
                : <><RefreshCw className="w-4 h-4" /> Send New Setup Link</>
              }
            </button>
          )}

          <p className="mt-6 text-xs text-slate-400">
            Already have an account?{' '}
            <Link href={ADMIN_LOGIN_URL} className="underline hover:text-slate-600">
              Log in
            </Link>
          </p>
        </div>
      </div>
    );
  }

  // ── Password set successfully ─────────────────────────────────────────
  if (success) {
    return (
      <StatusScreen
        icon={<CheckCircle2 className="w-10 h-10 text-emerald-500" />}
        title="Password set!"
        bg="bg-emerald-100"
        subtitle="Your account is now active. You can log in to the admin panel."
        cta={
          <Link
            href={ADMIN_LOGIN_URL}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-6 py-2.5 text-sm font-semibold hover:opacity-90"
          >
            Log In to Admin Panel
          </Link>
        }
      />
    );
  }

  // ── Password form (token is valid) ────────────────────────────────────
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm px-10 py-12 max-w-md w-full">

        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-100 mx-auto mb-6">
          <Lock className="w-7 h-7 text-blue-600" />
        </div>

        <h1 className="text-2xl font-bold text-slate-900 text-center mb-1">
          {firstName ? `Hi ${firstName}, set your password` : 'Set your password'}
        </h1>
        <p className="text-slate-500 text-sm text-center mb-8">
          Choose a strong password to activate your account.
        </p>

        {error && (
          <div className="rounded-xl bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-600 mb-5">
            {error}
          </div>
        )}

        {/* New Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">New Password</label>
          <div className="relative">
            <input
              type={showPass ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Min. 8 characters"
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 pr-11 text-sm
                         text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
            />
            <button
              type="button"
              onClick={() => setShowPass(v => !v)}
              className="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-slate-600"
            >
              {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {password && (
            <div className="mt-2">
              <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                <div className={`h-full rounded-full transition-all duration-300 ${strength.color} ${strength.pct}`} />
              </div>
              {strength.label && <p className="text-xs text-slate-500 mt-1">{strength.label}</p>}
            </div>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirm ? 'text' : 'password'}
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder="Re-enter your password"
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 pr-11 text-sm
                         text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(v => !v)}
              className="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-slate-600"
            >
              {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {confirmPassword && (
            <p className={`text-xs mt-1 ${password === confirmPassword ? 'text-emerald-600' : 'text-red-500'}`}>
              {password === confirmPassword ? '✓ Passwords match' : 'Passwords do not match'}
            </p>
          )}
        </div>

        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="w-full h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-900 text-white
                     text-sm font-semibold shadow-lg hover:opacity-90 transition-opacity
                     disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {submitting
            ? <><Loader2 className="w-4 h-4 animate-spin" /> Activating account…</>
            : 'Set Password & Activate Account'
          }
        </button>

        <p className="mt-5 text-center text-xs text-slate-400">
          Link expires in 24 hours. Need help?{' '}
          <a href="mailto:support@ctas.in" className="underline hover:text-slate-600">
            Contact support
          </a>
        </p>
      </div>
    </div>
  );
}

// ─── Reusable status screen ───────────────────────────────────────────────────
function StatusScreen({
  icon, title, subtitle, bg, cta,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: React.ReactNode;
  bg: string;
  cta?: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm px-10 py-14 max-w-md w-full text-center">
        <div className={`w-20 h-20 rounded-full ${bg} flex items-center justify-center mx-auto mb-6`}>
          {icon}
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">{title}</h1>
        <p className="text-slate-500 text-sm">{subtitle}</p>
        {cta}
      </div>
    </div>
  );
}

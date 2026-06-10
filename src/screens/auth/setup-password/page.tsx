'use client';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Eye, EyeOff, Lock, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { apiFetch } from '@/lib/api';

/**
 * /auth/setup-password?token=<token>
 *
 * NEW PAGE — renders when the user clicks the "Set My Password" link in the
 * welcome email. The token was generated in EmailService.sendWelcomeAndPasswordSetup()
 * and stored as reset_id + expiration on tbl_sellers.
 *
 * On submit: POST /v1/auth/setup-password  { token, password }
 * Backend hashes the password, sets status=1 (active), clears the token.
 */
export default function SetupPasswordPage() {
  const params = useSearchParams();
  const router = useRouter();
  const token = params.get('token') || '';

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Validate token presence on mount
  useEffect(() => {
    if (!token) {
      setError('Invalid or missing setup link. Please request a new one from support.');
    }
  }, [token]);

  // ── Password strength helper ──────────────────────────────────────────────
  function getStrength(pw: string): { label: string; color: string; width: string } {
    if (pw.length === 0) return { label: '', color: 'bg-slate-200', width: 'w-0' };
    if (pw.length < 8) return { label: 'Too short', color: 'bg-red-400', width: 'w-1/4' };
    const hasLower = /[a-z]/.test(pw);
    const hasUpper = /[A-Z]/.test(pw);
    const hasDigit = /\d/.test(pw);
    const hasSymbol = /[^a-zA-Z0-9]/.test(pw);
    const score = [hasLower, hasUpper, hasDigit, hasSymbol].filter(Boolean).length;
    if (score <= 2) return { label: 'Weak', color: 'bg-orange-400', width: 'w-2/4' };
    if (score === 3) return { label: 'Good', color: 'bg-yellow-400', width: 'w-3/4' };
    return { label: 'Strong', color: 'bg-emerald-500', width: 'w-full' };
  }

  const strength = getStrength(password);

  // ── Submit ────────────────────────────────────────────────────────────────
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

    setLoading(true);

    const { data, error: apiErr } = await apiFetch(
      `/v1/auth/setup-password?token=${encodeURIComponent(token)}`,
      {
        method: 'POST',
        body: JSON.stringify({
          password,
        }),
      }
    );
    setLoading(false);

    if (apiErr) {
      setError(apiErr);
      return;
    }

    setSuccess(true);

    // Redirect to login after 2 seconds
    setTimeout(() => router.push('/auth/login'), 2000);
  }

  // ── Success state ─────────────────────────────────────────────────────────
  if (success) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm px-10 py-14 max-w-md w-full text-center">
          <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-emerald-500" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Password set!</h1>
          <p className="text-slate-500 text-sm mb-1">Your account is now active.</p>
          <p className="text-slate-400 text-xs">Redirecting you to login…</p>
        </div>
      </div>
    );
  }

  // ── Token missing / invalid ───────────────────────────────────────────────
  if (!token) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm px-10 py-14 max-w-md w-full text-center">
          <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-10 h-10 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Invalid link</h1>
          <p className="text-slate-500 text-sm">
            This setup link is missing or invalid. Please contact{' '}
            <a href="mailto:support@ctas.in" className="underline hover:text-primary">
              support@ctas.in
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  // ── Form ──────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm px-10 py-12 max-w-md w-full">

        {/* Header */}
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mx-auto mb-6">
          <Lock className="w-7 h-7 text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 text-center mb-1">Set your password</h1>
        <p className="text-slate-500 text-sm text-center mb-8">
          Choose a strong password to activate your account.
        </p>

        {/* Error */}
        {error && (
          <div className="rounded-xl bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-600 mb-5">
            {error}
          </div>
        )}

        {/* Password field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            New Password
          </label>
          <div className="relative">
            <input
              type={showPass ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Min. 8 characters"
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 pr-11 text-sm text-slate-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <button
              type="button"
              onClick={() => setShowPass(v => !v)}
              className="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-slate-600"
            >
              {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          {/* Strength bar */}
          {password.length > 0 && (
            <div className="mt-2">
              <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                <div className={`h-full rounded-full transition-all duration-300 ${strength.color} ${strength.width}`} />
              </div>
              {strength.label && (
                <p className="text-xs text-slate-500 mt-1">{strength.label}</p>
              )}
            </div>
          )}
        </div>

        {/* Confirm password */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirm ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter your password"
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 pr-11 text-sm text-slate-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(v => !v)}
              className="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-slate-600"
            >
              {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {/* Match indicator */}
          {confirmPassword.length > 0 && (
            <p className={`text-xs mt-1 ${password === confirmPassword ? 'text-emerald-600' : 'text-red-500'}`}>
              {password === confirmPassword ? '✓ Passwords match' : 'Passwords do not match'}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full h-12 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold shadow-lg hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading
            ? <><Loader2 className="w-4 h-4 animate-spin" /> Setting password…</>
            : 'Set Password & Activate Account'
          }
        </button>

        <p className="mt-5 text-center text-xs text-slate-400">
          This link expires in 24 hours. Need help?{' '}
          <a href="mailto:support@ctas.in" className="underline hover:text-slate-600">
            Contact support
          </a>
        </p>
      </div>
    </div>
  );
}

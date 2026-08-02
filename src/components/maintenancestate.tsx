'use client';

import Link from 'next/link';
import { ShieldCheck, RefreshCcw, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MaintenanceIllustration } from './maintenanceillustration';

interface MaintenanceStateProps {
    title?: string;
    message?: string;
    retryLabel?: string;
    onRetry?: () => void;
    contactLabel?: string;
    contactHref?: string;
    className?: string;
}

const STATUS_BADGES = [
    { label: 'Service Down', icon: AlertTriangle },
    { label: 'Team Notified', icon: ShieldCheck },
    { label: 'Restoring Soon', icon: RefreshCcw },
];

export function MaintenanceState({
    title = "We'll Be Back Shortly",
    message = "We're currently performing scheduled maintenance to improve your experience. Some features may be temporarily unavailable, but everything will be back online soon.",
    retryLabel = 'Try Again',
    onRetry,
    contactLabel = 'Contact Support',
    contactHref = '/contact',
    className = '',
}: MaintenanceStateProps) {
    return (
        <div className={`relative flex items-center justify-center px-6 lg:px-10 py-20 ${className}`}>
            {/* subtle grid background, faded toward the edges */}
            <div
                className="pointer-events-none absolute inset-0 -z-10"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, #eef2f7 1px, transparent 1px), linear-gradient(to bottom, #eef2f7 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                    maskImage: 'radial-gradient(ellipse 60% 60% at 50% 40%, #000 30%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 40%, #000 30%, transparent 100%)',
                }}
            />

            <div className="w-full max-w-xl rounded-3xl border border-red-200 bg-white px-8 py-12 text-center shadow-xl sm:px-14 sm:py-14">
                <div className="mx-auto mb-8 w-48 sm:w-56">
                    <MaintenanceIllustration className="h-auto w-full" />
                </div>

                <h2 className="mb-3 text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h2>
                <p className="mx-auto mb-9 max-w-md leading-relaxed text-slate-500">{message}</p>

                <div className="mb-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Button
                        onClick={onRetry}
                        size="lg"
                        className="h-12 rounded-full border-0 bg-gradient-to-r from-red-500 to-red-700 px-8 text-base text-white shadow-md hover:opacity-90"
                    >
                        {retryLabel}
                    </Button>
                    <Link href={contactHref}>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-12 rounded-full border-red-200 px-8 text-base text-slate-700 hover:bg-red-50"
                        >
                            {contactLabel}
                        </Button>
                    </Link>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2.5">
                    {STATUS_BADGES.map(({ label, icon: Icon }) => (
                        <Badge
                            key={label}
                            variant="secondary"
                            className="gap-1.5 rounded-full border border-red-100 bg-red-50 px-3 py-1.5 font-medium text-red-700 hover:bg-red-50"
                        >
                            <Icon className="h-3.5 w-3.5" />
                            {label}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MaintenanceState;
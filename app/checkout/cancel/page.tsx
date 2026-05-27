import { Suspense } from 'react';
import CheckoutCancelPage from '@/screens/checkout/cancel/page';

export const metadata = {
    title: 'Payment Cancelled — Ctasis',
};

export default function Page() {
    return (
        <Suspense>
            <CheckoutCancelPage />
        </Suspense>
    );
}

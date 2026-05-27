import { Suspense }     from 'react';
import CheckoutSuccessPage from '@/screens/checkout/success/page';

export const metadata = {
  title: 'Payment Successful — Ctasis',
};

export default function Page() {
  return (
    <Suspense>
      <CheckoutSuccessPage />
    </Suspense>
  );
}

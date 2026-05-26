'use client';
import { useCallback } from 'react';
import type { RazorpayOptions } from '@/types/payment.types';

const RAZORPAY_SCRIPT = 'https://checkout.razorpay.com/v1/checkout.js';

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (document.querySelector(`script[src="${RAZORPAY_SCRIPT}"]`)) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.src = RAZORPAY_SCRIPT;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export function useRazorpay() {
  const openCheckout = useCallback(async (options: RazorpayOptions) => {
    const loaded = await loadRazorpayScript();
    if (!loaded || !window.Razorpay) {
      throw new Error('Razorpay SDK failed to load. Check your internet connection.');
    }
    const rzp = new window.Razorpay(options);
    rzp.open();
  }, []);

  return { openCheckout };
}

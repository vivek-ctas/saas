'use client';
import { useState, useEffect } from 'react';
import { detectUserCountry } from '@/services/checkout.service';
import type { CountryInfo, Gateway } from '@/types/checkout.types';

interface UseCountryResult {
  country:    CountryInfo | null;
  detecting:  boolean;
  gateway:    Gateway;
  setGateway: (g: Gateway) => void;
}

/**
 * Detects user's country on mount via IP geolocation.
 * Auto-selects Razorpay for Indian users, Stripe for everyone else.
 * User can still override the gateway manually.
 */
export function useCountry(): UseCountryResult {
  const [country,   setCountry]   = useState<CountryInfo | null>(null);
  const [detecting, setDetecting] = useState(true);
  const [gateway,   setGateway]   = useState<Gateway>('stripe'); // safe default

  useEffect(() => {
    detectUserCountry().then((info) => {
      setCountry(info);
      setGateway(info.defaultGateway);
      setDetecting(false);
    });
  }, []);

  return { country, detecting, gateway, setGateway };
}

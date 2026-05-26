'use client';
import { useState, useEffect } from 'react';
import { fetchCompanyContact } from '@/services/contact.service';
import type { CompanyContact } from '@/types/contact.types';

interface UseCompanyContactResult {
  companyData: CompanyContact | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useCompanyContact(): UseCompanyContactResult {
  const [companyData, setCompanyData] = useState<CompanyContact | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetchCompanyContact().then(({ data, error: err }) => {
      if (cancelled) return;
      if (err) setError(err);
      else setCompanyData(data);
      setLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, [tick]);

  return { companyData, loading, error, refetch: () => setTick((t) => t + 1) };
}

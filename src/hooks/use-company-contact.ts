'use client';
import { useState, useEffect } from 'react';
import { fetchCompanyContact, fetchCompanySettings } from '@/services/contact.service';
import type { CompanyContact, CompanySettingsData } from '@/types/contact.types';

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

interface UseCompanySettingsResult {
  settingsData: CompanySettingsData | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useCompanySettings(): UseCompanySettingsResult {
  const [settingsData, setSettingsData] = useState<CompanySettingsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetchCompanySettings().then(({ data, error: err }) => {
      if (cancelled) return;
      if (err) setError(err);
      else setSettingsData(data);
      setLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, [tick]);
  const dataOfCompany = settingsData;
  return { settingsData, loading, error, refetch: () => setTick((t) => t + 1) };
}

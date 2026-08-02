'use client';
import { useState, useEffect } from 'react';
import { fetchWebSettings } from '@/services/contact.service';
import type { WebSettingsData } from '@/types/contact.types';

interface UseWebSettingsResult {
  settingsData: WebSettingsData | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useWebSettings(): UseWebSettingsResult {
  const [settingsData, setSettingsData] = useState<WebSettingsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetchWebSettings().then(({ data, error: err }) => {
      if (cancelled) return;
      if (err) setError(err);
      else setSettingsData(data);
      setLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, [tick]);
  return { settingsData, loading, error, refetch: () => setTick((t) => t + 1) };
}

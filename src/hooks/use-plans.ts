'use client';
import { useState, useEffect } from 'react';
import { fetchPublicPlans } from '@/services/plan.service';
import type { Plan } from '@/types';

interface UsePlansResult {
  plans:   Plan[];
  loading: boolean;
  error:   string | null;
  refetch: () => void;
}

export function usePlans(): UsePlansResult {
  const [plans,   setPlans]   = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState<string | null>(null);
  const [tick,    setTick]    = useState(0);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetchPublicPlans().then(({ plans: fetched, error: err }) => {
      if (cancelled) return;
      if (err) setError(err);
      else     setPlans(fetched);
      setLoading(false);
    });

    return () => { cancelled = true; };
  }, [tick]);

  return { plans, loading, error, refetch: () => setTick((t) => t + 1) };
}

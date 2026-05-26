'use client';
import { useState } from 'react';
import { submitContactForm } from '@/services/contact.service';
import type { ContactFormPayload } from '@/types/contact.types';

interface ContactFormState {
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  inquiry_type: string;
  message: string;
}

const INITIAL_FORM: ContactFormState = {
  first_name: '',
  last_name: '',
  email: '',
  company: '',
  inquiry_type: '',
  message: '',
};

interface UseContactFormResult {
  form: ContactFormState;
  loading: boolean;
  success: boolean;
  error: string | null;
  handleChange: (field: keyof ContactFormState, value: string) => void;
  handleSubmit: () => Promise<void>;
  resetForm: () => void;
}

export function useContactForm(): UseContactFormResult {
  const [form, setForm] = useState<ContactFormState>(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof ContactFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError(null);
  };

  const handleSubmit = async () => {
    // Client-side validation
    if (!form.first_name.trim() || !form.last_name.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!form.email.trim()) {
      setError('Please enter your email address.');
      return;
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      setError('Message must be at least 10 characters.');
      return;
    }

    setLoading(true);
    setError(null);

    const payload: ContactFormPayload = {
      first_name: form.first_name.trim(),
      last_name: form.last_name.trim(),
      email: form.email.trim(),
      company: form.company.trim() || undefined,
      inquiry_type: form.inquiry_type || 'general',
      message: form.message.trim(),
    };

    const { error: apiError } = await submitContactForm(payload);

    setLoading(false);

    if (apiError) {
      setError(apiError);
      return;
    }

    setSuccess(true);
    setForm(INITIAL_FORM);
  };

  const resetForm = () => {
    setSuccess(false);
    setForm(INITIAL_FORM);
    setError(null);
  };

  return { form, loading, success, error, handleChange, handleSubmit, resetForm };
}

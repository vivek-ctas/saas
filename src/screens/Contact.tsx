"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Phone, Clock, ArrowRight, MessageCircle, Headphones, BookOpen, Code, Video, CheckCircle2, Loader2 } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { ContactMapIllustration } from "@/components/illustrations";
import { useReveal } from "@/hooks/use-reveal";

// ── Contact-specific hooks ───────────────────────────────────────────────
import { useCompanySettings } from "@/hooks/use-company-contact";
import { useContactForm } from "@/hooks/use-contact-form";
import Link from "next/link";

type FieldName = "first_name" | "last_name" | "email" | "inquiry_type" | "message";

const validateField = (field: FieldName, value: string): string => {
  switch (field) {
    case "first_name":
      return value.trim() ? "" : "First name is required";
    case "last_name":
      return value.trim() ? "" : "Last name is required";
    case "email":
      if (!value.trim()) return "Email is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return "Enter a valid email address";
      return "";
    case "inquiry_type":
      return value ? "" : "Please select an inquiry type";
    case "message":
      if (!value.trim()) return "Message is required";
      if (value.trim().length < 10) return "Message must be at least 10 characters";
      return "";
    default:
      return "";
  }
};

const Contact = () => {
  const ref = useReveal<HTMLDivElement>();

  const { settingsData } = useCompanySettings();
  const { form, loading, success, error, handleChange, handleSubmit, resetForm } = useContactForm();

  const companyData = settingsData ? {
    email: settingsData.contact.email,
    phone: settingsData.contact.phone,
    address: settingsData.contact.address +
      (settingsData.contact.city ? `, ${settingsData.contact.city}` : "") +
      (settingsData.contact.state ? `, ${settingsData.contact.state}` : "") +
      (settingsData.contact.country ? `, ${settingsData.contact.country}` : ""),
    postal_code: settingsData.contact.postal_code,
    support_hours: settingsData.contact.working_hours || "",
    email_hours: "24/7 Response",
  } : null;

  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});

  const handleFieldChange = (field: FieldName, value: string) => {
    handleChange(field, value);
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
    }
  };

  const handleFieldBlur = (field: FieldName, value: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
  };

  const handleInquiryChange = (value: string) => {
    handleChange("inquiry_type", value);
    setTouched((prev) => ({ ...prev, inquiry_type: true }));
    setErrors((prev) => ({ ...prev, inquiry_type: validateField("inquiry_type", value) }));
  };

  const validateAll = (): boolean => {
    const fields: FieldName[] = ["first_name", "last_name", "email", "inquiry_type", "message"];
    const newErrors: Partial<Record<FieldName, string>> = {};
    fields.forEach((f) => {
      const err = validateField(f, form[f] || "");
      if (err) newErrors[f] = err;
    });
    setErrors(newErrors);
    setTouched(fields.reduce((acc, f) => ({ ...acc, [f]: true }), {} as Partial<Record<FieldName, boolean>>));
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = () => {
    if (validateAll()) {
      handleSubmit();
    }
  };

  const errorClass = (field: FieldName) =>
    touched[field] && errors[field] ? "border-red-500 focus-visible:ring-red-500" : "";

  const FieldError = ({ field }: { field: FieldName }) =>
    touched[field] && errors[field] ? (
      <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
    ) : null;

  return (
    <Layout>
      <div ref={ref}>
        <PageHero
          badgeIcon={MessageCircle}
          badgeText="We reply within 4 hours"
          title={<>Let's talk about <span className="bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">your operations.</span></>}
          subtitle="Sales, support, partnerships — whatever brings you here, we're listening. Real humans across 5 hubs, 24/7 coverage. No bots."
          visual={<ContactMapIllustration className="w-full h-auto" />}
          actions={
            <>
              <Link href="#contact-form">
                <Button size="lg" variant="outline" className="text-base px-8 h-12 border-slate-200 bg-white hover:bg-blue-50 text-slate-900 rounded-full shadow-sm">
                  Contact us
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" className="text-base px-8 h-12 rounded-full shadow-lg group bg-gradient-to-r from-blue-600 to-blue-900 hover:opacity-95 border-0">
                  View Pricing
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </>
          }
        />

        {/* QUICK CHANNELS */}
        <section className="py-16 bg-white -mt-8 relative z-10">
          <div className="px-[50px] lg:px-[70px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Mail, title: "Email us", value: companyData?.email || "", note: "General & sales" },
                { icon: Headphones, title: "Live chat", value: "Available 24/7", note: "For Pro & Enterprise" },
                { icon: Phone, title: "Call us", value: companyData?.phone || "", note: "Mon–Fri · 9–6 EST" }
              ].map((c, i) => (
                <Card key={i} className="reveal hover-lift group" style={{ transitionDelay: `${i * 100}ms` }}>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <c.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm lg:text-base text-slate-500">{c.title}</div>
                      <div className="font-bold text-slate-900 lg:text-lg">{c.value}</div>
                      <div className="text-xs text-slate-500 mt-1">{c.note}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FORM + INFO */}
        <section className="py-24 section-bg" id="contact-form">
          <div className="px-[50px] lg:px-[70px]">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Form */}
              <Card className="reveal lg:col-span-3 border-0 shadow-xl bg-white relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-200 rounded-full blur-3xl opacity-40" />
                <CardHeader className="relative">
                  <CardTitle className="text-3xl lg:text-4xl font-bold text-slate-900">Send us a message</CardTitle>
                  <p className="text-slate-600">We'll respond within 24 hours, usually faster.</p>
                </CardHeader>
                <CardContent className="relative space-y-5">
                  {success ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                      <CheckCircle2 className="w-16 h-16 text-blue-600" />
                      <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">Message sent!</h3>
                      <p className="text-slate-600 max-w-sm">
                        Thank you for reaching out. Our team will get back to you within 24 hours.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => {
                          resetForm();
                          setErrors({});
                          setTouched({});
                        }}
                        className="mt-2"
                      >
                        Send another message
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First name</Label>
                          <Input
                            id="firstName"
                            placeholder="John"
                            value={form.first_name}
                            onChange={(e) => handleFieldChange("first_name", e.target.value)}
                            onBlur={(e) => handleFieldBlur("first_name", e.target.value)}
                            className={errorClass("first_name")}
                          />
                          <FieldError field="first_name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last name</Label>
                          <Input
                            id="lastName"
                            placeholder="Doe"
                            value={form.last_name}
                            onChange={(e) => handleFieldChange("last_name", e.target.value)}
                            onBlur={(e) => handleFieldBlur("last_name", e.target.value)}
                            className={errorClass("last_name")}
                          />
                          <FieldError field="last_name" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            value={form.email}
                            onChange={(e) => handleFieldChange("email", e.target.value)}
                            onBlur={(e) => handleFieldBlur("email", e.target.value)}
                            className={errorClass("email")}
                          />
                          <FieldError field="email" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            placeholder="Optional"
                            value={form.company}
                            onChange={(e) => handleChange("company", e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inquiry">Inquiry type</Label>
                        <Select
                          value={form.inquiry_type}
                          onValueChange={handleInquiryChange}
                        >
                          <SelectTrigger className={errorClass("inquiry_type")}>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sales">Sales Inquiry</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="general">General Question</SelectItem>
                          </SelectContent>
                        </Select>
                        <FieldError field="inquiry_type" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us how we can help…"
                          className={`min-h-[140px] ${errorClass("message")}`}
                          value={form.message}
                          onChange={(e) => handleFieldChange("message", e.target.value)}
                          onBlur={(e) => handleFieldBlur("message", e.target.value)}
                        />
                        <FieldError field="message" />
                      </div>

                      {error && (
                        <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
                          {error}
                        </p>
                      )}

                      <Button
                        className="w-full rounded-full shadow-lg group bg-gradient-to-r from-blue-600 to-blue-900 hover:opacity-95 border-0"
                        size="lg"
                        onClick={onSubmit}
                        disabled={loading}
                      >
                        {loading ? (
                          <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending…</>
                        ) : (
                          <>
                            Send message
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Sidebar info */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="reveal delay-200 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-blue-700 text-white border-0 shadow-xl">
                  <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-blue-500/30 rounded-full blur-3xl" />
                  <CardContent className="relative p-8 space-y-6">
                    <h3 className="text-2xl lg:text-3xl font-bold">Reach our team</h3>
                    {[
                      { icon: Mail, title: "Email", lines: [companyData?.email || ""] },
                      { icon: Phone, title: "Phone", lines: [companyData?.phone || "", "Mon–Fri · 9–6 EST"] },
                      { icon: MapPin, title: "HQ", lines: [companyData?.address || "", companyData?.postal_code || ""] },
                      { icon: Clock, title: "Hours", lines: [companyData?.support_hours || "", companyData?.email_hours || ""] },
                    ].map((b, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur flex items-center justify-center flex-shrink-0">
                          <b.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold">{b.title}</div>
                          {b.lines.map((l, j) => <div key={j} className="text-white/80 text-sm">{l}</div>)}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="reveal delay-300 hover-lift">
                  <CardHeader>
                    <CardTitle className="text-lg lg:text-xl font-semibold">Self-serve resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {[
                      { icon: BookOpen, label: "Knowledge base" },
                      { icon: Video, label: "Video tutorials" },
                      { icon: Code, label: "API documentation" }
                    ].map((r, i) => (
                      <Button key={i} variant="ghost" className="w-full justify-start hover:bg-blue-50">
                        <r.icon className="w-4 h-4 mr-3 text-blue-600" />
                        {r.label}
                      </Button>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Phone, Clock, ArrowRight, MessageCircle, Headphones, BookOpen, Code, Video, CheckCircle2, Loader2, Building2, MessageSquare, Navigation } from "lucide-react";
import Layout from "@/components/layout";
import PageHero from "@/components/pageHero";
import { ContactMapIllustration } from "@/components/illustrations/contactIllustrations";
import { useReveal } from "@/hooks/use-reveal";

// ── Contact-specific hooks ───────────────────────────────────────────────
import { useWebSettings } from "@/hooks/use-company-contact";
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

  const { settingsData } = useWebSettings();
  const { form, loading, success, error, handleChange, handleSubmit, resetForm } = useContactForm();

  const contactEmail = settingsData?.contact?.email || "info@ctasis.com";
  const contactPhone = settingsData?.contact?.phone || "+91 7948993409";
  const contactAddress = (
    settingsData?.contact?.address ||
    "A-865/866, Money Plant High Street, Jagatpur Road, Sarkhej - Gandhinagar Hwy, near BSNL Office, Gota, Ahmedabad, Gujarat 382470"
  )
  const contactPostalCode = settingsData?.contact?.postal_code || "382470";
  const supportHours = settingsData?.contact?.working_hours || "Mon–Fri, 10:30 AM – 8:30 PM IST";
  const emailHours = "24/7 Response";

  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactAddress)}`;


  const sidebarInfo = [
    { icon: Mail, title: "Email", lines: [contactEmail], href: `mailto:${contactEmail}` },
    { icon: Phone, title: "Phone", lines: [contactPhone], href: `tel:${contactPhone.replace(/\s+/g, "")}` },
    { icon: MapPin, title: "HQ", lines: [contactAddress, contactPostalCode], href: mapsHref, external: true },
    { icon: Clock, title: "Hours", lines: [supportHours, emailHours] },
  ];

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
          title={<>Let's talk about <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">your operations.</span></>}
          subtitle="Sales, support, partnerships - whatever brings you here, we're listening. Real humans across 5 hubs, 24/7 coverage. No bots."
          visual={<ContactMapIllustration className="w-full h-auto" />}
          actions={
            <>
              <Link href="#contact-form">
                <Button size="lg" variant="outline" className="text-base px-8 h-12 border-slate-200 bg-white hover:bg-[#E8F0F6] text-slate-900 rounded-full shadow-sm">
                  Contact us
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" className="text-base px-8 h-12 rounded-full shadow-lg group bg-gradient-to-r from-[#13355A] via-[#1B4A75] to-[#3C9AC4] hover:opacity-95 border-0">
                  View Pricing
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </>
          }
        />

        {/* QUICK CHANNELS */}
        <section className="py-12 sm:py-14 lg:py-16 bg-white border-t border-[#EAECF3] -mt-8 relative z-10">
          <div className="px-5 sm:px-8 lg:px-[70px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Card 1 – Sales Inquiries */}
              <Card className="reveal hover-lift group border border-[#EAECF3] shadow-sm">
                <CardContent className="p-6 space-y-4">
                  {/* Header row */}
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#EBF4FB] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-5 h-5 text-[#3C9AC4]" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-base">Sales Inquiries</div>
                      <div className="text-sm text-slate-500">Talk to our sales team</div>
                    </div>
                  </div>
                  {/* Stat */}
                  <div className="border-t border-[#EAECF3] pt-3 space-y-0.5">
                    <div className="text-xs text-slate-400">Connect with our sales team</div>
                    <div className="text-sm text-slate-500">We'll help you choose the right solution for your business.</div>
                    <div className="text-xs text-slate-500">{supportHours}</div>
                  </div>
                  {/* CTA */}
                  <a
                    href='#contact-form'
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3C9AC4] hover:text-[#13355A] transition-colors"
                  >
                    Contact Sales <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </CardContent>
              </Card>

              {/* Card 2 – Support Center */}
              <Card className="reveal hover-lift group border border-[#EAECF3] shadow-sm" style={{ transitionDelay: "100ms" }}>
                <CardContent className="p-6 space-y-4">
                  {/* Header row */}
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#F0FBF4] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Headphones className="w-5 h-5 text-[#22C55E]" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-base">Support Center</div>
                      <div className="text-sm text-slate-500">We're here to help 24/7</div>
                    </div>
                  </div>
                  {/* Channel icons */}
                  <div className="border-t border-[#EAECF3] pt-3">
                    <div className="text-xs text-slate-400 mb-2">Get help via</div>
                    <div className="flex items-center gap-8">
                      {[
                        { icon: Mail, label: "Email" },
                        { icon: Phone, label: "Phone" },
                        { icon: MessageCircle, label: "WhatsApp" },
                        // { icon: Headphones, label: "Live Chat" },
                      ].map((ch, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-1">
                          <div className="w-8 h-8 rounded-lg bg-[#F7F9FC] border border-[#EAECF3] flex items-center justify-center">
                            <ch.icon className="w-4 h-4 text-slate-500" />
                          </div>
                          <span className="text-[10px] text-slate-400">{ch.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* CTA */}
                  <a
                    href={`mailto:${contactEmail}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3C9AC4] hover:text-[#13355A] transition-colors"
                  >
                    Get Support <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </CardContent>
              </Card>

              {/* Card 3 – Our Headquarters */}
              <Card className="reveal hover-lift group border border-[#EAECF3] shadow-sm" style={{ transitionDelay: "200ms" }}>
                <CardContent className="p-6 space-y-4">
                  {/* Header row */}
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#F3F0FB] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Building2 className="w-5 h-5 text-[#7C3AED]" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-base">Our Location</div>
                      <div className="text-sm text-slate-500">{contactAddress.split(",")[6]}</div>
                    </div>
                  </div>
                  {/* Address */}
                  <div className="border-t border-[#EAECF3] pt-3">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {contactAddress}</p>
                  </div>
                  {/* CTA */}
                  <a
                    href={mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3C9AC4] hover:text-[#13355A] transition-colors"
                  >
                    View on Map <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* FORM + INFO */}
        <section className="py-14 sm:py-16 lg:py-20 bg-[#F7F9FC] border-t border-[#EAECF3]" id="contact-form">
          <div className="px-5 sm:px-8 lg:px-[70px]">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12">
              {/* Form */}
              <Card className="reveal lg:col-span-3 border-0 shadow-xl bg-white relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#BDD9EE] rounded-full blur-3xl opacity-40" />
                <CardHeader className="relative">
                  <CardTitle className="text-3xl lg:text-4xl font-bold text-slate-900">Send us a <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">message</span></CardTitle>
                  <p className="text-slate-600">We'll respond within 24 hours, usually faster.</p>
                </CardHeader>
                <CardContent className="relative space-y-5">
                  {success ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                      <CheckCircle2 className="w-16 h-16 text-[#3C9AC4]" />
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
                        className="w-full rounded-full shadow-lg group bg-gradient-to-r from-[#13355A] to-[#0D2440] hover:opacity-95 border-0"
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
                <Card className="reveal delay-200 relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#0D2440] to-[#13355A] text-white border-0 shadow-xl">
                  <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-[#3C9AC4]/30 rounded-full blur-3xl" />
                  <CardContent className="relative p-8 space-y-6">
                    <h3 className="text-2xl lg:text-3xl font-bold">Reach our team</h3>
                    {sidebarInfo.map((b, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur flex items-center justify-center flex-shrink-0">
                          <b.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold">{b.title}</div>
                          {b.href ? (
                            <a
                              href={b.href}
                              {...(b.href.startsWith("http") && {
                                target: "_blank",
                                rel: "noopener noreferrer",
                              })}
                              className="block text-white/80 text-sm hover:text-[#3C9AC4] transition-colors"
                            >
                              {b.lines.map((l, j) => (
                                <div key={j}>{l}</div>
                              ))}
                            </a>
                          ) : (
                            b.lines.map((l, j) => <div key={j} className="text-white/80 text-sm">{l}</div>)
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="reveal delay-300 hover-lift">
                  <CardHeader>
                    <CardTitle className="text-lg lg:text-xl font-semibold">Self-serve <span className="bg-gradient-to-r from-[#3C9AC4] to-[#13355A] bg-clip-text text-transparent">resources</span></CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {[
                      { icon: BookOpen, label: "Knowledge base" },
                      { icon: Video, label: "Video tutorials" },
                      { icon: Code, label: "API documentation" }
                    ].map((r, i) => (
                      <Button key={i} variant="ghost" className="w-full justify-start hover:bg-[#E8F0F6]">
                        <r.icon className="w-4 h-4 mr-3 text-[#3C9AC4]" />
                        {r.label}
                      </Button>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FIND US */}
        <section className="py-14 sm:py-16 lg:py-20 bg-white border-t border-[#EAECF3]">
          <div className="px-5 sm:px-8 lg:px-[70px]">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Find us</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
              {/* Address card */}
              <div className="lg:col-span-2">
                <Card className="reveal h-full border border-[#EAECF3] shadow-sm">
                  <CardContent className="p-6 space-y-5 h-full flex flex-col">
                    {/* HQ label */}
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#13355A] flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-semibold text-slate-900 text-base">Our Location</span>
                    </div>
                    {/* Address text */}
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {contactAddress}
                    </p>
                    {/* Business hours */}
                    <div className="flex items-start gap-2 text-sm text-slate-500">
                      <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#3C9AC4]" />
                      <span>{supportHours}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-slate-500">
                      <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#3C9AC4]" />
                      <a href={`tel:${contactPhone.replace(/\s+/g, "")}`} className="hover:text-[#3C9AC4] transition-colors">{contactPhone}</a>
                    </div>
                    {/* Get Directions CTA */}
                    <div className="mt-auto pt-2">
                      <a
                        href={mapsHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#13355A] hover:bg-[#0D2440] px-4 py-2.5 rounded-lg transition-colors"
                      >
                        <Navigation className="w-4 h-4" />
                        Get Directions
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
              {/* Map embed */}
              <div className="lg:col-span-3 reveal delay-100">
                <div className="w-full h-64 sm:h-80 lg:h-full min-h-[280px] rounded-2xl overflow-hidden border border-[#EAECF3] shadow-sm">
                  <iframe
                    title="SellerBuz Headquarters Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0780!2d72.5414!3d23.0925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b5c5cbf!2sGota%2C%20Ahmedabad%2C%20Gujarat%20382481!5e0!3m2!1sen!2sin!4v1690000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "280px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
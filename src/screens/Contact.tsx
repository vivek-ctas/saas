"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Phone, Clock, ArrowRight, MessageCircle, Headphones, BookOpen, Code, Video, CheckCircle2, Loader2 } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { BlobBackdrop, ContactMapIllustration } from "@/components/illustrations";
import { useReveal } from "@/hooks/use-reveal";

// ── Contact-specific hooks ───────────────────────────────────────────────
import { useCompanyContact } from "@/hooks/use-company-contact";
import { useContactForm } from "@/hooks/use-contact-form";

const Contact = () => {
  const ref = useReveal<HTMLDivElement>();

  const { companyData } = useCompanyContact();
  const { form, loading, success, error, handleChange, handleSubmit, resetForm } = useContactForm();

  return (
    <Layout>
      <div ref={ref}>
        <PageHero
          badgeIcon={MessageCircle}
          badgeText="We reply within 4 hours"
          title={<>Let's talk about <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">your operations.</span></>}
          subtitle="Sales, support, partnerships — whatever brings you here, we're listening. Real humans across 5 hubs, 24/7 coverage. No bots."
          visual={<ContactMapIllustration className="w-full h-auto" />}
          actions={
            <>
              <Button size="lg" variant="outline" className="text-base px-8 h-12 border-slate-300 bg-white hover:bg-slate-50 text-slate-900 rounded-full shadow-sm">
                Browse docs
              </Button>
              <Button size="lg" className="text-base px-8 h-12 rounded-full shadow-stripe-xl group bg-gradient-to-r from-primary to-secondary hover:opacity-95 border-0">
                Book a demo
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </>
          }
        />

        {/* QUICK CHANNELS */}
        <section className="py-16 bg-white -mt-8 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Mail, title: "Email us", value: companyData?.email || "", note: "General & sales" },
                { icon: Headphones, title: "Live chat", value: "Available 24/7", note: "For Pro & Enterprise" },
                { icon: Phone, title: "Call us", value: companyData?.phone || "", note: "Mon–Fri · 9–6 EST" }
              ].map((c, i) => (
                <Card key={i} className="reveal hover-lift group" style={{ transitionDelay: `${i * 100}ms` }}>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-stripe group-hover:scale-110 transition-transform">
                      <c.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">{c.title}</div>
                      <div className="font-bold text-slate-900">{c.value}</div>
                      <div className="text-xs text-slate-500 mt-1">{c.note}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FORM + INFO */}
        <section className="py-24 section-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Form */}
              <Card className="reveal lg:col-span-3 border-0 shadow-stripe-2xl bg-white relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-pink-200 rounded-full blur-3xl opacity-40" />
                <CardHeader className="relative">
                  <CardTitle className="text-3xl font-bold text-slate-900">Send us a message</CardTitle>
                  <p className="text-slate-600">We'll respond within 24 hours, usually faster.</p>
                </CardHeader>
                <CardContent className="relative space-y-5">
                  {success ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                      <CheckCircle2 className="w-16 h-16 text-primary" />
                      <h3 className="text-2xl font-bold text-slate-900">Message sent!</h3>
                      <p className="text-slate-600 max-w-sm">
                        Thank you for reaching out. Our team will get back to you within 24 hours.
                      </p>
                      <Button variant="outline" onClick={resetForm} className="mt-2">
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
                            onChange={(e) => handleChange("first_name", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last name</Label>
                          <Input
                            id="lastName"
                            placeholder="Doe"
                            value={form.last_name}
                            onChange={(e) => handleChange("last_name", e.target.value)}
                          />
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
                            onChange={(e) => handleChange("email", e.target.value)}
                          />
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
                          onValueChange={(val) => handleChange("inquiry_type", val)}
                        >
                          <SelectTrigger><SelectValue placeholder="Select inquiry type" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sales">Sales Inquiry</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="general">General Question</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us how we can help…"
                          className="min-h-[140px]"
                          value={form.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                        />
                      </div>

                      {error && (
                        <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
                          {error}
                        </p>
                      )}

                      <Button
                        className="w-full shadow-stripe-xl group"
                        size="lg"
                        onClick={handleSubmit}
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
                <Card className="reveal delay-200 relative overflow-hidden bg-gradient-to-br from-slate-900 via-primary to-orange-500 text-white border-0 shadow-stripe-2xl">
                  <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-pink-500/40 rounded-full blur-3xl" />
                  <CardContent className="relative p-8 space-y-6">
                    <h3 className="text-2xl font-bold">Reach our team</h3>
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
                    <CardTitle className="text-lg font-semibold">Self-serve resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {[
                      { icon: BookOpen, label: "Knowledge base" },
                      { icon: Video, label: "Video tutorials" },
                      { icon: Code, label: "API documentation" }
                    ].map((r, i) => (
                      <Button key={i} variant="ghost" className="w-full justify-start hover:bg-accent">
                        <r.icon className="w-4 h-4 mr-3 text-primary" />
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

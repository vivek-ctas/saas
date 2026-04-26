import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Phone, Clock, ArrowRight, MessageCircle, Headphones, BookOpen, Code, Video } from "lucide-react";
import Layout from "@/components/Layout";
import { BlobBackdrop, GlobeIllustration } from "@/components/illustrations";
import { useReveal } from "@/hooks/use-reveal";

const Contact = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <Layout>
      <div ref={ref}>
        {/* HERO */}
        <section className="relative overflow-hidden gradient-animated">
          <BlobBackdrop />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <Badge className="mb-6 bg-white/10 text-white border border-white/20 backdrop-blur-sm">
                <MessageCircle className="w-4 h-4 mr-2" /> We reply within 4 hours
              </Badge>
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                Let's talk about<br />
                <span className="bg-gradient-to-r from-pink-200 to-white bg-clip-text text-transparent">your operations.</span>
              </h1>
              <p className="text-xl text-white/85 leading-relaxed max-w-xl">
                Sales, support, partnerships — whatever brings you here, we're listening.
                Real humans, no bots.
              </p>
            </div>
            <div className="relative reveal delay-200">
              <div className="absolute -inset-6 bg-gradient-to-br from-pink-400/30 to-primary/30 blur-3xl rounded-3xl" />
              <div className="relative animate-float-slow">
                <GlobeIllustration className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* QUICK CHANNELS */}
        <section className="py-16 bg-white -mt-8 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Mail, title: "Email us", value: "hello@ctasis.com", note: "General & sales" },
                { icon: Headphones, title: "Live chat", value: "Available 24/7", note: "For Pro & Enterprise" },
                { icon: Phone, title: "Call us", value: "+1 (555) 123-4567", note: "Mon–Fri · 9–6 EST" }
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Optional" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inquiry">Inquiry type</Label>
                    <Select>
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
                    <Textarea id="message" placeholder="Tell us how we can help…" className="min-h-[140px]" />
                  </div>
                  <Button className="w-full shadow-stripe-xl group" size="lg">
                    Send message
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>

              {/* Sidebar info */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="reveal delay-200 relative overflow-hidden bg-gradient-to-br from-slate-900 via-primary to-fuchsia-700 text-white border-0 shadow-stripe-2xl">
                  <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-pink-500/40 rounded-full blur-3xl" />
                  <CardContent className="relative p-8 space-y-6">
                    <h3 className="text-2xl font-bold">Reach our team</h3>
                    {[
                      { icon: Mail, title: "Email", lines: ["hello@ctasis.com", "support@ctasis.com"] },
                      { icon: Phone, title: "Phone", lines: ["+1 (555) 123-4567", "Mon–Fri · 9–6 EST"] },
                      { icon: MapPin, title: "HQ", lines: ["Ahmedabad, Gujarat", "India · 380015"] },
                      { icon: Clock, title: "Hours", lines: ["24/7 chat for Pro+", "Email · always open"] }
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

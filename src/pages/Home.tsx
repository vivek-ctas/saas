import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, RefreshCw, ShoppingCart, TrendingUp, Zap, Shield } from "lucide-react";
import Layout from "@/components/Layout";

const Home = () => {
  const features = [
    {
      icon: RefreshCw,
      title: "Inventory Sync",
      description: "Real-time inventory synchronization across all your marketplaces. Never oversell again with automated stock management."
    },
    {
      icon: ShoppingCart,
      title: "Order Routing",
      description: "Intelligent order routing and fulfillment optimization. Route orders to the best location for faster delivery."
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics and reporting. Track performance, identify trends, and optimize your multichannel strategy."
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "AI-powered insights to optimize listings, pricing, and inventory across all channels for maximum profitability."
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Set up automated workflows for repricing, inventory updates, and order processing to save time and reduce errors."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime. Your data and operations are protected with bank-level security."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="hero-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
            <div className="text-center">
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
                Sync All Your
                <span className="block text-purple-light">Marketplaces</span>
                in One Dashboard
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Manage inventory, route orders, and analyze performance across Amazon, eBay, Walmart, 
                Shopify, and more. The multichannel seller platform built for growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none"></div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Scale
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful tools designed specifically for multichannel sellers who want to grow their business efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card">
                <CardHeader>
                  <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Sync Your Success?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of sellers who trust Sync Central to manage their multichannel operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
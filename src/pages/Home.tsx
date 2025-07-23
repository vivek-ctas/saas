import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  RefreshCw, 
  ShoppingCart, 
  TrendingUp, 
  Zap, 
  Shield, 
  Users,
  DollarSign,
  Package,
  Globe,
  Clock,
  CheckCircle
} from "lucide-react";
import Layout from "@/components/Layout";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import sellerWorkspace from "@/assets/seller-workspace.jpg";
import inventorySync from "@/assets/inventory-sync.jpg";
import analyticsDashboard from "@/assets/analytics-dashboard.jpg";

const Home = () => {
  const features = [
    {
      icon: RefreshCw,
      title: "Real-Time Inventory Sync",
      description: "Never oversell again with instant inventory synchronization across all your marketplaces. Update once, sync everywhere.",
      benefits: ["Prevent overselling", "Reduce manual work", "Real-time updates"],
      image: inventorySync
    },
    {
      icon: ShoppingCart,
      title: "Intelligent Order Routing",
      description: "Automatically route orders to the optimal fulfillment location based on shipping speed, cost, and inventory availability.",
      benefits: ["Faster shipping", "Lower costs", "Better customer satisfaction"],
      image: analyticsDashboard
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get deep insights into your multichannel performance with comprehensive reporting and AI-powered recommendations.",
      benefits: ["Track profitability", "Identify trends", "Optimize listings"],
      image: analyticsDashboard
    }
  ];

  const platformStats = [
    { icon: Users, value: "50,000+", label: "Active Sellers" },
    { icon: DollarSign, value: "$2.5B+", label: "GMV Processed" },
    { icon: Package, value: "10M+", label: "Orders Managed" },
    { icon: Globe, value: "150+", label: "Countries" }
  ];

  const marketplaces = [
    "Amazon", "eBay", "Walmart", "Shopify", "Etsy", "Facebook", "Google", "WooCommerce",
    "BigCommerce", "Magento", "Target", "Newegg", "Rakuten", "Bonanza", "Mercari", "Poshmark"
  ];

  const quickWins = [
    {
      icon: Clock,
      title: "Set up in 15 minutes",
      description: "Connect your first marketplace and start syncing inventory immediately"
    },
    {
      icon: TrendingUp,
      title: "30% average sales increase",
      description: "Sellers see significant growth within 60 days of onboarding"
    },
    {
      icon: Shield,
      title: "99.9% uptime guarantee",
      description: "Enterprise-grade reliability with 24/7 monitoring and support"
    }
  ];

  return (
    <Layout>
      {/* Hero Section - Stripe-inspired */}
      <section className="relative overflow-hidden hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div>
              <Badge className="mb-6 bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                <Zap className="w-4 h-4 mr-2" />
                Now supporting 50+ marketplaces
              </Badge>
              
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
                Grow your
                <span className="block text-emerald-100">multichannel</span>
                business faster
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                The complete seller central platform. Manage inventory, process orders, 
                and analyze performance across Amazon, eBay, Walmart, Shopify, and 50+ marketplaces 
                from one powerful dashboard.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" variant="secondary" className="text-lg px-8 shadow-stripe-xl">
                  Start free 14-day trial
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20 shadow-stripe"
                >
                  Watch 2-min demo
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 text-white/80">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-emerald-200" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-emerald-200" />
                  <span>Setup in 15 minutes</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={heroDashboard} 
                  alt="Sync Central Dashboard" 
                  className="rounded-2xl shadow-stripe-2xl border-2 border-white/20"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {platformStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-stripe">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Masonry-inspired Layout */}
      <section className="py-24 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Everything you need to scale
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Built specifically for multichannel sellers who want to grow faster, 
              reduce manual work, and maximize profitability across all platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className={`feature-card-large ${index === 1 ? 'lg:col-span-1 lg:row-span-2' : ''}`}>
                <div className="relative">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-48 object-cover rounded-xl mb-6"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center shadow-stripe">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold text-slate-900">{feature.title}</CardTitle>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplaces Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            Connect to 50+ marketplaces and platforms
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {marketplaces.slice(0, 8).map((marketplace, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-slate-700 border-slate-200">
                {marketplace}
              </Badge>
            ))}
          </div>
          
          <p className="text-slate-600">
            And many more. Missing an integration? 
            <span className="text-emerald-600 font-medium"> We'll build it for you.</span>
          </p>
        </div>
      </section>

      {/* Quick Wins Section */}
      <section className="py-24 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              See results immediately
            </h2>
            <p className="text-xl text-slate-600">
              Join thousands of sellers who've transformed their business with Sync Central
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickWins.map((win, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-stripe">
                  <win.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{win.title}</h3>
                <p className="text-slate-600">{win.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seller Workspace Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Built by sellers, for sellers
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our team understands the challenges of multichannel selling because we've been there. 
                Every feature is designed to solve real problems that sellers face every day.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                  <span className="text-slate-700">Save 20+ hours per week on manual tasks</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                  <span className="text-slate-700">Reduce errors and overselling by 99%</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                  <span className="text-slate-700">Increase revenue with intelligent optimization</span>
                </div>
              </div>
              <Button size="lg" className="shadow-stripe-xl">
                Start your free trial
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={sellerWorkspace} 
                alt="Seller working with Sync Central" 
                className="rounded-2xl shadow-stripe-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 hero-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to grow your multichannel business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 50,000+ successful sellers who trust Sync Central to manage their operations. 
            Start your free trial today – no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 shadow-stripe-xl">
              Start free 14-day trial
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20 shadow-stripe"
            >
              Talk to our team
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-8 text-white/80">
            <span className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              14-day free trial
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              No setup fees
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Cancel anytime
            </span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
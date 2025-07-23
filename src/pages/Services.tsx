import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  RefreshCw, 
  ShoppingCart, 
  BarChart3, 
  TrendingUp, 
  Zap, 
  Settings,
  Globe,
  Shield
} from "lucide-react";
import Layout from "@/components/Layout";

const Services = () => {
  const services = [
    {
      icon: RefreshCw,
      title: "Inventory Synchronization",
      description: "Real-time inventory sync across all marketplaces",
      features: [
        "Automatic stock level updates",
        "Low stock alerts and notifications",
        "Bulk inventory import/export",
        "Multi-warehouse management",
        "SKU mapping and variants"
      ],
      highlight: "Never oversell again with real-time sync"
    },
    {
      icon: ShoppingCart,
      title: "Order Management",
      description: "Streamlined order processing and fulfillment",
      features: [
        "Centralized order dashboard",
        "Automated order routing",
        "Print shipping labels",
        "Order tracking and updates",
        "Returns and refunds management"
      ],
      highlight: "Process orders 5x faster with automation"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Comprehensive insights across all channels",
      features: [
        "Sales performance tracking",
        "Profit margin analysis",
        "Channel comparison reports",
        "Custom dashboard widgets",
        "Export data to Excel/CSV"
      ],
      highlight: "Make data-driven decisions with real insights"
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "AI-powered tools to maximize profitability",
      features: [
        "Dynamic pricing strategies",
        "Listing optimization suggestions",
        "Competitor price monitoring",
        "Search ranking insights",
        "A/B testing tools"
      ],
      highlight: "Increase revenue by up to 30% with AI optimization"
    },
    {
      icon: Zap,
      title: "Automation Workflows",
      description: "Custom automation to save time and reduce errors",
      features: [
        "Automated repricing rules",
        "Inventory threshold workflows",
        "Order status notifications",
        "Listing synchronization",
        "Custom trigger-based actions"
      ],
      highlight: "Save 20+ hours per week with smart automation"
    },
    {
      icon: Globe,
      title: "Marketplace Integrations",
      description: "Connect to all major selling platforms",
      features: [
        "Amazon (US, UK, EU, JP, CA)",
        "eBay global marketplaces",
        "Walmart Marketplace",
        "Shopify & WooCommerce",
        "Etsy, Facebook, Google Shopping"
      ],
      highlight: "50+ marketplace integrations available"
    },
    {
      icon: Settings,
      title: "Custom Solutions",
      description: "Tailored solutions for enterprise needs",
      features: [
        "Custom API integrations",
        "White-label solutions",
        "Dedicated account management",
        "Priority support",
        "Custom reporting tools"
      ],
      highlight: "Scalable solutions for any business size"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security and reliability",
      features: [
        "SOC 2 Type II compliance",
        "99.9% uptime SLA",
        "End-to-end encryption",
        "Regular security audits",
        "GDPR compliant"
      ],
      highlight: "Bank-level security for your business data"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Complete Multichannel Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to manage, optimize, and scale your multichannel selling operations 
            from a single, powerful platform.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="feature-card">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold mb-2">{service.title}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="bg-accent rounded-lg p-4">
                    <p className="text-sm font-medium text-primary">{service.highlight}</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 hero-gradient rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful sellers who trust Sync Central to power their multichannel operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
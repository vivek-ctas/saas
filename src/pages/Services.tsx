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
  Shield,
  Truck,
  Calculator,
  Warehouse,
  Layers,
  Package2,
  FileText,
  Users,
  Brain,
  Headphones,
  Lock
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
      highlight: "Never oversell again with real-time sync",
      bgColor: "bg-blue-50",
      iconColor: "bg-blue-500"
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
      highlight: "Process orders 5x faster with automation",
      bgColor: "bg-green-50",
      iconColor: "bg-green-500"
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
      highlight: "Make data-driven decisions with real insights",
      bgColor: "bg-purple-50",
      iconColor: "bg-purple-500"
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
      highlight: "Increase revenue by up to 30% with AI optimization",
      bgColor: "bg-orange-50",
      iconColor: "bg-orange-500"
    },
    {
      icon: Truck,
      title: "Logistics & Fulfillment",
      description: "End-to-end shipping and delivery solutions",
      features: [
        "Multi-carrier shipping integration",
        "Automated label generation",
        "Real-time shipment tracking",
        "Delivery route optimization",
        "International shipping support"
      ],
      highlight: "Reduce shipping costs by up to 25%",
      bgColor: "bg-indigo-50",
      iconColor: "bg-indigo-500"
    },
    {
      icon: Calculator,
      title: "Tax & Compliance Solutions",
      description: "Automated tax calculation and reporting",
      features: [
        "Multi-state sales tax calculation",
        "VAT handling for EU markets",
        "Automated tax filing reports",
        "Compliance monitoring",
        "Audit trail and documentation"
      ],
      highlight: "Stay compliant across all jurisdictions",
      bgColor: "bg-red-50",
      iconColor: "bg-red-500"
    },
    {
      icon: Warehouse,
      title: "Warehouse Management",
      description: "Complete inventory and warehouse operations",
      features: [
        "Multi-location inventory tracking",
        "Picking and packing optimization",
        "Barcode scanning integration",
        "Cycle counting automation",
        "Storage location management"
      ],
      highlight: "Optimize warehouse efficiency by 40%",
      bgColor: "bg-teal-50",
      iconColor: "bg-teal-500"
    },
    {
      icon: Layers,
      title: "Cross-Platform Integration",
      description: "Seamless connectivity across all your tools",
      features: [
        "ERP system integration",
        "Accounting software sync",
        "CRM platform connection",
        "Marketing automation tools",
        "Custom API development"
      ],
      highlight: "Connect your entire tech stack",
      bgColor: "bg-cyan-50",
      iconColor: "bg-cyan-500"
    },
    {
      icon: Package2,
      title: "Product Information Management",
      description: "Centralized product catalog management",
      features: [
        "Product data standardization",
        "Image and video management",
        "Multi-language support",
        "Bulk product updates",
        "Rich content optimization"
      ],
      highlight: "Manage 100,000+ products effortlessly",
      bgColor: "bg-emerald-50",
      iconColor: "bg-emerald-500"
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Machine learning for smarter business decisions",
      features: [
        "Demand forecasting",
        "Customer behavior analysis",
        "Predictive inventory planning",
        "Market trend identification",
        "Automated recommendations"
      ],
      highlight: "Predict trends 90 days in advance",
      bgColor: "bg-violet-50",
      iconColor: "bg-violet-500"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Multi-user workspace with role-based access",
      features: [
        "Role-based permissions",
        "Team activity tracking",
        "Communication tools",
        "Task assignment",
        "Performance monitoring"
      ],
      highlight: "Scale your team operations efficiently",
      bgColor: "bg-pink-50",
      iconColor: "bg-pink-500"
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
      highlight: "Bank-level security for your business data",
      bgColor: "bg-slate-50",
      iconColor: "bg-slate-500"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Complete Multichannel Solutions
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Everything you need to manage, optimize, and scale your multichannel selling operations 
            from a single, powerful platform.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`feature-card group overflow-hidden ${service.bgColor} border-0`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 ${service.iconColor} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold mb-2 text-slate-900">{service.title}</CardTitle>
                      <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="bg-white/70 rounded-xl p-4 border border-white/50">
                    <p className="text-sm font-semibold text-slate-800">{service.highlight}</p>
                  </div>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-slate-700">
                        <div className={`w-1.5 h-1.5 ${service.iconColor} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Leading Sellers Choose Sync Central
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Trusted by 50,000+ sellers worldwide to power their multichannel operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">45%</h3>
              <p className="text-slate-300">Average revenue increase</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">20+</h3>
              <p className="text-slate-300">Hours saved per week</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">99.9%</h3>
              <p className="text-slate-300">Uptime guarantee</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
              <p className="text-slate-300">Platform integrations</p>
            </div>
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
            <Button size="lg" variant="secondary" className="text-lg px-8 shadow-stripe-xl">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20 shadow-stripe">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
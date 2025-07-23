import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Layout from "@/components/Layout";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for new sellers getting started",
      features: [
        "Up to 3 marketplace connections",
        "5,000 product listings",
        "Basic inventory sync",
        "Standard order routing",
        "Email support",
        "Basic analytics dashboard"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Pro",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10 marketplace connections",
        "25,000 product listings",
        "Real-time inventory sync",
        "Advanced order routing",
        "Priority support",
        "Advanced analytics & reporting",
        "Automated repricing",
        "Custom workflows"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large-scale operations",
      features: [
        "Unlimited marketplace connections",
        "Unlimited product listings",
        "Enterprise inventory management",
        "Custom order routing logic",
        "Dedicated account manager",
        "White-label solutions",
        "API access",
        "Custom integrations",
        "SLA guarantee"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="py-24 gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business. All plans include a 14-day free trial with no commitment.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`pricing-card ${plan.popular ? 'border-primary' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="hero-gradient text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${plan.popular ? 'hero-gradient' : ''}`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Is there a free trial?</h3>
              <p className="text-muted-foreground">Yes, all plans come with a 14-day free trial. No credit card required to get started.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-2">Can I change plans anytime?</h3>
              <p className="text-muted-foreground">Absolutely. You can upgrade or downgrade your plan at any time from your account settings.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-2">What marketplaces do you support?</h3>
              <p className="text-muted-foreground">We support Amazon, eBay, Walmart, Shopify, Etsy, and many more. Contact us for specific integrations.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-2">Is my data secure?</h3>
              <p className="text-muted-foreground">Yes, we use enterprise-grade security with encryption at rest and in transit. Your data is protected.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
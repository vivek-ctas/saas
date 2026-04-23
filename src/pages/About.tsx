import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const About = () => {
  const milestones = [
    {
      year: "2019",
      title: "Founded",
      description: "Started with a vision to simplify multichannel selling"
    },
    {
      year: "2020",
      title: "First 1,000 Users",
      description: "Reached our first major milestone during a challenging year"
    },
    {
      year: "2021",
      title: "Series A Funding",
      description: "Secured funding to accelerate platform development"
    },
    {
      year: "2022",
      title: "Enterprise Launch",
      description: "Launched enterprise solutions for large-scale sellers"
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded to serve sellers in 50+ countries"
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Introduced AI-powered optimization features"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About Ctasis Marketplace
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're on a mission to empower multichannel sellers with the tools they need to scale their 
            businesses efficiently across all major marketplaces.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To democratize multichannel selling by providing powerful, intuitive tools that level 
                the playing field for sellers of all sizes. We believe every entrepreneur should have 
                access to enterprise-grade technology without the enterprise complexity.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our platform eliminates the operational headaches of managing multiple marketplaces, 
                allowing sellers to focus on what they do best: growing their business and serving customers.
              </p>
            </div>
            
            <div className="gradient-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the global standard for multichannel commerce management, enabling millions of 
                sellers worldwide to achieve their entrepreneurial dreams through seamless, intelligent 
                marketplace synchronization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-16">Our Journey</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="feature-card">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-16">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Simplicity</h3>
              <p className="text-muted-foreground">Complex problems deserve simple solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Reliability</h3>
              <p className="text-muted-foreground">Your business depends on us, and we deliver</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Innovation</h3>
              <p className="text-muted-foreground">Always pushing the boundaries of what's possible</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Transparency</h3>
              <p className="text-muted-foreground">Honest communication in everything we do</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
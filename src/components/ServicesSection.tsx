
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "SEO & Content Marketing",
    description: "Drive organic traffic with data-driven SEO strategies and engaging content that converts.",
    icon: "🔍",
    features: [
      "Keyword research & strategy",
      "Technical SEO audits & fixes",
      "Content planning & creation",
      "Link building strategies"
    ]
  },
  {
    title: "Paid Media Advertising",
    description: "Strategic ad campaigns across Google, social media, and programmatic platforms for maximum ROI.",
    icon: "📈",
    features: [
      "PPC campaign management",
      "Display advertising",
      "Remarketing strategies",
      "Ad creative development"
    ]
  },
  {
    title: "Social Media Marketing",
    description: "Build brand awareness and engage your audience with compelling social media strategies.",
    icon: "📱",
    features: [
      "Platform strategy development",
      "Content calendar creation",
      "Community management",
      "Influencer partnerships"
    ]
  },
  {
    title: "Email Marketing",
    description: "Nurture leads and drive conversions with personalized email campaigns.",
    icon: "📧",
    features: [
      "Automation setup",
      "Segmentation strategies", 
      "Campaign design & copywriting",
      "Performance analytics"
    ]
  },
  {
    title: "Analytics & Data",
    description: "Make data-driven decisions with comprehensive analytics and reporting.",
    icon: "📊",
    features: [
      "Custom dashboard creation",
      "Conversion tracking setup",
      "Data visualization",
      "Actionable insights reporting"
    ]
  },
  {
    title: "Conversion Rate Optimization",
    description: "Maximize your website's performance with strategic CRO techniques.",
    icon: "🎯",
    features: [
      "A/B testing",
      "User journey optimization",
      "Landing page optimization",
      "Funnel analysis"
    ]
  }
];

const ServicesSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding bg-white overflow-hidden">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="heading-lg mb-4">Digital Marketing Services</h2>
          <h3 className="heading-md text-primary mb-6">Tailored to Your Business Goals</h3>
          <p className="text-muted-foreground text-lg">
            Our comprehensive suite of digital marketing services helps businesses grow their online presence,
            engage with their audience, and drive measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`card transition-all duration-300 ${activeCard === index ? 'transform -translate-y-2 shadow-xl' : 'card-hover'}`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
                
                {activeCard === index && (
                  <div className="space-y-2 animate-fade-in pt-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="text-primary h-5 w-5 shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16" data-aos="fade-up">
          <Button className="btn btn-primary group">
            Explore All Services
            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

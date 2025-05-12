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
  }
];

const ServicesSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding bg-black overflow-hidden">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="heading-xl mb-4 bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#edc967] bg-clip-text text-transparent">Information Technology Services</h2>
          <h3 className="heading-lg text-white mb-6">Tailored to Your Business Goals</h3>
          <p className="text-muted-foreground text-lg">
            Our comprehensive suite of digital marketing services helps businesses grow their online presence,
            engage with their audience, and drive measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`card`}
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
                
                {activeCard === index ? (
                  <div className="space-y-2 pt-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="text-primary h-5 w-5 shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16" data-aos="fade-up">
          <Button className="bg-gradient-to-r from-[#ae8625] via-[#f7ef8a] to-[#edc967] text-black hover:bg-primary-100 group">
            Explore Information Technology
            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

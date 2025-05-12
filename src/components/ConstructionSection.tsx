import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const constructionServices = [
  {
    title: "Residential Construction",
    description: "Build your dream home with our expert residential construction services.",
    icon: "🏠",
    features: [
      "Custom home design",
      "Renovation & remodeling",
      "Sustainable building practices",
      "Quality craftsmanship"
    ]
  },
  {
    title: "Commercial Construction",
    description: "Create impressive commercial spaces that meet your business needs.",
    icon: "🏢",
    features: [
      "Office buildings",
      "Retail spaces",
      "Restaurants & cafes",
      "Industrial facilities"
    ]
  },
  {
    title: "Infrastructure Development",
    description: "Develop robust infrastructure to support communities and businesses.",
    icon: "🏗️",
    features: [
      "Roads & highways",
      "Bridges & tunnels",
      "Public utilities",
      "Urban planning"
    ]
  }
];

const ConstructionSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <section id="construction" className="section-padding bg-white overflow-hidden">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="heading-xl mb-4 bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#edc967] bg-clip-text text-transparent">Construction Services</h2>
          <h3 className="heading-lg mb-6">Tailored to Your Building Needs</h3>
          <p className="text-muted-foreground text-lg">
            Our comprehensive suite of construction services helps businesses and individuals build, renovate, and maintain structures that meet their needs and exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {constructionServices.map((service, index) => (
            <Card
              key={index}
              className="card"
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
                  <div className="space-y-2 pt-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="text-[#ae8625] h-5 w-5 shrink-0 mt-0.5" />
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
          <Button className="bg-gradient-to-r from-[#ae8625] via-[#f7ef8a] to-[#edc967] text-black hover:bg-primary-100 group" onClick={() => navigate('/services/construction')}>
            Explore Construction
            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConstructionSection;

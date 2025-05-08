
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const customServices = [
  {
    title: "Import & Export",
    description: "Streamlined global trade solutions to help your business expand into international markets.",
    icon: "🌐",
    features: [
      "Customs compliance management",
      "International shipping logistics",
      "Trade documentation services",
      "Import/export regulatory guidance"
    ],
    link: "/services/import-export"
  },
  {
    title: "Construction",
    description: "End-to-end construction management services for residential and commercial projects.",
    icon: "🏗️",
    features: [
      "Project planning & management",
      "Construction consulting",
      "Quality assurance & control",
      "Sustainable building practices"
    ],
    link: "/services/construction"
  },
  {
    title: "Information Technology",
    description: "Cutting-edge IT solutions to drive digital transformation and business growth.",
    icon: "💻",
    features: [
      "Custom software development",
      "IT infrastructure management",
      "Cybersecurity solutions",
      "Cloud computing services"
    ],
    link: "/services/information-technology"
  }
];

const CustomServicesSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="custom-services" className="section-padding bg-primary-100 overflow-hidden">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="heading-lg mb-4">Our Specialized Services</h2>
          <h3 className="heading-md text-primary mb-6">Expert Solutions for Your Industry</h3>
          <p className="text-muted-foreground text-lg">
            We provide specialized services tailored to your specific industry needs,
            ensuring optimal results and maximum efficiency for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customServices.map((service, index) => (
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

                <div className="pt-4">
                  <Link to={service.link}>
                    <Button className="btn btn-primary group">
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomServicesSection;

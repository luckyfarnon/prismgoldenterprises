import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const importExportServices = [
  {
    title: "Global Sourcing",
    description: "Find the best suppliers and products worldwide with our expert sourcing solutions.",
    icon: "🌍",
    features: [
      "Supplier identification",
      "Quality assurance",
      "Negotiation support",
      "Logistics coordination"
    ]
  },
  {
    title: "Customs Clearance",
    description: "Navigate complex customs regulations and ensure smooth import/export operations.",
    icon: "🛃",
    features: [
      "Documentation preparation",
      "Tariff classification",
      "Duty optimization",
      "Compliance management"
    ]
  },
  {
    title: "Freight Forwarding",
    description: "Efficiently move your goods across borders with our reliable freight forwarding services.",
    icon: "🚢",
    features: [
      "Sea, air, and land transport",
      "Cargo tracking",
      "Insurance solutions",
      "Route optimization"
    ]
  }
];

const ImportAndExportSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <section id="import-export" className="section-padding bg-black overflow-hidden">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="heading-xl mb-4 bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#edc967] bg-clip-text text-transparent">Import & Export Services</h2>
          <h3 className="heading-lg text-white mb-6">Tailored to Your Global Trade Needs</h3>
          <p className="text-muted-foreground text-lg">
          Prism Gold Enterprises delivers reliable Import & Export solutions to simplify global trade. We help businesses expand across borders with efficient logistics and full regulatory compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {importExportServices.map((service, index) => (
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
          <Button className="bg-gradient-to-r from-[#ae8625] via-[#f7ef8a] to-[#edc967] text-black hover:bg-primary-100 group" onClick={() => navigate('/services/import-export')}>
            Explore Import & Export
            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImportAndExportSection;

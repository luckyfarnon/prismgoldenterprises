
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "SEO & Content Marketing",
    description: "Drive organic traffic with data-driven SEO strategies and engaging content that converts.",
    icon: "🔍"
  },
  {
    title: "Paid Media Advertising",
    description: "Strategic ad campaigns across Google, social media, and programmatic platforms for maximum ROI.",
    icon: "📈"
  },
  {
    title: "Social Media Marketing",
    description: "Build brand awareness and engage your audience with compelling social media strategies.",
    icon: "📱"
  },
  {
    title: "Email Marketing",
    description: "Nurture leads and drive conversions with personalized email campaigns.",
    icon: "📧"
  },
  {
    title: "Analytics & Data",
    description: "Make data-driven decisions with comprehensive analytics and reporting.",
    icon: "📊"
  },
  {
    title: "Conversion Rate Optimization",
    description: "Maximize your website's performance with strategic CRO techniques.",
    icon: "🎯"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Digital Marketing Services</h2>
          <h3 className="heading-md text-primary mb-6">Tailored to Your Business Goals</h3>
          <p className="text-muted-foreground text-lg">
            Our comprehensive suite of digital marketing services helps businesses grow their online presence,
            engage with their audience, and drive measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card card-hover">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button className="btn btn-primary">Explore All Services</Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

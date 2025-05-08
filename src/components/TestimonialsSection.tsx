
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Digital Silk transformed our online presence. Their strategic approach to SEO and content marketing helped us increase our organic traffic by 250% in just 6 months.",
    author: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechCorp Inc.",
    avatar: "https://placehold.co/100x100/1A1F2C/ffffff?text=SJ"
  },
  {
    quote: "The ROI we've seen from Digital Silk's paid media campaigns has been exceptional. They truly understand our business goals and deliver measurable results.",
    author: "Michael Chen",
    position: "CEO",
    company: "Innovate Solutions",
    avatar: "https://placehold.co/100x100/1A1F2C/ffffff?text=MC"
  },
  {
    quote: "Working with Digital Silk has been a game-changer for our brand. Their creative approach to social media has helped us build a loyal community and increase engagement by 300%.",
    author: "Emily Rodriguez",
    position: "Brand Manager",
    company: "Lifestyle Brands",
    avatar: "https://placehold.co/100x100/1A1F2C/ffffff?text=ER"
  }
];

const clients = [
  "https://placehold.co/180x60/E5DEFF/6E59A5?text=BRAND1",
  "https://placehold.co/180x60/E5DEFF/6E59A5?text=BRAND2",
  "https://placehold.co/180x60/E5DEFF/6E59A5?text=BRAND3",
  "https://placehold.co/180x60/E5DEFF/6E59A5?text=BRAND4",
  "https://placehold.co/180x60/E5DEFF/6E59A5?text=BRAND5",
  "https://placehold.co/180x60/E5DEFF/6E59A5?text=BRAND6"
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-padding bg-primary-100">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our clients have to say about working with Digital Silk.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`transition-opacity duration-500 ${index === activeIndex ? 'block opacity-100' : 'hidden opacity-0'}`}
            >
              <Card className="bg-white p-8 md:p-10 shadow-lg">
                <CardContent className="p-0">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author} 
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </div>
                    <blockquote className="text-xl md:text-2xl italic mb-6 text-secondary">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-bold text-lg">{testimonial.author}</p>
                      <p className="text-muted-foreground">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-primary' : 'bg-primary-300'}`}
                aria-label={`Testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="heading-md mb-6">Trusted By Industry Leaders</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center">
              <img 
                src={client} 
                alt={`Client ${index + 1}`} 
                className="h-12 opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

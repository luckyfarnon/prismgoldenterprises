
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  const goToNext = () => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 500);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000);

    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  return (
    <section className="section-padding bg-primary-100 overflow-hidden">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="heading-lg mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our clients have to say about working with Digital Silk.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto mb-20" data-aos="fade-up">
          <div className="absolute top-8 left-8 text-primary opacity-20">
            <Quote size={80} />
          </div>
          
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500" 
              style={{ 
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
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
                        <blockquote className="text-xl md:text-2xl italic mb-6 text-secondary relative z-10">
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
            </div>
          </div>
          
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
            <button 
              onClick={goToPrev}
              className="bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-secondary" />
            </button>
            <button 
              onClick={goToNext}
              className="bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-secondary" />
            </button>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-primary w-6' : 'bg-primary-300'
                }`}
                aria-label={`Testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
          <h3 className="heading-md mb-6">Trusted By Industry Leaders</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center" data-aos="fade-up">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="flex justify-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img 
                src={client} 
                alt={`Client ${index + 1}`} 
                className="h-12 opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  language: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "This translator has been invaluable for my research on Bulu cultural practices. The accuracy of the translations has helped me document traditional knowledge that might otherwise be lost.",
    author: "Dr. Nathalie Mbarga",
    role: "Anthropologist",
    language: "Bulu",
    image: "/images/african_pattern1.svg"
  },
  {
    id: 2,
    quote: "As a Tupuri speaker living abroad, this tool helps me stay connected to my roots and teach my children our language. The cultural notes are especially helpful for context.",
    author: "Jean-Pierre Wanko",
    role: "Tupuri Community Leader",
    language: "Tupuri",
    image: "/images/african_pattern2.svg"
  },
  {
    id: 3,
    quote: "The BuluTupuri translator has transformed how we document our oral histories. Now we can preserve our stories for future generations in both our native language and English.",
    author: "Aissatou Ngo",
    role: "Cultural Historian",
    language: "Bulu & Tupuri",
    image: "/images/cameroon_map.svg"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-amber-50 relative">
      <div className="absolute top-0 left-0 w-full h-4 adinkra-divider"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Quote size={40} className="mx-auto mb-4 text-amber-600" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            What People Are Saying
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from native speakers, researchers, and community members who are using our translation tool
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden african-border"
            >
              <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
                <img src={testimonial.image} alt="" className="w-full h-full" />
              </div>
              <div className="mb-4 text-amber-500">
                <Quote size={24} />
              </div>
              <p className="text-gray-700 mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-amber-700 font-bold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
                  <div className="text-sm text-gray-500">
                    <span>{testimonial.role}</span>
                    <span className="mx-2">•</span>
                    <span className="text-amber-600">{testimonial.language} Speaker</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

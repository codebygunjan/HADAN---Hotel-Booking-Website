import Title from "./Title";
import { testimonials } from "../assets/testimonials";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <div>
      <Title title="see what people say" />
      <div className="flex items-center overflow-x-auto gap-6 ml-5 mb-10 no-scrollBar">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-xl shadow shrink-0"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="font-playfair text-xl">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <Star key={index} color="orange" fill="orange" />
                ))}
            </div>
            <p className="text-gray-500 max-w-90 mt-4">
              "{testimonial.review}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

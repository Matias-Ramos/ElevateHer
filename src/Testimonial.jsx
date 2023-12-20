import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../public/images/1.jpg';
import image2 from '../public/images/2.jpg';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: 'John Doe',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      instagram: '@myInstagramProfile',
      image: image1,
    },
    {
      name: 'Jane Smith',
      testimonial: 'Nulla facilisi. Pellentesque eu ex ut tortor ultricies vestibulum.',
      instagram: '@anotherInstagramProfile',
      image: image2,
    },
    // Add more testimonials as needed
  ];

  return (
    <Carousel>
      {testimonials.map((testimonial, index) => (
        <Carousel.Item key={index}>
          <div className="d-none d-md-block">
            <div className="row">
              <div className="col-md-4">
                <img src={testimonial.image} alt={testimonial.name} className="img-fluid" />
              </div>
              <div className="col-md-8">
                <h4>{testimonial.name}</h4>
                <p><em>{testimonial.testimonial}</em></p>
                <p>{testimonial.instagram}</p>
              </div>
            </div>
          </div>
          <div className="d-md-none">
            <img src={testimonial.image} alt={testimonial.name} className="img-fluid" />
            <h4>{testimonial.name}</h4>
            <p><em>{testimonial.testimonial}</em></p>
            <p>{testimonial.instagram}</p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default TestimonialCarousel;
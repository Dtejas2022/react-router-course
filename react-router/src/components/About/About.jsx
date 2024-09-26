import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About Us
        </h1>
        
        {/* About Us Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-600">
            Welcome to Balaji Watch Center, where we focus on providing the highest quality timepieces to our customers. Our passion for watches goes beyond just selling them – we believe in offering exceptional service and helping our customers find the perfect watch that fits their style and personality.
          </p>
        </div>

        {/* Mission Statement Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              At Balaji Watch Center, our mission is to provide premium quality watches at affordable prices, backed by top-notch customer service. We aim to be the go-to destination for watch enthusiasts and casual buyers alike.
            </p>
          </div>

          {/* Vision */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              We envision a world where watches are more than just time-telling devices – they’re a symbol of style, craftsmanship, and individuality. We want to bring the best of global watchmaking to our customers and help them find their perfect match.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Team Member 1 */}
            <div className="text-center">
              <img
                className="w-32 h-32 mx-auto rounded-full shadow-md"
                src="https://via.placeholder.com/150"
                alt="Team Member 1"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">Siddeshwar Mohite</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <img
                className="w-32 h-32 mx-auto rounded-full shadow-md"
                src="https://via.placeholder.com/150"
                alt="Team Member 2"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">Tejas Dotkar</h3>
              <p className="text-gray-600">Co-Founder & CTO</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <img
                className="w-32 h-32 mx-auto rounded-full shadow-md"
                src="https://via.placeholder.com/150"
                alt="Team Member 3"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">Anjali K.</h3>
              <p className="text-gray-600">Lead Designer</p>
            </div>

          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Want to Know More About Us?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're always happy to connect with our customers. Feel free to reach out to us with any questions or to learn more about our products and services.
          </p>
          <a
            href="/contact"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;


import React from 'react'

function About() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">

        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About Us
        </h1>

        {/* Company Description */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-600">
            Welcome to Balaji Watch Center, your trusted destination for quality watch repair and sales. Our team is dedicated to providing exceptional service and ensuring that your timepieces are maintained to the highest standards.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600">
            At Balaji Watch Center, our mission is to deliver top-notch watch services that combine craftsmanship and modern technology. We aim to build lasting relationships with our customers through trust and quality service.
          </p>
        </div>

        {/* Team Section */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src="/images/team-member-1.jpg" alt="Team Member 1" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold text-gray-800">Dilip Dotkar</h3>
            <p className="text-gray-600">Watch Technician</p>
            <p className="mt-2 text-gray-500">
              Dilip is a master watch technician with over 10 years of experience. His expertise in mechanical watches ensures that your timepieces are in the best hands.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src="/images/team-member-2.jpg" alt="Team Member 2" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold text-gray-800">Tejas Dotkar</h3>
            <p className="text-gray-600">Customer Service Manager</p>
            <p className="mt-2 text-gray-500">
              Tejas ensures that every customer has a delightful experience at Balaji Watch Center. Her commitment to customer satisfaction is unmatched.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src="/images/team-member-3.jpg" alt="Team Member 3" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold text-gray-800">Dilip Dotkar</h3>
            <p className="text-gray-600">Watch Repair Specialist</p>
            <p className="mt-2 text-gray-500">
              With a keen eye for detail, Dilip specializes in vintage watch repairs and restoration, ensuring that your cherished pieces are preserved for years to come.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

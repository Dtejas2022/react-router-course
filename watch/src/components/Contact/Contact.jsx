import React from 'react'

function Contact() {
  return (
    <div>
      <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">

        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h1>

        {/* Description Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-600">
            Have questions or need assistance? We’re here to help! Please fill out the form below or reach out to us directly.
          </p>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col md:flex-row justify-center mb-12">
          <div className="bg-white shadow-lg rounded-lg p-6 m-2 w-full md:w-1/3">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Address</h3>
            <p className="text-gray-600">Balaji Watch Center,</p>
            <p className="text-gray-600">Gurudwara Road Gate No. 1 ,</p>
            <p className="text-gray-600">Nanded, Maharashtra-431601</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 m-2 w-full md:w-1/3">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Phone</h3>
            <p className="text-gray-600">+91 7020206909</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 m-2 w-full md:w-1/3">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Email</h3>
            <p className="text-gray-600">info@balajiwatchcenter.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Get in our Touch</h2>
          <form className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Write your message here"
                rows="4"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact

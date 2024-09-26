import React from 'react'

function Testimonials() {
  return (
    <div>
       <section className="py-12">
      <h2 className="text-4xl text-center font-bold mb-8">What Our Customers Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src={testimonial.photo} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-2xl">{testimonial.name}</h3>
            <p className="mt-2 text-gray-600">{testimonial.review}</p>
            <div className="mt-4 text-yellow-500">{"★".repeat(testimonial.rating)}</div>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default Testimonials

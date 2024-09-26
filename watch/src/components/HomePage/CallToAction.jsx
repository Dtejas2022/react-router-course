import React from 'react'

function CallToAction() {
    return (
        <div>
            <section className="py-12 bg-blue-500 text-white text-center">
                <h2 className="text-4xl font-bold mb-4">Ready to Explore Our Watches?</h2>
                <button className="bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600 transition duration-300 mx-2">Shop Now</button>
                <button className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300 mx-2">Get Your Watch Repaired</button>
            </section>
        </div>
    )
}

export default CallToAction

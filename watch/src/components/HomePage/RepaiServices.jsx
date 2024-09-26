import React from 'react'

function RepaiServices() {
    return (
        <div>
            <section className="py-12 bg-gray-100">
                <h2 className="text-4xl text-center font-bold mb-8">Our Repair Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                    <div>
                        <img src="/path-to-service-icon1.png" alt="Battery Replacement" className="mx-auto mb-4" />
                        <h3 className="text-xl font-semibold">Battery Replacement</h3>
                        <p>Quick and reliable battery replacement for all watch brands.</p>
                    </div>
                    <div>
                        <img src="/path-to-service-icon2.png" alt="Strap Replacement" className="mx-auto mb-4" />
                        <h3 className="text-xl font-semibold">Strap Replacement</h3>
                        <p>Variety of watch straps available to give your watch a new look.</p>
                    </div>
                    <div>
                        <img src="/path-to-service-icon3.png" alt="Watch Polishing" className="mx-auto mb-4" />
                        <h3 className="text-xl font-semibold">Watch Polishing</h3>
                        <p>Restore the shine and glory of your watch with professional polishing.</p>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <button className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300">
                        Get Your Watch Repaired</button>
                </div>
            </section>
        </div>
    )
}

export default RepaiServices

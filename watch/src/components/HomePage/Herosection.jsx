import React from 'react'

function Herosection() {
    return (
        <div>
            <section className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: 'url(/path-to-your-banner.jpg)' }}>
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-black mb-4">Discover the Latest in Luxury Timepieces</h1>
                    <button className="bg-yellow-500 text-black py-3 px-6 rounded-lg hover:bg-yellow-600 transition duration-300">Shop Now</button>
                </div>
            </section>
        </div>
    )
}

export default Herosection

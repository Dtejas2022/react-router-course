import React from 'react'

function FeatureProducts() {
    return (
        <div>
            <section className="py-12">
                <h2 className="text-4xl text-center font-bold mb-8">Featured Watches</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="border p-4 rounded-lg shadow-lg">
                            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                            <h3 className="mt-4 text-2xl">{product.name}</h3>
                            <p className="text-lg text-gray-500">${product.price}</p>
                            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">View Details</button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default FeatureProducts

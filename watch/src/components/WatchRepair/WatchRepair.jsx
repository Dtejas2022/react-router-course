import React from 'react'

function WatchRepair() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">

        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Watch Repair Services
        </h1>

        {/* Description Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-600">
            At Balaji Watch Center, we offer comprehensive watch repair services to ensure your timepieces run smoothly and look their best. Our expert technicians are experienced in handling various watch brands and types.
          </p>
        </div>

        {/* Repair Process Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Step 1 */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Step 1: Inspection</h2>
            <p className="text-gray-600">
              Bring your watch to our store for a free inspection. Our technicians will assess the condition of your watch and provide you with a detailed repair estimate.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Step 2: Repair</h2>
            <p className="text-gray-600">
              Once you approve the estimate, we will begin the repair process using high-quality parts and the latest techniques to ensure your watch is restored to optimal condition.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Step 3: Quality Check</h2>
            <p className="text-gray-600">
              After repairs are completed, each watch goes through a rigorous quality check to ensure everything functions perfectly before it is returned to you.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Step 4: Pickup</h2>
            <p className="text-gray-600">
              You will be notified once your watch is ready for pickup. We can also ship it directly to you if you prefer.
            </p>
          </div>
        </div>

        {/* Repair Request Form */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Request a Repair</h2>
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
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Watch Issue Description
              </label>
              <textarea
                id="description"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Describe the issue with your watch"
                rows="4"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default WatchRepair

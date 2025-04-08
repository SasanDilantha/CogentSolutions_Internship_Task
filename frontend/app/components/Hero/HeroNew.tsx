import React from 'react'

function HeroNew() {
  return (
    <section
        className="w-full h-screen bg-center bg-cover relative flex items-center justify-center"
        style={{ backgroundImage: "url('/img/bg.webp')" }} 
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-4xl text-center px-4 text-white">
          <h4 className="text-yellow-400 uppercase text-sm tracking-wider mb-4">
            Empowering Moments
          </h4>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-xl">
            Elevate Your Vision<br />At Our Annual Company Event
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Join us for a day of innovation, insights, and inspiration. Discover what’s next with industry leaders and visionaries.
          </p>
          <div className="mt-8">
            <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition duration-300">
              Register Now
            </button>
          </div>
        </div>
      </section>
  )
}

export default HeroNew
import React, { useState, useEffect } from 'react'
import academy from "../assets/images/academy building.png"
import trophies from "../assets/images/trophies.png"
import training from "../assets/images/training.png"
import coaching from "../assets/images/coaching.png"
import fecility1 from "../assets/images/fecility1.png"
import fecility2 from "../assets/images/fecility2.png"
import fecility3 from "../assets/images/fecility3.png"
import fecility4 from "../assets/images/fecility4.jpg"

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const facilities = [
    { img: fecility1, alt: "Facility 1" },
    { img: fecility2, alt: "Facility 2" },
    { img: fecility3, alt: "Facility 3" },
    { img: fecility4, alt: "Facility 4" }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % facilities.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % facilities.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + facilities.length) % facilities.length)
  }

  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section>
        <div className='relative w-full h-screen'>
          <img src={academy} alt="academy" className='w-full h-full object-cover' />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900/80"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-2xl">
              We Promise
            </h1>
            <p className="max-w-3xl text-lg md:text-2xl font-semibold leading-relaxed drop-shadow-lg">
              Train with the best to shape the next generation of footballers, where
              passion meets performance from grassroots to greatness.
            </p>
            <button className="mt-8 bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 border-l-4 border-amber-500 pl-6">
                About RMFC
              </h1>
              <p className="text-lg text-slate-700 leading-relaxed">
                <strong className="text-amber-600">RMFC Academy </strong>is a dedicated football training academy focused on developing young talent through structured coaching, discipline, and modern training methods. We aim to nurture players at every level by building strong technical skills, tactical awareness, and confidence both on and off the field. At RMFC Academy, passion for the game meets professional guidance to help players grow from grassroots to competitive football.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={trophies} alt="trophies" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Method Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className='grid md:grid-cols-2 gap-8 mb-12'>
            <div className='relative overflow-hidden rounded-2xl shadow-2xl group'>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>
              <img src={coaching} alt="coaching image" className="w-full h-96 object-cover transform group-hover:scale-110 transition duration-500" />
              <div className="absolute bottom-6 left-6 z-20 text-white">
                <h3 className="text-2xl font-bold drop-shadow-lg">Expert Coaching</h3>
              </div>
            </div>
            <div className='relative overflow-hidden rounded-2xl shadow-2xl group'>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>
              <img src={training} alt="training image" className="w-full h-96 object-cover transform group-hover:scale-110 transition duration-500" />
              <div className="absolute bottom-6 left-6 z-20 text-white">
                <h3 className="text-2xl font-bold drop-shadow-lg">Intensive Training</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 text-center">
              Training <span className="text-amber-600">Method</span>
            </h1>
            <div className="grid md:grid-cols-2 gap-6">
              <TrainingPoint icon="⚽" text="Technical skill development and ball mastery" />
              <TrainingPoint icon="🧠" text="Tactical understanding and game intelligence" />
              <TrainingPoint icon="💪" text="Fitness, strength, and endurance training" />
              <TrainingPoint icon="🎯" text="Small-sided games and match scenarios" />
              <TrainingPoint icon="🤝" text="Confidence, discipline, and teamwork building" />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Carousel Section */}
      <section className="py-20 px-4 md:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Our <span className="text-amber-500">Facilities</span>
          </h1>
          
          <div className="relative">
            {/* Carousel Container */}
            <div className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img src={facility.img} alt={facility.alt} className="w-full h-full object-cover" />
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-30 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-30 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
                {facilities.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-amber-500 w-8' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function TrainingPoint({ icon, text }) {
  return (
    <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-amber-50 transition-colors duration-300 group">
      <span className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{icon}</span>
      <p className="text-lg text-slate-700 font-medium">{text}</p>
    </div>
  )
}

export default Home
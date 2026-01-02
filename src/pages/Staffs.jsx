import React from 'react'
import coach from "../assets/images/coach.webp"
import assistant from "../assets/images/assistantcoach.webp"

function Staffs() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-amber-500">Coaching Staff</span>
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Meet the dedicated professionals shaping the next generation of football talent
          </p>
        </div>
      </div>

      {/* Head Coach Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="p-8 md:p-12 order-2 md:order-1">
                <div className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-4">
                  Head Coach
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-4">
                  Doby Fernandes
                </h3>
                <div className="w-20 h-1 bg-amber-500 rounded-full mb-6"></div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  <strong className="text-amber-600">Coach Doby Fernandes </strong>
                  brings a passionate and structured approach to football coaching, focusing on skill development, teamwork, and match intelligence. He is committed to guiding young players toward consistent improvement in a positive and motivating training environment.
                </p>

                {/* Stats/Highlights */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-gradient-to-br from-amber-50 to-slate-50 p-4 rounded-xl border-2 border-amber-200">
                    <p className="text-sm text-slate-600 font-medium">Experience</p>
                    <p className="text-2xl font-bold text-slate-900">10+ Years</p>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-slate-50 p-4 rounded-xl border-2 border-amber-200">
                    <p className="text-sm text-slate-600 font-medium">Specialty</p>
                    <p className="text-xl font-bold text-slate-900">Youth Dev.</p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-full min-h-[400px] md:min-h-[600px] order-1 md:order-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/20"></div>
                <img
                  src={coach}
                  alt="Head Coach Doby Fernandes"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assistant Coach Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-50 rounded-2xl shadow-2xl overflow-hidden border-2 border-slate-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="relative h-full min-h-[400px] md:min-h-[600px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-50/30"></div>
                <img
                  src={assistant}
                  alt="Assistant Coach Rana Naidu"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-4">
                  Assistant Coach
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-4">
                  Rana Naidu
                </h3>
                <div className="w-20 h-1 bg-blue-500 rounded-full mb-6"></div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  <strong className="text-blue-600">Assistant Coach Rana Naidu </strong>
                  plays a key role in supporting player development at RMFC Academy. He works closely with the head coach to plan training sessions, monitor individual progress, and provide focused guidance during drills and match situations.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mt-4">
                  With a strong emphasis on technical improvement, fitness, and teamwork, he helps players sharpen their skills, build confidence, and maintain discipline both on and off the field.
                </p>

                {/* Key Responsibilities */}
                <div className="mt-8 space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-500 text-xl font-bold flex-shrink-0">✓</span>
                    <p className="text-slate-700 font-medium">Training session planning & execution</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-500 text-xl font-bold flex-shrink-0">✓</span>
                    <p className="text-slate-700 font-medium">Individual player progress monitoring</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-500 text-xl font-bold flex-shrink-0">✓</span>
                    <p className="text-slate-700 font-medium">Technical skill development focus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Philosophy Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-br from-amber-50 via-white to-blue-50 rounded-2xl shadow-xl p-8 md:p-12 border-2 border-amber-200">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Coaching <span className="text-amber-600">Philosophy</span>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
              Together, our coaching staff is dedicated to creating a supportive and challenging environment where every player can reach their full potential. We believe in developing not just skilled footballers, but confident, disciplined individuals who carry the values of teamwork and excellence into every aspect of their lives.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <span className="bg-amber-100 text-amber-700 px-6 py-2 rounded-full font-bold">Passion</span>
              <span className="bg-blue-100 text-blue-700 px-6 py-2 rounded-full font-bold">Discipline</span>
              <span className="bg-green-100 text-green-700 px-6 py-2 rounded-full font-bold">Excellence</span>
              <span className="bg-purple-100 text-purple-700 px-6 py-2 rounded-full font-bold">Teamwork</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Staffs
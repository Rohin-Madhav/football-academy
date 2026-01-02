import React from 'react'
import squad from "../assets/images/squad.webp"
import trophies2 from "../assets/images/trophies2.webp"
import teaching from "../assets/images/teaching.webp"
import teaching2 from "../assets/images/teaching2.webp"

function About() {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-900/70 z-10"></div>
        <img src={squad} alt="squad img" className="w-full h-full object-cover" />
        <div className="absolute bottom-12 left-0 right-0 z-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl mb-4">
            About <span className="text-amber-500">RMFC Academy</span>
          </h1>
          <p className="text-xl text-white/90 drop-shadow-lg max-w-3xl mx-auto">
            Building champions through dedication, discipline, and excellence
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">

        {/* Our History Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our <span className="text-amber-600">Story</span>
            </h1>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group order-2 md:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={teaching} alt="teaching" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
              </div>
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl font-bold text-slate-900 border-l-4 border-amber-500 pl-6">
                Our History
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                <strong className="text-amber-600">RMFC Academy</strong> was founded with a clear vision: to create a strong foundation for young footballers by providing structured training, disciplined coaching, and a positive learning environment. What began as a small training initiative for passionate local players has steadily grown into a dedicated football academy focused on long-term player development.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                From the early days, RMFC Academy has emphasized the importance of mastering fundamentals, teamwork, and sportsmanship alongside competitive performance. Over the years, the academy has expanded its training programs, improved facilities, and adopted modern coaching methods to meet the evolving demands of the game.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Today, RMFC Academy continues to develop young talent with a commitment to excellence, guiding players from grassroots football toward higher levels of competition while instilling confidence, discipline, and a lifelong love for the sport.
              </p>
            </div>
          </div>
        </div>

        {/* Trophies Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Our <span className="text-amber-600">Achievements</span>
              </h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3 p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors duration-300">
                    <span className="text-2xl flex-shrink-0">🏆</span>
                    <span className="text-lg text-slate-700 font-medium">District Youth Football Championship : Winners</span>
                  </li>
                  <li className="flex items-start space-x-3 p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors duration-300">
                    <span className="text-2xl flex-shrink-0">🥇</span>
                    <span className="text-lg text-slate-700 font-medium">Inter-Academy Football League : Champions</span>
                  </li>
                  <li className="flex items-start space-x-3 p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors duration-300">
                    <span className="text-2xl flex-shrink-0">🏅</span>
                    <span className="text-lg text-slate-700 font-medium">Junior Football Development Cup : Winners</span>
                  </li>
                  <li className="flex items-start space-x-3 p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors duration-300">
                    <span className="text-2xl flex-shrink-0">⭐</span>
                    <span className="text-lg text-slate-700 font-medium">Multiple age-group league titles (U-12, U-15, U-18)</span>
                  </li>
                  <li className="flex items-start space-x-3 p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors duration-300">
                    <span className="text-2xl flex-shrink-0">👥</span>
                    <span className="text-lg text-slate-700 font-medium">Players selected for district and state teams</span>
                  </li>
                </ul>
              </div>

              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src={trophies2} alt="trophies img" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coaching Techniques Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Coaching <span className="text-amber-600">Techniques</span>
              </h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src={teaching2} alt="coaching img" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <p className="text-lg text-slate-700 leading-relaxed">
                  At <strong className="text-amber-600">RMFC Academy</strong>, our coaching techniques focus on developing well-rounded footballers through a structured, player-centered approach. Training sessions emphasize technical skill development, tactical understanding, physical fitness, and mental discipline.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-amber-500 text-xl font-bold">•</span>
                    <p className="text-slate-700">Age-appropriate drills tailored to each player's level</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-amber-500 text-xl font-bold">•</span>
                    <p className="text-slate-700">Match-based scenarios for real-game experience</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-amber-500 text-xl font-bold">•</span>
                    <p className="text-slate-700">Constructive feedback to build confidence</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-amber-500 text-xl font-bold">•</span>
                    <p className="text-slate-700">Positive learning environment for steady growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
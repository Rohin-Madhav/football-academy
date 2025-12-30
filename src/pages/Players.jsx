import React, { useState } from 'react'

function Players() {
  const [players, setPlayers] = useState([
    {
      id: 1,
      img: "/assets/images/player1.jpg",
      name: "Arjun Kumar",
      position: "Goalkeeper",
      age: 17,
      status: "Fit",
    },
    {
      id: 2,
      img: "/assets/images/player2.jpg",
      name: "Rahul Singh",
      position: "Defender",
      age: 18,
      status: "Fit",
    },
    {
      id: 3,
      img: "/assets/images/player3.jpg",
      name: "Vikram Patel",
      position: "Defender",
      age: 17,
      status: "Injured",
    },
    {
      id: 4,
      img: "/assets/images/player4.jpg",
      name: "Sanjay R",
      position: "Midfielder",
      age: 16,
      status: "Fit",
    },
    {
      id: 5,
      img: "/assets/images/player5.jpg",
      name: "Amit Das",
      position: "Forward",
      age: 18,
      status: "Fit",
    },

    {
      id: 6,
      img: "/assets/images/player6.jpg",
      name: "Karthik M",
      position: "Goalkeeper",
      age: 17,
      status: "Fit",
    },
    {
      id: 7,
      img: "/assets/images/player7.jpg",
      name: "Rohan Verma",
      position: "Defender",
      age: 16,
      status: "Fit",
    },
    {
      id: 8,
      img: "/assets/images/player8.jpg",
      name: "Manish Y",
      position: "Midfielder",
      age: 18,
      status: "Injured",
    },
    {
      id: 9,
      img: "/assets/images/player9.jpg",
      name: "Deepak S",
      position: "Forward",
      age: 17,
      status: "Fit",
    },
    {
      id: 10,
      img: "/assets/images/player10.jpg",
      name: "Nikhil P",
      position: "Defender",
      age: 18,
      status: "Fit",
    },

    {
      id: 11,
      img: "/assets/images/player11.jpg",
      name: "Suraj K",
      position: "Goalkeeper",
      age: 16,
      status: "Fit",
    },
    {
      id: 12,
      img: "/assets/images/player12.jpg",
      name: "Praveen R",
      position: "Midfielder",
      age: 17,
      status: "Fit",
    },
    {
      id: 13,
      img: "/assets/images/player13.jpg",
      name: "Aditya N",
      position: "Forward",
      age: 18,
      status: "Injured",
    },
    {
      id: 14,
      img: "/assets/images/player14.jpg",
      name: "Suresh V",
      position: "Defender",
      age: 16,
      status: "Fit",
    },
    {
      id: 15,
      img: "/assets/images/player15.jpg",
      name: "Kunal J",
      position: "Midfielder",
      age: 17,
      status: "Fit",
    },

    {
      id: 16,
      img: "/assets/images/player16.jpg",
      name: "Akash T",
      position: "Forward",
      age: 18,
      status: "Fit",
    },
    {
      id: 17,
      img: "/assets/images/player17.jpg",
      name: "Ritesh B",
      position: "Defender",
      age: 17,
      status: "Fit",
    },
    {
      id: 18,
      img: "/assets/images/player18.jpg",
      name: "Mohit G",
      position: "Midfielder",
      age: 16,
      status: "Injured",
    },
    {
      id: 19,
      img: "/assets/images/player19.jpg",
      name: "Yash L",
      position: "Forward",
      age: 18,
      status: "Fit",
    },
    {
      id: 20,
      img: "/assets/images/player20.jpg",
      name: "Naveen C",
      position: "Defender",
      age: 17,
      status: "Fit",
    },
  ]);

  return (
   <div className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Header Section */}
    <div className="text-center mb-16">
      <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
        All <span className="text-amber-600">Players</span>
      </h1>
      <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Meet our talented roster of dedicated athletes shaping the future of football
      </p>
    </div>

    {/* Players Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {players.map((p) => (
        <div 
          key={p.id} 
          className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
        >
          {/* Image Container */}
          <div className="relative h-64 overflow-hidden bg-slate-200">
            <img 
              src={p.img} 
              alt={`${p.name} player image`} 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            {/* Status Badge */}
            <div className="absolute top-4 right-4">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                p.status === 'Active' 
                  ? 'bg-green-500 text-white' 
                  : p.status === 'Injured'
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-500 text-white'
              }`}>
                {p.status}
              </span>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6">
            {/* Player Name */}
            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
              {p.name}
            </h3>

            {/* Player Details */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500 font-medium">Position:</span>
                <span className="text-slate-900 font-bold bg-amber-100 px-3 py-1 rounded-full">
                  {p.position}
                </span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500 font-medium">Age:</span>
                <span className="text-slate-900 font-semibold">{p.age} years</span>
              </div>
            </div>

            {/* View Profile Button */}
            <button className="mt-4 w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform group-hover:scale-105 shadow-md hover:shadow-lg">
              View Profile
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  )
}

export default Players

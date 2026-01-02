import React, { useState } from 'react'
import player1 from "../assets/images/Players/player1.webp"
import player2 from "../assets/images/Players/player2.webp"
import player3 from "../assets/images/Players/player3.webp"
import player4 from "../assets/images/Players/player4.webp"
import player5 from "../assets/images/Players/player5.webp"
import player6 from "../assets/images/Players/player6.webp"
import player7 from "../assets/images/Players/player7.webp"
import player8 from "../assets/images/Players/player8.webp"
import player9 from "../assets/images/Players/player9.webp"
import player10 from "../assets/images/Players/player10.webp"

function Players() {
  const [selectedPlayer, setSelectedPlayer] = useState(null)
  
  const [players, setPlayers] = useState([
    {
      id: 1,
      img: player1,
      name: "Arjun Kumar",
      position: "Goalkeeper",
      age: 17,
      status: "Fit",
      matches: 18,
      goals: 0,
      assists: 1,
    },
    {
      id: 2,
      img: player2,
      name: "Rahul Singh",
      position: "Defender",
      age: 18,
      status: "Fit",
      matches: 20,
      goals: 2,
      assists: 3,
    },
    {
      id: 3,
      img: player3,
      name: "Vikram Patel",
      position: "Defender",
      age: 17,
      status: "Injured",
      matches: 14,
      goals: 1,
      assists: 1,
    },
    {
      id: 4,
      img: player4,
      name: "Sanjay R",
      position: "Midfielder",
      age: 16,
      status: "Fit",
      matches: 19,
      goals: 4,
      assists: 6,
    },
    {
      id: 5,
      img: player5,
      name: "Amit Das",
      position: "Forward",
      age: 18,
      status: "Fit",
      matches: 21,
      goals: 12,
      assists: 5,
    },
    {
      id: 6,
      img: player6,
      name: "Karthik M",
      position: "Goalkeeper",
      age: 17,
      status: "Fit",
      matches: 16,
      goals: 0,
      assists: 0,
    },
    {
      id: 7,
      img: player7,
      name: "Rohan Verma",
      position: "Defender",
      age: 16,
      status: "Fit",
      matches: 17,
      goals: 1,
      assists: 2,
    },
    {
      id: 8,
      img: player8,
      name: "Manish Y",
      position: "Midfielder",
      age: 18,
      status: "Injured",
      matches: 13,
      goals: 3,
      assists: 4,
    },
    {
      id: 9,
      img: player9,
      name: "Deepak S",
      position: "Forward",
      age: 17,
      status: "Fit",
      matches: 20,
      goals: 10,
      assists: 4,
    },
    {
      id: 10,
      img: player10,
      name: "Nikhil P",
      position: "Defender",
      age: 18,
      status: "Fit",
      matches: 22,
      goals: 2,
      assists: 1,
    },
    {
      id: 11,
      img: "/assets/images/player11.jpg",
      name: "Suraj K",
      position: "Goalkeeper",
      age: 16,
      status: "Fit",
      matches: 15,
      goals: 0,
      assists: 1,
    },
    {
      id: 12,
      img: "/assets/images/player12.jpg",
      name: "Praveen R",
      position: "Midfielder",
      age: 17,
      status: "Fit",
      matches: 18,
      goals: 5,
      assists: 7,
    },
    {
      id: 13,
      img: "/assets/images/player13.jpg",
      name: "Aditya N",
      position: "Forward",
      age: 18,
      status: "Injured",
      matches: 14,
      goals: 8,
      assists: 3,
    },
    {
      id: 14,
      img: "/assets/images/player14.jpg",
      name: "Suresh V",
      position: "Defender",
      age: 16,
      status: "Fit",
      matches: 16,
      goals: 1,
      assists: 2,
    },
    {
      id: 15,
      img: "/assets/images/player15.jpg",
      name: "Kunal J",
      position: "Midfielder",
      age: 17,
      status: "Fit",
      matches: 19,
      goals: 4,
      assists: 6,
    },
    {
      id: 16,
      img: "/assets/images/player16.jpg",
      name: "Akash T",
      position: "Forward",
      age: 18,
      status: "Fit",
      matches: 22,
      goals: 14,
      assists: 6,
    },
    {
      id: 17,
      img: "/assets/images/player17.jpg",
      name: "Ritesh B",
      position: "Defender",
      age: 17,
      status: "Fit",
      matches: 20,
      goals: 2,
      assists: 3,
    },
    {
      id: 18,
      img: "/assets/images/player18.jpg",
      name: "Mohit G",
      position: "Midfielder",
      age: 16,
      status: "Injured",
      matches: 12,
      goals: 2,
      assists: 4,
    },
    {
      id: 19,
      img: "/assets/images/player19.jpg",
      name: "Yash L",
      position: "Forward",
      age: 18,
      status: "Fit",
      matches: 21,
      goals: 11,
      assists: 5,
    },
    {
      id: 20,
      img: "/assets/images/player20.jpg",
      name: "Naveen C",
      position: "Defender",
      age: 17,
      status: "Fit",
      matches: 18,
      goals: 1,
      assists: 2,
    }
  ]);

  const openPopup = (player) => {
    setSelectedPlayer(player)
  }

  const closePopup = () => {
    setSelectedPlayer(null)
  }

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
                    p.status === 'Fit'
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
                <button
                  onClick={() => openPopup(p)}
                  className="mt-4 w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform group-hover:scale-105 shadow-md hover:shadow-lg"
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal - Only shows when a player is selected */}
      {selectedPlayer && (
        <>
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={closePopup}
          ></div>

          {/* Popup Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 opacity-100">
              {/* Header Section */}
              <div className="relative bg-gradient-to-r from-amber-500 to-amber-600 p-8 rounded-t-2xl">
                <button
                  onClick={closePopup}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300 hover:rotate-90"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="flex items-center space-x-6">
                  {/* Player Image */}
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0">
                    <img
                      src={selectedPlayer.img}
                      alt={selectedPlayer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Player Name & Position */}
                  <div className="text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{selectedPlayer.name}</h2>
                    <p className="text-lg md:text-xl bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full inline-block">
                      {selectedPlayer.position}
                    </p>
                  </div>
                </div>
              </div>

              {/* Body Section */}
              <div className="p-6 md:p-8">
                {/* Status Badge */}
                <div className="mb-6">
                  <span className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide inline-block ${
                    selectedPlayer.status === 'Fit'
                      ? 'bg-green-100 text-green-700'
                      : selectedPlayer.status === 'Injured'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-gray-100 text-gray-700'
                  }`}>
                    {selectedPlayer.status}
                  </span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {/* Player ID */}
                  <div className="bg-slate-50 rounded-xl p-4 text-center border-2 border-slate-200 hover:border-amber-500 transition-colors duration-300">
                    <p className="text-sm text-slate-500 font-medium mb-1">Player ID</p>
                    <p className="text-2xl font-bold text-slate-900">#{selectedPlayer.id}</p>
                  </div>

                  {/* Matches */}
                  <div className="bg-slate-50 rounded-xl p-4 text-center border-2 border-slate-200 hover:border-amber-500 transition-colors duration-300">
                    <p className="text-sm text-slate-500 font-medium mb-1">Matches</p>
                    <p className="text-2xl font-bold text-slate-900">{selectedPlayer.matches}</p>
                  </div>

                  {/* Goals */}
                  <div className="bg-slate-50 rounded-xl p-4 text-center border-2 border-slate-200 hover:border-amber-500 transition-colors duration-300">
                    <p className="text-sm text-slate-500 font-medium mb-1">Goals</p>
                    <p className="text-2xl font-bold text-amber-600">{selectedPlayer.goals}</p>
                  </div>

                  {/* Assists */}
                  <div className="bg-slate-50 rounded-xl p-4 text-center border-2 border-slate-200 hover:border-amber-500 transition-colors duration-300">
                    <p className="text-sm text-slate-500 font-medium mb-1">Assists</p>
                    <p className="text-2xl font-bold text-amber-600">{selectedPlayer.assists}</p>
                  </div>
                </div>

                {/* Additional Info Section */}
                <div className="bg-gradient-to-br from-amber-50 to-slate-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Performance Overview</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Average Rating</span>
                      <span className="font-bold text-slate-900">8.5/10</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Minutes Played</span>
                      <span className="font-bold text-slate-900">{selectedPlayer.matches * 90}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Goal Contribution</span>
                      <span className="font-bold text-amber-600">{selectedPlayer.goals + selectedPlayer.assists}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={closePopup}
                    className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-900 font-bold py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    Close
                  </button>
                  <button className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                    Contact Player
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Players
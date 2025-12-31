import React, { useState } from 'react'

function Schedules() {
  const [activeTab, setActiveTab] = useState('upcoming')
  const [schedules, setSchedules] = useState([
    {
      id: 1,
      opponent: "City Football Academy",
      date: "2025-01-12",
      time: "4:30 PM",
      venue: "RMFC Training Ground",
      category: "U-15 League Match",
      status: "Upcoming",
    },
    {
      id: 2,
      opponent: "United Sports Club",
      date: "2025-01-18",
      time: "5:00 PM",
      venue: "City Stadium",
      category: "U-17 Friendly Match",
      status: "Upcoming",
    },
    {
      id: 3,
      opponent: "Rising Stars FC",
      date: "2025-01-25",
      time: "3:30 PM",
      venue: "RMFC Training Ground",
      category: "U-18 League Match",
      status: "Upcoming",
    },
    {
      id: 4,
      opponent: "Youth Warriors Academy",
      date: "2025-02-02",
      time: "4:00 PM",
      venue: "District Sports Complex",
      category: "U-15 League Match",
      status: "Upcoming",
    },
    {
      id: 5,
      opponent: "Elite Soccer School",
      date: "2025-02-08",
      time: "5:30 PM",
      venue: "City Stadium",
      category: "U-17 League Match",
      status: "Upcoming",
    },
    {
      id: 6,
      opponent: "Falcons FC",
      date: "2025-02-15",
      time: "4:15 PM",
      venue: "RMFC Training Ground",
      category: "U-18 Friendly Match",
      status: "Upcoming",
    },
    {
      id: 7,
      opponent: "Dynamic Youth FC",
      date: "2025-02-22",
      time: "3:45 PM",
      venue: "Municipal Ground",
      category: "U-15 Friendly Match",
      status: "Upcoming",
    },
    {
      id: 8,
      opponent: "Lions Football Club",
      date: "2025-03-01",
      time: "5:00 PM",
      venue: "City Stadium",
      category: "U-17 League Match",
      status: "Upcoming",
    },
    {
      id: 9,
      opponent: "Future Champs Academy",
      date: "2025-03-08",
      time: "4:30 PM",
      venue: "RMFC Training Ground",
      category: "U-18 League Match",
      status: "Upcoming",
    },
    {
      id: 10,
      opponent: "Young Talents FC",
      date: "2025-03-15",
      time: "4:00 PM",
      venue: "District Sports Complex",
      category: "U-15 League Match",
      status: "Upcoming",
    },
    {
      id: 11,
      opponent: "Metro Sports Academy",
      date: "2024-12-05",
      time: "5:00 PM",
      venue: "City Stadium",
      category: "U-17 League Match",
      status: "Completed",
      score: "2 - 1",
      result: "Win",
    },
    {
      id: 12,
      opponent: "Skyline FC",
      date: "2024-11-28",
      time: "4:30 PM",
      venue: "RMFC Training Ground",
      category: "U-15 Friendly Match",
      status: "Completed",
      score: "1 - 1",
      result: "Draw",
    },
    {
      id: 13,
      opponent: "Northern United",
      date: "2024-11-20",
      time: "5:15 PM",
      venue: "Municipal Ground",
      category: "U-18 League Match",
      status: "Completed",
      score: "0 - 2",
      result: "Loss",
    },
    {
      id: 14,
      opponent: "Victory Sports Club",
      date: "2024-11-12",
      time: "4:00 PM",
      venue: "City Stadium",
      category: "U-17 Friendly Match",
      status: "Completed",
      score: "3 - 2",
      result: "Win",
    },
    {
      id: 15,
      opponent: "Greenfield Academy",
      date: "2024-11-05",
      time: "3:45 PM",
      venue: "RMFC Training Ground",
      category: "U-15 League Match",
      status: "Completed",
      score: "2 - 0",
      result: "Win",
    },
    {
      id: 16,
      opponent: "Strikers FC",
      date: "2024-10-28",
      time: "5:30 PM",
      venue: "District Sports Complex",
      category: "U-18 Friendly Match",
      status: "Completed",
      score: "1 - 2",
      result: "Loss",
    },
    {
      id: 17,
      opponent: "Blue Tigers Academy",
      date: "2024-10-20",
      time: "4:15 PM",
      venue: "City Stadium",
      category: "U-17 League Match",
      status: "Completed",
      score: "2 - 2",
      result: "Draw",
    },
    {
      id: 18,
      opponent: "Phoenix Youth FC",
      date: "2024-10-12",
      time: "3:30 PM",
      venue: "Municipal Ground",
      category: "U-15 Friendly Match",
      status: "Completed",
      score: "4 - 1",
      result: "Win",
    },
    {
      id: 19,
      opponent: "Golden Boots Academy",
      date: "2024-10-05",
      time: "5:00 PM",
      venue: "RMFC Training Ground",
      category: "U-18 League Match",
      status: "Completed",
      score: "1 - 0",
      result: "Win",
    },
    {
      id: 20,
      opponent: "Champions FC",
      date: "2024-09-28",
      time: "4:30 PM",
      venue: "City Stadium",
      category: "U-17 League Match",
      status: "Completed",
      score: "0 - 0",
      result: "Draw",
    },
  ]);

  const upcomingMatches = schedules.filter(s => s.status === 'Upcoming')
  const completedMatches = schedules.filter(s => s.status === 'Completed')
  const displayedSchedules = activeTab === 'upcoming' ? upcomingMatches : completedMatches

  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Match <span className="text-amber-600">Schedules</span>
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Track all our upcoming matches and review past performances
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 space-x-4">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 ${
              activeTab === 'upcoming'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                : 'bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            Upcoming ({upcomingMatches.length})
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 ${
              activeTab === 'completed'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                : 'bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            Completed ({completedMatches.length})
          </button>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Time</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Match</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Venue</th>
                  <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">Status</th>
                  {activeTab === 'completed' && (
                    <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">Result</th>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {displayedSchedules.map((s, index) => (
                  <tr 
                    key={s.id} 
                    className={`hover:bg-amber-50 transition-colors duration-200 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                    }`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm font-semibold text-slate-900">{s.date}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-medium text-slate-700">{s.time}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                        {s.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-900">
                        <span className="text-amber-600">RMFC</span> vs {s.opponent}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm text-slate-700">{s.venue}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase ${
                        s.status === 'Upcoming' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {s.status}
                      </span>
                    </td>
                    {activeTab === 'completed' && (
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center space-y-1">
                          <span className="font-bold text-slate-900">{s.score}</span>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                            s.result === 'Win' 
                              ? 'bg-green-100 text-green-700' 
                              : s.result === 'Loss'
                              ? 'bg-red-100 text-red-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {s.result}
                          </span>
                        </div>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stats Summary */}
        {activeTab === 'completed' && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200">
              <div className="text-center">
                <p className="text-sm text-green-700 font-medium mb-2">Total Wins</p>
                <p className="text-4xl font-bold text-green-900">
                  {completedMatches.filter(m => m.result === 'Win').length}
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border-2 border-yellow-200">
              <div className="text-center">
                <p className="text-sm text-yellow-700 font-medium mb-2">Draws</p>
                <p className="text-4xl font-bold text-yellow-900">
                  {completedMatches.filter(m => m.result === 'Draw').length}
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-2 border-red-200">
              <div className="text-center">
                <p className="text-sm text-red-700 font-medium mb-2">Losses</p>
                <p className="text-4xl font-bold text-red-900">
                  {completedMatches.filter(m => m.result === 'Loss').length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Schedules
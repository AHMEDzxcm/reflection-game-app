'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-violet-500 to-purple-700 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Daily Reflection Game
        </h1>
        
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-800">
            Welcome to Your Reflection Journey
          </h2>
          <p className="mb-6 text-gray-700">
            Track one positive and one challenging experience each day. 
            Watch as your entries are automatically categorized and presented 
            in a fun, game-like weekly summary.
          </p>
          
          <div className="flex justify-center">
            <Link href="/daily-log" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105">
              Start Reflecting
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-purple-800">Daily Log</h3>
            <p className="text-gray-700">Record one positive and one challenging moment each day.</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-purple-800">Weekly Summary</h3>
            <p className="text-gray-700">See your week visualized with achievements and insights.</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-purple-800">Trend Analysis</h3>
            <p className="text-gray-700">Discover patterns in your experiences over time.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

type Entry = {
  date: string;
  positive: string;
  negative: string;
  categories: {
    positive: string;
    negative: string;
  };
};

export default function WeeklySummary() {
  const [entries, setEntries] = useState<Entry[]>([]);
  
  useEffect(() => {
    // In a real app, we would fetch this from a database
    const savedEntries = JSON.parse(localStorage.getItem('reflectionEntries') || '[]');
    setEntries(savedEntries);
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-500 to-purple-700 p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-block mb-6 text-white hover:underline">
          ← Back to Home
        </Link>
        
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <h1 className="text-3xl font-bold text-purple-800 mb-6">
            Weekly Summary
          </h1>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-700">
              Your Achievements
            </h2>
            
            <div className="bg-purple-50 rounded-lg p-6 border border-purple-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-purple-800">Reflection Streak</h3>
                  <p className="text-purple-700">You've reflected for {entries.length} days</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-purple-800">XP Gained</h3>
                  <p className="text-purple-700">{entries.length * 10} experience points</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-purple-700">
              Positive Moments
            </h2>
            
            {entries.length > 0 ? (
              <div className="space-y-4">
                {entries.map((entry, index)  => (
                  <div key={index} className="bg-green-50 rounded-lg p-4 border border-green-100">
                    <div className="flex justify-between items-start mb-2">
                      <span className="inline-block bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">
                        {entry.categories.positive}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(entry.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-700">{entry.positive}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">No entries yet. Start reflecting daily!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function DailyLog() {
  const [positiveEntry, setPositiveEntry] = useState('');
  const [negativeEntry, setNegativeEntry] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, we would save this to a database
    console.log('Positive entry:', positiveEntry);
    console.log('Negative entry:', negativeEntry);
    
    // For demo purposes, just show success message
    setIsSubmitted(true);
    
    // Save to localStorage for demo
    const entries = JSON.parse(localStorage.getItem('reflectionEntries') || '[]');
    entries.push({
      date: new Date().toISOString(),
      positive: positiveEntry,
      negative: negativeEntry,
      categories: {
        positive: 'Achievement',
        negative: 'Challenge'
      }
    });
    localStorage.setItem('reflectionEntries', JSON.stringify(entries));
  };
  
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-violet-500 to-purple-700 p-8">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-purple-800 mb-6 text-center">
            Entry Submitted!
          </h1>
          <div className="mb-8 text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-gray-700 mb-4">
              Your reflection has been saved successfully!
            </p>
            <p className="text-gray-700">
              You've earned 10 XP for today's reflection.
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <Link href="/" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full">
              Home
            </Link>
            <Link href="/weekly-summary" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full">
              Weekly Summary
            </Link>
          </div>
        </div>
      </div>
    ) ;
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-500 to-purple-700 p-8">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-block mb-6 text-white hover:underline">
          ← Back to Home
        </Link>
        
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-purple-800 mb-6">
            Daily Reflection
          </h1>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                What was one positive thing that happened today?
              </label>
              <textarea 
                className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={positiveEntry}
                onChange={(e) => setPositiveEntry(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-2">
                What was one challenging thing that happened today?
              </label>
              <textarea 
                className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={negativeEntry}
                onChange={(e) => setNegativeEntry(e.target.value)}
                required
              />
            </div>
            
            <div className="flex justify-end">
              <button 
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105"
              >
                Save Reflection
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

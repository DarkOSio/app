import React, { useState } from 'react';
import solanaLogo from '../assets/solana-logo.png';
import { TaskCreatedPopup } from './TaskCreatedPopup';

export const CreateTask: React.FC = () => {
  const [selectedTimeUnit, setSelectedTimeUnit] = useState('hours');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const categories = [
    "DarkOs Analysis",
    "On-Chain Analysis",
    "Market Research",
    "Development",
    "Security",
    "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    setIsPopupOpen(true);
  };

  return (
    <>
      <TaskCreatedPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />

      <div className="w-full space-y-3 scale-95">
        <h1 className="text-white text-2xl text-center font-helvetica font-bold md:text-4xl md:text-start mb-6">Create Task</h1>

        <div className="bg-[#1E1F26] rounded-xl overflow-hidden">
          <div className="p-4 md:p-6 relative">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-1/4 h-0.5 border-t z-10"
              style={{ borderImage: 'linear-gradient(to right, #00E076 50%, transparent 50%) 1' }} />
            <div className="absolute top-0 left-0 h-1/2 w-0.5 border-l z-10"
              style={{ borderImage: 'linear-gradient(to bottom, #00E076 50%, transparent 50%) 1' }} />
            <div className="absolute top-0 right-0 w-1/4 h-0.5 border-t z-10"
              style={{ borderImage: 'linear-gradient(to left, #00E076 50%, transparent 50%) 1' }} />
            <div className="absolute top-0 right-0 h-1/2 w-0.5 border-r z-10"
              style={{ borderImage: 'linear-gradient(to bottom, #00E076 50%, transparent 50%) 1' }} />
            <div className="absolute bottom-0 left-0 w-1/4 h-0.5 border-b z-10"
              style={{ borderImage: 'linear-gradient(to right, #00E076 50%, transparent 50%) 1' }} />
            <div className="absolute bottom-0 left-0 h-1/2 w-0.5 border-l z-10"
              style={{ borderImage: 'linear-gradient(to top, #00E076 50%, transparent 50%) 1' }} />
            <div className="absolute bottom-0 right-0 w-1/4 h-0.5 border-b z-10"
              style={{ borderImage: 'linear-gradient(to left, #00E076 50%, transparent 50%) 1' }} />
            <div className="absolute bottom-0 right-0 h-1/2 w-0.5 border-r z-10"
              style={{ borderImage: 'linear-gradient(to top, #00E076 50%, transparent 50%) 1' }} />

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Task Title */}
              <div className="space-y-2">
                <label className="text-[#86858A] text-sm">Task Title:</label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full bg-[#292D33] text-white p-4 pl-12 rounded-lg border border-[#00E076] focus:border-[#00E076] focus:outline-none"
                    placeholder="Enter task title"
                  />
                  <img
                    src="/icons/nail.svg"
                    alt="Task"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-8 h-8 p-2 bg-[#383A40] rounded-lg"
                  />
                </div>
              </div>

              {/* Task Description */}
              <div className="space-y-2">
                <label className="text-[#86858A] text-sm">Task Description:</label>
                <div className="relative">
                  <textarea
                    className="w-full h-32 bg-[#292D33] text-white p-4 pl-12 rounded-lg border border-[#00E076] focus:border-[#00E076] focus:outline-none resize-none"
                    placeholder="Describe your task in detail"
                  />
                  <img
                    src="/icons/slash.svg"
                    alt="Task"
                    className="absolute left-3 top-7 transform -translate-y-1/2 w-8 h-8 p-2 bg-[#383A40] rounded-lg"
                  />
                </div>
              </div>

              {/* Category Selection */}
              <div className="space-y-2">
                <label className="text-[#86858A] text-sm">Category:</label>
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-[#292D33] text-white p-4 pl-12 rounded-lg border border-[#00E076] focus:border-[#00E076] focus:outline-none appearance-none"
                  >
                    <option value="" disabled>Select category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <img
                    src="/icons/find.svg"
                    alt="Category"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-8 h-8 p-2 bg-[#383A40] rounded-lg"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L6 6L11 1" stroke="#86858A" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* deadline delivery Settings */}
              <div className="space-y-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#86858A] text-sm">Deadline:</label>
                    <div className="relative">
                      <input
                        type="number"
                        className="w-full bg-[#292D33] text-white p-3 pl-12 rounded-lg border border-[#00E076] focus:border-[#00E076] focus:outline-none"
                        placeholder="24.03.2025  |  14:55"
                        min="1"
                      />
                      <img
                        src="/icons/time.svg"
                        alt="Time"
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-8 h-8 p-2 bg-[#383A40] rounded-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[#86858A] text-sm">Delivery Format:</label>
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full bg-[#292D33] text-white p-3 pl-12 rounded-lg border border-[#00E076] focus:border-[#00E076] focus:outline-none"
                        placeholder="e.g IPFS + Markdown, PDF, ZIP"
                      />
                      <img
                        src="/icons/fileimport.svg"
                        alt="File"
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-8 h-8 p-2 bg-[#383A40] rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>



              {/* visibility Section */}
              <div className="space-y-2 ">
                <label className="text-[#86858A] text-sm">Visibility:</label>
                <div className="relative">
                  <input
                    className="w-full bg-[#292D33] text-white p-3 pl-12 rounded-lg border border-[#00E076] focus:border-[#00E076] focus:outline-none"
                    placeholder="e.g. unit92.darkos"
                  />
                  <img
                    src="/icons/user.svg"
                    alt="Solana"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-8 h-8 p-2 bg-[#383A40] rounded-lg"
                  />
                </div>
              </div>



              {/* Task Creator Section */}
              <div className="space-y-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  <div>
                    <label className="text-[#86858A] text-sm">Reward Amount:</label>
                    <div className="relative">
                      <input
                        type="number"
                        className="w-full bg-[#292D33] text-white p-3 pl-12 rounded-lg border border-[#00E076] focus:border-[#00E076] focus:outline-none"
                        placeholder="1.000,000"
                        min="1"
                      />
                      <img
                        src="/icons/coin.svg"
                        alt="Time"
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-8 h-8 p-2 bg-[#383A40] rounded-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[#86858A] text-sm">Payment Type:</label>
                    <div className="relative">
                      <select
                        className="w-full bg-[#292D33] text-white p-3 pl-12 rounded-lg border border-[#00E076] focus:border-[#00E076] focus:outline-none appearance-none"
                      >
                        <option value="" disabled selected>Select payment type</option>
                        <option value="sol">SOL</option>
                        <option value="usdc">USDC</option>
                        <option value="usdt">USDT</option>
                      </select>
                      <img
                        src="/icons/payment.svg"
                        alt="Payment"
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-8 h-8 p-2 bg-[#383A40] rounded-lg"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L6 6L11 1" stroke="#86858A" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end mt-4 md:mt-0">
                    <button
                      type="submit"
                      className="w-full bg-[#00E076] text-white px-4 py-4 rounded-2xl hover:bg-opacity-90 transition-all"
                    >
                      CREATE TASK
                    </button>
                  </div>
                </div>
              </div>


            </form>
          </div>
        </div>


      </div>
    </>

  );
};
import React, { useState } from 'react';
import solanaLogo from '../assets/solana-logo.png';
import { SubmitMission } from './SubmitMission';

export const DealZone: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'incoming' | 'sent'>('incoming');
  const [isSubmitMissionOpen, setIsSubmitMissionOpen] = useState(false);
  const [status, setStatus] = useState('open'); // Default status
  const reward = 0.5

  const tasks = {
    title: "Track Top 20 Pump.fun Wallets",
    username: "unit93.darkos",
    category: "On-Chain Analysis",
    reward: 3.5,
    deadline: "23 March 2025",
    status: "Open for submission",
    taskId: "851",
    description: "Track and report the top 20 wallets interacting with Pump.fun over the last 48 hours. Provide a detailed breakdown of their transactions.",
    timeLeft: "12h 45m",
    deliveryMethod: "Encrypted (IPFS required)"
  }

  // Handlers for the SubmitMission popup
  const openSubmitMission = () => {
    setIsSubmitMissionOpen(true);
  };

  const closeSubmitMission = () => {
    setIsSubmitMissionOpen(false);
  };

  const getStatusText = () => {
    switch (status) {
      case 'open':
        return 'Open for submission';
      case 'in-progress':
        return 'In Progress';
      case 'closed':
        return 'Closed';
      default:
        return 'Open for submission';
    }
  };

  const getStatusTextColor = () => {
    switch (status) {
      case 'open':
        return 'text-[#00E076]';
      case 'in-progress':
        return 'text-[#FF8900]';
      case 'closed':
        return 'text-[#86858A]';
      default:
        return 'text-[#00E076]';
    }
  };

  const getStatusBgColor = () => {
    switch (status) {
      case 'open':
        return 'bg-[rgba(9,121,68,0.2)]';
      case 'in-progress':
        return 'bg-[rgba(255,137,0,0.2)]';
      case 'closed':
        return 'bg-[rgba(134,133,138,0.2)]';
      default:
        return 'bg-[rgba(9,121,68,0.2)]';
    }
  };

  const getStatusDotColor = () => {
    switch (status) {
      case 'open':
        return 'bg-[#00E076]';
      case 'in-progress':
        return 'bg-[#FF8900]';
      case 'closed':
        return 'bg-[#86858A]';
      default:
        return 'bg-[#00E076]';
    }
  };

  const getCategoryStyle = () => {
    switch (status) {
      case 'open':
        return {
          bg: 'bg-[rgba(0,224,118,0.2)]',
          text: 'text-[#00E076]',
        };
      case 'in-progress':
        return {
          bg: 'bg-[rgba(0,224,118,0.2)]',
          text: 'text-[#00E076]',
        };
      case 'closed':
        return {
          bg: 'bg-[rgba(134,133,138,0.2)]',
          text: 'text-[#86858A]',
        };
      default:
        return {
          bg: 'bg-[rgba(0,224,118,0.2)]',
          text: 'text-[#00E076]',
        };
    };
  };

  const categoryStyle = getCategoryStyle();



  return (
    <>
      <SubmitMission
        isOpen={isSubmitMissionOpen}
        onClose={closeSubmitMission}
        task={tasks}
      />
      <div className="w-full space-y-3 scale-95">
        <h1 className="text-white md:text-3xl font-helvetica font-normal mb-4 text-center md:text-start text-2xl">Deal Zone</h1>


        {/* Tab butonları */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="w-full md:flex-1 bg-[#00E076] bg-opacity-15 rounded-xl px-4 py-6 md:px-12 md:py-24 flex justify-center items-center relative overflow-hidden">
            {/* Görsel süsleme - üst köşeler */}
            <div className="absolute top-0 left-0 w-1/4 h-0.5 border-t z-10"
              style={{ borderImage: 'linear-gradient(to right, #00E076 50%, transparent 50%) 1' }}>
            </div>
            <div className="absolute top-0 left-0 h-1/2 w-0.5 border-l z-10"
              style={{ borderImage: 'linear-gradient(to bottom, #00E076 50%, transparent 50%) 1' }}>
            </div>

            <div className="absolute top-0 right-0 w-1/4 h-0.5 border-t z-10"
              style={{ borderImage: 'linear-gradient(to left, #00E076 50%, transparent 50%) 1' }}>
            </div>
            <div className="absolute top-0 right-0 h-1/2 w-0.5 border-r z-10"
              style={{ borderImage: 'linear-gradient(to bottom, #00E076 50%, transparent 50%) 1' }}>
            </div>

            {/* Hiding decorative elements on mobile */}
            <div className="hidden md:flex absolute top-0 left-1/2 transform -translate-x-1/2 justify-between w-1/2 z-10">
              <div className="w-8 h-32 border-t-2 border-green-500 border-solid"></div>
              <div className="w-8 h-32 border-t-2 border-green-500 border-solid"></div>
              <div className="w-8 h-32 border-t-2 border-green-500 border-solid"></div>
            </div>

            {/* Görsel süsleme - alt köşeler */}
            <div className="absolute bottom-0 left-0 w-1/4 h-0.5 border-b z-10 rounded-bl-lg"
              style={{ borderImage: 'linear-gradient(to right, #00E076 50%, transparent 50%) 1' }}>
            </div>
            <div className="absolute bottom-0 left-0 h-1/2 w-0.5 border-l z-10 rounded-bl-lg"
              style={{ borderImage: 'linear-gradient(to top, #00E076 50%, transparent 50%) 1' }}>
            </div>
            <div className="absolute bottom-0 right-0 w-1/4 h-0.5 border-b z-10 rounded-br-lg"
              style={{ borderImage: 'linear-gradient(to left, #00E076 50%, transparent 50%) 1' }}>
            </div>
            <div className="absolute bottom-0 right-0 h-1/2 w-0.5 border-r z-10 rounded-br-lg"
              style={{ borderImage: 'linear-gradient(to top, #00E076 50%, transparent 50%) 1' }}>
            </div>

            {/* Hiding decorative elements on mobile */}
            <div className="hidden md:flex absolute bottom-0 left-1/2 transform -translate-x-1/2 justify-between w-1/2 z-10">
              <div className="w-8 h-32 border-b-2 border-green-500 border-solid"></div>
              <div className="w-8 h-32 border-b-2 border-green-500 border-solid"></div>
              <div className="w-8 h-32 border-b-2 border-green-500 border-solid"></div>
            </div>

            <button
              className={`w-full px-4 z-10 py-3 md:px-16 md:py-4 flex items-center justify-center cursor-pointer ${activeTab === 'incoming'
                ? 'bg-[#097944] text-white'
                : 'bg-[#1E1F26] text-[#86858A] border border-[#86858A] border-dashed'} 
        rounded-xl`}
              onClick={() => setActiveTab('incoming')}
              type="button"
            >
              <span className="text-base md:text-[18px] font-helvetica">Incoming Missions</span>
            </button>
          </div>

          <div className="w-full md:flex-1 border-[#86858A] rounded-xl p-4 md:p-8 flex justify-center items-center relative overflow-hidden mt-4 md:mt-0">
            {/* Görsel süsleme - üst köşeler */}
            <div className="md:hidden block absolute top-0 left-0 w-1/4 h-0.5 border-t z-10"
              style={{ borderImage: 'linear-gradient(to right, #86858A 50%, transparent 50%) 1' }}>
            </div>
            <div className="absolute top-0 left-0 h-1/2 w-0.5 border-l z-10"
              style={{ borderImage: 'linear-gradient(to bottom, #86858A 50%, transparent 50%) 1' }}>
            </div>

            <div className="absolute top-0 right-0 w-1/4 h-0.5 border-t z-10"
              style={{ borderImage: 'linear-gradient(to left, #86858A 50%, transparent 50%) 1' }}>
            </div>
            <div className="absolute top-0 right-0 h-1/2 w-0.5 border-r z-10"
              style={{ borderImage: 'linear-gradient(to bottom, #86858A 50%, transparent 50%) 1' }}>
            </div>

            {/* Hiding decorative elements on mobile */}
            <div className="hidden md:flex absolute top-0 left-1/2 transform -translate-x-1/2 justify-between w-1/2 z-10">
              <div className="w-8 h-32 border-t-2 border-[#86858A] border-solid"></div>
              <div className="w-8 h-32 border-t-2 border-[#86858A] border-solid"></div>
              <div className="w-8 h-32 border-t-2 border-[#86858A] border-solid"></div>
            </div>

            {/* Görsel süsleme - alt köşeler */}
            <div className="absolute bottom-0 left-0 w-1/4 h-0.5 border-b z-10 rounded-bl-lg"
              style={{ borderImage: 'linear-gradient(to right, #86858A 50%, transparent 50%) 1' }}>
            </div>
            <div className="absolute bottom-0 left-0 h-1/2 w-0.5 border-l z-10 rounded-bl-lg"
              style={{ borderImage: 'linear-gradient(to top, #86858A 50%, transparent 50%) 1' }}>
            </div>
            <div className="absolute bottom-0 right-0 w-1/4 h-0.5 border-b z-10 rounded-br-lg"
              style={{ borderImage: 'linear-gradient(to left, #86858A 50%, transparent 50%) 1' }}>
            </div>
            <div className="absolute bottom-0 right-0 h-1/2 w-0.5 border-r z-10 rounded-br-lg"
              style={{ borderImage: 'linear-gradient(to top, #86858A 50%, transparent 50%) 1' }}>
            </div>

            {/* Hiding decorative elements on mobile */}
            <div className="hidden md:flex absolute bottom-0 left-1/2 transform -translate-x-1/2 justify-between w-1/2 z-10">
              <div className="w-8 h-32 border-b-2 border-[#86858A] border-solid"></div>
              <div className="w-8 h-32 border-b-2 border-[#86858A] border-solid"></div>
              <div className="w-8 h-32 border-b-2 border-[#86858A] border-solid"></div>
            </div>

            <button
              className={`w-full z-10 px-4 py-3 md:px-16 md:py-4 flex items-center justify-center cursor-pointer ${activeTab === 'sent' ? 'bg-[#097944] text-white' : 'bg-[#1E1F26] text-[#86858A]'
                } rounded-md`}
              onClick={openSubmitMission}
            >
              Submit Mission
            </button>
          </div>
        </div>

        {/* Deal Zone İçeriği */}
        <div className="bg-[#1E1F26] rounded-xl overflow-hidden">
          <div className="p-3 sm:p-4 md:p-6 relative">
            {/* Köşe Süslemeleri */}
            <div className="absolute top-0 left-0 w-1/4 h-0.5 border-t"
              style={{ borderImage: 'linear-gradient(to right, #00E076 50%, transparent 50%) 1' }} />
            <div className="absolute top-0 left-0 h-1/2 w-0.5 border-l"
              style={{ borderImage: 'linear-gradient(to bottom, #00E076 50%, transparent 50%) 1' }} />
            <div className="absolute top-0 right-0 w-1/4 h-0.5 border-t"
              style={{ borderImage: 'linear-gradient(to left, #00E076 50%, transparent 50%) 1' }} />
            <div className="absolute top-0 right-0 h-1/2 w-0.5 border-r"
              style={{ borderImage: 'linear-gradient(to bottom, #00E076 50%, transparent 50%) 1' }} />
            <div className="absolute bottom-0 left-0 w-1/4 h-0.5 border-b"
              style={{ borderImage: 'linear-gradient(to right, #00E076 50%, transparent 50%) 1' }} />
            <div className="absolute bottom-0 left-0 h-1/2 w-0.5 border-l"
              style={{ borderImage: 'linear-gradient(to top, #00E076 50%, transparent 50%) 1' }} />
            <div className="absolute bottom-0 right-0 w-1/4 h-0.5 border-b"
              style={{ borderImage: 'linear-gradient(to left, #00E076 50%, transparent 50%) 1' }} />
            <div className="absolute bottom-0 right-0 h-1/2 w-0.5 border-r"
              style={{ borderImage: 'linear-gradient(to top, #00E076 50%, transparent 50%) 1' }} />

            {/* Task Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {/* Task Card */}
              <div className="bg-[#1E1F26] rounded-xl overflow-hidden p-2 sm:p-3 md:p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative overflow-hidden rounded-xl bg-[#1E1F26] p-">
                  {/* Task ID with status dot */}
                  <div className="relative mb-3 h-12 rounded-md overflow-hidden">
                    {status === 'closed' && (<div className="absolute inset-0 bg-[#86858A] opacity-50" />)}
                    {status !== 'closed' && (<img src="/public/icons/task-bg.svg" alt="" className="w-full h-full object-cover" />)}
                    {status !== 'closed' && (<div className="absolute inset-0 bg-black opacity-50" />)}
                    <div className="absolute inset-0 flex items-center justify-between px-3">
                      <div className="flex items-center gap-2 px-5">
                        <div className={`w-2 h-2 rounded-full ${getStatusDotColor()}`}></div>
                        <span className="text-[#FFFFFF] text-base">Task {tasks.taskId}</span>
                      </div>
                      <button className="text-white">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 4.16666V15.8333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M4.16666 10H15.8333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Task title */}
                  <div className="relative mb-3 h-12 rounded-md overflow-hidden bg-[#292D33]">
                    <img src="/public/icons/card-image.svg" alt="" className="w-4 h-full object-cover" />
                    <div className='px-3'>
                      <div className="absolute inset-0 flex items-center px-8">
                        {status === 'closed' && (<img src="/public/icons/logo-closed.svg" alt="logo" className="w-9 h-9 mr-3" />)}
                        {status !== 'closed' && (<img src="/public/icons/logo.svg" alt="logo" className="w-9 h-9 mr-3" />)}

                        <div className="flex flex-col">
                          <span className="text-[#FFFFFF] text-sm text-nowrap font-normal md:text-md ">{tasks.title}</span>
                          <span className="text-[#86858A] text-sm">{tasks.username}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative mb-3 h-20 rounded-md overflow-hidden bg-[#292D33] flex items-center">
                    <img src="/public/icons/card-image.svg" alt="" className="h-full w-4 object-cover" />
                    <div className="flex flex-col w-full justify-between ">

                      {/* Reward ve Solana Logo */}
                      <div className="flex items-center gap-2 px-5 md:px-5">
                        {status === 'closed' && (<img src="/public/icons/solona-closed.svg" alt="solana logo" className="w-6 h-6" />)}
                        {status !== 'closed' && (<img src={solanaLogo} alt="solana logo" className="w-6 h-6" />)}
                        <span className="text-white text-lg">{reward} SOL</span>
                      </div>

                      {/* On-chain Analysis ve Deadline */}
                      <div className="flex items-center justify-between px-5 md:px-5">
                        <div className={`px-2 py-1 md:px-3 rounded-md ${categoryStyle.bg}`}>
                          <span className={`text-xs ${categoryStyle.text}`}>{tasks.category}</span>
                        </div>

                        <div className="flex items-center gap-2 text-base font-normal">
                          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00001C14.6667 4.31811 11.6819 1.33334 8 1.33334C4.3181 1.33334 1.33333 4.31811 1.33333 8.00001C1.33333 11.6819 4.3181 14.6667 8 14.6667Z" stroke="#86858A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 4V8L10.6667 9.33333" stroke="#86858A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-[#86858A] text-base">{tasks.deadline}</span>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Status and View Details - Update to add Send Mission button */}
                  <div className="relative mb-3 h-16 rounded-md overflow-hidden bg-[#292D33] flex items-center">
                    <img src="/public/icons/card-image.svg" alt="" className="h-full w-4 object-cover" />
                    <div className="flex items-center justify-between w-full px-5">
                      <button
                        className="text-white text-sm flex items-center gap-1 cursor-pointer hover:text-[#00E076] transition-colors"

                      >
                        View Details
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <div className={`py-1 px-2 md:px-3 rounded-full ${getStatusBgColor()}`}>
                        <span className={`text-sm ${getStatusTextColor()}`}>{getStatusText()}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Second Column - Empty */}
              <div className="hidden md:block md:flex-1 bg-[#1E1F26]">
              </div>

              {/* Third Column - Empty */}
              <div className="hidden md:block md:flex-1 bg-[#1E1F26]">
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};
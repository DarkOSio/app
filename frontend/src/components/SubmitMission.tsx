import React from 'react';
import solanaLogo from '../assets/solana-logo.png';

interface TaskDetailProps {
  isOpen: boolean;
  onClose: () => void;
  task: {
    title: string;
    username: string;
    category: string;
    reward: number;
    deadline: string;
    status: string;
    taskId: string;
    description?: string;
    timeLeft?: string;
    deliveryMethod?: string;
  };
}

export const SubmitMission: React.FC<TaskDetailProps> = ({ isOpen, onClose, task }) => {
  if (!isOpen) return null;

  // Görev açıklaması olup olmadığını kontrol etme
  const description = task.description || "Track and report the top 20 wallets interacting with Pump.fun over the last 48 hours. Provide a detailed breakdown of their transactions.";
  const timeLeft = task.timeLeft || "12h 45m";
  const deliveryMethod = task.deliveryMethod || "Encrypted (IPFS required)";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-2 sm:p-8 overflow-y-auto" onClick={onClose}>
      <div
        className="relative w-full max-w-md sm:max-w-2xl mx-auto my-2 sm:mx-4 bg-[#111111] border border-[#86858A] border-opacity-50 rounded-xl overflow-hidden sm:scale-75"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Kart başlığı ve içeriği */}
        <div className="p-4 sm:p-6">
          {/* Green circles ve header bölümü */}
          <div className="flex justify-between items-start mb-4 sm:mb-6">
            <div className="flex flex-col items-center w-full gap-1 sm:gap-2">
              <div className="relative rounded-full">
                <img src="/public/icons/circle-logo.svg" alt="green circle" className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>

              {/* Başlık */}
              <h2 className="text-white text-xl sm:text-2xl font-normal text-center">{task.title}</h2>
            </div>

            {/* Kapatma butonu */}
            <button
              onClick={onClose}
              className="text-white hover:text-[#00E076] transition-colors border border-[#00E076] rounded-full p-2 sm:p-2.5 absolute top-2 right-2 sm:top-4 sm:right-4 bg-[#222222] bg-opacity-50"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-5 sm:h-5">
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* İçerik alanı - mobil görünüm için scroll eklendi ve optimize edildi */}
          <div className="flex flex-col space-y-3 sm:space-y-4 max-h-[60vh] sm:max-h-none overflow-y-auto sm:overflow-visible pr-1 sm:pr-2">

            {/* Posted by */}
            <div className="flex items-center space-x-3 sm:space-x-4 bg-[#171717] rounded-xl p-3 sm:p-4 border border-[0.5px] border-[#707070]">
              <div className="bg-[#86858A] bg-opacity-20 p-3 sm:p-4 rounded-xl">
                <img src="/public/icons/user.svg" alt="user logo" className="w-4 h-4 sm:w-5 sm:h-5 opacity-50" />
              </div>
              <div className="flex flex-col">
                <span className="text-[#86858A] text-xs">Posted by:</span>
                <span className="text-white text-base sm:text-lg">{task.username}</span>
              </div>
            </div>

            {/* Ödül */}
            <div className="flex items-center space-x-3 sm:space-x-4 bg-[#171717] rounded-xl p-3 sm:p-4 border border-[0.5px] border-[#707070]">
              <div className="bg-[#86858A] bg-opacity-20 p-3 sm:p-4 rounded-xl flex justify-center items-center min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px]">
                <img src="/public/icons/coin.svg" alt="reward icon" className="w-4 h-4 sm:w-5 sm:h-5 opacity-50" />
              </div>
              <div className="flex flex-col w-full">
                <span className="text-[#86858A] text-xs sm:text-sm">Reward:</span>
                <div className="flex items-center gap-2 mt-1">
                  <img src={solanaLogo} alt="solana logo" className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-white text-base sm:text-lg font-medium">{task.reward} SOL</span>
                </div>
              </div>
            </div>

            {/* Time Left */}
            <div className="flex items-center space-x-3 sm:space-x-4 bg-[#171717] rounded-xl p-3 sm:p-4 border border-[0.5px] border-[#707070]">
              <div className="bg-[#86858A] bg-opacity-20 p-3 sm:p-4 rounded-xl flex justify-center items-center min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px]">
                <img src="/public/icons/time.svg" alt="clock icon" className="w-4 h-4 sm:w-5 sm:h-5 opacity-50" />
              </div>
              <div className="flex flex-col w-full">
                <span className="text-[#86858A] text-xs sm:text-sm">Time Left:</span>
                <span className="text-white text-base sm:text-lg font-medium mt-1">{timeLeft}</span>
              </div>
            </div>

            {/* Kategori */}
            <div className="flex items-center space-x-3 sm:space-x-4 bg-[#171717] rounded-xl p-3 sm:p-4 border border-[0.5px] border-[#707070]">
              <div className="bg-[#86858A] bg-opacity-20 p-3 sm:p-4 rounded-xl flex justify-center items-center min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px]">
                <img src="/public/icons/find.svg" alt="category icon" className="w-4 h-4 sm:w-5 sm:h-5 opacity-50" />
              </div>
              <div className="flex flex-col w-full">
                <span className="text-[#86858A] text-xs sm:text-sm">Category:</span>
                <span className="text-white text-base sm:text-lg font-medium mt-1">{task.category}</span>
              </div>
            </div>

            {/* Durum */}
            <div className="flex items-center space-x-3 sm:space-x-4 bg-[#171717] rounded-xl p-3 sm:p-4 border border-[0.5px] border-[#707070]">
              <div className="bg-[#86858A] bg-opacity-20 p-3 sm:p-4 rounded-xl flex justify-center items-center min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px]">
                <img src="/public/icons/deal.svg" alt="status icon" className="w-4 h-4 sm:w-5 sm:h-5 opacity-50" />
              </div>
              <div className="flex flex-col w-full">
                <span className="text-[#86858A] text-xs sm:text-sm">Status:</span>
                <span className="text-white text-base sm:text-lg font-medium mt-1">{task.status}</span>
              </div>
            </div>

            {/* Teslim metodu */}
            <div className="flex items-center space-x-3 sm:space-x-4 bg-[#171717] rounded-xl p-3 sm:p-4 border border-[0.5px] border-[#707070]">
              <div className="bg-[#86858A] bg-opacity-20 p-3 sm:p-4 rounded-xl flex justify-center items-center min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px]">
                <img src="/public/icons/cup.svg" alt="delivery icon" className="w-4 h-4 sm:w-5 sm:h-5 opacity-50" />
              </div>
              <div className="flex flex-col">
                <span className="text-[#86858A] text-xs">Delivery Method:</span>
                <span className="text-white text-base sm:text-lg">{deliveryMethod}</span>
              </div>
            </div>

            {/* Açıklama */}
            <div className="flex items-start space-x-3 sm:space-x-4 bg-[#171717] rounded-xl p-3 sm:p-4 border border-[0.5px] border-[#707070]">
              <div className="bg-[#86858A] bg-opacity-20 p-3 sm:p-4 rounded-xl flex-shrink-0">
                <img src="/public/icons/slash.svg" alt="description icon" className="w-4 h-4 sm:w-5 sm:h-5 opacity-50" />
              </div>
              <div className="flex flex-col">
                <span className="text-[#86858A] text-xs">Description:</span>
                <p className="text-white text-sm sm:text-base">{description}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Görev Talep Et butonu */}
        <div className="w-full mt-2 sm:mt-4 border-t-[0.5px] border-[#707070] pt-3 sm:pt-4 bg-[#171717] flex justify-center items-center p-3 sm:p-4">
          <div className="w-full mt-2 sm:mt-4 border-t-[0.5px] border-[#707070] pt-3 sm:pt-4 bg-[#171717] flex justify-center items-center p-3 sm:p-4">
            <button
              className="bg-[#00E076] w-full flex justify-center items-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-3xl cursor-pointer hover:bg-opacity-90 transition-all"
              onClick={() => console.log('Mission submitted: ', task.taskId)}
            >
              <span className="text-white font-normal text-sm sm:text-base tracking-wide w-full text-center">
                SUBMIT MISSION
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
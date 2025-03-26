import React, { useState } from 'react';
import solanaLogo from '../assets/solana-logo.png';
import { SubmissionFormPopup } from './SubmissionFormPopup';

export const ProfilePage: React.FC = () => {
  const [isSubmissionPopupOpen, setIsSubmissionPopupOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<string | null>(null);

  const openSubmissionPopup = (taskTitle: string) => {
    setSelectedTask(taskTitle);
    setIsSubmissionPopupOpen(true);
  };

  const closeSubmissionPopup = () => {
    setIsSubmissionPopupOpen(false);
    setSelectedTask(null);
  };

  return (
    <>
    <SubmissionFormPopup 
        isOpen={isSubmissionPopupOpen}
        onClose={closeSubmissionPopup}
        selectedTask={selectedTask}
      />
    
    
    <div className="w-full space-y-3 scale-95">
      <h1 className="text-white text-2xl text-center font-helvetica font-bold md:text-4xl md:text-start mb-4">Profile</h1>

      {/* Submission Popup */}
      

      {/* Profil bilgileri kartı */}
      <div className="bg-[#1E1F26] rounded-xl overflow-hidden">

        <div className="relative p-5 overflow-hidden">
          {/* Background image */}
          <img
            src="/public/icons/cardbg.svg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

          {/* Motto & Ana bilgi */}
          <div className="text-white text-center md:text-left text-lg mb-3 relative z-20">
            You operate alone. But your shadow keeps the records.
          </div>

          <div className="flex flex-col md:flex-row gap-6 relative z-20">
            {/* Kullanıcı adı */}
            <div className="relative bg-[#292D33] rounded-lg p-2 overflow-hidden flex items-center flex-1">
              <img src="/public/icons/card-image.svg" alt="" className="h-full w-4 object-cover absolute left-0" />
              <div className="w-full pl-6 flex items-center">
                <img src="/public/icons/logo.svg" alt="logo" className="w-10 h-10 mr-3" />
                <div>
                  <p className="text-[#86858A] text-sm mb-1">Your Alias:</p>
                  <p className="text-white text-md">unit42.darkos</p>
                </div>
              </div>
            </div>

            {/* İtibar puanı */}
            <div className="relative bg-[#292D33] rounded-lg p-2 overflow-hidden flex items-center flex-1">
              <img src="/public/icons/card-image.svg" alt="" className="h-full w-4 object-cover absolute left-0" />
              <div className="w-full pl-6 flex items-center">
                <img src="/public/icons/logo.svg" alt="logo" className="w-10 h-10 mr-3" />
                <div>
                  <p className="text-[#86858A] text-sm mb-1">Reputation Score:</p>
                  <p className="text-white text-md">Hidden (v1.01+)</p>
                </div>
              </div>
            </div>

            {/* Cüzdan adresi */}
            <div className="relative bg-[#292D33] rounded-lg p-2 overflow-hidden flex items-center flex-1">
              <img src="/public/icons/card-image.svg" alt="" className="h-full w-4 object-cover absolute left-0" />
              <div className="w-full pl-6 flex items-center">
                <img src="/public/icons/logo.svg" alt="logo" className="w-10 h-10 mr-3" />
                <div>
                  <p className="text-[#86858A] text-sm mb-1">Wallet Address:</p>
                  <p className="text-white text-md">8Hs…kD7s (Click to copy)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Oluşturulan Görevler kartı */}
      <div className="bg-[#1E1F26] rounded-xl overflow-hidden">
        <div className="p-4 md:p-4 relative">
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

          {/* Görsel süsleme - alt köşeler */}
          <div className="absolute bottom-0 left-0 w-1/4 h-0.5 border-b z-10"
            style={{ borderImage: 'linear-gradient(to right, #00E076 50%, transparent 50%) 1' }}>
          </div>
          <div className="absolute bottom-0 left-0 h-1/2 w-0.5 border-l z-10"
            style={{ borderImage: 'linear-gradient(to top, #00E076 50%, transparent 50%) 1' }}>
          </div>

          <div className="absolute bottom-0 right-0 w-1/4 h-0.5 border-b z-10"
            style={{ borderImage: 'linear-gradient(to left, #00E076 50%, transparent 50%) 1' }}>
          </div>
          <div className="absolute bottom-0 right-0 h-1/2 w-0.5 border-r z-10"
            style={{ borderImage: 'linear-gradient(to top, #00E076 50%, transparent 50%) 1' }}>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-between w-1/2 z-10">
            <div className="w-8 h-32 border-b-2 border-green-500 border-solid"></div>
            <div className="w-8 h-32 border-b-2 border-green-500 border-solid"></div>
            <div className="w-8 h-32 border-b-2 border-green-500 border-solid"></div>
          </div>

          <h2 className="text-white text-lg md:text-xl font-medium mb-4 md:mb-4">CREATED TASKS</h2>

          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {/* Task Card 1 */}
            <div className="bg-[#292D33] rounded-3xl md:rounded-xl p-6 md:p-3 flex flex-col md:flex-row items-center md:items-center justify-between relative overflow-hidden">
              <img src="/public/icons/card-image.svg" alt="" className="h-full w-3 md:w-4 object-cover top-0 absolute left-0" />

              <div className="flex items-center gap-3 md:gap-4 flex-1 ml-4 md:ml-10 w-full md:w-auto">
                <div className="w-8 md:w-10 h-8 md:h-10 flex-shrink-0">
                  <img src="/public/icons/logo.svg" alt="Logo" className="w-full h-full" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[#86858A] text-xs md:text-sm">Title</p>
                  <p className="text-white text-sm md:text-md font-medium">Trace wallet activity</p>
                </div>
              </div>

              <div className="w-full md:w-px h-px md:h-10 bg-[#44474D] my-2 md:my-0"></div>

              <div className="flex flex-row md:flex-col items-start md:items-center justify-between w-full md:flex-1 gap-1">
                <p className="text-[#86858A] text-xs md:text-sm">Status</p>
                <span className="bg-[#00E076] bg-opacity-20 text-[#00E076] px-2 md:px-4 py-1 rounded text-xs">Live</span>
              </div>

              <div className="w-full md:w-px h-px md:h-10 bg-[#44474D] my-2 md:my-0"></div>

              <div className="flex flex-row md:flex-col items-start md:items-center justify-between w-full md:flex-1 gap-1">
                <p className="text-[#86858A] text-xs md:text-sm">From Alias</p>
                <p className="text-white text-sm md:text-md">flux89.darkos</p>
              </div>

              <div className="w-full md:w-px h-px md:h-10 bg-[#44474D] my-2 md:my-0"></div>

              <div className="flex flex-row md:flex-col items-start md:items-center justify-between w-full md:flex-1 gap-1">
                <p className="text-[#86858A] text-xs md:text-sm">Status</p>
                <span className="bg-[#00E076] bg-opacity-20 text-[#00E076] px-2 md:px-4 py-1 rounded text-xs">Delivered</span>
              </div>

              <div className="w-full md:w-px h-px md:h-6 bg-[#44474D] my-2 md:my-4"></div>

              <div className="flex flex-row md:flex-row items-center justify-end w-full md:flex-1 gap-2">
                <p className="hidden md:block text-[#86858A] text-sm ">Action</p>
                <button 
                  className="bg-[#00E076] bg-opacity-20 text-[#00E076] px-2 py-2 md:px-3 md:py-3 rounded-3xl text-xs md:text-sm w-full md:w-auto"
                  onClick={() => openSubmissionPopup("Trace wallet activity")}
                >
                  VIEW SUBMISSION
                </button>
              </div>
            </div>

            {/* Task Card 2 */}
            <div className="bg-[#292D33] rounded-3xl md:rounded-xl p-6 md:p-3 flex flex-col md:flex-row items-center md:items-center justify-between relative overflow-hidden">
              <img src="/public/icons/card-image.svg" alt="" className="h-full w-3 md:w-4 object-cover top-0 absolute left-0" />

              <div className="flex items-center gap-3 md:gap-4 flex-1 ml-4 md:ml-10 w-full md:w-auto">
                <div className="w-8 md:w-10 h-8 md:h-10 flex-shrink-0">
                  <img src="/public/icons/logo.svg" alt="Logo" className="w-full h-full" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[#86858A] text-xs md:text-sm">Title</p>
                  <p className="text-white text-sm md:text-md font-medium">Analyze MEV bots</p>
                </div>
              </div>

              <div className="w-full md:w-px h-px md:h-10 bg-[#44474D] my-2 md:my-0"></div>

              <div className="flex flex-row md:flex-col items-start md:items-center justify-between w-full md:flex-1 gap-1">
                <p className="text-[#86858A] text-xs md:text-sm">Status</p>
                <span className="bg-[#00E076] bg-opacity-20 text-[#00E076] px-2 md:px-4 py-1 rounded text-xs">Live</span>
              </div>

              <div className="w-full md:w-px h-px md:h-10 bg-[#44474D] my-2 md:my-0"></div>

              <div className="flex flex-row md:flex-col items-start md:items-center justify-between w-full md:flex-1 gap-1">
                <p className="text-[#86858A] text-xs md:text-sm">From Alias</p>
                <p className="text-white text-sm md:text-md">flux89.darkos</p>
              </div>

              <div className="w-full md:w-px h-px md:h-10 bg-[#44474D] my-2 md:my-0"></div>

              <div className="flex flex-row md:flex-col items-start md:items-center justify-between w-full md:flex-1 gap-1">
                <p className="text-[#86858A] text-xs md:text-sm">Status</p>
                <span className="bg-[#00E076] bg-opacity-20 text-[#00E076] px-2 md:px-4 py-1 rounded text-xs">Delivered</span>
              </div>

              <div className="w-full md:w-px h-px md:h-6 bg-[#44474D] my-2 md:my-4"></div>

              <div className="flex flex-row md:flex-row items-center justify-end w-full md:flex-1 gap-2">
                <p className="hidden md:block text-[#86858A] text-sm ">Action</p>
                <button 
                  className="bg-[#00E076] bg-opacity-20 text-[#00E076] px-2 py-2 md:px-3 md:py-3 rounded-3xl text-xs md:text-sm w-full md:w-auto"
                  onClick={() => openSubmissionPopup("Analyze MEV bots")}
                >
                  VIEW SUBMISSION
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kabul Edilen Görevler kartı */}
      <div className="bg-[#1E1F26] rounded-xl overflow-hidden">
        <div className="p-4 md:p-4 relative">
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

          {/* Görsel süsleme - alt köşeler */}
          <div className="absolute bottom-0 left-0 w-1/4 h-0.5 border-b z-10"
            style={{ borderImage: 'linear-gradient(to right, #00E076 50%, transparent 50%) 1' }}>
          </div>
          <div className="absolute bottom-0 left-0 h-1/2 w-0.5 border-l z-10"
            style={{ borderImage: 'linear-gradient(to top, #00E076 50%, transparent 50%) 1' }}>
          </div>

          <div className="absolute bottom-0 right-0 w-1/4 h-0.5 border-b z-10"
            style={{ borderImage: 'linear-gradient(to left, #00E076 50%, transparent 50%) 1' }}>
          </div>
          <div className="absolute bottom-0 right-0 h-1/2 w-0.5 border-r z-10"
            style={{ borderImage: 'linear-gradient(to top, #00E076 50%, transparent 50%) 1' }}>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-between w-1/2 z-10">
            <div className="w-8 h-32 border-b-2 border-green-500 border-solid"></div>
            <div className="w-8 h-32 border-b-2 border-green-500 border-solid"></div>
            <div className="w-8 h-32 border-b-2 border-green-500 border-solid"></div>
          </div>

          <h2 className="text-white text-lg md:text-xl font-medium mb-4 md:mb-4">ACCEPTED TASKS</h2>

          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {/* Task Card */}
            <div className="bg-[#292D33] rounded-3xl md:rounded-xl p-6 md:p-3 flex flex-col md:flex-row items-center md:items-center justify-between relative overflow-hidden">
              <img src="/public/icons/card-image.svg" alt="" className="h-full w-3 md:w-4 object-cover top-0 absolute left-0" />

              <div className="flex items-center gap-3 md:gap-4 flex-1 ml-4 md:ml-10 w-full md:w-auto">
                <div className="w-8 md:w-10 h-8 md:h-10 flex-shrink-0">
                  <img src="/public/icons/logo.svg" alt="Logo" className="w-full h-full" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[#86858A] text-xs md:text-sm">Title</p>
                  <p className="text-white text-sm md:text-md font-medium">Snipe bot request</p>
                </div>
              </div>

              <div className="w-full md:w-px h-px md:h-10 bg-[#44474D] my-2 md:my-0"></div>

              <div className="flex flex-row md:flex-col items-start md:items-center justify-between w-full md:flex-1 gap-1">
                <p className="text-[#86858A] text-xs md:text-sm">From Alias</p>
                <p className="text-white text-sm md:text-md">flux89.darkos</p>
              </div>

              <div className="w-full md:w-px h-px md:h-10 bg-[#44474D] my-2 md:my-0"></div>

              <div className="flex flex-row md:flex-col items-start md:items-center justify-between w-full md:flex-1 gap-1">
                <p className="text-[#86858A] text-xs md:text-sm">Status</p>
                <span className="bg-[#00E076] bg-opacity-20 text-[#00E076] px-2 md:px-4 py-1 rounded text-xs">Delivered</span>
              </div>

              <div className="w-full md:w-px h-px md:h-6 bg-[#44474D] my-2 md:my-4"></div>

              <div className="flex flex-row md:flex-row items-center justify-end w-full md:flex-1 gap-2">
                <p className="hidden md:block text-[#86858A] text-sm">Action</p>
                <button className="bg-[#00E076] bg-opacity-20 text-[#00E076] px-2 py-2 md:px-3 md:py-3 rounded-3xl text-xs md:text-sm w-full md:w-auto"
                onClick={() => openSubmissionPopup("Snipe bot request")}
                >
                  VIEW SUBMISSION
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kimlik Sıfırlama kartı */}
      <div className="bg-[#1E1F26] rounded-xl overflow-hidden">
        <div className="p-6 relative">
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

          {/* Görsel süsleme - alt köşeler */}
          <div className="absolute bottom-0 left-0 w-1/4 h-0.5 border-b z-10"
            style={{ borderImage: 'linear-gradient(to right, #00E076 50%, transparent 50%) 1' }}>
          </div>
          <div className="absolute bottom-0 left-0 h-1/2 w-0.5 border-l z-10"
            style={{ borderImage: 'linear-gradient(to top, #00E076 50%, transparent 50%) 1' }}>
          </div>

          <div className="absolute bottom-0 right-0 w-1/4 h-0.5 border-b z-10"
            style={{ borderImage: 'linear-gradient(to left, #00E076 50%, transparent 50%) 1' }}>
          </div>
          <div className="absolute bottom-0 right-0 h-1/2 w-0.5 border-r z-10"
            style={{ borderImage: 'linear-gradient(to top, #00E076 50%, transparent 50%) 1' }}>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-between w-1/2 z-10">
            <div className="w-8 h-32 border-b-2 border-green-500 border-solid"></div>
            <div className="w-8 h-32 border-b-2 border-green-500 border-solid"></div>
            <div className="w-8 h-32 border-b-2 border-green-500 border-solid"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white text-lg mb-4 md:mb-0 md:flex-1">
              Reset Identity: Burn current alias and receive a new one
            </p>
            <div className="flex gap-4 md:flex-shrink-0 w-full md:w-auto justify-center md:justify-end">
              <button className="bg-[#C10000] text-white px-4 py-2 rounded-3xl text-sm whitespace-nowrap">
                RESET IDENTITY
              </button>
              <button className="bg-[#C10000] text-white px-4 py-2 rounded-3xl text-sm whitespace-nowrap">
                DISCONNECT WALLET
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
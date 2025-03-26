import React from 'react';

interface TaskCreatedPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TaskCreatedPopup: React.FC<TaskCreatedPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Popup dışına tıklandığında kapatma
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Çarpı butonuna tıklandığında kapatma
  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto" onClick={handleBackdropClick}>
      <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm" onClick={handleBackdropClick}></div>

      <div 
        className="relative bg-[#1E1F26] rounded-3xl w-full max-w-[320px] sm:max-w-lg space-y-6 sm:space-y-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative corners */}
        <div className="absolute inset-0 rounded-3xl">
          <div className="absolute top-0 left-0 w-1/4 h-0.5 border-t rounded-full"
          style={{ borderImage: 'linear-gradient(to right, #00E076 50%, transparent 50%) 1' }} />
          <div className="absolute top-0 left-0 h-1/2 w-0.5 border-l rounded-full"
          style={{ borderImage: 'linear-gradient(to bottom, #00E076 50%, transparent 50%) 1' }} />
          <div className="absolute top-0 right-0 w-1/4 h-0.5 border-t rounded-full"
          style={{ borderImage: 'linear-gradient(to left, #00E076 50%, transparent 50%) 1' }} />
          <div className="absolute top-0 right-0 h-1/2 w-0.5 border-r rounded-full"
          style={{ borderImage: 'linear-gradient(to bottom, #00E076 50%, transparent 50%) 1' }} />
          <div className="absolute bottom-0 left-0 w-1/4 h-0.5 border-b rounded-full"
          style={{ borderImage: 'linear-gradient(to right, #00E076 50%, transparent 50%) 1' }} />
          <div className="absolute bottom-0 left-0 h-1/2 w-0.5 border-l rounded-full"
          style={{ borderImage: 'linear-gradient(to top, #00E076 50%, transparent 50%) 1' }} />
          <div className="absolute bottom-0 right-0 w-1/4 h-0.5 border-b rounded-full"
          style={{ borderImage: 'linear-gradient(to left, #00E076 50%, transparent 50%) 1' }} />
          <div className="absolute bottom-0 right-0 h-1/2 w-0.5 border-r rounded-full"
          style={{ borderImage: 'linear-gradient(to top, #00E076 50%, transparent 50%) 1' }} />
        </div>

        {/* Close Button */}
        <div className="absolute top-0 right-4 sm:top-0 sm:right-4 z-50">
          <button
            onClick={handleCloseClick}
            className="text-white hover:text-[#00E076] transition-colors border border-[#00E076] rounded-full p-1 sm:p-2.5 bg-[#222222] bg-opacity-50"
          > 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-5 sm:h-5">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Content Container */}
        <div className="relative z-10 space-y-6 sm:space-y-8 p-4 sm:p-6">
          {/* Logo Section */}
          <div className="flex justify-center">
            <div className="rounded-full bg-[#212121] border-2 border-[#097944] p-3 sm:p-4 shadow-lg hover:scale-105 transition-transform">
              <img src="/icons/logo-colorful.svg" alt="Success" className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
          </div>

          {/* Wallet Section */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white text-center">Wallet Address</h2>
            <div className="flex justify-center">
              <div className="border-2 border-[#097944] p-3 sm:p-4 rounded-lg bg-[#212121] hover:border-[#00E076] transition-colors">
                <img src="/icons/qr-code.svg" alt="QR Code" className="w-28 h-28 sm:w-36 sm:h-36" />
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-3 sm:gap-4 py-3 sm:py-4">
            {[100, 34, 30, 20, 10].map((opacity, index) => (
              <div 
                key={index}
                className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#00E076] transition-all duration-300"
                style={{ opacity: opacity === 100 ? 1 : `0.${opacity}` }}
              />
            ))}
          </div>

          {/* Status Information */}
          <div className="space-y-2 sm:space-y-3 text-center">
            <p className="text-[#00E076] text-xs sm:text-sm md:text-wrap font-medium select-all hover:text-white transition-colors">
              7jgkvKMEN6BkXTsZurpVDo6wctWAXDE3Kjv15J
            </p>
            <p className="text-xs sm:text-sm"><span className="text-[#00E076]">Status:</span> <span className="text-gray-400">Waiting for Payment Solana…</span></p>
          </div>
        </div>

        {/* Action Button */}
        <div className="border-t border-[#707070] bg-[#171717] p-4 sm:p-6 rounded-b-3xl">
          <div className="flex justify-center">
            <button
              className="bg-[#00E076] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 active:scale-95 shadow-lg"
              onClick={() => console.log('Task claimed: ')}
            >
              <span className="text-white font-medium text-sm tracking-wider">
                CONFIRM
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
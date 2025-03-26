import React from 'react';

interface SubmissionFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTask: string | null;
}

export const SubmissionFormPopup: React.FC<SubmissionFormPopupProps> = ({ isOpen, onClose, selectedTask }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-2 sm:p-8 overflow-y-auto" onClick={onClose}>
      <div 
        className="relative w-full max-w-md sm:max-w-xl mx-auto my-2 sm:mx-4 bg-[#111111] border border-[#86858A] border-opacity-50 rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 sm:p-6">
          {/* Header section */}
          <div className="flex justify-between items-start mb-4 sm:mb-6">
            <div className="flex flex-col items-center w-full gap-1 sm:gap-2">
              <div className="relative rounded-full">
                <img src="/public/icons/circle-logo.svg" alt="green circle" className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>

              {/* Title */}
              <h2 className="text-white text-xl sm:text-2xl font-normal text-center">Submission Form</h2>
            </div>
            
            {/* Close button */}
            <button 
              onClick={onClose}
              className="text-white hover:text-[#00E076] transition-colors border border-[#00E076] rounded-full p-2 sm:p-2.5 absolute top-2 right-2 sm:top-4 sm:right-4 bg-[#222222] bg-opacity-50"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-5 sm:h-5">
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          {/* Content area with scrolling capability */}
          <div className="flex flex-col space-y-3 sm:space-y-4 max-h-[60vh] sm:max-h-none overflow-y-auto sm:overflow-visible pr-1 sm:pr-2">
            
            {/* IPFS Delivery Link */}
            <div className="flex items-start space-x-3 sm:space-x-4 bg-[#171717] rounded-xl p-3 sm:p-4 border-[0.5px] border-[#00E076]">
              <div className="flex flex-col w-full justify-center">
                <span className="text-[#00E076] text-xs">IPFS Delivery Link:</span>
                <div className="relative mt-2">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <img src="/public/icons/link.svg" alt="link icon" className="w-4 h-4 sm:w-5 sm:h-5 opacity-50" />
                  </div>
                  <input
                    type="text"
                    className="w-full bg-[#222222] text-white text-base p-3 pl-11 rounded-lg border border-[#86858A] border-opacity-20 focus:border-[#00E076] focus:outline-none"
                    placeholder="Enter IPFS link here..."
                  />
                </div>
                <p className="text-[#86858A] text-xs mt-1">Use AES-encrypted IPFS upload only. Need help?</p>
              </div>
            </div>
            
            {/* Optional Note to Creator */}
            <div className="flex items-start space-x-3 sm:space-x-4 bg-[#171717] rounded-xl p-3 sm:p-4 border-[0.5px] border-[#00E076]">
              <div className="flex flex-col w-full">
              <span className="text-[#00E076] text-xs">Optional Note to Creator:</span>
              
              <textarea 
                className="w-full h-24 bg-[#222222] text-white text-base sm:text-base mt-2 p-3 rounded-lg resize-none border border-[#86858A] border-opacity-20 focus:border-[#00E076] focus:outline-none"
                placeholder="Short summary or context (max 500 chars)"
              />
              <p className="text-[#86858A] text-xs mt-2">Optional. Will be encrypted.</p>
              </div>
            </div>
            
            {/* Encryption Notice */}
            <div className="flex items-start space-x-3 sm:space-x-4 bg-[#171717] rounded-xl p-3 sm:p-4 border border-[0.5px] border-[#707070]">
              <div className="bg-[#86858A] bg-opacity-20 p-3 sm:p-4 rounded-xl flex-shrink-0 self-center">
                <img src="/public/icons/alert.svg" alt="encryption icon" className="w-4 h-4 sm:w-5 sm:h-5 opacity-50" />
              </div>
              <div className="flex flex-col">
                <span className="text-[#00E076] text-xs">Encryption Notice:</span>
                <p className="text-white text-sm sm:text-base mt-1">
                  Your submission will be encrypted and only visible to the task creator. Do not include personal information. Once submitted, this mission cannot be edited.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Submit button */}
        <div className="w-full mt-2 sm:mt-4 border-t-[0.5px] border-[#707070] pt-3 sm:pt-4 bg-[#171717] flex justify-center items-center p-3 sm:p-4">
          <button
            className="bg-[#00E076] px-5 sm:px-6 py-2.5 sm:py-3 rounded-3xl cursor-pointer hover:bg-opacity-90 transition-all"
          >
            <span className="text-white font-normal text-sm sm:text-base tracking-wide">SUBMIT MISSION</span>
          </button>
        </div>
      </div>
    </div>
  );
};
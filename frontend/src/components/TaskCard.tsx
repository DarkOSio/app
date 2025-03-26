import solanaLogo from '../assets/solana-logo.png';

interface TaskCardProps {
  title: string;
  username: string;
  category: string;
  reward: number;
  deadline: string;
  status: 'open' | 'in-progress' | 'closed';
  taskId: string;
  onViewDetails?: () => void; // Detay görünümü için tıklama fonksiyonu
}

export const TaskCard = ({
  title,
  username,
  category,
  reward,
  deadline,
  status,
  taskId,
  onViewDetails
}: TaskCardProps) => {
  
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
    <div className="relative overflow-hidden rounded-xl bg-[#1E1F26] p-">
      {/* Task ID with status dot */}
      <div className="relative mb-3 h-12 rounded-md overflow-hidden">
        { status === 'closed' && (<div className="absolute inset-0 bg-[#86858A] opacity-50" />)}
        { status !== 'closed' && (<img src="/public/icons/task-bg.svg" alt="" className="w-full h-full object-cover" />)}
        { status !== 'closed' && (<div className="absolute inset-0 bg-black opacity-50" />)}
        <div className="absolute inset-0 flex items-center justify-between px-3">
          <div className="flex items-center gap-2 px-5">
            <div className={`w-2 h-2 rounded-full ${getStatusDotColor()}`}></div>
            <span className="text-[#FFFFFF] text-base">Task {taskId}</span>
          </div>
          <button className="text-white">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 4.16666V15.8333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.16666 10H15.8333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Task title */}
      <div className="relative mb-3 h-12 rounded-md overflow-hidden bg-[#292D33]">
        <img src="/public/icons/card-image.svg" alt="" className="w-4 h-full object-cover" />
        <div className='px-3'>
          <div className="absolute inset-0 flex items-center px-7 md:px-7">
            { status === 'closed' && (<img src="/public/icons/logo-closed.svg" alt="logo" className="w-9 h-9 mr-3" />)}
            { status !== 'closed' && (<img src="/public/icons/logo.svg" alt="logo" className="w-9 h-9 mr-3" />)}
            
            <div className="flex flex-col">
              <span className="text-[#FFFFFF] text-md text-nowrap md:text-nowrap font-normal md:text-sm md:font-normal">{title}</span>
              <span className="text-[#86858A] text-sm">{username}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative mb-3 h-20 rounded-md overflow-hidden bg-[#292D33] flex items-center">
        <img src="/public/icons/card-image.svg" alt="" className="h-full w-4 object-cover" />
        <div className="flex flex-col w-full justify-between ">

          {/* Reward ve Solana Logo */}
          <div className="flex items-center gap-2 px-5">
            { status === 'closed' && (<img src="/public/icons/solona-closed.svg" alt="solana logo" className="w-6 h-6" />)}
            { status !== 'closed' && (<img src={solanaLogo} alt="solana logo" className="w-6 h-6" />)}
            <span className="text-white text-lg">{reward} SOL</span>
          </div>

          {/* On-chain Analysis ve Deadline */}
          <div className="flex items-center justify-between px-3 md:px-5">
            <div className={`px-2 py-1 rounded-md text-center text-nowrap md:text-nowrap md:mr-2 ${categoryStyle.bg}`}>
              <span className={`text-xs text-center md:text-nowrap text-nowrap ${categoryStyle.text}`}>{category}</span>
            </div>

            <div className="flex items-center gap-2">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00001C14.6667 4.31811 11.6819 1.33334 8 1.33334C4.3181 1.33334 1.33333 4.31811 1.33333 8.00001C1.33333 11.6819 4.3181 14.6667 8 14.6667Z" stroke="#86858A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 4V8L10.6667 9.33333" stroke="#86858A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className='flex items-center gap-1 text-nowrap font-normal md:font-normal'>
                <span className="text-[#86858A] text-base text-nowrap md:text-nowrap font-normal md:font-normal">{deadline}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Status and View Details */}
      <div className="relative mb-3 h-16 rounded-md overflow-hidden bg-[#292D33] flex items-center">
        <img src="/public/icons/card-image.svg" alt="" className="h-full w-4 object-cover" />
        <div className="flex items-center justify-between w-full px-5 md:px-3 text-nowrap">
          <button 
            onClick={onViewDetails} 
            className="text-white text-sm flex items-center gap-1 cursor-pointer hover:text-[#00E076] transition-colors"
          >
            View Details
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className={`py-1 px-3 md:px-2 text-center rounded-full md:text-nowrap ${getStatusBgColor()}`}>
            <span className={`text-sm ${getStatusTextColor()}`}>{getStatusText()}</span>
          </div>
        </div>
      </div>
      
    </div>
  );
};
import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { TaskDetail } from './TaskDetail';

export const Tasks = () => {
  // Detay popup'ını kontrol etmek için state'ler
  const [selectedTask, setSelectedTask] = useState<any | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // Popup'ı açma fonksiyonu
  const openTaskDetail = (task: any) => {
    setSelectedTask(task);
    setIsDetailOpen(true);
  };

  // Popup'ı kapatma fonksiyonu
  const closeTaskDetail = () => {
    setIsDetailOpen(false);
  };

  // Örnek görev verileri
  const tasks = [
    {
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
    },
    {
      title: "Build NFT Analytics Dashboard",
      username: "tech.darkos",
      category: "Development",
      reward: 5.2,
      deadline: "28 March 2025",
      status: "In Progress",
      taskId: "852",
      description: "Create a comprehensive NFT analytics dashboard that tracks sales, floor prices, and market trends for top collections.",
      timeLeft: "5d 12h",
      deliveryMethod: "Public repository"
    },
    {
      title: "Solana DeFi Market Analysis",
      username: "research.darkos",
      category: "Market Research",
      reward: 4.0,
      deadline: "25 March 2025",
      status: "Open for submission",
      taskId: "853",
      description: "Analyze the current state of DeFi on Solana, including TVL, user growth, and comparison with other chains.",
      timeLeft: "1d 7h",
      deliveryMethod: "Encrypted PDF"
    },
    {
      title: "Optimize Gas Management Protocol",
      username: "dev.darkos",
      category: "Optimization",
      reward: 6.0,
      deadline: "30 March 2025",
      status: "Open for submission",
      taskId: "854",
      description: "Implement and optimize a gas management protocol for high-frequency trading bots on Solana.",
      timeLeft: "6d 18h",
      deliveryMethod: "Private repository"
    },
    {
      title: "New Token Listings Analysis",
      username: "market.darkos",
      category: "On-Chain Analysis",
      reward: 2.8,
      deadline: "22 March 2025",
      status: "Closed",
      taskId: "855",
      description: "Review and analyze performance of new token listings on major Solana DEXs in the past 30 days.",
      timeLeft: "0h 0m",
      deliveryMethod: "Public report"
    },
    {
      title: "MEV Protection Strategies",
      username: "security.darkos",
      category: "Security",
      reward: 7.5,
      deadline: "27 March 2025",
      status: "Open for submission",
      taskId: "856",
      description: "Research and document effective MEV protection strategies for Solana traders and protocols.",
      timeLeft: "3d 9h",
      deliveryMethod: "Encrypted repository"
    }
  ];

  return (
    <div className="w-full">
      <div className="space-y-4 mb-6 flex flex-col">
        <h1 className="text-white text-2xl text-center font-helvetica font-bold md:text-4xl md:text-start">Active Tasks</h1>
        
        {/* Search and Filters Container */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
          {/* Search Bar - Full width on mobile */}
          <div className="flex items-center bg-[#86858A] bg-opacity-20 rounded-lg px-4 py-2 w-full md:w-auto">
        <span className="text-[#00E076] mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Active tasks.."
          className="bg-transparent text-white outline-none w-full md:w-64 font-helvetica text-lg"
        />
        <span className="text-gray-500 ml-2 font-bold rounded px-3 py-1 bg-[#232325]">/</span>
          </div>

          {/* Filters Container - Scrollable on mobile */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
        {/* Reward Filter */}
        <div className="flex items-center space-x-2 bg-[#86858A] bg-opacity-20 px-3 md:px-4 py-1.5 rounded-lg shrink-0">
          <span className="text-gray-500 text-xs md:text-sm font-normal">Reward:</span>
          <button className="flex items-center justify-between text-white px-2 md:px-4 py-1 rounded-md">
            <span className="text-white text-sm md:text-lg font-helvetica">ALL</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 ml-1 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Category Filter */}
        <div className="flex items-center space-x-2 bg-[#86858A] bg-opacity-20 px-3 md:px-4 py-1.5 rounded-lg shrink-0">
          <span className="text-gray-500 text-xs md:text-sm font-normal">Category:</span>
          <button className="flex items-center justify-between text-white px-2 md:px-4 py-1 rounded-lg">
            <span className="text-white text-sm md:text-lg font-helvetica">ALL</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 ml-1 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Time Left Filter */}
        <div className="flex items-center space-x-2 bg-[#86858A] bg-opacity-20 px-3 md:px-4 py-1.5 rounded-lg shrink-0">
          <span className="text-gray-500 text-xs md:text-sm font-normal">Time Left:</span>
          <button className="flex items-center justify-between text-white px-2 md:px-4 py-1 rounded-lg">
            <span className="text-white text-sm md:text-lg font-helvetica">ALL</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 ml-1 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
          </div>

          {/* Connect Wallet Button */}
          <div className="w-full md:w-auto md:ml-auto">
        <button className="w-full md:w-auto bg-green-500/20 text-green-500 text-base md:text-lg font-helvetica px-6 py-2.5 rounded-lg hover:bg-green-500/30 transition-colors duration-200">
          Connect Wallet
        </button>
          </div>
        </div>
      </div>

      <div className="w-full  rounded-xl p-3 overflow-hidden relative mb-5 bg-[#1E1F26]">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:block hidden">
          {/* Üst kısmın tam ortasında 3 çizgi */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-between w-1/2">
            <div className="w-8 h-32 border-t-2 border-green-500 border-solid"></div>
            <div className="w-8 h-32 border-t-2 border-green-500 border-solid"></div>
            <div className="w-8 h-32 border-t-2 border-green-500 border-solid"></div>
          </div>

          {/* Sol üst köşe */}
          <div className="absolute top-0 left-0 w-1/4 h-0.5 border-t-2 border-green-500 border-solid"
            style={{ borderTopWidth: '2px', borderImage: 'linear-gradient(to right, green 50%, transparent 50%) 30' }}>
          </div>
          <div className="absolute top-0 left-0 h-1/2 w-0.5 border-l-2 border-green-500 border-solid"
            style={{ borderLeftWidth: '2px', borderImage: 'linear-gradient(to bottom, green 50%, transparent 50%) 20' }}>
          </div>

          {/* Sol alt köşe */}
          <div className="absolute bottom-0 left-0 w-1/4 h-0.5 border-b-2 border-green-500 border-solid"
            style={{ borderBottomWidth: '2px', borderImage: 'linear-gradient(to right, green 50%, transparent 50%) 30' }}>
          </div>
          <div className="absolute bottom-0 left-0 h-1/2 w-0.5 border-l-2 border-green-500 border-solid"
            style={{ borderLeftWidth: '2px', borderImage: 'linear-gradient(to top, green 50%, transparent 50%) 20' }}>
          </div>

          {/* Sağ üst köşe */}
          <div className="absolute top-0 right-0 w-1/4 h-0.5 border-t-2 border-green-500 border-solid"
            style={{ borderTopWidth: '2px', borderImage: 'linear-gradient(to left, green 50%, transparent 50%) 30' }}>
          </div>
          <div className="absolute top-0 right-0 h-1/2 w-0.5 border-r-2 border-green-500 border-solid"
            style={{ borderRightWidth: '2px', borderImage: 'linear-gradient(to bottom, green 50%, transparent 50%) 20' }}>
          </div>

          {/* Sağ alt köşe */}
          <div className="absolute bottom-0 right-0 w-1/4 h-0.5 border-b-2 border-green-500 border-solid"
            style={{ borderBottomWidth: '2px', borderImage: 'linear-gradient(to left, green 50%, transparent 50%) 30' }}>
          </div>
          <div className="absolute bottom-0 right-0 h-1/2 w-0.5 border-r-2 border-green-500 border-solid"
            style={{ borderRightWidth: '2px', borderImage: 'linear-gradient(to top, green 50%, transparent 50%) 20' }}>
          </div>

          {/* Alt kısmın tam ortasında 3 çizgi */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-between w-1/2 z-10">
            <div className="w-8 h-32 border-b-2 border-green-500 border-solid"></div>
            <div className="w-8 h-32 border-b-2 border-green-500 border-solid"></div>
            <div className="w-8 h-32 border-b-2 border-green-500 border-solid"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Sütun */}
          <div className="space-y-6">
            <TaskCard
              title={tasks[0].title}
              username={tasks[0].username}
              category={tasks[0].category}
              reward={tasks[0].reward}
              deadline={tasks[0].deadline}
              status={'open'}
              taskId={tasks[0].taskId}
              onViewDetails={() => openTaskDetail(tasks[0])}
            />
          </div>

          {/* 2. Sütun */}
          <div className="space-y-6">
            {tasks.length > 1 && (
              <TaskCard
                title={tasks[1].title}
                username={tasks[1].username}
                category={tasks[1].category}
                reward={tasks[1].reward}
                deadline={tasks[1].deadline}
                status={'in-progress'}
                taskId={tasks[1].taskId}
                onViewDetails={() => openTaskDetail(tasks[1])}
              />
            )}
          </div>

          {/* 3. Sütun */}
          <div className="space-y-6">
            {tasks.length > 2 && (
              <TaskCard
                title={tasks[2].title}
                username={tasks[2].username}
                category={tasks[2].category}
                reward={tasks[2].reward}
                deadline={tasks[2].deadline}
                status={'closed'}
                taskId={tasks[2].taskId}
                onViewDetails={() => openTaskDetail(tasks[2])}
              />
            )}
          </div>
        </div>
      </div>


      <div className="w-full  rounded-xl p-3 overflow-hidden relative mb-2 bg-[#1E1F26] ">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:block hidden">
          {/* Üst kısmın tam ortasında 3 çizgi */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-between w-1/2">
            <div className="w-8 h-32 border-t-2 border-green-500 border-solid"></div>
            <div className="w-8 h-32 border-t-2 border-green-500 border-solid"></div>
            <div className="w-8 h-32 border-t-2 border-green-500 border-solid"></div>
          </div>

          {/* Sol üst köşe */}
          <div className="absolute top-0 left-0 w-1/4 h-0.5 border-t-2 border-green-500 border-solid"
            style={{ borderTopWidth: '2px', borderImage: 'linear-gradient(to right, green 50%, transparent 50%) 30' }}>
          </div>
          <div className="absolute top-0 left-0 h-1/2 w-0.5 border-l-2 border-green-500 border-solid"
            style={{ borderLeftWidth: '2px', borderImage: 'linear-gradient(to bottom, green 50%, transparent 50%) 20' }}>
          </div>

          {/* Sol alt köşe */}
          <div className="absolute bottom-0 left-0 w-1/4 h-0.5 border-b-2 border-green-500 border-solid"
            style={{ borderBottomWidth: '2px', borderImage: 'linear-gradient(to right, green 50%, transparent 50%) 30' }}>
          </div>
          <div className="absolute bottom-0 left-0 h-1/2 w-0.5 border-l-2 border-green-500 border-solid"
            style={{ borderLeftWidth: '2px', borderImage: 'linear-gradient(to top, green 50%, transparent 50%) 20' }}>
          </div>

          {/* Sağ üst köşe */}
          <div className="absolute top-0 right-0 w-1/4 h-0.5 border-t-2 border-green-500 border-solid"
            style={{ borderTopWidth: '2px', borderImage: 'linear-gradient(to left, green 50%, transparent 50%) 30' }}>
          </div>
          <div className="absolute top-0 right-0 h-1/2 w-0.5 border-r-2 border-green-500 border-solid"
            style={{ borderRightWidth: '2px', borderImage: 'linear-gradient(to bottom, green 50%, transparent 50%) 20' }}>
          </div>

          {/* Sağ alt köşe */}
          <div className="absolute bottom-0 right-0 w-1/4 h-0.5 border-b-2 border-green-500 border-solid"
            style={{ borderBottomWidth: '2px', borderImage: 'linear-gradient(to left, green-500 100%, transparent 100%) 30' }}>
          </div>
          <div className="absolute bottom-0 right-0 h-1/2 w-0.5 border-r-2 border-green-500 border-solid"
            style={{ borderRightWidth: '2px', borderImage: 'linear-gradient(to top, green 50%, transparent 50%) 20' }}>
          </div>

          {/* Alt kısmın tam ortasında 3 çizgi */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-between w-1/2 z-10">
            <div className="w-8 h-32 border-b-2 border-green-500 border-solid"></div>
            <div className="w-8 h-32 border-b-2 border-green-500 border-solid"></div>
            <div className="w-8 h-32 border-b-2 border-green-500 border-solid"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Sütun */}
          <div className="space-y-6">
            <TaskCard
              title={tasks[3].title}
              username={tasks[3].username}
              category={tasks[3].category}
              reward={tasks[3].reward}
              deadline={tasks[3].deadline}
              status={'open'}
              taskId={tasks[3].taskId}
              onViewDetails={() => openTaskDetail(tasks[3])}
            />
          </div>

          {/* 2. Sütun */}
          <div className="space-y-6">
            {tasks.length > 4 && (
              <TaskCard
                title={tasks[4].title}
                username={tasks[4].username}
                category={tasks[4].category}
                reward={tasks[4].reward}
                deadline={tasks[4].deadline}
                status={'closed'}
                taskId={tasks[4].taskId}
                onViewDetails={() => openTaskDetail(tasks[4])}
              />
            )}
          </div>

          {/* 3. Sütun */}
          <div className="space-y-6">
            {tasks.length > 5 && (
              <TaskCard
                title={tasks[5].title}
                username={tasks[5].username}
                category={tasks[5].category}
                reward={tasks[5].reward}
                deadline={tasks[5].deadline}
                status={'open'}
                taskId={tasks[5].taskId}
                onViewDetails={() => openTaskDetail(tasks[5])}
              />
            )}
          </div>
        </div>
      </div>
      
      {/* Task Detail Popup */}
      {selectedTask && (
        <TaskDetail
          isOpen={isDetailOpen}
          onClose={closeTaskDetail}
          task={selectedTask}
        />
      )}
    </div>
  );
};
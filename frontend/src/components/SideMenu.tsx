import { useState } from 'react';

interface MenuItemProps {
  text: string;
  icon: string;
  active: boolean;
  onClick: () => void;
}

const MenuItem = ({ text, icon, active, onClick }: MenuItemProps) => {
  return (
    <div
      className={`w-full px-4 sm:px-8 py-3 sm:py-4 flex items-center gap-4 sm:gap-10 transition-colors ${active
          ? 'bg-emerald-900 text-emerald-400 mb-4 sm:mb-8 rounded-lg'
          : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
        }`}
      onClick={onClick}
    >
      <img src={`/icons/${icon}`} alt={text} className={`w-5 h-5 ${active ? 'filter-none' : 'opacity-70'}`} />
      <span className={`text-base sm:text-lg ${active ? 'text-primary' : 'text-secondary'}`}>{text}</span>
    </div>
  );
};

interface SideMenuProps {
  onMenuItemClick?: (menuItem: string) => void;
  activePage?: string;
}

export const SideMenu = ({ onMenuItemClick, activePage = 'Tasks' }: SideMenuProps) => {
  const [activeItem, setActiveItem] = useState(activePage);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const menuItems = [
    { text: 'Tasks', icon: 'tasks-icon.svg' },
    { text: 'Create Task', icon: 'create-task-icon.svg' },
    { text: 'Deal Zone', icon: 'deal-zone-icon.svg' },
    { text: 'Profile', icon: 'profile-icon.svg' },
    { text: 'Docs', icon: 'docs-icon.svg' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    if (onMenuItemClick) {
      onMenuItemClick(item);
    }
    if (window.innerWidth < 768) setMobileMenuOpen(false);
  };

  return (
    <div className="relative">
      {/* Hamburger Menu Button (Sadece mobilde görünür) */}
      <button 
        onClick={toggleMobileMenu}
        className="md:hidden fixed top-4 left-4 z-50 p-2.5 bg-gray-800/90 backdrop-blur-sm rounded-lg text-emerald-400 shadow-lg shadow-emerald-900/30 border border-emerald-900/50 transition-all hover:bg-gray-700"
        aria-label="Toggle menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>
      
      {/* Ana Menü - Desktop'ta normal görünür, mobilde açılır kapanır */}
      <div className={`
        fixed md:relative top-0 left-0 h-full 
        w-64 sm:w-72 z-40 bg-gray-900/95 backdrop-blur-md
        transform transition-all duration-300 ease-in-out
        ${mobileMenuOpen ? 'translate-x-0 shadow-2xl shadow-emerald-900/30' : '-translate-x-full md:translate-x-10 shadow-none'} 
        md:translate-x-10 md:mt-4 py-4 flex flex-col justify-between md:bg-transparent
        border-r border-emerald-900/30 md:border-none
      `}>
        {/* Logo bölümü */}
        <div className="flex items-center justify-center -mb-4 sm:-mb-8">
          <img src="/icons/darkoslogo.svg" alt="Logo" className="w-24 h-24 sm:w-36 sm:h-36" />
        </div>

        {/* Menü öğeleri */}
        <div className="flex-1 px-4 sm:px-8 mt-4 md:mt-0">
          <div className="">
            {menuItems.map((item) => (
              <MenuItem
                key={item.text}
                text={item.text}
                icon={item.icon}
                active={activeItem === item.text}
                onClick={() => handleItemClick(item.text)}
              />
            ))}
          </div>
        </div>

        {/* Alt kısım - renkli kutular */}
        <div className="p-4 space-y-2 place-self-end">
          <div className="h-2 w-full rounded-full bg-primary bg-opacity-20"></div>
          <div className="h-2 w-full rounded-full bg-secondary bg-opacity-20"></div>
          <div className="h-2 w-full rounded-full bg-white bg-opacity-20"></div>
          <div className="h-2 w-full rounded-full bg-white bg-opacity-20"></div>
          <div className="h-2 w-full rounded-full bg-white bg-opacity-20"></div>
        </div>
      </div>
      
      {/* Menü açıkken arka planı karartmak için overlay - sadece mobilde */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-gray-900 bg-opacity-70 backdrop-blur-sm z-30 md:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};
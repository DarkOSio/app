import { useState } from 'react'
import { Tasks } from './components/Tasks'
import { SideMenu } from './components/SideMenu'
import { ProfilePage } from './components/ProfilePage'
import { DealZone } from './components/DealZone'
import { CreateTask } from './components/CreateTask'

function App() {
  const [activePage, setActivePage] = useState('Tasks');

  const handleMenuItemClick = (menuItem: string) => {
    setActivePage(menuItem);
  };

  return (
    <div className="min-h-screen bg-[#141414] flex">
      <SideMenu onMenuItemClick={handleMenuItemClick} activePage={activePage} />
      <main className="flex-1 p-4 sm:p-8 md:p-12 lg:p-16 overflow-x-hidden">
        {activePage === 'Tasks' && <Tasks />}
        {activePage === 'Profile' && <ProfilePage />}
        {activePage === 'Create Task' && <CreateTask />}
        {activePage === 'Deal Zone' && <DealZone />}
      </main>
    </div>
  )
}

export default App
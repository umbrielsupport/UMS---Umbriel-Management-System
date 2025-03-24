import React from 'react';
import { LayoutDashboardIcon, MonitorIcon, FileTextIcon, KeyIcon, BookOpenIcon, SettingsIcon, UsersIcon, BuildingIcon } from 'lucide-react';
interface SidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}
const Sidebar = ({
  currentView,
  setCurrentView
}: SidebarProps) => {
  const navItems = [{
    id: 'dashboard',
    name: 'Dashboard',
    icon: <LayoutDashboardIcon className="h-5 w-5" />
  }, {
    id: 'assets',
    name: 'Assets',
    icon: <MonitorIcon className="h-5 w-5" />
  }, {
    id: 'documents',
    name: 'Documents',
    icon: <FileTextIcon className="h-5 w-5" />
  }, {
    id: 'passwords',
    name: 'Passwords',
    icon: <KeyIcon className="h-5 w-5" />
  }, {
    id: 'knowledge',
    name: 'Knowledge Base',
    icon: <BookOpenIcon className="h-5 w-5" />
  }, {
    id: 'users',
    name: 'Users',
    icon: <UsersIcon className="h-5 w-5" />
  }, {
    id: 'settings',
    name: 'Settings',
    icon: <SettingsIcon className="h-5 w-5" />
  }, {
    id: 'organizations',
    name: 'Organizations',
    icon: <BuildingIcon className="h-5 w-5" />
  }];
  return <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <div className="flex items-center space-x-2 px-4">
        <div className="bg-blue-500 rounded-md p-1.5">
          <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4L4 8L12 12L20 8L12 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12L12 16L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 16L12 20L20 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span className="text-xl font-bold">ITDocs</span>
      </div>
      <nav className="flex-1 px-2">
        {navItems.map(item => <button key={item.id} className={`flex items-center space-x-2 py-2.5 px-4 rounded-lg w-full transition duration-150 ${currentView === item.id ? 'bg-gray-700' : 'hover:bg-gray-700'}`} onClick={() => setCurrentView(item.id)}>
            <span className={`${currentView === item.id ? 'text-blue-400' : 'text-gray-300'}`}>
              {item.icon}
            </span>
            <span className={`${currentView === item.id ? 'text-blue-400' : 'text-gray-300'} font-medium`}>
              {item.name}
            </span>
          </button>)}
      </nav>
    </div>;
};
export default Sidebar;
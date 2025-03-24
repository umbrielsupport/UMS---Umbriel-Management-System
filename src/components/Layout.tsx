import React from 'react';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import { BellIcon, HelpCircleIcon, UserIcon } from 'lucide-react';
import OrganizationSelector from './OrganizationSelector';
interface LayoutProps {
  children: React.ReactNode;
  currentView: string;
  setCurrentView: (view: string) => void;
}
const Layout = ({
  children,
  currentView,
  setCurrentView
}: LayoutProps) => {
  return <div className="flex h-screen bg-gray-100">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="bg-white shadow-sm z-10">
          <div className="flex items-center justify-between px-6 py-3">
            <div className="flex items-center space-x-4">
              <OrganizationSelector />
              <SearchBar />
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                <HelpCircleIcon className="h-5 w-5" />
              </button>
              <button className="text-gray-500 hover:text-gray-700 relative">
                <BellIcon className="h-5 w-5" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
              </button>
              <button className="flex items-center text-sm font-medium text-gray-700">
                <span className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <UserIcon className="h-5 w-5 text-gray-500" />
                </span>
              </button>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>;
};
export default Layout;
import React, { useState } from 'react';
import { BuildingIcon, ChevronDownIcon, PlusIcon } from 'lucide-react';
import { useOrganization } from '../contexts/OrganizationContext';
const OrganizationSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    currentOrganization,
    organizations,
    setCurrentOrganization,
    setCurrentView
  } = useOrganization();
  return <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition">
        <div className="bg-blue-100 p-1.5 rounded-md">
          <BuildingIcon className="h-5 w-5 text-blue-600" />
        </div>
        <span className="font-medium text-gray-700">
          {currentOrganization?.name}
        </span>
        <ChevronDownIcon className="h-4 w-4 text-gray-500" />
      </button>
      {isOpen && <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
          <div className="px-3 py-2 border-b border-gray-100">
            <p className="text-sm text-gray-500">Switch organization</p>
          </div>
          {organizations.map(org => <button key={org.id} onClick={() => {
        setCurrentOrganization(org);
        setIsOpen(false);
      }} className={`w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center space-x-2 ${currentOrganization?.id === org.id ? 'bg-blue-50' : ''}`}>
              <div className="bg-gray-100 p-1 rounded-md">
                <BuildingIcon className="h-4 w-4 text-gray-600" />
              </div>
              <span className="text-sm text-gray-700">{org.name}</span>
            </button>)}
          <button onClick={() => {
        setCurrentView('organizations');
        setIsOpen(false);
      }} className="w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center space-x-2 text-blue-600 border-t border-gray-100">
            <PlusIcon className="h-4 w-4" />
            <span className="text-sm">Add Organization</span>
          </button>
        </div>}
    </div>;
};
export default OrganizationSelector;
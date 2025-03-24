import React from 'react';
import { BuildingIcon, PlusIcon, UsersIcon, FolderIcon, KeyIcon } from 'lucide-react';
import { useOrganization } from '../../contexts/OrganizationContext';
const OrganizationList = () => {
  const {
    organizations,
    setCurrentOrganization,
    currentOrganization
  } = useOrganization();
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Organizations</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition flex items-center space-x-2">
          <PlusIcon className="h-5 w-5" />
          <span>New Organization</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {organizations.map(org => <div key={org.id} className={`bg-white rounded-lg shadow-sm border-2 transition cursor-pointer
              ${currentOrganization?.id === org.id ? 'border-blue-500' : 'border-transparent hover:border-gray-200'}`}>
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <BuildingIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  {org.name}
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <UsersIcon className="h-4 w-4" />
                    <span>12 Users</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <FolderIcon className="h-4 w-4" />
                    <span>45 Documents</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <KeyIcon className="h-4 w-4" />
                    <span>23 Passwords</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 rounded-b-lg">
              {currentOrganization?.id === org.id ? <span className="text-sm text-blue-600 font-medium">
                  Current Organization
                </span> : <button onClick={() => setCurrentOrganization(org)} className="text-sm text-gray-600 hover:text-blue-600 font-medium">
                  Switch to this organization
                </button>}
            </div>
          </div>)}
      </div>
    </div>;
};
export default OrganizationList;
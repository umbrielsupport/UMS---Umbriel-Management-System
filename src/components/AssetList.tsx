import React, { useState } from 'react';
import { SearchIcon, FilterIcon, MonitorIcon, ServerIcon, PrinterIcon, WifiIcon, PlusIcon } from 'lucide-react';
const AssetList = () => {
  const [filter, setFilter] = useState('all');
  // Mock data for assets
  const assets = [{
    id: 1,
    name: 'Dell XPS 13',
    type: 'Laptop',
    status: 'Active',
    assigned: 'John Smith',
    lastUpdated: '2023-06-15'
  }, {
    id: 2,
    name: 'HP ProDesk 600',
    type: 'Desktop',
    status: 'Active',
    assigned: 'Sarah Johnson',
    lastUpdated: '2023-05-22'
  }, {
    id: 3,
    name: 'Dell PowerEdge R740',
    type: 'Server',
    status: 'Active',
    assigned: 'IT Department',
    lastUpdated: '2023-06-01'
  }, {
    id: 4,
    name: 'Cisco Catalyst 3850',
    type: 'Network',
    status: 'Active',
    assigned: 'IT Department',
    lastUpdated: '2023-04-10'
  }, {
    id: 5,
    name: 'HP LaserJet Pro',
    type: 'Printer',
    status: 'Maintenance',
    assigned: 'Marketing',
    lastUpdated: '2023-06-08'
  }, {
    id: 6,
    name: 'MacBook Pro 16',
    type: 'Laptop',
    status: 'Active',
    assigned: 'Mike Brown',
    lastUpdated: '2023-05-30'
  }, {
    id: 7,
    name: 'Lenovo ThinkCentre',
    type: 'Desktop',
    status: 'Inactive',
    assigned: 'Unassigned',
    lastUpdated: '2023-03-15'
  }, {
    id: 8,
    name: 'Synology NAS DS920+',
    type: 'Server',
    status: 'Active',
    assigned: 'IT Department',
    lastUpdated: '2023-06-12'
  }];
  // Filter assets based on the selected filter
  const filteredAssets = filter === 'all' ? assets : assets.filter(asset => asset.type.toLowerCase() === filter);
  // Get the appropriate icon for asset type
  const getAssetIcon = type => {
    switch (type.toLowerCase()) {
      case 'laptop':
      case 'desktop':
        return <MonitorIcon className="h-5 w-5" />;
      case 'server':
        return <ServerIcon className="h-5 w-5" />;
      case 'printer':
        return <PrinterIcon className="h-5 w-5" />;
      case 'network':
        return <WifiIcon className="h-5 w-5" />;
      default:
        return <MonitorIcon className="h-5 w-5" />;
    }
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Assets</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition flex items-center space-x-2">
          <PlusIcon className="h-5 w-5" />
          <span>Add Asset</span>
        </button>
      </div>
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
            <div className="relative w-full md:w-64">
              <input type="text" placeholder="Search assets..." className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FilterIcon className="h-5 w-5 text-gray-500" />
              <select value={filter} onChange={e => setFilter(e.target.value)} className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="all">All Types</option>
                <option value="laptop">Laptops</option>
                <option value="desktop">Desktops</option>
                <option value="server">Servers</option>
                <option value="network">Network</option>
                <option value="printer">Printers</option>
              </select>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assigned To
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Updated
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAssets.map(asset => <tr key={asset.id} className="hover:bg-gray-50 cursor-pointer">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                        {getAssetIcon(asset.type)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {asset.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          ID: {asset.id}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{asset.type}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${asset.status === 'Active' ? 'bg-green-100 text-green-800' : asset.status === 'Inactive' ? 'bg-gray-100 text-gray-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {asset.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {asset.assigned}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {asset.lastUpdated}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{' '}
              <span className="font-medium">{filteredAssets.length}</span> of{' '}
              <span className="font-medium">{filteredAssets.length}</span>{' '}
              results
            </div>
            <div className="flex-1 flex justify-end">
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50" disabled>
                Previous
              </button>
              <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50" disabled>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default AssetList;
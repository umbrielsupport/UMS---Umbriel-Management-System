import React, { useState } from 'react';
import { SearchIcon, EyeIcon, EyeOffIcon, KeyIcon, CopyIcon, PlusIcon } from 'lucide-react';
const PasswordVault = () => {
  // State for password visibility
  const [visiblePasswords, setVisiblePasswords] = useState({});
  // Mock data for passwords
  const passwords = [{
    id: 1,
    name: 'Admin Portal',
    username: 'admin',
    password: 'securepass123',
    url: 'https://admin.company.com',
    category: 'Internal Systems'
  }, {
    id: 2,
    name: 'AWS Root Account',
    username: 'company-admin',
    password: 'Aws$3cure!',
    url: 'https://aws.amazon.com',
    category: 'Cloud Services'
  }, {
    id: 3,
    name: 'Office 365 Admin',
    username: 'admin@company.com',
    password: 'O365@dmin!',
    url: 'https://admin.microsoft.com',
    category: 'Microsoft'
  }, {
    id: 4,
    name: 'Domain Registrar',
    username: 'domains@company.com',
    password: 'Dom@in2023!',
    url: 'https://registrar.com',
    category: 'Domains'
  }, {
    id: 5,
    name: 'Network Switch',
    username: 'netadmin',
    password: 'Sw1tch@dmin',
    url: 'https://192.168.1.1',
    category: 'Network'
  }, {
    id: 6,
    name: 'VPN Service',
    username: 'vpnuser',
    password: 'VPN$ecure123',
    url: 'https://vpn.company.com',
    category: 'Security'
  }];
  // Categories for filtering
  const categories = ['All', 'Internal Systems', 'Cloud Services', 'Microsoft', 'Domains', 'Network', 'Security'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  // Filter passwords based on selected category
  const filteredPasswords = selectedCategory === 'All' ? passwords : passwords.filter(pwd => pwd.category === selectedCategory);
  // Toggle password visibility
  const togglePasswordVisibility = id => {
    setVisiblePasswords(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  // Mock function for copying to clipboard
  const copyToClipboard = (text, type) => {
    console.log(`Copied ${type}: ${text}`);
    // In a real app, would use clipboard API
    // navigator.clipboard.writeText(text)
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Password Vault</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition flex items-center space-x-2">
          <PlusIcon className="h-5 w-5" />
          <span>Add Password</span>
        </button>
      </div>
      <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative w-full md:w-64">
          <input type="text" placeholder="Search passwords..." className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => <button key={category} onClick={() => setSelectedCategory(category)} className={`px-3 py-1 rounded-full text-sm font-medium ${selectedCategory === category ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
              {category}
            </button>)}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Username
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Password
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  URL
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPasswords.map(item => <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <KeyIcon className="h-5 w-5 text-purple-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {item.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-900">
                        {item.username}
                      </span>
                      <button onClick={() => copyToClipboard(item.username, 'username')} className="text-gray-400 hover:text-gray-600">
                        <CopyIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-900">
                        {visiblePasswords[item.id] ? item.password : '••••••••••'}
                      </span>
                      <button onClick={() => togglePasswordVisibility(item.id)} className="text-gray-400 hover:text-gray-600">
                        {visiblePasswords[item.id] ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                      </button>
                      <button onClick={() => copyToClipboard(item.password, 'password')} className="text-gray-400 hover:text-gray-600">
                        <CopyIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-blue-500 hover:text-blue-700 cursor-pointer">
                        {item.url}
                      </span>
                      <button onClick={() => copyToClipboard(item.url, 'url')} className="text-gray-400 hover:text-gray-600">
                        <CopyIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                      {item.category}
                    </span>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};
export default PasswordVault;
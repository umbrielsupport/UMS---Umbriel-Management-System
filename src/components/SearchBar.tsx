import React from 'react';
import { SearchIcon } from 'lucide-react';
const SearchBar = () => {
  return <div className="relative w-64">
      <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <SearchIcon className="h-5 w-5 text-gray-400" />
      </div>
    </div>;
};
export default SearchBar;
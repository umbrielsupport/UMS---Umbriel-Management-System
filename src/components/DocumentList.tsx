import React from 'react';
import { SearchIcon, FolderIcon, FileTextIcon, PlusIcon } from 'lucide-react';
const DocumentList = () => {
  // Mock data for documents
  const folders = [{
    id: 1,
    name: 'Network Infrastructure',
    count: 12
  }, {
    id: 2,
    name: 'Server Documentation',
    count: 8
  }, {
    id: 3,
    name: 'Standard Operating Procedures',
    count: 15
  }, {
    id: 4,
    name: 'Disaster Recovery',
    count: 6
  }, {
    id: 5,
    name: 'Client Documentation',
    count: 24
  }];
  const recentDocuments = [{
    id: 1,
    name: 'Network Diagram',
    folder: 'Network Infrastructure',
    updatedBy: 'John Smith',
    lastUpdated: '2023-06-15'
  }, {
    id: 2,
    name: 'Server Backup Procedure',
    folder: 'Server Documentation',
    updatedBy: 'Sarah Johnson',
    lastUpdated: '2023-06-10'
  }, {
    id: 3,
    name: 'New Employee Onboarding',
    folder: 'Standard Operating Procedures',
    updatedBy: 'Mike Brown',
    lastUpdated: '2023-06-08'
  }, {
    id: 4,
    name: 'Disaster Recovery Plan',
    folder: 'Disaster Recovery',
    updatedBy: 'Emily Davis',
    lastUpdated: '2023-05-30'
  }, {
    id: 5,
    name: 'Client XYZ Setup',
    folder: 'Client Documentation',
    updatedBy: 'John Smith',
    lastUpdated: '2023-05-25'
  }];
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Documents</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition flex items-center space-x-2">
          <PlusIcon className="h-5 w-5" />
          <span>Add Document</span>
        </button>
      </div>
      <div className="relative w-full md:w-96">
        <input type="text" placeholder="Search documents..." className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="font-semibold text-gray-800">Document Folders</h2>
          </div>
          <div className="p-6 space-y-4">
            {folders.map(folder => <div key={folder.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <FolderIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">{folder.name}</p>
                    <p className="text-xs text-gray-500">
                      {folder.count} documents
                    </p>
                  </div>
                </div>
                <div className="text-gray-400 hover:text-gray-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>)}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="font-semibold text-gray-800">Recent Documents</h2>
          </div>
          <div className="p-6 space-y-4">
            {recentDocuments.map(doc => <div key={doc.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <FileTextIcon className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium">{doc.name}</p>
                    <div className="flex items-center text-xs text-gray-500 space-x-1">
                      <span>{doc.folder}</span>
                      <span>•</span>
                      <span>Updated by {doc.updatedBy}</span>
                      <span>•</span>
                      <span>{doc.lastUpdated}</span>
                    </div>
                  </div>
                </div>
                <div className="text-gray-400 hover:text-gray-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>)}
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="font-semibold text-gray-800">All Documents</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Folder
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Updated By
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Updated
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentDocuments.map(doc => <tr key={doc.id} className="hover:bg-gray-50 cursor-pointer">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <FileTextIcon className="h-5 w-5 text-gray-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {doc.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{doc.folder}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {doc.updatedBy}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {doc.lastUpdated}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};
export default DocumentList;
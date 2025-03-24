import React from 'react';
import { MonitorIcon, FileTextIcon, KeyIcon, AlertTriangleIcon, ServerIcon, WifiIcon } from 'lucide-react';
const Dashboard = () => {
  // Mock data for dashboard
  const stats = [{
    title: 'Total Assets',
    value: '247',
    icon: <MonitorIcon className="h-6 w-6" />,
    color: 'bg-blue-500'
  }, {
    title: 'Documents',
    value: '183',
    icon: <FileTextIcon className="h-6 w-6" />,
    color: 'bg-green-500'
  }, {
    title: 'Passwords',
    value: '92',
    icon: <KeyIcon className="h-6 w-6" />,
    color: 'bg-purple-500'
  }, {
    title: 'Alerts',
    value: '5',
    icon: <AlertTriangleIcon className="h-6 w-6" />,
    color: 'bg-red-500'
  }];
  const recentActivity = [{
    user: 'John Smith',
    action: 'updated',
    item: 'Server Documentation',
    time: '10 minutes ago'
  }, {
    user: 'Sarah Johnson',
    action: 'added',
    item: 'New Firewall Credentials',
    time: '1 hour ago'
  }, {
    user: 'Mike Brown',
    action: 'deleted',
    item: 'Old Printer Asset',
    time: '3 hours ago'
  }, {
    user: 'Emily Davis',
    action: 'viewed',
    item: 'Network Diagram',
    time: 'Yesterday'
  }];
  const expiringItems = [{
    type: 'Certificate',
    name: 'wildcard.company.com',
    expires: '7 days'
  }, {
    type: 'License',
    name: 'Windows Server 2019',
    expires: '30 days'
  }, {
    type: 'Domain',
    name: 'company.com',
    expires: '45 days'
  }];
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          Add New Item
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => <div key={index} className="bg-white rounded-lg shadow p-6 flex items-center space-x-4">
            <div className={`${stat.color} rounded-full p-3 text-white`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500">{stat.title}</p>
              <p className="text-2xl font-semibold">{stat.value}</p>
            </div>
          </div>)}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="font-semibold text-gray-800">Recent Activity</h2>
          </div>
          <div className="p-6 space-y-4">
            {recentActivity.map((item, index) => <div key={index} className="flex items-start space-x-3">
                <div className="bg-gray-100 rounded-full p-2">
                  <UserInitial name={item.user} />
                </div>
                <div>
                  <p className="text-sm">
                    <span className="font-medium">{item.user}</span>{' '}
                    <span className="text-gray-500">{item.action}</span>{' '}
                    <span className="font-medium">{item.item}</span>
                  </p>
                  <p className="text-xs text-gray-500">{item.time}</p>
                </div>
              </div>)}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="font-semibold text-gray-800">Expiring Items</h2>
          </div>
          <div className="p-6 space-y-4">
            {expiringItems.map((item, index) => <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {item.type === 'Certificate' && <div className="bg-yellow-100 p-2 rounded-full">
                      <KeyIcon className="h-5 w-5 text-yellow-600" />
                    </div>}
                  {item.type === 'License' && <div className="bg-blue-100 p-2 rounded-full">
                      <FileTextIcon className="h-5 w-5 text-blue-600" />
                    </div>}
                  {item.type === 'Domain' && <div className="bg-green-100 p-2 rounded-full">
                      <ServerIcon className="h-5 w-5 text-green-600" />
                    </div>}
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.type}</p>
                  </div>
                </div>
                <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                  Expires in {item.expires}
                </div>
              </div>)}
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="font-semibold text-gray-800">Network Status</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <NetworkStatusCard name="Main Server" status="Online" icon={<ServerIcon />} statusColor="bg-green-500" />
            <NetworkStatusCard name="Backup Server" status="Online" icon={<ServerIcon />} statusColor="bg-green-500" />
            <NetworkStatusCard name="Primary Network" status="Degraded" icon={<WifiIcon />} statusColor="bg-yellow-500" />
            <NetworkStatusCard name="VPN Service" status="Online" icon={<WifiIcon />} statusColor="bg-green-500" />
          </div>
        </div>
      </div>
    </div>;
};
const UserInitial = ({
  name
}) => {
  const initial = name.charAt(0).toUpperCase();
  return <div className="w-6 h-6 flex items-center justify-center text-gray-600">
      {initial}
    </div>;
};
const NetworkStatusCard = ({
  name,
  status,
  icon,
  statusColor
}) => {
  return <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="text-gray-500">{icon}</div>
          <div>
            <p className="font-medium">{name}</p>
            <div className="flex items-center space-x-1">
              <div className={`w-2 h-2 rounded-full ${statusColor}`}></div>
              <p className="text-xs text-gray-500">{status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Dashboard;
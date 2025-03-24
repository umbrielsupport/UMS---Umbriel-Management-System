import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import AssetList from './components/AssetList';
import DocumentList from './components/DocumentList';
import PasswordVault from './components/PasswordVault';
import KnowledgeBase from './components/KnowledgeBase';
import OrganizationList from './components/organizations/OrganizationList';
import { OrganizationProvider } from './contexts/OrganizationContext';
export function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'assets':
        return <AssetList />;
      case 'documents':
        return <DocumentList />;
      case 'passwords':
        return <PasswordVault />;
      case 'knowledge':
        return <KnowledgeBase />;
      case 'organizations':
        return <OrganizationList />;
      default:
        return <Dashboard />;
    }
  };
  return <OrganizationProvider>
      <Layout currentView={currentView} setCurrentView={setCurrentView}>
        {renderContent()}
      </Layout>
    </OrganizationProvider>;
}
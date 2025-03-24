import React, { useState, createContext, useContext } from 'react';
interface Organization {
  id: string;
  name: string;
  logo?: string;
}
interface OrganizationContextType {
  currentOrganization: Organization | null;
  organizations: Organization[];
  setCurrentOrganization: (org: Organization) => void;
  addOrganization: (org: Organization) => void;
}
const OrganizationContext = createContext<OrganizationContextType | undefined>(undefined);
export const OrganizationProvider = ({
  children
}) => {
  const [organizations, setOrganizations] = useState<Organization[]>([{
    id: '1',
    name: 'Acme Corp'
  }, {
    id: '2',
    name: 'Tech Solutions Inc'
  }, {
    id: '3',
    name: 'Digital Services Ltd'
  }]);
  const [currentOrganization, setCurrentOrganization] = useState<Organization | null>(organizations[0]);
  const addOrganization = (newOrg: Organization) => {
    setOrganizations([...organizations, newOrg]);
  };
  return <OrganizationContext.Provider value={{
    currentOrganization,
    organizations,
    setCurrentOrganization,
    addOrganization
  }}>
      {children}
    </OrganizationContext.Provider>;
};
export const useOrganization = () => {
  const context = useContext(OrganizationContext);
  if (context === undefined) {
    throw new Error('useOrganization must be used within an OrganizationProvider');
  }
  return context;
};
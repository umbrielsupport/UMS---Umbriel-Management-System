import React from 'react';
import { SearchIcon, BookOpenIcon, StarIcon, ClockIcon, PlusIcon } from 'lucide-react';
const KnowledgeBase = () => {
  // Mock data for knowledge base articles
  const featuredArticles = [{
    id: 1,
    title: 'How to Reset User Passwords',
    excerpt: 'Step-by-step guide for resetting user passwords in Active Directory...',
    author: 'John Smith',
    date: 'June 10, 2023',
    tags: ['Active Directory', 'Security']
  }, {
    id: 2,
    title: 'Network Troubleshooting Guide',
    excerpt: 'Common network issues and how to diagnose them efficiently...',
    author: 'Sarah Johnson',
    date: 'May 28, 2023',
    tags: ['Networking', 'Troubleshooting']
  }, {
    id: 3,
    title: 'Server Backup Procedures',
    excerpt: 'Detailed backup procedures for all company servers...',
    author: 'Mike Brown',
    date: 'June 5, 2023',
    tags: ['Servers', 'Backup']
  }];
  const recentArticles = [{
    id: 4,
    title: 'VPN Setup for Remote Workers',
    excerpt: 'How to set up and configure VPN access for remote employees...',
    author: 'Emily Davis',
    date: 'June 15, 2023',
    tags: ['VPN', 'Remote Work']
  }, {
    id: 5,
    title: 'Microsoft 365 License Management',
    excerpt: 'Best practices for managing Microsoft 365 licenses and subscriptions...',
    author: 'John Smith',
    date: 'June 12, 2023',
    tags: ['Microsoft 365', 'Licensing']
  }, {
    id: 6,
    title: 'New Employee IT Onboarding',
    excerpt: 'Complete checklist for IT setup for new employees...',
    author: 'Sarah Johnson',
    date: 'June 8, 2023',
    tags: ['Onboarding', 'Procedures']
  }];
  const categories = [{
    name: 'Procedures',
    count: 24
  }, {
    name: 'Troubleshooting',
    count: 18
  }, {
    name: 'Security',
    count: 15
  }, {
    name: 'Networking',
    count: 12
  }, {
    name: 'Servers',
    count: 10
  }, {
    name: 'Cloud Services',
    count: 8
  }, {
    name: 'Software',
    count: 14
  }, {
    name: 'Hardware',
    count: 9
  }];
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Knowledge Base</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition flex items-center space-x-2">
          <PlusIcon className="h-5 w-5" />
          <span>New Article</span>
        </button>
      </div>
      <div className="relative w-full md:w-96">
        <input type="text" placeholder="Search knowledge base..." className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center space-x-2">
              <StarIcon className="h-5 w-5 text-yellow-500" />
              <h2 className="font-semibold text-gray-800">Featured Articles</h2>
            </div>
            <div className="p-6 space-y-6">
              {featuredArticles.map(article => <ArticleCard key={article.id} article={article} />)}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center space-x-2">
              <ClockIcon className="h-5 w-5 text-blue-500" />
              <h2 className="font-semibold text-gray-800">Recent Articles</h2>
            </div>
            <div className="p-6 space-y-6">
              {recentArticles.map(article => <ArticleCard key={article.id} article={article} />)}
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="font-semibold text-gray-800">Categories</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {categories.map(category => <li key={category.name}>
                    <a href="#" className="flex items-center justify-between text-gray-700 hover:text-blue-500">
                      <span>{category.name}</span>
                      <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {category.count}
                      </span>
                    </a>
                  </li>)}
              </ul>
            </div>
          </div>
          <div className="bg-blue-50 rounded-lg shadow p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <BookOpenIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Need Help?</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Can't find what you're looking for? Contact the IT support team
              for assistance.
            </p>
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>;
};
const ArticleCard = ({
  article
}) => {
  return <div className="border border-gray-100 rounded-lg p-5 hover:shadow-md transition">
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        <a href="#" className="hover:text-blue-600">
          {article.title}
        </a>
      </h3>
      <p className="text-gray-600 mb-4">{article.excerpt}</p>
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          By {article.author} • {article.date}
        </div>
        <div className="flex space-x-2">
          {article.tags.map(tag => <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
              {tag}
            </span>)}
        </div>
      </div>
    </div>;
};
export default KnowledgeBase;
import React from 'react';

interface ChatTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const ChatTabs: React.FC<ChatTabsProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'all', label: 'الكل' },
    { id: 'rooms', label: 'الغرف' },
    { id: 'private', label: 'خاص' },
  ];

  return (
    <div className="flex border-b mb-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`px-6 py-3 text-sm font-medium ${
            activeTab === tab.id
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default ChatTabs;
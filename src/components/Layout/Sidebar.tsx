import React from 'react';
import { NavLink } from 'react-router-dom';
import { ChatBubbleLeftRightIcon, UserGroupIcon, ChatBubbleOvalLeftIcon, HomeIcon, NewspaperIcon } from '@heroicons/react/24/outline';

const Sidebar: React.FC = () => {
  const navItems = [
    { path: '/', icon: HomeIcon, label: 'الرئيسية' },
    { path: '/friends', icon: UserGroupIcon, label: 'الأصدقاء' },
    { path: '/chats', icon: ChatBubbleLeftRightIcon, label: 'المحادثات' },
    { path: '/rooms', icon: ChatBubbleOvalLeftIcon, label: 'الغرف' },
    { path: '/posts', icon: NewspaperIcon, label: 'المنشورات' },
  ];

  return (
    <div className="w-64 bg-white shadow-lg h-screen fixed right-0 rtl">
      <div className="p-4">
        <div className="space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <item.icon className="h-6 w-6" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
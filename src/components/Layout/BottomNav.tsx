import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/utils/cn';
import {
  HomeIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  ChatBubbleOvalLeftIcon,
  NewspaperIcon
} from '@heroicons/react/24/outline';

const navItems = [
  { path: '/', icon: HomeIcon, label: 'الرئيسية' },
  { path: '/friends', icon: UserGroupIcon, label: 'الأصدقاء' },
  { path: '/chats', icon: ChatBubbleLeftRightIcon, label: 'المحادثات' },
  { path: '/rooms', icon: ChatBubbleOvalLeftIcon, label: 'الغرف' },
  { path: '/posts', icon: NewspaperIcon, label: 'المنشورات' },
];

const BottomNav: React.FC = () => {
  return (
    <nav className="fixed bottom-0 right-0 left-0 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-around">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'flex flex-col items-center py-2 px-3 text-sm',
                  isActive
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                )
              }
            >
              <item.icon className="h-6 w-6" />
              <span className="mt-1 text-xs">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
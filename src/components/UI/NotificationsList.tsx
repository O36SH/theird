import React from 'react';
import { useNotifications } from '@/hooks/useNotifications';
import { formatRelativeTime } from '@/utils/date';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';

const NotificationsList: React.FC = () => {
  const { notifications, markAsRead } = useNotifications();

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <ExclamationCircleIcon className="h-5 w-5 text-yellow-500" />;
      case 'error':
        return <XCircleIcon className="h-5 w-5 text-red-500" />;
      default:
        return <InformationCircleIcon className="h-5 w-5 text-blue-500" />;
    }
  };

  if (notifications.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        لا توجد إشعارات جديدة
      </div>
    );
  }

  return (
    <div className="divide-y">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={cn(
            'p-4 hover:bg-gray-50 transition-colors cursor-pointer',
            !notification.read && 'bg-blue-50'
          )}
          onClick={() => markAsRead(notification.id)}
        >
          <div className="flex items-start space-x-3">
            {getIcon(notification.type)}
            <div className="flex-1">
              <h4 className="font-medium">{notification.title}</h4>
              <p className="text-sm text-gray-600">{notification.message}</p>
              <span className="text-xs text-gray-500">
                {formatRelativeTime(notification.timestamp)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationsList;
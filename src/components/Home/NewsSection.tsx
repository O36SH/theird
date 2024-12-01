import React from 'react';
import { CalendarIcon, UserGroupIcon, SparklesIcon } from '@heroicons/react/24/outline';

const NewsSection: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      title: 'تحديث جديد للتطبيق',
      description: 'تم إضافة ميزات جديدة للمحادثات الجماعية وتحسين الأداء',
      date: '2024/03/20',
      type: 'تحديث',
      icon: SparklesIcon,
    },
    {
      id: 2,
      title: 'فعالية المستخدمين القادمة',
      description: 'انضم إلينا في مسابقة أفضل غرفة محادثة لهذا الشهر',
      date: '2024/03/25',
      type: 'فعالية',
      icon: CalendarIcon,
    },
    {
      id: 3,
      title: 'وصلنا إلى مليون مستخدم',
      description: 'شكراً لكم على ثقتكم بنا وانضمامكم لمجتمعنا المتنامي',
      date: '2024/03/18',
      type: 'إنجاز',
      icon: UserGroupIcon,
    },
  ];

  return (
    <div className="space-y-4">
      {newsItems.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
        >
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <item.icon className="w-6 h-6 text-green-600" />
              </div>
            </div>
            
            <div className="mr-4 flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <span className="text-sm text-gray-500">{item.date}</span>
              </div>
              
              <p className="text-gray-600">{item.description}</p>
              
              <div className="mt-4 flex items-center">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                  {item.type}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsSection;
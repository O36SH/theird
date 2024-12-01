import React from 'react';
import StoreIcon from './StoreIcon';

const StoreSection: React.FC = () => {
  const storeItems = [
    {
      id: 1,
      name: 'الباقة الذهبية',
      description: 'مميزات حصرية وإمكانيات متقدمة',
      price: 49.99,
      features: ['دردشة بدون إعلانات', 'مميزات VIP', 'دعم فني متميز'],
      popular: true,
      icon: 'gift',
    },
    {
      id: 2,
      name: 'باقة المحادثات المتقدمة',
      description: 'تجربة محادثات متطورة',
      price: 29.99,
      features: ['غرف خاصة غير محدودة', 'تخصيص متقدم', 'مشاركة ملفات كبيرة'],
      popular: false,
      icon: 'bag',
    },
    {
      id: 3,
      name: 'حزمة الرموز التعبيرية',
      description: 'مجموعة حصرية من الرموز',
      price: 9.99,
      features: ['رموز حصرية', 'تحديثات شهرية', 'تصميمات مخصصة'],
      popular: false,
      icon: 'tag',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {storeItems.map((item) => (
        <div
          key={item.id}
          className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 relative ${
            item.popular ? 'border-2 border-blue-500' : 'border'
          }`}
        >
          {item.popular && (
            <div className="absolute -top-3 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
              <StoreIcon type="sparkles" className="w-4 h-4 ml-1" />
              الأكثر شعبية
            </div>
          )}

          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
            <StoreIcon type={item.icon as 'bag' | 'gift' | 'tag'} className="w-6 h-6 text-blue-600" />
          </div>

          <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
          <p className="text-gray-600 text-sm mb-4">{item.description}</p>
          
          <div className="mb-4">
            <span className="text-2xl font-bold">${item.price}</span>
          </div>

          <ul className="space-y-2 mb-6">
            {item.features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full ml-2"></span>
                {feature}
              </li>
            ))}
          </ul>

          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
            شراء الآن
          </button>
        </div>
      ))}
    </div>
  );
};

export default StoreSection;
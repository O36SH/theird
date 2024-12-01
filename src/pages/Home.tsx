import React from 'react';
import UserProfileCard from '../components/Home/UserProfileCard';
import StoreSection from '../components/Home/StoreSection';
import NewsSection from '../components/Home/NewsSection';
import { User } from '../types';

const Home: React.FC = () => {
  // Mock user data - in a real app, this would come from your auth/user context
  const currentUser: User = {
    id: 123456,
    nickname: 'Ahmed_M',
    status: 'متصل',
    level: 5,
    experience: 750,
    maxExperience: 1000
  };

  return (
    <div className="p-6">
      {/* User Profile Card */}
      <UserProfileCard user={currentUser} />
      
      {/* Store Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
          المتجر
        </h2>
        <StoreSection />
      </section>

      {/* News Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
          أحدث الأخبار
        </h2>
        <NewsSection />
      </section>
    </div>
  );
};

export default Home;
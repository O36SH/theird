import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../../types';
import LevelProgress from '../Profile/LevelProgress';

interface UserProfileCardProps {
  user: User;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate('/profile')}
      className="bg-white rounded-lg shadow-sm p-6 mb-8 cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="flex items-center space-x-4">
        <div className="relative">
          {user.avatar ? (
            <img
              src={user.avatar}
              alt={user.nickname}
              className="w-16 h-16 rounded-full object-cover"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-xl">{user.nickname[0]}</span>
            </div>
          )}
          <span 
            className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white
              ${user.status === 'متصل' ? 'bg-green-500' : 'bg-gray-400'}`}
          />
        </div>
        
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-3">{user.nickname}</h2>
          <LevelProgress
            level={user.level}
            experience={user.experience}
            maxExperience={user.maxExperience}
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
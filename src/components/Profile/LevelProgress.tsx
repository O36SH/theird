import React from 'react';

interface LevelProgressProps {
  level: number;
  experience: number;
  maxExperience: number;
}

const LevelProgress: React.FC<LevelProgressProps> = ({ level, experience, maxExperience }) => {
  const progress = (experience / maxExperience) * 100;

  return (
    <div className="text-center">
      <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
        <span>المستوى {level}</span>
        <span>{experience}/{maxExperience} نقطة</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default LevelProgress;
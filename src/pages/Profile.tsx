import React, { useState } from 'react';
import type { User } from '../types';
import ImageUpload from '../components/Profile/ImageUpload';
import LevelProgress from '../components/Profile/LevelProgress';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<User>({
    id: 123456,
    nickname: 'Ahmed_M',
    status: 'متصل',
    name: '',
    email: '',
    phone: '',
    bio: '',
    gender: undefined,
    birthDate: undefined,
    avatar: undefined,
    level: 5,
    experience: 750,
    maxExperience: 1000
  });

  const [visibleSections, setVisibleSections] = useState({
    basic: true,
    contact: true,
    personal: true
  });

  const toggleSection = (section: keyof typeof visibleSections) => {
    setVisibleSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleImageChange = (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    setProfile({ ...profile, avatar: imageUrl });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add profile update logic here
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">الملف الشخصي</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-6 text-center">
          <ImageUpload
            currentImage={profile.avatar}
            onImageChange={handleImageChange}
          />
          <h2 className="text-xl font-semibold">{profile.nickname}</h2>
          <p className="text-gray-500 text-sm mb-3">{profile.id}</p>
          <LevelProgress
            level={profile.level}
            experience={profile.experience}
            maxExperience={profile.maxExperience}
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="border rounded-lg">
            <button
              type="button"
              className="w-full p-4 flex justify-between items-center text-right"
              onClick={() => toggleSection('basic')}
            >
              <span className="font-semibold">المعلومات الأساسية</span>
              {visibleSections.basic ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
            </button>
            
            {visibleSections.basic && (
              <div className="p-4 border-t space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">
                    الاسم المستعار
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={profile.nickname}
                    onChange={(e) => setProfile({ ...profile, nickname: e.target.value })}
                    required
                    className="w-full p-2 border rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    الاسم الكامل
                    <span className="text-gray-400 text-sm mr-2">(اختياري)</span>
                  </label>
                  <input
                    type="text"
                    value={profile.name || ''}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    نبذة شخصية
                    <span className="text-gray-400 text-sm mr-2">(اختياري)</span>
                  </label>
                  <textarea
                    value={profile.bio || ''}
                    onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                    className="w-full p-2 border rounded-lg"
                    rows={4}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="border rounded-lg">
            <button
              type="button"
              className="w-full p-4 flex justify-between items-center text-right"
              onClick={() => toggleSection('contact')}
            >
              <span className="font-semibold">معلومات الاتصال</span>
              {visibleSections.contact ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
            </button>
            
            {visibleSections.contact && (
              <div className="p-4 border-t space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">
                    البريد الإلكتروني
                    <span className="text-gray-400 text-sm mr-2">(اختياري)</span>
                  </label>
                  <input
                    type="email"
                    value={profile.email || ''}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    رقم الهاتف
                    <span className="text-gray-400 text-sm mr-2">(اختياري)</span>
                  </label>
                  <input
                    type="tel"
                    value={profile.phone || ''}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Personal Information */}
          <div className="border rounded-lg">
            <button
              type="button"
              className="w-full p-4 flex justify-between items-center text-right"
              onClick={() => toggleSection('personal')}
            >
              <span className="font-semibold">المعلومات الشخصية</span>
              {visibleSections.personal ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
            </button>
            
            {visibleSections.personal && (
              <div className="p-4 border-t space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">
                    الجنس
                    <span className="text-gray-400 text-sm mr-2">(اختياري)</span>
                  </label>
                  <select
                    value={profile.gender || ''}
                    onChange={(e) => setProfile({ ...profile, gender: e.target.value as User['gender'] || undefined })}
                    className="w-full p-2 border rounded-lg"
                  >
                    <option value="">اختر الجنس</option>
                    <option value="ذكر">ذكر</option>
                    <option value="أنثى">أنثى</option>
                    <option value="آخر">آخر</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    تاريخ الميلاد
                    <span className="text-gray-400 text-sm mr-2">(اختياري)</span>
                  </label>
                  <input
                    type="date"
                    value={profile.birthDate || ''}
                    onChange={(e) => setProfile({ ...profile, birthDate: e.target.value })}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            حفظ التغييرات
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
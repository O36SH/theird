import React, { useRef } from 'react';
import { UserCircleIcon, CameraIcon } from '@heroicons/react/24/outline';

interface ImageUploadProps {
  currentImage?: string;
  onImageChange: (file: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ currentImage, onImageChange }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageChange(file);
    }
  };

  return (
    <div className="relative w-32 h-32 mx-auto mb-4">
      {currentImage ? (
        <img
          src={currentImage}
          alt="الصورة الشخصية"
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        <UserCircleIcon className="w-full h-full text-gray-300" />
      )}
      
      <button
        type="button"
        onClick={handleClick}
        className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full text-white hover:bg-blue-600 transition-colors"
      >
        <CameraIcon className="w-5 h-5" />
      </button>
      
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default ImageUpload;
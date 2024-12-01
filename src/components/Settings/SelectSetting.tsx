import React from 'react';

interface SelectSettingProps {
  label: string;
  description?: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

const SelectSetting: React.FC<SelectSettingProps> = ({
  label,
  description,
  value,
  options,
  onChange,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <span className="text-gray-700 block">{label}</span>
        {description && (
          <span className="text-gray-500 text-sm">{description}</span>
        )}
      </div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded-lg p-2"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectSetting;
import React, { useState } from 'react';
import SettingsSection from '../components/Settings/SettingsSection';
import ToggleSetting from '../components/Settings/ToggleSetting';
import SelectSetting from '../components/Settings/SelectSetting';

const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    // عام
    language: 'ar',
    darkMode: false,
    rtl: true,
    fontSize: 'medium',

    // الإشعارات
    notifications: true,
    soundEnabled: true,
    messagePreview: true,
    emailNotifications: false,

    // الخصوصية
    privacy: 'friends',
    lastSeen: 'everyone',
    profilePhoto: 'friends',
    onlineStatus: true,

    // المحادثات
    autoPlayMedia: true,
    sendWithEnter: true,
    messageHistory: '1month',
    chatBackground: 'default',

    // الأمان
    twoFactorAuth: false,
    loginAlerts: true,
    deviceManagement: true,
    passwordChangeInterval: 'never',
  });

  const handleChange = (key: keyof typeof settings, value: any) => {
    setSettings({ ...settings, [key]: value });
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">الإعدادات</h1>

      <SettingsSection title="عام">
        <SelectSetting
          label="اللغة"
          value={settings.language}
          options={[
            { value: 'ar', label: 'العربية' },
            { value: 'en', label: 'English' },
          ]}
          onChange={(value) => handleChange('language', value)}
        />
        <ToggleSetting
          label="الوضع الليلي"
          description="تفعيل المظهر الداكن للتطبيق"
          value={settings.darkMode}
          onChange={(value) => handleChange('darkMode', value)}
        />
        <SelectSetting
          label="حجم الخط"
          value={settings.fontSize}
          options={[
            { value: 'small', label: 'صغير' },
            { value: 'medium', label: 'متوسط' },
            { value: 'large', label: 'كبير' },
          ]}
          onChange={(value) => handleChange('fontSize', value)}
        />
      </SettingsSection>

      <SettingsSection title="الإشعارات">
        <ToggleSetting
          label="الإشعارات"
          description="تفعيل الإشعارات داخل التطبيق"
          value={settings.notifications}
          onChange={(value) => handleChange('notifications', value)}
        />
        <ToggleSetting
          label="الأصوات"
          description="تفعيل أصوات الإشعارات"
          value={settings.soundEnabled}
          onChange={(value) => handleChange('soundEnabled', value)}
        />
        <ToggleSetting
          label="معاينة الرسائل"
          description="عرض محتوى الرسائل في الإشعارات"
          value={settings.messagePreview}
          onChange={(value) => handleChange('messagePreview', value)}
        />
        <ToggleSetting
          label="إشعارات البريد الإلكتروني"
          value={settings.emailNotifications}
          onChange={(value) => handleChange('emailNotifications', value)}
        />
      </SettingsSection>

      <SettingsSection title="الخصوصية">
        <SelectSetting
          label="من يمكنه رؤية ملفي الشخصي"
          value={settings.privacy}
          options={[
            { value: 'public', label: 'الجميع' },
            { value: 'friends', label: 'الأصدقاء فقط' },
            { value: 'private', label: 'لا أحد' },
          ]}
          onChange={(value) => handleChange('privacy', value)}
        />
        <SelectSetting
          label="آخر ظهور"
          value={settings.lastSeen}
          options={[
            { value: 'everyone', label: 'الجميع' },
            { value: 'friends', label: 'الأصدقاء فقط' },
            { value: 'nobody', label: 'لا أحد' },
          ]}
          onChange={(value) => handleChange('lastSeen', value)}
        />
        <ToggleSetting
          label="إظهار حالة الاتصال"
          value={settings.onlineStatus}
          onChange={(value) => handleChange('onlineStatus', value)}
        />
      </SettingsSection>

      <SettingsSection title="المحادثات">
        <ToggleSetting
          label="تشغيل الوسائط تلقائياً"
          value={settings.autoPlayMedia}
          onChange={(value) => handleChange('autoPlayMedia', value)}
        />
        <ToggleSetting
          label="إرسال بمفتاح Enter"
          value={settings.sendWithEnter}
          onChange={(value) => handleChange('sendWithEnter', value)}
        />
        <SelectSetting
          label="حفظ سجل المحادثات"
          value={settings.messageHistory}
          options={[
            { value: '1month', label: 'شهر واحد' },
            { value: '3months', label: '3 أشهر' },
            { value: '6months', label: '6 أشهر' },
            { value: 'forever', label: 'دائماً' },
          ]}
          onChange={(value) => handleChange('messageHistory', value)}
        />
      </SettingsSection>

      <SettingsSection title="الأمان">
        <ToggleSetting
          label="المصادقة الثنائية"
          description="تفعيل طبقة حماية إضافية لحسابك"
          value={settings.twoFactorAuth}
          onChange={(value) => handleChange('twoFactorAuth', value)}
        />
        <ToggleSetting
          label="تنبيهات تسجيل الدخول"
          description="إشعارك عند تسجيل الدخول من جهاز جديد"
          value={settings.loginAlerts}
          onChange={(value) => handleChange('loginAlerts', value)}
        />
        <SelectSetting
          label="تغيير كلمة المرور"
          value={settings.passwordChangeInterval}
          options={[
            { value: 'never', label: 'أبداً' },
            { value: '30days', label: 'كل 30 يوم' },
            { value: '90days', label: 'كل 90 يوم' },
            { value: '180days', label: 'كل 180 يوم' },
          ]}
          onChange={(value) => handleChange('passwordChangeInterval', value)}
        />
      </SettingsSection>
    </div>
  );
};

export default Settings;
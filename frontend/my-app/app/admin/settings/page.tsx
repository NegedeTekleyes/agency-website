"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [emailNotif, setEmailNotif] = useState(true);
  const [autoSave, setAutoSave] = useState(false);

  const handleSave = () => {
    alert("Settings saved!");
  };

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen text-black">

      {/* 🔥 HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-500 text-sm">
          Manage system preferences and configurations
        </p>
      </div>

      <div className="max-w-3xl space-y-6">

        {/* 🔥 GENERAL SETTINGS */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">General</h3>

          <div className="flex justify-between items-center py-3 border-b">
            <span>Enable Email Notifications</span>
            <input
              type="checkbox"
              checked={emailNotif}
              onChange={() => setEmailNotif(!emailNotif)}
            />
          </div>

          <div className="flex justify-between items-center py-3">
            <span>Auto Save Changes</span>
            <input
              type="checkbox"
              checked={autoSave}
              onChange={() => setAutoSave(!autoSave)}
            />
          </div>
        </div>

        {/* 🔥 SECURITY */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Security</h3>

          <button className="text-red-500 hover:underline">
            Change Password
          </button>
        </div>

        {/* 🔥 DANGER ZONE */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-red-200">
          <h3 className="text-lg font-semibold text-red-500 mb-4">
            Danger Zone
          </h3>

          <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
            Delete Account
          </button>
        </div>

        {/* SAVE */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="bg-black text-white px-6 py-2 rounded-lg"
          >
            Save Settings
          </button>
        </div>

      </div>
    </div>
  );
}
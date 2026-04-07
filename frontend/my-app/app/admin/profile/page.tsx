"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProfilePage() {
  const [name, setName] = useState("Admin User");
  const [email, setEmail] = useState("admin@example.com");

  const handleSave = () => {
    alert("Profile updated! (connect backend)");
  };

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen text-black">

      {/* 🔥 HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
        <p className="text-gray-500 text-sm">
          Manage your account information
        </p>
      </div>

      {/* 🔥 MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT: PROFILE CARD */}
        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
              <Image
                src="/profile.png"
                alt="profile"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>

            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-sm text-gray-500">{email}</p>

            <button className="mt-4 text-sm text-red-500 hover:underline">
              Change Photo
            </button>
          </div>
        </div>

        {/* RIGHT: FORM */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm space-y-6">
          
          <h3 className="text-lg font-semibold text-gray-800">
            Personal Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
              />
            </div>
          </div>

          {/* PASSWORD SECTION */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Change Password
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="password"
                placeholder="New Password"
                className="px-4 py-2 border rounded-lg"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="px-4 py-2 border rounded-lg"
              />
            </div>
          </div>

          {/* SAVE BUTTON */}
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Save Changes
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
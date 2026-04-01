"use client";

import { handleLogout } from "@/utils/logout";
import Image from "next/image";
import Link from "next/link";

export default function DashboardPage() {
  const menuItems = [
    {
      title: "MAIN",
      items: [
        { icon: "/icons/home.png", label: "Home", href: "/admin" },
        { icon: "/icons/analytics.png", label: "Analytics", href: "/analytics" },
        { icon: "/icons/report.svg", label: "Reports", href: "/services" },
        { icon: "/icons/bell.png", label: "Notifications", href: "/notifications" },
      ],
    },
    {
      title: "ACCOUNT",
      items: [
        { icon: "/icons/profile.png", label: "Profile", href: "/profile" },
        { icon: "/icons/setting.png", label: "Settings", href: "/settings" },
        {
          icon: "/icons/logout.png",
          label: "Logout",
          action: handleLogout,
        },
      ],
    },
  ];

  return (
    <div className="flex p-6 md:p-10 space-y-6 min-h-screen bg-white text-black">

      {/* ✅ SIDEBAR */}
      <aside className="w-64 bg-gray-300 shadow-md p-6 flex flex-col justify-between">
        
        <div>
          {/* Logo */}
          
          <h1 className="text-2xl font-bold text-red-500 mb-10">
            Admin
          </h1>

          {/* Menu */}
          <div className="space-y-8">
            {menuItems.map((section) => (
              <div key={section.title}>
                <p className="text-xs text-gray-400 uppercase mb-3">
                  {section.title}
                </p>

                <div className="flex flex-col gap-2">
                  {section.items.map((item) =>
                    item.action ? (
                      <button
                        key={item.label}
                        onClick={item.action}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-500 transition"
                      >
                        <Image
                          src={item.icon}
                          alt={item.label}
                          width={18}
                          height={18}
                        />
                        <span>{item.label}</span>
                      </button>
                    ) : (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-500 transition"
                      >
                        <Image
                          src={item.icon}
                          alt={item.label}
                          width={18}
                          height={18}
                        />
                        <span>{item.label}</span>
                      </Link>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-400 mt-10">
          © 2026 Admin Panel
        </p>
      </aside>

      {/* ✅ MAIN CONTENT */}
   <main className="flex-1 p-6 md:p-10 bg-gray-50 space-y-8">

  {/* 🔥 HEADER (FULL WIDTH TOP) */}
  <div>
    <h2 className="text-3xl font-bold text-gray-800">
      Dashboard Overview
    </h2>
    <p className="text-gray-500">
      Welcome back! Here's what's happening today.
    </p>
  </div>

  {/* 🔥 STATS SECTION */}
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
    
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-gray-500 text-sm">Total Services</h3>
      <p className="text-3xl font-bold text-gray-800 mt-2">12</p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-gray-500 text-sm">Blog Posts</h3>
      <p className="text-3xl font-bold text-gray-800 mt-2">8</p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-gray-500 text-sm">Messages</h3>
      <p className="text-3xl font-bold text-gray-800 mt-2">5</p>
    </div>

  </div>

  {/* 🔥 MAIN CONTENT (2 COLUMN BELOW HEADER) */}
  <div className="flex flex-col lg:flex-row gap-6">

    {/* LEFT SIDE */}
    <div className="flex-1 space-y-6">

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Quick Actions
        </h3>

        <div className="flex gap-4 flex-wrap">
          <button className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition">
            + Add Service
          </button>

          <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
            + New Blog Post
          </button>
        </div>
      </div>

      {/* Recent Messages */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Recent Messages
        </h3>

        <ul className="space-y-3 text-sm text-gray-600">
          <li>📩 New message from John</li>
          <li>📩 Inquiry about services</li>
          <li>📩 Client follow-up</li>
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Recent Posts
        </h3>

        <ul className="space-y-3 text-sm text-gray-600">
          <li>✔ Modern Web Design Trends</li>
          <li>✔ Why SEO Matters in 2026</li>
          <li>✔ Scalable Applications</li>
        </ul>
      </div>
    </div>

    {/* RIGHT SIDE */}
    {/* <div className="w-full lg:w-[350px] space-y-6"> */}


    {/* </div> */}

  </div>

</main>

    </div>
  );
}
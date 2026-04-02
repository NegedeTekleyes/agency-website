"use client"; // Add this if you use hooks or interactivity

import { useState } from "react";

export default function NewPostPage() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("draft");
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Handle image upload
  const handleImageChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  }
  // Form submission handler (placeholder)
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you would send data to your API
    console.log({
      title,
      excerpt,
      content,
      status,
    });
    alert("Post created! (Demo – connect to API)");
  };

  return (
   <div className="min-h-screen bg-gray-50 text-black">

      {/* 🔥 TOP BAR */}
      <div className="sticky top-0 z-10 bg-white  px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">New Post</h1>

        <div className="flex gap-3">
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 text-sm border rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg"
          >
            Save
          </button>
        </div>
      </div>

      {/* 🔥 MAIN LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-6 p-6">

        {/* LEFT (EDITOR) */}
        <div className="flex-1 bg-white p-6 rounded-xl shadow-sm space-y-6">

          {/* Title */}
          <input
            type="text"
            placeholder="Post title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full text-3xl font-bold outline-none"
          />

          {/* Excerpt */}
          <textarea
            placeholder="Write a short excerpt..."
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className="w-full text-gray-600 outline-none"
            rows={3}
          />

          {/* Content */}
          <textarea
            placeholder="Start writing your content..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full min-h-[300px] outline-none text-gray-800"
          />

        </div>

        {/* RIGHT (SETTINGS PANEL) */}
        <div className="w-full lg:w-[300px] space-y-6">

          {/* Status */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-sm font-semibold mb-3">Status</h3>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border p-2 rounded"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>

          {/* Image Upload */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-sm font-semibold mb-3">Featured Image</h3>

            <input type="file" onChange={handleImageChange} />

            {imagePreview && (
              <img
                src={imagePreview}
                className="mt-4 rounded-lg"
              />
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
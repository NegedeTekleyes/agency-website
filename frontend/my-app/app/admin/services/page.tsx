"use client";

import { useEffect, useState } from "react";

export default function ServicesPage() {
  const [services, setServices] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingService, setEditingService] = useState<any>(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "Active",
  });

  // ✅ FETCH SERVICES
  const fetchServices = async () => {
    const res = await fetch("http://localhost:5000/api/services");
    const data = await res.json();
    setServices(data);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // ✅ OPEN ADD MODAL
  const handleAdd = () => {
    setEditingService(null);
    setForm({ title: "", description: "", status: "Active" });
    setShowModal(true);
  };

  // ✅ OPEN EDIT MODAL
  const handleEdit = (service: any) => {
    setEditingService(service);
    setForm({
      title: service.title,
      description: service.description,
      status: service.status,
    });
    setShowModal(true);
  };

  // ✅ DELETE (API)
  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure?")) return;

    await fetch(`http://localhost:5000/api/services/${id}`, {
      method: "DELETE",
    });

    fetchServices();
  };

  // ✅ SAVE (ADD + UPDATE)
  const handleSave = async () => {
    if (!form.title || !form.description) return;

    if (editingService) {
      // 🔥 UPDATE
      await fetch(
        `http://localhost:5000/api/services/${editingService.id}`,
        {
          method: "PUT", // ✅ FIXED
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
    } else {
      // 🔥 CREATE
      await fetch("http://localhost:5000/api/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    }

    setShowModal(false);
    fetchServices();
  };

  return (
    <div className="p-6 md:p-10 text-black bg-gray-50 min-h-screen space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Services</h1>

        <button
          onClick={handleAdd} 
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
        >
          + Add Service
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">

        <div className="grid grid-cols-5 px-6 py-3 text-sm text-gray-500 bg-gray-100">
          <span>Service</span>
          <span>Description</span>
          <span>Status</span>
          <span>Created</span>
          <span className="text-right">Actions</span>
        </div>

        {services.map((service) => (
          <div
            key={service.id}
            className="grid grid-cols-5 px-6 py-4 items-center border-b"
          >
            <span>{service.title}</span>
            <span>{service.description}</span>

            <span>{service.status}</span>

            <span>{service.createdAt}</span>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => handleEdit(service)}
                className="text-blue-500 hover:underline"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(service.id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

          <div className="bg-white p-6 rounded-xl w-full max-w-md space-y-4">

            <h2 className="text-xl font-bold">
              {editingService ? "Edit Service" : "Add Service"}
            </h2>

            <input
              type="text"
              placeholder="Title"
              value={form.title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
              className="w-full border p-2 rounded"
            />

            <textarea
              placeholder="Description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="w-full border p-2 rounded"
            />

            <select
              value={form.status}
              onChange={(e) =>
                setForm({ ...form, status: e.target.value })
              }
              className="w-full border p-2 rounded"
            >
              <option>Active</option>
              <option>Draft</option>
            </select>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleSave}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Save
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
// import { useState, useEffect } from "react";

// interface Service {
//   id: string;
//   title: string;
//   description: string;
//   imageUrl?: string;
//   slug: string;
//   order: number;
// }

// interface ServiceFormModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onSave: (data: Partial<Service>) => void;
//   initialData?: Service | null;
// }

// export default function ServiceFormModal({
//   isOpen,
//   onClose,
//   onSave,
//   initialData,
// }: ServiceFormModalProps) {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const [order, setOrder] = useState(0);

//   useEffect(() => {
//     if (initialData) {
//       setTitle(initialData.title);
//       setDescription(initialData.description);
//       setImageUrl(initialData.imageUrl || "");
//       setOrder(initialData.order);
//     } else {
//       // Reset form for new service
//       setTitle("");
//       setDescription("");
//       setImageUrl("");
//       setOrder(0);
//     }
//   }, [initialData]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSave({ title, description, imageUrl: imageUrl || undefined, order });
//     onClose();
//   };

//   if (!isOpen) return null;

// return (
//   <div
//     className={`py-24 px-6 md:px-16 fixed inset-0 z-50 ${
//       isOpen ? "pointer-events-auto" : "pointer-events-none"
//     }`}
//   >
//     {/* Overlay */}
//     <div
//       onClick={onClose}
//       className={`absolute inset-0 bg-black/40 transition-opacity  ${
//         isOpen ? "opacity-100" : "opacity-0"
//       }`}
//     />

//     {/* Slide Panel */}
//     <div
//       className={`absolute top-0 right-0 h-full w-full md:w-[500px] bg-white shadow-2xl transform transition-transform duration-300 flex flex-col ${
//         isOpen ? "translate-x-0" : "translate-x-full"
//       }`}
//     >
//       {/* Header */}
//       <div className="p-6 border-b flex justify-between items-center">
//         <div>
//           <h2 className="text-2xl font-bold">
//             {initialData ? "Edit Service" : "New Service"}
//           </h2>
//           <p className="text-gray-500 text-sm">
//             Manage your service details
//           </p>
//         </div>

//         <button
//           onClick={onClose}
//           className="text-gray-400 hover:text-black text-xl"
//         >
//           ✕
//         </button>
//       </div>

//       {/* Body */}
//       <form
//         onSubmit={handleSubmit}
//         className="flex-1 overflow-y-auto p-6 space-y-6"
//       >
//         {/* Title */}
//         <div>
//           <label className="block text-sm font-medium mb-2">
//             Title
//           </label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//             className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none"
//           />
//         </div>

//         {/* Description */}
//         <div>
//           <label className="block text-sm font-medium mb-2">
//             Description
//           </label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             rows={5}
//             required
//             className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none"
//           />
//         </div>

//         {/* Image Preview */}
//         {imageUrl && (
//           <div className="border rounded-lg overflow-hidden">
//             <img
//               src={imageUrl}
//               alt="preview"
//               className="w-full h-40 object-cover"
//             />
//           </div>
//         )}

//         {/* Image URL */}
//         <div>
//           <label className="block text-sm font-medium mb-2">
//             Image URL
//           </label>
//           <input
//             type="url"
//             value={imageUrl}
//             onChange={(e) => setImageUrl(e.target.value)}
//             className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none"
//           />
//         </div>

//         {/* Order */}
//         <div>
//           <label className="block text-sm font-medium mb-2">
//             Display Order
//           </label>
//           <input
//             type="number"
//             value={order}
//             onChange={(e) => setOrder(parseInt(e.target.value))}
//             className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none"
//           />
//         </div>
//       </form>

//       {/* Footer */}
//       <div className="p-6 border-t flex justify-end gap-3 bg-white">
//         <button
//           onClick={onClose}
//           className="px-5 py-2 border rounded-lg text-gray-700 hover:bg-gray-100"
//         >
//           Cancel
//         </button>

//         <button
//           onClick={handleSubmit}
//           className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-black transition"
//         >
//           {initialData ? "Update" : "Create"}
//         </button>
//       </div>
//     </div>
//   </div>
// );
// }
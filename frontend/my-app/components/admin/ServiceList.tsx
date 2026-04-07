// import Image from "next/image";

// interface Service {
//   id: string;
//   title: string;
//   description: string;
//   imageUrl?: string;
//   slug: string;
//   order: number;
// }

// interface ServiceListProps {
//   services: Service[];
//   onEdit: (service: Service) => void;
//   onDelete: (id: string) => void;
// }

// export default function ServiceList({ services, onEdit, onDelete }: ServiceListProps) {
//   return (
//     <div className="bg-white rounded-xl shadow-sm overflow-hidden">
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Image
//             </th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Title
//             </th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Description
//             </th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Order
//             </th>
//             <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Actions
//             </th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {services.map((service) => (
//             <tr key={service.id}>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 {service.imageUrl ? (
//                   <Image
//                     src={service.imageUrl}
//                     alt={service.title}
//                     width={40}
//                     height={40}
//                     className="rounded-full object-cover"
//                   />
//                 ) : (
//                   <div className="w-10 h-10 bg-gray-200 rounded-full" />
//                 )}
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                 {service.title}
//               </td>
//               <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
//                 {service.description}
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                 {service.order}
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                 <button
//                   onClick={() => onEdit(service)}
//                   className="text-indigo-600 hover:text-indigo-900 mr-4"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => onDelete(service.id)}
//                   className="text-red-600 hover:text-red-900"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
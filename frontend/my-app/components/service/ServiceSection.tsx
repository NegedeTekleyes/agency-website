import { services } from "@/lib/services";
import Image from "next/image";

export default function ServiceSection() {
  return (
    <section className="py-24 px-6 md:px-16 bg-gray-50 text-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">Services.</h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-12">

          {services.map((services) => (
            <div key={services.id} className="text-center group">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 flex items-center justify-center bg-white rounded-2xl shadow-sm p-4 group-hover:scale-110 transition-transform">
                  <Image
                  src={services.image }
                  alt={services.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />  
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-3">{services.title}</h3>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              {services.description}
            </p>
              </div>
          ))}
          
         
        </div>
        </div>

    </section>
  );
}
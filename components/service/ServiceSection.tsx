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
          
          {/* Service 1 - Digital Analytics */}
          <div className="text-center group">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 flex items-center justify-center bg-white rounded-2xl shadow-sm p-4 group-hover:scale-110 transition-transform">
                <Image
                  src="/image1.png"
                  alt="Digital Analytics"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold mb-3">Digital Analytics</h3>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              We turn raw data into actionable insights. Our analytics solutions help you 
              understand customer behavior, track performance, and make smarter business decisions.
            </p>
          </div>

          {/* Service 2 - Creative Solution */}
          <div className="text-center group">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 flex items-center justify-center bg-white rounded-2xl shadow-sm p-4 group-hover:scale-110 transition-transform">
                <Image
                  src="/image2.png"
                  alt="Creative Solution"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold mb-3">Creative Solution</h3>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              From concept to execution, we craft visually stunning and strategically 
              sound creative solutions that help your brand stand out in a crowded market.
            </p>
          </div>

          {/* Service 3 - Brand Marketing */}
          <div className="text-center group">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 flex items-center justify-center bg-white rounded-2xl shadow-sm p-4 group-hover:scale-110 transition-transform">
                <Image
                  src="/image.png"
                  alt="Brand Marketing"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold mb-3">Brand Marketing</h3>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              We build powerful brand identities and execute targeted marketing campaigns 
              that increase awareness, engagement, and loyalty to your business.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
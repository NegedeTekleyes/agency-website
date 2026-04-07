import Image from "next/image";

export default function WhyUsSection() {
  return (
    <section className="py-24 px-6 md:px-16 bg-gray-50 text-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative  aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/image/man2.jpg"     
                alt="shega"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Build with us.
              We&apos;re a startup studio designed<br />
              for entrepreneurs to create and launch new companies.
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mt-12">
              
              {/* Service 1 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex-shrink-0 flex items-center justify-center">
                  📸
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Photography &amp; Portrait</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We capture stunning visuals that tell your brand story and connect emotionally with your audience.
                  </p>
                </div>
              </div>

              {/* Service 2 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex-shrink-0 flex items-center justify-center">
                  💻
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Website Development</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Fast, modern, and conversion-focused websites built with the latest technologies.
                  </p>
                </div>
              </div>

              {/* Service 3 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex-shrink-0 flex items-center justify-center">
                  📱
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Responsive Webdesign</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Beautiful, mobile-first designs that work perfectly across all devices.
                  </p>
                </div>
              </div>

              {/* Service 4 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex-shrink-0 flex items-center justify-center">
                  📣
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Digital Marketing</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Strategic digital campaigns that increase visibility, engagement, and growth.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
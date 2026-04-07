import Image from "next/image";

export default function PortifolioSection() {
    return (
        <section className="py-24 px-6 md:px-16 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* title */}
                <div className="text-center mb-16 ">
                    <h2 className="text-5xl font-bold text-black">Digital Works.</h2>
                </div>
                {/* portifolio grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* project 1 */}
                    <div className="group relative overflow-hidden rounded-3xl aspect-square">
                        <Image
                            src="/image/brand1.jpg"
                            alt="Brand Identity"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                        <div className="absolute bottom-8 left-8 text-white">
                            <p className="text-sm tracking-widest uppercase">Brand Identity</p>
                            <h3 className="text-3xl font-semibold mt-1">Orange Studio</h3>
                        </div>
                    </div>
                    {/* Project 2 */}
                    <div className="group relative overflow-hidden rounded-3xl aspect-square">
                        <Image
                            src="/image/brand2.jpg"
                            alt="Digital Branding"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                        <div className="absolute bottom-8 left-8 text-white">
                            <p className="text-sm tracking-widest uppercase">Digital Branding</p>
                            <h3 className="text-3xl font-semibold mt-1">Vintage Camera</h3>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="group relative overflow-hidden rounded-3xl aspect-square">
                        <Image
                            src="/image/brand3.jpg"
                            alt="Creative Logo"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                        <div className="absolute bottom-8 left-8 text-white">
                            <p className="text-sm tracking-widest uppercase">Creative Logo</p>
                            <h3 className="text-3xl font-semibold mt-1">Minimal Watch</h3>
                        </div>
                    </div>

                    {/* Project 4 */}
                    <div className="group relative overflow-hidden rounded-3xl aspect-square">
                        <Image
                            src="/image/brand4.jpg"
                            alt="Business Card"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                        <div className="absolute bottom-8 left-8 text-white">
                            <p className="text-sm tracking-widest uppercase">Business Card</p>
                            <h3 className="text-3xl font-semibold mt-1">Haters Studio</h3>
                        </div>
                    </div>

                    {/* Project 5 */}
                    <div className="group relative overflow-hidden rounded-3xl aspect-square">
                        <Image
                            src="/image/brand5.jpg"
                            alt="Kelas Branding"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                        <div className="absolute bottom-8 left-8 text-white">
                            <p className="text-sm tracking-widest uppercase">Kelas Branding</p>
                            <h3 className="text-3xl font-semibold mt-1">Pink Candy</h3>
                        </div>
                    </div>

                    {/* Project 6 */}
                    <div className="group relative overflow-hidden rounded-3xl aspect-square">
                        <Image
                            src="/image/brand6.jpg"
                            alt="Logo Design"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                        <div className="absolute bottom-8 left-8 text-white">
                            <p className="text-sm tracking-widest uppercase">Logo Design</p>
                            <h3 className="text-3xl font-semibold mt-1">Color Splash</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
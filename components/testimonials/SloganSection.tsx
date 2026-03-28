import Image from "next/image";


export default function SloganSection() {
    return (
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* Background Image with Red Overlay */}
      <div className="absolute inset-0">
        <img
          src="/image/sloga.jpg"    
          alt="Quote Background"
          className="w-full h-full object-cover"
        />
        {/* Red Overlay */}
        {/* <div className="absolute inset-0 bg-red-600/80"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-3xl md:text-5xl leading-tight font-light italic mb-8">
            “The Alternative To Good Design Is Always Bad Design. 
            There Is No Such Thing As No Design.”
          </p>
          
          <p className="text-lg md:text-xl text-white/90">
            — Adam Judge
          </p>
        </div>
      </div>
    </section>
    )
}
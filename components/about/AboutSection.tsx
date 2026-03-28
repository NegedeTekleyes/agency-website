export default function AboutSection() {
  return (
    <section className="py-24 px-6 md:px-16 bg-white text-black">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-[3fr_1fr] gap-16 items-center">

        {/* Left - Image */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We Create Digital Experiences
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            We are a creative agency focused on building modern and high-quality
            digital products. Our mission is to help brands grow through design,
            technology, and innovation.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            With a strong team of designers and developers, we deliver solutions
            that are not only visually appealing but also highly functional and
            scalable.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            With a strong team of designers and developers, we deliver solutions
            that are not only visually appealing but also highly functional and
            scalable.
          </p>

          {/* <button className="bg-red-500 text-white px-6 py-3 hover:bg-black transition">
            Learn More
          </button> */}
        </div>

  {/* Right - Content */}
        <div className="space-y-6">
          
          <div className="flex items-center gap-4">
            <span className="text-red-500">➤</span>
            <p className="uppercase text-sm tracking-wide">
              Efficiency, Creativity and Proximity
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-red-500">➤</span>
            <p className="uppercase text-sm tracking-wide">
              User Experience & Interface
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-red-500">➤</span>
            <p className="uppercase text-sm tracking-wide">
              Front End Development
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-red-500">➤</span>
            <p className="uppercase text-sm tracking-wide">
              Motion Design and Animations
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-red-500">➤</span>
            <p className="uppercase text-sm tracking-wide">
              Visual Branding
            </p>
          </div>
          </div>
      </div>
       <div className="mt-16 -mx-6 md:-mx-16 mx-6 overflow-hidden" >
          <img
            src="/image/about.jpg"
            alt="about"
            className="w-full h-[500px] md: h-[600px] object-cover"
          />
        </div>

    </section>
  );
}
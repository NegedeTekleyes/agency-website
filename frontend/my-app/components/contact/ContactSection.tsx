export default function ContactSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white text-black min-h-screen flex flex-col pt-24">
      <div className="max-w-3xl mx-auto w-full flex-1">
        {/* Header */}
        <div className="text-center mt-16 mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Let&apos;s Talk About Your Project
          </h2>
          <p className="text-gray-600 text-[17px] max-w-md mx-auto">
            Say Hello. If you want to extend some info, do not hesitate to fill this form, 
            we love to say &apos;Hello Mate&apos;.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div>
              <label className="block text-sm text-gray-500 mb-1.5">Your Name</label>
              <input
                type="text"
                className="w-full border-b border-gray-300 pb-3 focus:border-red-500 outline-none text-lg placeholder-gray-400"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1.5">Your Email</label>
              <input
                type="email"
                className="w-full border-b border-gray-300 pb-3 focus:border-red-500 outline-none text-lg placeholder-gray-400"
                placeholder="Your Email"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-1.5">Your Subject</label>
            <input
              type="text"
              className="w-full border-b border-gray-300 pb-3 focus:border-red-500 outline-none text-lg placeholder-gray-400"
              placeholder="Your Subject"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-2.5">Your Message</label>
            <textarea
              rows={5}
              className="w-full border-b border-gray-300 pb-3 focus:border-red-500 outline-none text-lg resize-y placeholder-gray-400"
              placeholder="Your Message"
            ></textarea>
          </div>

          {/* Send Button */}
          <div className="flex justify-center pt-8 mb-8">
            <button
              type="submit"
              className="px-8 sm:px-10 py-3 bg-red-500 hover:bg-black transition-colors text-white text-sm sm:text-base font-medium tracking-wider rounded-full"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Contact Information */}
      <div className="mt-24 border-t border-gray-100 pt-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-sm">
            <div className="text-center md:text-left">
              <p className="font-bold uppercase text-xs tracking-widest text-gray-400 mb-2">Visit Our Office</p>
              <p className="text-gray-700">Ethiopia, Addis Abeba, Megenagna</p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-bold uppercase text-xs tracking-widest text-gray-400 mb-2">Call Us</p>
              <p className="text-gray-700">+2519712345678</p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-bold uppercase text-xs tracking-widest text-gray-400 mb-2">Work Hour</p>
              <p className="text-gray-700">sunday to friday</p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-bold uppercase text-xs tracking-widest text-gray-400 mb-2">Email Us</p>
              <p className="text-gray-700">shega@websitename.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 w-full bg-black text-xs text-white tracking-widest">
  <div className="flex items-center justify-center min-h-[100px] px-4">
    <div className="max-w-5xl w-full mx-auto">
      <div className="flex flex-wrap md:flex-row justify-between items-center gap-6">
        <p>©Copyright Shega. All-Right Reserved</p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          <a href="#" className="hover:text-white transition-colors">Sitemap</a>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-white transition-colors"
        >
          ↑
        </button>
      </div>
    </div>
  </div>
</footer>
    </section>
  );
}
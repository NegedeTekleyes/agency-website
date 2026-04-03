

export default function TestimonialSection() {
    return (
        <section className="py-24 px-6 md:px-16 bg-gray-50 text-black">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                <h2 className="text-5xl font-bold">Our Customer Experience</h2>
                {/* testimonials grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* testimonial 1 */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm">
            <div className="text-red-500 text-5xl mb-6">“</div>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              The point of using lorem ipsum is that it has a more-or-less normal distribution of letters, 
              as opposed to using content here, making it look like readable English.
            </p>

            <div>
              <p className="font-semibold text-lg">Ben Stephenson</p>
              <p className="text-gray-500 text-sm">University Instructor</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <div className="text-red-500 text-5xl mb-6">“</div>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              The point of using lorem ipsum is that it has a more-or-less normal distribution of letters, 
              as opposed to using content here, making it look like readable English.
            </p>

            <div>
              <p className="font-semibold text-lg">Kyle Potter</p>
              <p className="text-gray-500 text-sm">Industrial Maintenance Worker</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <div className="text-red-500 text-5xl mb-6">“</div>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              The point of using lorem ipsum is that it has a more-or-less normal distribution of letters, 
              as opposed to using content here, making it look like readable English.
            </p>

            <div>
              <p className="font-semibold text-lg">Bailey Butler</p>
              <p className="text-gray-500 text-sm">Court Reporter</p>
            </div>
          </div>
                </div>
                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-12">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                </div>
                </div>
            </div>
        </section>
    )
}
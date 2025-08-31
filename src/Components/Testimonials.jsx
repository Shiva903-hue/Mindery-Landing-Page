import React from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "Aarav's Mom",
      role: "Parent",
      feedback:
        "Mindery has been a blessing for our family. My child is calmer, more focused, and enjoys the daily mindfulness activities.",
      avatar: "👩",
      gradient: "from-pink-400 to-rose-400"
    },
    {
      name: "Ms. Sharma",
      role: "Teacher",
      feedback:
        "I use Mindery in my classroom every morning. It helps students start the day with focus and positivity.",
      avatar: "👩‍🏫",
      gradient: "from-blue-400 to-indigo-400"
    },
    {
      name: "Riya",
      role: "Student",
      feedback:
        "I love the games and meditation exercises. They make me feel happy and relaxed before my exams!",
      avatar: "👧",
      gradient: "from-green-400 to-teal-400"
    },
  ];

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <div className="animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What Families Say
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Trusted by parents, teachers, and kids worldwide 🌍
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer relative overflow-hidden animate-fade-in-up"
              style={{ 
                animationDelay: `${400 + index * 200}ms`,
                animationFillMode: 'both'
              }}
            >
              {/* Background gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>

              {/* Quote marks decoration */}
              <div className="absolute top-4 left-4 text-6xl text-purple-100 group-hover:text-purple-200 transition-colors duration-300 transform group-hover:scale-110">
                "
              </div>

              <div className="relative z-10">
                {/* Avatar */}
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg group-hover:shadow-xl`}>
                    {testimonial.avatar}
                  </div>
                </div>

                {/* Feedback */}
                <p className="text-gray-700 italic leading-relaxed text-base group-hover:text-gray-800 transition-colors duration-300 transform group-hover:scale-105">
                  "{testimonial.feedback}"
                </p>

                {/* Author Info */}
                <div className="mt-6 transform transition-all duration-300 group-hover:translate-y-1">
                  <div className="text-purple-600 font-semibold text-lg group-hover:text-purple-700 transition-colors duration-300">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-100 transition-all duration-300"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-15 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-b-2xl`}></div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '1000ms', animationFillMode: 'both' }}>
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300">
              <span className="text-2xl">⭐</span>
              <span className="font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300">
              <span className="text-2xl">👨‍👩‍👧‍👦</span>
              <span className="font-medium">10,000+ Families</span>
            </div>
            <div className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300">
              <span className="text-2xl">🏫</span>
              <span className="font-medium">500+ Schools</span>
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
}

export default Testimonials;
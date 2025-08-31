import React from "react";

function Programs() {
  const programs = [
    {
      age: "4 – 6 Years",
      title: "Mindful Play",
      desc: "Fun activities and short practices that introduce young kids to mindfulness.",
      img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
      color: "from-pink-400 to-purple-500"
    },
    {
      age: "7 – 10 Years", 
      title: "Focus Builders",
      desc: "Engaging programs to build attention, emotional balance, and calmness.",
      img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400&h=300&fit=crop",
      color: "from-blue-400 to-indigo-500"
    },
    {
      age: "11 – 14 Years",
      title: "Teen Balance", 
      desc: "Helps pre-teens manage stress, grow empathy, and improve sleep habits.",
      img: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop",
      color: "from-green-400 to-teal-500"
    },
  ];

  return (
    <section id="programs" className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <div className="animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Programs for Every Age
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Mindfulness journeys tailored for kids of different age groups.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={program.age}
              className="group bg-white rounded-2xl shadow-md transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer relative overflow-hidden animate-fade-in-up"
              style={{ 
                animationDelay: `${300 + index * 200}ms`,
                animationFillMode: 'both'
              }}
            >
              {/* Image Container with Overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={program.img}
                  alt={program.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                {/* Age Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-purple-600 font-semibold text-xs">{program.age}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-left relative">
                <div className="transform transition-all duration-300 group-hover:translate-y-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-800 transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {program.desc}
                  </p>
                </div>

                {/* Animated bottom border */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* Card border glow effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-100 transition-all duration-300"></div>
              
              {/* Subtle shine effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
            </div>
          ))}
        </div>
      </div>

      {/*  */}
    </section>
  );
}

export default Programs;
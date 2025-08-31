import React from "react";

function ParentTeacherHub() {
  const features = [
    "Mindfulness tips for parents",
    "Classroom activities for teachers", 
    "Guides for managing stress at home",
    "Progress tracking for families"
  ];

  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="animate-fade-in-left">
          <div className="transform transition-all duration-300 hover:translate-x-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Parent & Teacher Hub
            </h2>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Mindery isn't just for kids — it's a support system for parents and
              teachers too. Get access to resources, guides, and programs designed
              to bring mindfulness into classrooms and homes.
            </p>
          </div>

          <ul className="mt-8 space-y-4">
            {features.map((feature, index) => (
              <li 
                key={feature}
                className="flex items-start text-gray-700 opacity-0 animate-fade-in-up group cursor-pointer"
                style={{ 
                  animationDelay: `${600 + index * 150}ms`,
                  animationFillMode: 'both'
                }}
              >
                <span className="text-purple-600 mr-3 mt-0.5 transform transition-all duration-300 group-hover:scale-125 group-hover:text-purple-700 group-hover:rotate-12">
                  ✔
                </span>
                <span className="group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '1200ms', animationFillMode: 'both' }}>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-xl font-medium text-white transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden group">
              <span className="relative z-10">Explore Resources</span>
              
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
              
              {/* Button pulse effect */}
              <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 animate-pulse"></div>
            </button>
          </div>
        </div>

         
        {/* Right Image */}
        <div className="relative animate-fade-in-right">
          <div className="relative w-full h-72 lg:h-96 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl group cursor-pointer overflow-hidden">
            
            {/* Animated background patterns */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-16 h-16 bg-purple-200 rounded-full animate-pulse-soft"></div>
              <div className="absolute top-20 right-16 w-12 h-12 bg-pink-200 rounded-full animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-16 left-20 w-10 h-10 bg-blue-200 rounded-full animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-10 right-10 w-14 h-14 bg-indigo-200 rounded-full animate-pulse-soft" style={{ animationDelay: '0.5s' }}></div>
            </div>

            {/* Central illustration placeholder with animation */}
            <div className="relative z-10 text-center transform transition-all duration-500 group-hover:scale-110">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mb-4 mx-auto transform transition-all duration-500 group-hover:rotate-12 group-hover:shadow-lg">
                <span className="text-white text-3xl font-bold">👨‍👩‍👧‍👦</span>
              </div>
              <span className="text-gray-500 text-sm font-medium group-hover:text-gray-600 transition-colors duration-300">
                Hub Illustration
              </span>
            </div>

            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-200 transition-all duration-300"></div>
            
            {/* Shine effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-15 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse-soft {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-pulse-soft {
          animation: pulse-soft 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default ParentTeacherHub;
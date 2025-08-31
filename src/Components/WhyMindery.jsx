import React from "react";

import { Lightbulb, Moon, Smile, Heart } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Build Focus",
    desc: "Helps kids improve attention span with fun mindfulness exercises.",
  },
  {
    icon: Moon,
    title: "Better Sleep",
    desc: "Guided meditations to relax and create healthy sleep routines.",
  },
  {
    icon: Smile,
    title: "Reduce Stress",
    desc: "Simple breathing techniques to calm down in tough moments.",
  },
  {
    icon: Heart,
    title: "Grow Empathy",
    desc: "Activities that develop kindness and emotional awareness.",
  },
];

function WhyMindery() {
  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 opacity-0 animate-fade-in-up">
          Why Mindery Kids?
        </h2>
        <p className="mt-4 text-gray-600 text-lg opacity-0 animate-fade-in-up delay-200">
          Mindery helps children grow with mindfulness practices backed by science.
        </p>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, index) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl hover:scale-105 hover:-translate-y-2 cursor-pointer group opacity-0 animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${400 + index * 150}ms` }}
            >
              {/* Subtle background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-purple-100 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
                  <f.icon className="w-10 h-10 text-purple-600 relative z-10 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:text-purple-700" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 transform transition-all duration-300 group-hover:text-purple-800 group-hover:scale-105">{f.title}</h3>
                <p className="mt-2 text-gray-600 text-sm transform transition-all duration-300 group-hover:text-gray-700">{f.desc}</p>
              </div>

              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-200 transition-all duration-300"></div>
              
              {/* Subtle shine effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-down {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        /* Hover animation for continuous floating effect */
        .group:hover .animate-float {
          animation-duration: 2s;
        }
      `}</style>
    </section>
  );
}

export default WhyMindery;
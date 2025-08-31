import React from "react";
import { Brain, Shield, Moon, Users } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "More Focus",
    desc: "Kids improve concentration and perform better in academics & hobbies.",
  },
  {
    icon: Shield,
    title: "Emotional Safety",
    desc: "Mindfulness builds resilience and helps kids manage emotions.",
  },
  {
    icon: Moon,
    title: "Better Sleep",
    desc: "Relaxation practices help children fall asleep faster and rest deeply.",
  },
  {
    icon: Users,
    title: "Parent Approved",
    desc: "Loved by families for bringing more calmness and kindness at home.",
  },
];

function BuiltForKids() {
  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <div className="animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Built for Kids, Loved by Parents
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            A blend of fun and science-backed practices that kids enjoy and parents trust.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="group bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl hover:scale-105 hover:-translate-y-2 cursor-pointer relative overflow-hidden animate-fade-in-up"
                style={{ 
                  animationDelay: `${400 + index * 150}ms`,
                  animationFillMode: 'both'
                }}
              >
                {/* Subtle background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-purple-100 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
                    <IconComponent className="w-10 h-10 text-purple-600 relative z-10 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:text-purple-700" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 transform transition-all duration-300 group-hover:text-purple-800 group-hover:scale-105">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm transform transition-all duration-300 group-hover:text-gray-700">
                    {benefit.desc}
                  </p>
                </div>

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-200 transition-all duration-300"></div>
                
                {/* Subtle shine effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
              </div>
            );
          })}
        </div>
      </div>

    
    </section>
  );
}

export default BuiltForKids;
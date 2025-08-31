import React from "react";

function Hero({ onStartTrial, onOpenForm }) {
  const open = onStartTrial || onOpenForm || (() => {});

  const cards = [
    { item1: "Focus", item2: "Improves", emoji: "🧠" },
    { item1: "Sleep", item2: "Reduce", emoji: "💤" },
    { item1: "Stress", item2: "Better", emoji: "😔" },
    { item1: "Empathy", item2: "Builds", emoji: "❤️" },
  ];
  return (
    <section className="relative bg-white pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="animate-fade-in-up">
          <p className="text-purple-600 font-semibold text-sm mb-2 opacity-0 animate-fade-in delay-100">
            For Kids (4–14 years)
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight opacity-0 animate-fade-in delay-200">
            Mindfulness & Meditation for Kids (4—14)
          </h1>
          <p className="mt-4 text-gray-600 text-lg opacity-0 animate-fade-in delay-300">
            Fun, science-based mindfulness programs that help kids build focus,
            reduce stress, and improve sleep.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-6">
            {cards.map((card, index) => (
              <div
                key={card.item1}
                className="w-50 h-30 bg-white rounded-2xl shadow-md p-4 flex flex-col gap-1 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 cursor-pointer opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="flex items-center gap-1">
                  <span
                    role="img"
                    aria-label="brain"
                    className="text-pink-500 text-lg transform transition-transform duration-300 hover:scale-125 hover:animate-bounce"
                  >
                    {card.emoji}
                  </span>
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-800 font-medium text-sm transition-colors duration-300 group-hover:text-purple-600">
                    {card.item2}
                  </p>
                  <p className="text-gray-800 font-bold text-xl transition-colors duration-300 group-hover:text-purple-700">
                    {card.item1}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4 opacity-0 animate-fade-in delay-700">
            <button
              onClick={onOpenForm}
              className="bg-[#b12aff] hover:bg-purple-700 px-6 py-3 rounded-lg font-medium text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 relative overflow-hidden group"
            >
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 relative overflow-hidden group">
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-72 lg:h-96 rounded-xl overflow-hidden shadow-lg opacity-0 animate-fade-in delay-500 transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
          <img
            src="https://enzvia.com/wp-content/uploads/2023/09/meditation-for-kids.png"
            alt="Hero image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .delay-100 {
          animation-delay: 100ms;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </section>
  );
}

export default Hero;

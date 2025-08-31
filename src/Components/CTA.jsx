import React from "react";

function CTA({ onStartTrial, onOpenForm }) {
  const open = onStartTrial || onOpenForm || (() => {});
  
  return (
    <section className="bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-900 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse-soft"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-pink-300/10 rounded-full animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-32 w-40 h-40 bg-blue-300/5 rounded-full animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-white/5 rounded-full animate-pulse-soft" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center text-white relative z-10">
        {/* Heading */}
        <div className="animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Ready to Help Your Child Thrive?
          </h2>
          <p className="mt-6 text-lg text-purple-100 leading-relaxed max-w-3xl mx-auto">
            Start your free trial today and unlock mindfulness tools built
            for kids, parents, and teachers.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms', animationFillMode: 'both' }}>
          {/* Primary CTA */}
          <button
            onClick={onOpenForm}
            className="group bg-white text-purple-700 hover:text-purple-800 px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl relative overflow-hidden min-w-48"
          >
            <span className="relative z-10">Start Free Trial</span>
            
            {/* Button background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700 rounded-xl"></div>
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onStartTrial}
            className="group border-2 border-white/30 text-white hover:border-white hover:bg-white/10 px-8 py-4 rounded-xl font-medium text-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 relative overflow-hidden min-w-48"
          >
            <span className="relative z-10">Learn More</span>
            
            {/* Border glow effect */}
            <div className="absolute inset-0 border-2 border-white/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '900ms', animationFillMode: 'both' }}>
          <div className="flex flex-wrap justify-center items-center gap-8 text-purple-200">
            <div className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300">
              <span className="text-2xl">✨</span>
              <span className="font-medium">7-Day Free Trial</span>
            </div>
            <div className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300">
              <span className="text-2xl">🔒</span>
              <span className="font-medium">Cancel Anytime</span>
            </div>
            <div className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300">
              <span className="text-2xl">💳</span>
              <span className="font-medium">No Credit Card Required</span>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="mt-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '1200ms', animationFillMode: 'both' }}>
          <div className="flex justify-center space-x-4">
            <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse-soft"></div>
            <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse-soft" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>

    </section>
  );
}

export default CTA;
import React from "react";

function Pricing({ onStartTrial }) {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      features: ["Limited meditations", "Basic sleep stories", "1 profile"],
      cta: "Get Started",
      gradient: "from-gray-400 to-gray-600"
    },
    {
      name: "Monthly",
      price: "₹399",
      period: "per month",
      features: [
        "All programs unlocked",
        "Unlimited sleep stories",
        "Progress tracking",
        "Up to 3 profiles",
      ],
      cta: "Start Free Trial",
      highlight: true,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Yearly",
      price: "₹239",
      period: "per month (billed annually)",
      features: [
        "Everything in Monthly",
        "Save 40% on yearly billing",
        "Up to 5 profiles",
        "Priority support",
      ],
      cta: "Start Free Trial",
      gradient: "from-blue-500 to-teal-500"
    },
  ];

  return (
    <section id="Pricing" className="bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <div className="animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Flexible pricing designed for every family.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`group bg-white rounded-2xl shadow-md transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer relative overflow-hidden animate-fade-in-up ${
                plan.highlight ? "ring-2 ring-purple-200 transform scale-105" : ""
              }`}
              style={{ 
                animationDelay: `${300 + index * 200}ms`,
                animationFillMode: 'both'
              }}
            >
              {/* Highlight Badge for Featured Plan */}
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Gradient Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>

              {/* Header with Plan Name */}
              <div className="relative z-10 p-6 pb-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-800 transition-colors duration-300">
                  {plan.name}
                </h3>
                
                {/* Price */}
                <div className="mt-4 transform transition-all duration-300 group-hover:scale-105">
                  <span className="text-4xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 text-sm ml-2 group-hover:text-gray-700 transition-colors duration-300">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="relative z-10 px-6 pb-6">
                <ul className="space-y-3 text-gray-600 text-sm text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li 
                      key={feature} 
                      className="flex items-start transform transition-all duration-300 group-hover:translate-x-1"
                      style={{ transitionDelay: `${featureIndex * 50}ms` }}
                    >
                      <span className="text-purple-600 mr-3 mt-0.5 transform transition-all duration-300 group-hover:scale-125 group-hover:text-purple-700">
                        ✔
                      </span>
                      <span className="group-hover:text-gray-700 transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="relative z-10 p-6 pt-4">
                <button
                  onClick={onStartTrial}
                  className={`w-full px-6 py-3 rounded-xl font-medium transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-1 ${
                    plan.highlight
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg group-hover:shadow-xl"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200 group-hover:bg-purple-50 group-hover:text-purple-700"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>

              {/* Border Glow Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-100 transition-all duration-300"></div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-15 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
            </div>
          ))}
        </div>
      </div>

      {/*  */}
    </section>
  );
}

export default Pricing;
"use client"

import { plans } from "@/constants";
import { useState } from "react";

function Billing() {

  const [activePlan, setActivePlan] = useState('Basic');
  
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-12 dark:text-gray-200">Choose Your Plan</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden
              ${activePlan === plan.name ? 'ring-2 ring-blue-500 transform scale-105' : ''}`}
            onClick={() => setActivePlan(plan.name)}
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{plan.name}</h2>
              <p className="mt-4">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                <span className="text-gray-500 dark:text-gray-400">{plan.period}</span>
              </p>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-6 pt-6 pb-8">
              <button
                className={`w-full px-4 py-2 font-bold rounded-md
                  ${activePlan === plan.name
                    ? 'bg-blue-500 text-white hover:bg-blue-600' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'}`}
              >
                {plan.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Billing;
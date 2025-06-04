'use client'

import React from 'react'
import { pricingPlans } from '../data'
import { FaCheck } from 'react-icons/fa'

const Pricing = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-8">
      <h2 className="text-center text-3xl font-bold text-[#C8102E] mb-12 uppercase">
        Memberships & Prices
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {pricingPlans.map((plan, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-center text-lg font-semibold text-gray-800 whitespace-pre-line mb-6 uppercase">
                {plan.title}
              </h3>

              <div className="text-center mb-2">
                <span className="text-4xl font-bold text-[#C8102E]">{plan.price}</span>
                <span className="text-[#C8102E] text-lg font-medium">{plan.unit}</span>
              </div>

              <p className="text-center text-sm text-gray-500 mb-6">{plan.note}</p>

              <ul className="space-y-3 text-sm text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FaCheck className="text-[#C8102E] mt-1" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-8 bg-[#C8102E] text-white py-3 rounded-md font-semibold hover:bg-[#a50d24] transition">
              Sign Up
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing

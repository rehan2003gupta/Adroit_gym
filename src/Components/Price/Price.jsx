import React from 'react'
import AnimatedCard from '../AnimatedCard/AnimatedCard';
import { useNavigate  } from 'react-router-dom';
const price = [
  {
    title: " Monthly",
    prices: "$ 39.0",
    description: "SINGLE CLASS",
    benefit1: "Free riding",
    benefit2: "Unlimited equipments",
    benefit3: "Personal trainer",
    benefit4: "Weight losing classes",
    benefit5: "Month to mouth",
    benefit6: "No time restriction",
  },
  {
    title: "6 Month unlimited",
    prices: "$ 59.0",
    description: "SINGLE CLASS",
    benefit1: "Free riding",
    benefit2: "Unlimited equipments",
    benefit3: "Personal trainer",
    benefit4: "Weight losing classes",
    benefit5: "Month to mouth",
    benefit6: "No time restriction",
  },
  {
    title: "12 Month unlimited",
    prices: "$ 99.0",
    description: "SINGLE CLASS",
    benefit1: "Free riding",
    benefit2: "Unlimited equipments",
    benefit3: "Personal trainer",
    benefit4: "Weight losing classes",
    benefit5: "Month to mouth",
    benefit6: "No time restriction",
  },
];
function Price() {
  const navigate=useNavigate();
  const handleEnroll = (planId) => {
    navigate("/enroll", { state: { planId } }); // Change "/about" to your desired route
  };
  return (
    <div className="bg-black pt-10 pb-10">
      <AnimatedCard delay={100}>
        <div className="text-center mb-10">
          <p className="text-orange-600 text-xl font-medium">Our Plan</p>
          <p className="text-white text-2xl font-extrabold">
            CHOOSE YOUR PRICING PLAN
          </p>
        </div>
        </AnimatedCard>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto p-4">
            {price.map((feature, index) => (
              <AnimatedCard
                                key={index}
                                delay={index * 150}
                                direction="bottom"
                              >
              <div key={index} className="flex justify-center">
                {/* Outer skew for parallelogram */}
                <div className="relative transform skew-y-5 bg-black border border-gray-700 transition-all duration-200 hover:bg-white  overflow-hidden">
                  {/* Inner content unskewed */}
                  <div className="transform -skew-y-3 p-7 w-72 hover:text-gray-800 text-white text-center">
                    <p className="text-2xl mt-3 font-bold">{feature.title}</p>
                    <p className="text-5xl mt-3 font-bold text-orange-600">
                      {feature.prices}
                    </p>
                    <p className="text-lg mt-1 font-light">
                      {feature.description}
                    </p>
                    <div className="mt-5 space-y-1 text-sm font-light">
                      <p>{feature.benefit1}</p>
                      <p>{feature.benefit2}</p>
                      <p>{feature.benefit3}</p>
                      <p>{feature.benefit4}</p>
                      <p>{feature.benefit5}</p>
                      <p>{feature.benefit6}</p>
                    </div>
                    <button onClick={() => handleEnroll(index)} id={`enroll-btn-${index}`}  className="mt-6 w-full py-3  bg-gray-800 text-white text-lg font-medium rounded hover:bg-orange-500 transition">
                      ENROLL NOW
                    </button>           
                  </div>
                </div>
              </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Price
import React from 'react'
import Images from "../../assets/indexes"
import AnimatedCard from '../AnimatedCard/AnimatedCard';
const {equip,nutrition,plan,need} =Images
const features = [
  {
    title: "Modern equipment",
    icon: equip,
    description:
      "Experience cutting-edge fitness machines designed to maximize performance, efficiency, and overall workout enjoyment.",
  },
  {
    title: "Healthy nutrition plan",
    icon: nutrition,
    description:
      "Receive customized meal plans crafted to fuel your body, boost energy, and support sustainable fitness goals.",
  },
  {
    title: "Professional training plan",
    icon: plan,
    description:
      "Follow expertly structured workout programs tailored by certified trainers to ensure safe, progressive, and lasting results.",
  },
  {
    title: "Unique to your needs",
    icon: need,
    description:
      "Get fully personalized fitness guidance and routines designed to match your lifestyle, abilities, and long-term ambitions.",
  },
];
function Push() {
  return (
    
    <div className="bg-black text-white  py-16 px-4">
      <AnimatedCard delay={200}>
        <div className="text-center mb-10">
          <p className="text-orange-600 text-xl font-medium">Why choose us?</p>
          <p className="text-white text-2xl font-extrabold">
            PUSH YOUR LIMITS FORWARD
          </p>
        </div>

        <div className="grid grid-cols-1  lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <AnimatedCard key={index} delay={index * 200} direction="bottom">
            <div
              key={index}
              className="flex flex-col  items-center text-center"
            >
              <div className="bg-orange-600 p-3 rounded-full hover:bg-white transition-all duration-200 mb-4 mt-4 flex items-center justify-center">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-14 h-14 hover:animate-spin transition-all duration-200"
                />
              </div>
              <p className="text-xl font-medium">{feature.title}</p>
              <p className="text-gray-400 mt-2 font-normal text-sm">
                {feature.description}
              </p>
            </div>
            </AnimatedCard>
          ))}
        </div>
        </AnimatedCard>
      </div>
      
  )
}

export default Push
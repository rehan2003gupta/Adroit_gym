import { useState, useRef } from "react";
import Images from "../../assets/indexes";
import Price from "../Price/Price";
import Icon from "../Icon";
const { sit, button, stretch, gymvideo, ex1, ex2, ex3, ex4, belly } = Images;
import AnimatedCard from "../AnimatedCard/AnimatedCard";
function Services() {
  const play = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [animations, setAnimations] = useState("animate-ping");
  const [isHidden, setIsHidden] = useState(true);

  const handleVideo = () => {
    if (isPlaying) {
      play.current.pause();
      setAnimations("animate-ping");
      setIsHidden(true);
    } else {
      play.current.play();
      setIsHidden(false);
      setAnimations("");
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Hero Section */}
      <Icon className="right-[3rem] justify-end mt-4 absolute z-10"/>
      <div
        style={{
          backgroundImage: `url(${sit})`,
          backgroundSize: "cover",
          height: "60vh",
          width: "100%",
        }}
        className="flex flex-col items-center justify-center object-contain transition-all duration-200"
      >
        <AnimatedCard delay={200}>
          <p className="text-4xl sm:text-5xl md:text-6xl text-white text-center font-extrabold px-4">
          SERVICES
        </p>
        </AnimatedCard>
      </div>

      {/* What We Do Section */}
      <div className="bg-black pb-10 pt-20 px-4 md:px-10">
        <div className="text-center mb-12">
          <AnimatedCard delay={150}>
            <p className="text-orange-600 text-sm md:text-base font-medium uppercase">
            WHAT WE DO?
          </p>
          </AnimatedCard>

          <AnimatedCard delay={200}>
            <p className="text-white text-3xl md:text-4xl font-extrabold mt-2">
            PUSH YOUR LIMITS FORWARD
          </p>
          </AnimatedCard>
          

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 transition-all duration-150 max-w-7xl mx-auto gap-6">
          <div className="flex flex-col gap-4">
            {/* Service 1 */}
            <div className="flex flex-col md:flex-row bg-gray-900 h-[500px] md:h-72">
              <div className="w-full md:w-1/2 h-1/2 md:h-full">
                <img
                  src={ex1}
                  alt="Personal training"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 h-1/2 md:h-full p-6 flex flex-col justify-center hover:bg-[#363636]  text-white">
                <AnimatedCard direction="left">
                  <h3 className="font-bold text-lg md:text-xl mb-2">
                  Personal training
                </h3>
                <p className="text-gray-400 mb-4">
                  Get one-on-one guidance from expert trainers, tailored
                  workouts, and a program designed to help you achieve your
                  unique fitness goals.
                </p>
                <p className="font-bold text-white cursor-pointer w-fit  hover:text-blue-500">
                  EXPLORE
                </p>
                </AnimatedCard>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col md:flex-row-reverse bg-gray-900 h-[500px] md:h-72">
              <div className="w-full md:w-1/2 h-1/2 md:h-full">
                <img
                  src={belly}
                  alt="Group fitness classes"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 h-1/2 md:h-full p-6 flex flex-col justify-center hover:bg-[#363636] text-white">
                <AnimatedCard direction="left">
                  <h3 className="font-bold text-lg md:text-xl mb-2">
                  Group fitness classes
                </h3>
                <p className="text-gray-400 mb-4">
                  Join our high-energy group sessions to stay motivated, burn
                  calories, and build strength with the support of a community.
                </p>
                <p className="font-bold cursor-pointer  hover:text-blue-500">
                  EXPLORE
                </p>
                </AnimatedCard>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {/* Service 3 */}
            <div className="flex flex-col md:flex-row bg-gray-900 h-[500px] md:h-72">
              <div className="w-full md:w-1/2 h-1/2 md:h-full">
                <img
                  src={ex2}
                  alt="Strength training"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 h-1/2 md:h-full p-6 flex flex-col justify-center hover:bg-[#363636] text-white">
                <AnimatedCard direction="right">
                  <h3 className="font-bold text-lg md:text-xl mb-2">
                  Strength training
                </h3>
                <p className="text-gray-400 mb-4">
                  Build muscle, improve endurance, and increase power with our
                  state-of-the-art equipment and expert coaching.
                </p>
                <p className="font-bold cursor-pointer  hover:text-blue-500">
                  EXPLORE
                </p>
                </AnimatedCard>
              </div>
            </div>

            {/* Service 4 */}
            <div className="flex flex-col md:flex-row-reverse bg-gray-900 h-[500px] md:h-72">
              <div className="w-full md:w-1/2 h-1/2 md:h-full ">
                <img
                  src={ex4}
                  alt="Body building"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 h-1/2 md:h-full p-6 flex flex-col justify-center hover:bg-[#363636] text-white">
                <AnimatedCard direction="right">
                  <h3 className="font-bold text-lg md:text-xl mb-2">
                  Body building
                </h3>
                <p className="text-gray-400 mb-4">
                  Sculpt your physique with targeted bodybuilding programs
                  focused on muscle growth, definition, and peak performance.
                </p>
                <p className="font-bold cursor-pointer hover:text-blue-500">
                  EXPLORE
                </p>
                </AnimatedCard>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Section */}
      <div
        style={{
          backgroundImage: isHidden ? `url(${stretch})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
        className="relative flex flex-col items-center justify-center"
      >
        <video
          ref={play}
          muted
          loop
          playsInline
          className={`w-full h-full absolute top-0 left-0 object-cover transition-opacity duration-500 ${
            isHidden ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <source src={gymvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <AnimatedCard delay={150}>
          <p className="font-bold text-white text-5xl shadow-2xl text-center shadow-gray-500">
          {"Exercise until the body obeys.".toUpperCase()}
        </p>
        </AnimatedCard>
        <AnimatedCard delay={200}>
        <p className="font-medium mt-4 text-gray-400 text-2xl shadow-2xl text-center shadow-gray-500">
          WHERE HEALTH, BEAUTY AND FITNESS MEET.
        </p>
        </AnimatedCard>
        

        <button
          onClick={handleVideo}
          className={`absolute ${!isHidden ? "opacity-0 pointer-events-none" : "opacity-100"}  ${animations} flex items-center justify-center rounded-full z-10`}
        >
          <img
            src={button}
            alt="Play"
            className="w-44 h-44 object-contain"
          />
        </button>
      </div>

      {/* Pricing Section */}
      <Price />
    </>
  );
}

export default Services;

import { useState, useEffect } from "react";
import Coursel from "../Coursel";
import Images from "../../assets/indexes";
import Push from "../Push/Push";
import Price from "../Price/Price";
import { useNavigate } from "react-router-dom";
import AnimatedCard from "../AnimatedCard/AnimatedCard";
const {
  back,
  background,
  hero,
  dumbel,
  cycle,
  kettleball,
  barbel,
  boxing,
  yoga,
  squat,
  stretch,
  lift,
  rope,
  oilyoga,
} = Images;
import Icon from "../Icon"

const feature = [
  {
    title: "Strength",
    icon: dumbel,
    description: "WEIGHTLIFTING",
  },
  {
    title: "Cardio",
    icon: cycle,
    description: "Indoor cycling",
  },
  {
    title: "Strength",
    icon: kettleball,
    description: "Kettlebell power",
  },
  {
    title: "Cardio",
    icon: barbel,
    description: "Barbel curl",
  },
  {
    title: "Training",
    icon: boxing,
    description: "Boxing",
  },
  {
    title: "Yoga",
    icon: yoga,
    description: "Yoga ",
  },
];

function Home() {
  const images = [back, background];
  const navigate=useNavigate();
  const goToPage = () => {
    navigate("/contact"); // Change "/about" to your desired route
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // cleanup
  }, []);
  return (
    <>
      {/* Hero Section */}
      <Icon className="right-[3rem] justify-end mt-4 absolute z-10"/>

      <div
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
        className="items-center flex-col flex transition-all duration-200 justify-center"
      >
        {" "}
        <AnimatedCard delay={0} direction="left">
          <p className="text-3xl text-white font-medium">Shape your body </p>
        </AnimatedCard>
        <AnimatedCard delay={300} direction="right">
          <p className="mt-3 text-7xl text-white font-extrabold text-center">
            BE <span className="text-orange-600">STRONG</span>
          </p>
        </AnimatedCard>
        <AnimatedCard delay={500} direction="left">
          <p className="text-7xl text-white text-center font-extrabold">
            TRAINING HARD
          </p>
        </AnimatedCard>
        <AnimatedCard delay={200} direction="bottom">
          <button onClick={goToPage} className="bg-orange-600 mt-4 px-7 py-3 rounded text-white hover:bg-white hover:text-orange-600 font-medium transition-all duration-200 border border-transparent hover:border-orange-600">
            Get Info
          </button>
        </AnimatedCard>
      </div>

      {/* Features Section */}
      <Push />
      {/*Feature section two */}
      <div className="bg-black text-white  py-16 px-4">
        <AnimatedCard delay={150}>
          <div className="text-center mb-10">
            <p className="text-orange-600 text-xl font-medium">Our Classes</p>
            <p className="text-white text-2xl font-extrabold">
              WHAT WE CAN OFFER
            </p>
          </div>
          <div className="bg-black text-white flex flex-col items-center py-10">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full  max-w-5xl p-4">
              {feature.map((item, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 150}
                  direction="bottom"
                >
                  <div className="flex flex-col items-center text-center bg-gray-900 hover:bg-white transition-all duration-200 hover:text-gray-900 rounded-lg">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="mb-4 w-full aspect-[4/3] object-cover rounded-t-lg"
                    />
                    <p className="text-xl font-bold">{item.title}</p>
                    <p className="font-normal mt-2 text-sm mb-4">
                      {item.description}
                    </p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </AnimatedCard>
      </div>
      {/*Registration block */}
      <div
        style={{
          backgroundImage: `url(${stretch})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
        className="items-center flex-col flex justify-center"
      >
        <AnimatedCard>
        <p className="font-bold text-white text-5xl shadow-2xl text-center shadow-gray-500">
          REGISTRATION NOW TO GET MORE DEALS
        </p>
        </AnimatedCard>
        <AnimatedCard delay={100}>
        <p className="font-medium mt-4 text-white text-2xl shadow-2xl text-center shadow-gray-500">
          WHERE HEALTH, BEAUTY AND FITNESS MEET.
        </p>
        </AnimatedCard>
        <AnimatedCard delay={200}>
        <button onClick={goToPage} className="border-1 border-orange-600 text-white  mt-3 pl-4 pr-4 pt-3 pb-3 transition-all duration-300 hover:bg-orange-600 font-medium  ">
          APPOINTMENT
        </button>
        </AnimatedCard>
      </div>
      {/*Pricing section */}
      <Price />
      {/*Advertisement Photos */}
      <div className="bg-black w-full">
        <AnimatedCard delay={150}>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 border-b-4 border-gray-700">
        <img
          src={rope}
          alt=""
          className="w-full aspect-[4/3] border-r-4 border-gray-700 gap-1 object-cover"
        />
        <img
          src={squat}
          alt=""
          className="w-full aspect-[4/3] border-r-4 border-gray-700 object-cover"
        />
        <img src={hero} alt="" className="w-full aspect-[4/3] object-cover" />
      </div>
      </AnimatedCard>
      <AnimatedCard delay={150}>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
        <img
          src={oilyoga}
          alt=""
          className="w-full aspect-[4/3] border-r-4 border-gray-700 object-cover"
        />
        <img src={lift} alt="" className="w-full aspect-[4/3] object-cover" />
      </div>
      </AnimatedCard>
      </div>
      {/*Crousel Part */}

      <div className="w-full">
        <div className="pb-10 pt-10 flex flex-col sm:flex-row items-center justify-around gap-4 px-4 bg-black">
          {/* Left side */}
          <div className="text-center sm:text-left">
            <p className="text-orange-600 text-lg sm:text-xl font-medium">
              OUR TEAM
            </p>
            <p className="text-white text-xl sm:text-2xl font-extrabold">
              TRAIN WITH EXPERTS
            </p>
          </div>

          {/* Right side */}
          <div>
            <button onClick={goToPage} className="border border-orange-600 text-white px-6 py-3 transition-all duration-300 hover:bg-orange-600 font-medium w-full sm:w-auto">
              APPOINTMENT
            </button>
          </div>
        </div>

        {/* Carousel */}
        <Coursel />
      </div>
    </>
  );
}

export default Home;

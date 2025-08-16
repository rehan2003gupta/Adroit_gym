import Images from "../../assets/indexes";
const { background, tt1, tt2, tt3, tt4, tt5, t1 } = Images;
import { useNavigate } from "react-router-dom";
import Icon from "../Icon";
import AnimatedCard from "../AnimatedCard/AnimatedCard";
function Team() {
  const navigate=useNavigate();
  const goToPage = () => {
    navigate("/contact"); // Change "/about" to your desired route
  };
  const feature=[
    {
      image:tt1,
      des1:"Athart Rachel",
      des2:"GYM TRAINER",
    },
    {
      image:tt2,
      des1:"Andrew Jhonson",
      des2:"GYM TRAINER",
    },
    {
      image:tt3,
      des1:"Jhonny Tongue",
      des2:"GYM TRAINER",
    },
    {
      image:tt4,
      des1:"Rachel Bless",
      des2:"GYM TRAINER",
    },
    {
      image:tt5,
      des1:"Alexa Rhodes",
      des2:"GYM TRAINER",
    },
    {
      image:t1,
      des1:"Ben Crawly",
      des2:"GYM TRAINER",
    },
  ]
  return (
    
    <>
      {/* Hero Section */}
      <Icon className="right-[3rem] justify-end mt-4 absolute z-10" />
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          width: "100%",
        }}
        className="items-center flex-col flex transition-all duration-200 justify-center"
      >
        <AnimatedCard delay={150}>
          <p className="mt-3 text-5xl text-white font-extrabold text-center">
            OUR <span className="text-orange-600">TEAM</span>
          </p>
        </AnimatedCard>
      </div>
      <div className="pb-10 pt-10 flex flex-col sm:flex-row items-center justify-around gap-4 px-4 bg-black">
        {/* Left side */}

        <div className="text-center sm:text-left">
          <AnimatedCard delay={250}>
            <p className="text-orange-600 text-lg sm:text-xl font-medium">
              OUR TEAM
            </p>
            <p className="text-white text-xl sm:text-2xl font-extrabold">
              TRAIN WITH EXPERTS
            </p>
          </AnimatedCard>
        </div>

        {/* Right side */}
        <div>
          <AnimatedCard delay={250}>
            <button onClick={goToPage} className="border border-orange-600 text-white px-6 py-3 transition-all duration-300 hover:bg-orange-600 font-medium w-full sm:w-auto">
              APPOINTMENT
            </button>
          </AnimatedCard>
        </div>
      </div>
      <div className="flex justify-center bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl p-10">
          {/* 1st card*/}
          {feature.map((item, index) => (
          <div key={index} className="relative aspect-square bg-gray-800 overflow-hidden group">
            <img src={item.image} alt="" className="w-full h-full object-cover" />

            {/* Overlay */}
            <div
              className="absolute  bottom-0 left-0 w-full  h-24 bg-black text-white 
                      translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
            >
              <div className="p-2 flex flex-col ">
                <p className="text-sm text-center">{item.des1}</p>
                <p className="text-sm text-center">{item.des2}</p>
                <Icon className="justify-center gap-4 mt-6 text-gray-400" />
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Team;

import { useState, useEffect, useRef } from "react";
import Images from "../../assets/indexes";
import Push from "../Push/Push";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Icon from "../Icon";
import AnimatedCard from "../AnimatedCard/AnimatedCard";
import LazyBackground from "../LazyBackground";
import { useNavigate } from "react-router-dom";
const { powder, gymvideo, stretch, button, t1, t2, t3, t4 } = Images;

const testimonials = [
  {
    id: 1,
    name: "Marshmello Gomez",
    image: t1,
    review:
      "Empowering women through strength training, Marshmello blends functional workouts and motivation to build both muscle and confidence.",
    rating: 5,
  },
  {
    id: 2,
    name: "John Smith",
    image: t2,
    review:
      "A wonderful gym with great trainers and equipment. Highly recommend for anyone looking to improve fitness.",
    rating: 4,
  },
  {
    id: 3,
    name: "Johny Roy",
    image: t3,
    review:
      "Specialist in athletic conditioning, John pushes clients to peak speed, agility, and endurance.",
    rating: 5,
  },
  {
    id: 4,
    name: "Ben Tector",
    image: t4,
    review:
      "Focused on injury recovery and mobility, David helps clients move better, stronger, and pain-free.",
    rating: 4,
  },
];

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const play = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [animations, setAnimations] = useState("animate-ping");
  const navigate = useNavigate();
  const goToPage = () => {
    navigate("/contact"); // Change "/about" to your desired route
  };
  // Auto-slide testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleVideo = () => {
    if (isPlaying) {
      play.current.pause();
      setAnimations("animate-ping");
    } else {
      play.current.play();
      setAnimations("");
    }
    setIsPlaying(!isPlaying);
  };

  const { name, image, review, rating } = testimonials[currentIndex];

  return (
    <>
      {/* Hero Section */}
      <Icon className="right-[3rem] justify-end mt-4 absolute z-10" />
      <LazyBackground src={powder} height="100vh">
        <AnimatedCard delay={200}>
          <p className="text-4xl sm:text-5xl md:text-6xl text-white text-center font-extrabold px-4">
            ABOUT <span className="text-orange-600">US</span>
          </p>
        </AnimatedCard>
      </LazyBackground>

      <Push />

      {/* Video + Text Section */}
      <div className="flex flex-col lg:flex-row flex-wrap w-full">
        {/* Video */}
        <div className="w-full lg:w-1/2 relative h-64 md:h-auto">
          <video
            ref={play}
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={gymvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Center Button */}
          <button
            onClick={handleVideo}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full ${animations} z-10`}
          >
            <img
              src={button}
              alt="Play"
              className="w-20 h-20 sm:w-16 lg:h-16 object-contain"
            />
          </button>
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 flex justify-center items-center bg-black text-white p-6 sm:p-8">
          <div className="max-w-lg text-start md:text-left">
            <AnimatedCard delay={200}>
              <h2 className="text-xl sm:text-3xl font-medium mb-4">
                About <span className="text-orange-600">Us</span>
              </h2>
              <p className="text-base font-light sm:text-base">
                At Adroit Gym, we believe fitness is more than a routine—it’s a
                lifestyle. Our expert trainers, cutting-edge equipment, and
                motivating environment empower you to achieve your health goals
                with confidence. Whether you're building strength, improving
                endurance, or just starting your journey, Adroit is here to
                guide every step.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </div>

      {/* Registration */}
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
          <button
            onClick={goToPage}
            className="border-1 border-orange-600 text-white  mt-3 pl-4 pr-4 pt-3 pb-3 transition-all duration-300 hover:bg-orange-600 font-medium  "
          >
            APPOINTMENT
          </button>
        </AnimatedCard>
      </div>

      {/* Testimonial Carousel */}
      <div className="relative w-full bg-black text-white py-12 pt-24 flex flex-col items-center">
        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 p-3 rounded shadow hover:bg-gray-700"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 p-3 rounded shadow hover:bg-gray-700"
        >
          <FaChevronRight />
        </button>

        {/* Image */}
        <img
          src={image}
          alt={name}
          className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg mb-6"
        />

        {/* Review */}
        <p className="max-w-3xl text-center text-gray-300 px-4 mb-6">
          {review}
        </p>

        {/* Name */}
        <h3 className="text-lg font-bold uppercase">{name}</h3>

        {/* Stars */}
        <div className="flex mt-2">
          {[...Array(rating)].map((_, i) => (
            <FaStar key={i} className="text-yellow-500" />
          ))}
        </div>
      </div>
    </>
  );
}

export default About;

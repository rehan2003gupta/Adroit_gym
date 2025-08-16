import { Link } from "react-router-dom";
import mobile from "../../assets/Images/mobiles.png";
import location from "../../assets/Images/location.png";
import message from "../../assets/Images/message.png";
import AnimatedCard from "../AnimatedCard/AnimatedCard";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
const features = [
  {
    title: "40,1, Prince Anwar Rd,Swiss Park ",
    icon: mobile,
  },
  {
    title: "011-2553-2553 | 125-668-886",
    icon: location,
  },
  {
    title: "Support.adroit@gmail.com",
    icon: message,
  },
];

function Footer() {
  return (
    <>
      {/*UPPER DIV */}
      <div className="bg-black w-full flex justify-center items-center py-20  px-4">
        <AnimatedCard delay={150}>
          <div className="grid md:grid-cols-1  lg:grid-cols-3 gap-8 max-w-6xl w-full justify-items-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-5  text-white p-4 rounded-lg hover:bg-gray-900 transition-all duration-300 w-full max-w-md min-h-[80px]" // min height keeps them even
              >
                {/* Icon */}
                <div className="bg-gray-600 w-16 h-16 hover:animate-spin rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 hover:bg-white">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-10 h-10 object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {/* Text */}
                <p className="text-base sm:text-lg font-light text-left break-words">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        </AnimatedCard>
      </div>
      {/*LOWER DIV */}
      <footer className="bg-black text-white">
        <AnimatedCard delay={150}>
          <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-4 transition-all duration-200 md:grid-cols-4 gap-10">
            {/* Left: Logo & About */}
            <div>
              <h2 className="text-3xl font-extrabold text-white">
                <span className="text-white">GY</span>
                <span className="text-orange-500">M</span>
              </h2>
              <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                Adroit Gym empowers you with state-of-the-art equipment, expert
                trainers, and a motivating environment to achieve peak fitness
                goals.
              </p>
              <div className="flex gap-4 mt-6 text-gray-400">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="hover:text-orange-500 cursor-pointer" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="hover:text-orange-500 cursor-pointer" />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="hover:text-orange-500 cursor-pointer" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="hover:text-orange-500 cursor-pointer" />
                </a>
                <a
                  href="https://www.gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope className="hover:text-orange-500 cursor-pointer" />
                </a>
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Useful links</h3>
              <ul className="space-y-2 text-gray-400">
                <Link to="/about">
                  <li className="hover:text-orange-500 cursor-pointer">
                    About
                  </li>
                </Link>
                <Link to="/team">
                  <li className="hover:text-orange-500 cursor-pointer">Blog</li>
                </Link>
                <Link to="/classes">
                  <li className="hover:text-orange-500 cursor-pointer">
                    Classes
                  </li>
                </Link>
                <Link to="/contact">
                  <li className="hover:text-orange-500 cursor-pointer">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <Link to="/login">
                  <li className="hover:text-orange-500 pb-1 cursor-pointer">
                    Login
                  </li>
                  <li className="hover:text-orange-500 cursor-pointer">
                    My account
                  </li>
                </Link>
                <Link to="/services">
                  <li className="hover:text-orange-500 cursor-pointer">
                    Subscribe
                  </li>
                </Link>
                <Link to="/contact">
                  <li className="hover:text-orange-500 cursor-pointer">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>

            {/* Tips & Guides */}
            <div>
              <h3 className="text-lg font-bold mb-4">Tips & Guides</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-white hover:text-orange-500 cursor-pointer">
                    Physical fitness may help prevent depression, anxiety
                  </p>
                  <p className="text-gray-500 text-sm">
                    3 min read | 20 Comment
                  </p>
                </div>
                <div>
                  <p className="text-white hover:text-orange-500 cursor-pointer">
                    Fitness: The best exercise to lose belly fat and tone up...
                  </p>
                  <p className="text-gray-500 text-sm">
                    3 min read | 20 Comment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-sm">
            Copyright ©2025 All rights reserved | This template is made with{" "}
            <span className="text-orange-500">❤</span> by{" "}
            <span className="text-orange-500 cursor-pointer">
              <a
                href="https://www.linkedin.com/in/rehan-gupta-54374130a/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Code_buddy
              </a>
            </span>
          </div>
        </AnimatedCard>
      </footer>
    </>
  );
}

export default Footer;

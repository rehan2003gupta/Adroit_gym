import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaEnvelope } from "react-icons/fa";

function Icon({ className = "" }) {
  return (
    <div className={`flex gap-4 ${className}`}>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF className="text-white cursor-pointer" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-white cursor-pointer" />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="text-white cursor-pointer" />
      </a>
      <a href="https://www.instagram.com/rehangupta2003/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-white cursor-pointer" />
      </a>
      <a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope className="text-white cursor-pointer" />
      </a>
    </div>
  );
}

export default Icon;

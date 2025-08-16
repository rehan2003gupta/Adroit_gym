import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { db } from "../firebase"; // Firestore instance
import { collection, addDoc } from "firebase/firestore";
import Images from "../../assets/indexes";
import Icon from "../Icon";
import AnimatedCard from "../AnimatedCard/AnimatedCard";
import LazyBackground from "../LazyBackground";

const { background } = Images;

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");

  // Submit form data to Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        query,
        comment,
        timestamp: new Date(),
      });
      setMessage("Your query has been submitted successfully!");
      setName("");
      setEmail("");
      setQuery("");
      setComment("");
    } catch (err) {
      setMessage("Error submitting form: " + err.message);
    }
  };

  return (
    <>
      <Icon className="right-[3rem] justify-end mt-4 absolute z-10" />
      <LazyBackground src={background} height="50vh">
        <AnimatedCard delay={200}>
          <p className="text-white uppercase text-5xl font-extrabold">
            Contact <span className="text-orange-600">Us</span>
          </p>
        </AnimatedCard>
      </LazyBackground>

      <div className="bg-black text-white min-h-screen flex items-center justify-center px-6">
        <div className="flex flex-col md:flex-row gap-12 w-full max-w-6xl py-12 md:py-20">
          {/* Left Side */}
          <div className="md:w-1/2">
            <p className="text-orange-600 uppercase font-medium mb-2">
              Contact Us
            </p>
            <h2 className="text-3xl font-extrabold mb-8">Get in Touch</h2>

            <div className="flex items-start gap-4 mb-6">
              <div className="text-orange-500 text-2xl">
                <FaMapMarkerAlt />
              </div>
              <p>40,1, Prince Anwar Rd,Swiss Park </p>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="text-orange-500 text-2xl">
                <FaPhoneAlt />
              </div>
              <p>011-2553-2553 &nbsp; | &nbsp; 125-668-886</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-orange-500 text-2xl">
                <FaEnvelope />
              </div>
              <p>Support.adroit@gmail.com</p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name..."
                className="bg-transparent border border-gray-600 px-4 py-2 outline-none focus:border-orange-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email..."
                className="bg-transparent border border-gray-600 px-4 py-2 outline-none focus:border-orange-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Query..."
                className="bg-transparent border border-gray-600 px-4 py-2 outline-none focus:border-orange-500"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
              />
              <textarea
                placeholder="Comment...."
                className="bg-transparent border border-gray-600 px-4 py-2 h-28 outline-none focus:border-orange-500"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2"
              >
                SUBMIT
              </button>
              {message && (
                <p className="text-sm mt-2 text-green-500">{message}</p>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="bg-black flex justify-center items-center w-full p-4">
        <div className="w-full max-w-6xl aspect-video">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.50280519491!2d88.37414957966543!3d22.952528756140023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8930eeb863655%3A0xb3a6adf26d41d0b5!2sAcademy%20of%20Technology!5e0!3m2!1sen!2sin!4v1755020742367!5m2!1sen!2sin"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contact;

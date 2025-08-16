import { useState, useEffect } from "react";
import trainer1 from "../assets/Images/trainer1.jpg";
import trainer2 from "../assets/Images/trainer2.jpg";
import trainer3 from "../assets/Images/trainer3.jpg";
import trainer4 from "../assets/Images/trainer4.jpg";
import trainer5 from "../assets/Images/trainer5.jpg";

export default function Carousel() {
  const items = [
    { id: 1, pic: trainer1 },
    { id: 2, pic: trainer2 },
    { id: 3, pic: trainer3 },
    { id: 4, pic: trainer4 },
    { id: 5, pic: trainer5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="w-full flex-shrink-0 flex items-center justify-center bg-black"
          >
            <img
              src={item.pic}
              alt={`Trainer ${item.id}`}
              className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

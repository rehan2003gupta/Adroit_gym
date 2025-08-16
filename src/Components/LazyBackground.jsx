import { useState, useEffect } from "react";

const LazyBackground = ({ src, children, height = "100vh", className = "" }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  return (
    <div
      style={{
        backgroundImage: loaded ? `url(${src})` : "none", // Only set when loaded
        backgroundSize: "cover",
        backgroundPosition: "center",
        height,
        width: "100%",
        transition: "background-image 0.5s ease-in-out", // smooth fade-in
      }}
      className={`flex flex-col items-center justify-center object-contain transition-all duration-200 ${className}`}
    >
      {/* Blur/fade overlay while loading */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
      )}
      {children}
    </div>
  );
};

export default LazyBackground;

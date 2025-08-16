import { useState, useEffect } from "react";

const LazyBackground = ({ src, children }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${src}) center/cover no-repeat`,
        height: "100vh",
        width: "100%",
        filter: loaded ? "none" : "blur(20px)", // blurred until loaded
        transition: "filter 0.6s ease-out",
      }}
      className="flex flex-col items-center justify-center transition-all duration-200"
    >
      {children}
    </div>
  );
};

export default LazyBackground;

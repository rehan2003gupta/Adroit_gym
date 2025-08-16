import React, { useState, useEffect } from "react";
import UserContext from "./Store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase"; 
import Lottie from "lottie-react";
import loadingAnimation from "../assets/Animation/Material wave loading.json"; // path to your JSON

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <Lottie
          animationData={loadingAnimation}
          loop={true}
          autoplay={true}
          style={{ height: 150, width: 150 }}
        />
      </div>
    );
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

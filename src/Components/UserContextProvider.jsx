import React, { useState, useEffect } from "react";
import UserContext from "./Store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase"; // make sure path is correct

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen to Firebase auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Restore logged-in user
      } else {
        setUser(null); // No user -> logged out
      }
      setLoading(false);
    });

    // Cleanup on unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Prevent flicker while Firebase restores session
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

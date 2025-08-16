import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FaGem, FaCrown, FaStar } from "react-icons/fa";
import BackgroundImage from "../assets/Images/rope.jpg"; // page background
import CardLogo from "../assets/Images/back.jpg"; // card logo

export default function GymCard() {
  const [userData, setUserData] = useState(null); // single user, not array
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);

        // ✅ Listen to single user doc using UID
        const userDocRef = doc(db, "users", user.uid);
        const unsubscribeData = onSnapshot(userDocRef, (docSnap) => {
          if (docSnap.exists()) {
            const d = docSnap.data();
            const admissionDate = d.createdAt
              ? d.createdAt.toDate()
              : new Date();

            // Expiry & plan type
            let expiryDate = new Date(admissionDate);
            let planType = "";
            let planIcon = null;
            let badgeColor = "";
            if (d.planId === 0) {
              expiryDate.setMonth(expiryDate.getMonth() + 1);
              planType = "Monthly";
              planIcon = <FaStar className="text-yellow-400 text-2xl" />;
              badgeColor =
                "bg-yellow-300/25 text-yellow-800 ring-yellow-400/40";
            } else if (d.planId === 1) {
              expiryDate.setMonth(expiryDate.getMonth() + 6);
              planType = "Half Yearly";
              planIcon = <FaCrown className="text-blue-400 text-2xl" />;
              badgeColor = "bg-blue-300/25 text-blue-800 ring-blue-400/40";
            } else if (d.planId === 2) {
              expiryDate.setFullYear(expiryDate.getFullYear() + 1);
              planType = "Yearly";
              planIcon = <FaGem className="text-purple-400 text-2xl" />;
              badgeColor =
                "bg-purple-300/25 text-purple-800 ring-purple-400/40";
            }

            setUserData({
              id: docSnap.id,
              name: `${d.firstName} ${d.lastName}`,
              admissionDate,
              expiryDate,
              planType,
              planIcon,
              badgeColor,
            });
          } else {
            setUserData(null);
          }
        });

        return () => unsubscribeData();
      } else {
        setCurrentUser(null);
        setUserData(null);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  if (!currentUser) {
    return (
      <p className="p-6 text-red-500">
        Please log in to see your enrollment data.
      </p>
    );
  }

  return (
    <div
  className="min-h-screen flex items-center justify-center flex-col p-6 bg-cover bg-center"
  style={{ backgroundImage: `url(${BackgroundImage})` }}
>
  <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500 hover:text-orange-600 mb-10  tansition-all duration-200 drop-shadow-lg text-center">
    Your Profile
  </h2>

  {!userData ? (
    <p className="text-white text-center text-lg">
      No enrollment data found.
    </p>
  ) : (
    <div className="w-full max-w-md flex justify-center">
      <div
        key={userData.id}
        className="relative w-full shadow-amber-50  rounded-xl overflow-hidden shadow-lg transform hover:scale-110 transition duration-300 ring-1 ring-white/10"
        style={{
          background:
            "linear-gradient(to bottom right, #000000, #9343ea, #cfcdc9)",
          minHeight: "280px",
        }}
      >
        {/* Gloss highlights */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-36 h-36 bg-black/10 rounded-full blur-3xl"></div>
        </div>

        {/* Card content */}
        <div className="relative z-10 flex flex-col items-center justify-center p-6 text-white">
          {/* Logo */}
          <img
            src={CardLogo}
            alt="Logo"
            className="w-16 h-16 mb-4 rounded-xl ring-1 ring-white/20 shadow-md"
          />

          {/* Plan icon */}
          <div className="mb-2">{userData.planIcon}</div>

          {/* Badge */}
          <div
            className={`px-3 py-1 rounded-full text-xs font-semibold mb-3 ${userData.badgeColor}`}
          >
            {userData.planType}
          </div>

          {/* Member info */}
          <p className="text-sm font-semibold">
            ID: {currentUser.uid.substring(0, 6)}
          </p>
          <h3 className="text-xl font-bold mb-1">{userData.name}</h3>
          <p className="text-sm">
            <span className="font-semibold">Admission:</span>{" "}
            {userData.admissionDate.toLocaleDateString()}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Expiry:</span>{" "}
            {userData.expiryDate.toLocaleDateString()}
          </p>

          {/* Decorative overlay */}
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-black to-gray-900 rounded-2xl"></div>
        </div>
      </div>
    </div>
  )}
</div>

  );
}
 
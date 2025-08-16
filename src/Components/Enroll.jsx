import React, { useState, useEffect } from "react";
import BackgroundImage from "../assets/Images/oilyoga.jpg";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "./firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function UserForm() {
  const [send, setSend] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const location = useLocation();
  const navigate = useNavigate();
  const selectedPlan = location.state?.planId; // plan ID sent from Price component

  const planNames = {
    0: "Monthly",
    1: "Half Yearly",
    2: "Yearly",
  };

  // Listen for auth state
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentUser) {
      alert("You must be logged in to enroll.");
      return;
    }

    if (selectedPlan === undefined) {
      alert("No plan selected. Please go back and select a plan.");
      return;
    }

    try {
      const docData = {
        ...formData,
        planId: selectedPlan,
        planTitle: planNames[selectedPlan] || "Unknown Plan",
        createdAt: Timestamp.now(),
        userId: currentUser.uid,
      };

      // ✅ Store/Update using UID as doc ID
      await setDoc(doc(db, "users", currentUser.uid), docData, { merge: true });

      setSend(true);

      // Clear form
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
      });

      // Navigate home after success
      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      console.error("Error adding/updating document: ", error);
      setSend(false);
      alert("Error submitting form. Check console for details.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-black bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        {send && (
          <p className="text-center text-green-500 mb-4">
            Form submitted successfully!
          </p>
        )}

        <h2 className="text-2xl font-bold text-orange-500 mb-6 text-center">
          User Information
        </h2>

        {/* Show selected plan */}
        {selectedPlan !== undefined ? (
          <p className="text-orange-500 font-bold mb-4 text-center">
            You selected: {planNames[selectedPlan]}
          </p>
        ) : (
          <p className="text-red-500 font-bold mb-4 text-center">
            No plan selected. Please go back and select a plan.
          </p>
        )}

        {/* Form fields */}
        {["firstName", "lastName", "phone", "email"].map((field) => (
          <div className="mb-4" key={field}>
            <label className="block text-white font-medium mb-1">
              {field === "phone"
                ? "Phone Number"
                : field === "email"
                ? "Email ID"
                : field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type={field === "email" ? "email" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={`Enter ${field}`}
              className="w-full px-4 py-2 rounded-lg border border-orange-600 bg-black text-white focus:outline-none focus:ring-2 focus:ring-orange-600"
              required
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full py-2 px-4 bg-orange-600 text-black font-bold rounded-lg hover:bg-orange-500 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

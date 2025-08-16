import { useState, useContext, useEffect } from "react";
import { auth, googleProvider } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  setPersistence,
  browserLocalPersistence
} from "firebase/auth";
import UserContext from "./Store"; // import your context

export default function Login({ onClose }) {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  // ✅ Ensure persistence only once
  useEffect(() => {
    setPersistence(auth, browserLocalPersistence).catch((err) => {
      console.error("Persistence error:", err);
    });
  }, []);

  const handleAuth = async (e) => {
    e.preventDefault();
    setError("");
    setStatusMessage("");

    if (!email || !password) {
      setError("Email and password cannot be empty.");
      return;
    }

    try {
      let userCredential;
      if (isSignup) {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
        setStatusMessage("Account created successfully!");
      } else {
        userCredential = await signInWithEmailAndPassword(auth, email, password);
        setStatusMessage("Logged in successfully!");
      }
      setUser(userCredential.user); // update context immediately
      onClose();
    } catch (err) {
      console.error("Firebase Auth Error:", err);
      switch (err.code) {
        case "auth/user-not-found":
          setError("No account found with this email.");
          break;
        case "auth/wrong-password":
          setError("Incorrect password.");
          break;
        case "auth/invalid-email":
          setError("Invalid email address.");
          break;
        default:
          setError(err.message);
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      setUser(userCredential.user);
      setStatusMessage("Google login successful!");
      onClose();
    } catch (err) {
      console.error("Google Login Error:", err);
      if (err.code === "auth/invalid-credential") {
        setError("Google login failed. Check your Firebase setup.");
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-80 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Error + Success messages */}
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
        {statusMessage && <p className="text-green-600 text-sm mt-2">{statusMessage}</p>}

        <h2 className="text-xl font-bold mb-4">
          {isSignup ? "Sign Up" : "Login"}
        </h2>

        {/* Email/password form */}
        <form onSubmit={handleAuth} className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        {/* Google login */}
        <button
          onClick={handleGoogleLogin}
          className="bg-red-500 text-white py-2 rounded mt-3 w-full hover:bg-red-600"
        >
          Sign in with Google
        </button>

        {/* Toggle signup/login */}
        <p
          className="text-sm text-center mt-4 cursor-pointer text-blue-500"
          onClick={() => setIsSignup(!isSignup)}
        >
          {isSignup
            ? "Already have an account? Login"
            : "Don't have an account? Sign up"}
        </p>
      </div>
    </div>
  );
}

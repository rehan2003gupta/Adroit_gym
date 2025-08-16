import React, { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Login from "../Login";
import UserContext from "../Store"; // context
import { signOut } from "firebase/auth"; 
import { auth } from "../firebase"; // your firebase config
import account from "../../assets/Images/account.png"
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/")
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };
  const navigate=useNavigate();
  const handleUser=()=>{
    navigate("/gymcard")
  }

  return (
    <>
      <header className="shadow sticky z-50 top-0">
        <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <h2 className="text-3xl font-extrabold text-white">
                <span className="text-white">ADRO</span>
                <span className="text-orange-500">IT</span>
              </h2>
            </Link>

            {/* Right Side Actions */}
            <div className="flex items-center lg:order-2">
              {user ? (
                <>
                  <span className="text-white font-medium mr-3">Hi, <span className="text-orange-500 " >{user?.email?.split('@')[0]}</span></span>
                  <button
                    onClick={handleLogout}
                    className="text-white transition-all duration-200 hover:border-orange-600 bg-red-600 hover:bg-white hover:text-red-600 font-medium rounded-sm text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                  >
                    Logout
                  </button>
                  <button onClick={handleUser}>
                    <img className="object-contain w-10 h-10" src={account} alt="" style={{ filter: 'invert(94%) sepia(58%) saturate(500%) hue-rotate(-20deg) brightness(95%) contrast(90%)' }} />
                  </button>
                </>
                
              ) : (
                <button
                  onClick={() => setShowLogin(true)}
                  className="text-white transition-all duration-200 hover:border-orange-600 bg-orange-600 hover:bg-white hover:text-orange-600 font-medium rounded-sm text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Log in
                </button>
              )}

              {/* Hamburger Menu */}
              <button
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg lg:hidden hover:bg-gray-800 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Navigation Menu */}
            <div
              className={`${isMenuOpen ? "block" : "hidden"} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {[
                  { name: "HOME", path: "/" },
                  { name: "ABOUT US", path: "/about" },
                  { name: "SERVICES", path: "/services" },
                  { name: "OUR TEAM", path: "/team" },
                  { name: "CONTACT", path: "/contact" },
                ].map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-orange-700" : "text-amber-50"
                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Login Modal */}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
}

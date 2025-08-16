import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Components from "./Components";
import Login from "./Components/Login";
import Enroll from "./Components/Enroll";
import Gymcard from "./Components/Gymcard"
const { Home, Contact, Team, Services, About } = Components;
import Layout from "./Components/Layout";
import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="team" element={<Team />} />
      <Route path="Services" element={<Services />} />
      <Route path="login" element={<Login />} />
      <Route path="enroll" element={<Enroll />} />
      <Route path="gymcard" element={<Gymcard />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
/*<Route
          path="*"
          element={
            <h1 className="flex justify-center items-center text-4xl text-white bg-gray-800 h-screen">
              🚫 Page Not Found
            </h1>
          }
        />*/

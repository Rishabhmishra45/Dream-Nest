import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import Signup from "./components/SignUp/Signup.jsx";
import Listing from "./components/Listing/Listing.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Usercontext from "./Context/Usercontext.jsx";
import Contact from "./components/Contact/Contact.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="listing" element={<Listing />} />
      <Route path="profile" element={<Profile />} /> {/* new consumer route */}
      <Route path="Help Center" element={<Contact />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Usercontext>
      <RouterProvider router={router} />
    </Usercontext>
  </StrictMode>
);

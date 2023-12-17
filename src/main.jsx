import React from "react";
import { User } from "./assets/User/User.jsx";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import {
  Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./assets/components/Home/Home.jsx";
import About from "./assets/components/About/About.jsx";
import Contact from "./assets/components/Contact/Contact.jsx";
import {
  Github,
  githubDataLoader,
} from "./assets/components/Github/Github.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} /> //userid is important to
      memorize
      <Route loader={githubDataLoader} path="github" element={<Github />} />
    </Route>
    // path will be given in structured file
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  // create route fuction
);

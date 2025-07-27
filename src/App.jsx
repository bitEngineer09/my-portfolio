import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import ErrorPages from "./pages/ErrorPages";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Education from "./pages/Education";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPages />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/skills",
          element: <Skills />,
        },
        {
          path: "/education",
          element: <Education />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
};

export default App;

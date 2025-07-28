import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import ErrorPages from "./pages/ErrorPages";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Projects from "./pages/Projects";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPages />,
      children: [
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/skills",
          element: <Skills />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/educatio",
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

import "./App.css";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./HomePage/Home";
import SignIn from "./Component/Sign_In_Page/SignIn";
function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/SignIn",
      element: <SignIn />,
    },
  ]);

  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;

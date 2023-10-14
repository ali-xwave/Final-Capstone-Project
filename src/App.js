import "./App.css";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./HomePage/Home";
import SignIn from "./Sign_In_Page/SignIn";
import FurniturePage from "./Furniture_Page/Furniture";
import LivingFurniture from "./Living_Room_Furniture_Page/LivingFurniture";
import LivingRoomSets from "./Living_Room_sets_Page/LivingRoomSets";
import SignUp from "./Sign_Up_Page/SignUp";
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
    {
      path: "/FurniturePage",
      element: <FurniturePage />,
    },

    {
      path: "/LivingFurniture",
      element: <LivingFurniture />,
    },
    
    {
      path: "/LivingRoomSets",
      element: <LivingRoomSets />,
    },
    {
      path: "/SignUp",
      element: <SignUp />,
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

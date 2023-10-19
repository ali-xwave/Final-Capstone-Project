import "./App.css";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Furniture1 from "./Furniture_Page_Components/Furniture/Furniture";
import Title from "./Component/Title/title";
import Home from "./HomePage/Home";
import Room from "./Living_Room_Components/LivingRoomFurniture/Room";
import SetsRoom from "./Living_Room_Sets_Components/SetsRoomCards/SetsRoom";
// import SignIn from "./Sign_In_Page/SignIn";
// import FurniturePage from "./Furniture_Page/Furniture";
// import LivingFurniture from "./Living_Room_Furniture_Page/LivingFurniture";
// import LivingRoomSets from "./Living_Room_sets_Page/LivingRoomSets";
// import SignUp from "./Sign_Up_Page/SignUp";
function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Title />,
      children:[
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/Furniture1",
          element: <Furniture1 />
        },
        {
          path: "/LivingRoomFurniture",
          element: <Room />
        },
        {
          path: "/LivingRoomSets",
          element: <SetsRoom />
        }
      ],
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

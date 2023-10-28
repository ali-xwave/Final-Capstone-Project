import "./App.css";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Title from "./Component/Title/title";
import Home from "./HomePage/Home";
import Furniture from "./Component/Furniture/Furniture";
import SignIn from "./Sign_In_Page/SignIn";
import SignUpPage from "./Sign_Up_Page/SignUpPage";
import LivingRoomFurniture from "./Component/LivingRoomFurniture/LivingRoomFurniture";
import LivingRoomSets from "./Component/LivingRoomSetsCards/SetsRoom";
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
          path: "/Furniture/:productId",
          element: <Furniture />,
        },
        {
          path: "/LivingRoomFurniture/:roomId",
          element: <LivingRoomFurniture />
        },
        {
          path: "/LivingRoomSets/:setsId",
          element: <LivingRoomSets />
        },
      ],
    },

    {
      path: "/SignIn",
      element: <SignIn />
    },
    {
      path: "/SignUp",
      element: <SignUpPage />
    }
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

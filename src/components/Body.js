import React from "react";
import Login from "./login";
import Browse from "./browse";
import { createBrowserRouter,  RouterProvider } from "react-router-dom";
const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/Browse",
      element: <Browse />,
    },
  ]);
 
  return (
    <div>
      <RouterProvider router={appRouter}>
        <Login />
        <Browse />
      </RouterProvider>
    </div>
  );
};

export default Body;

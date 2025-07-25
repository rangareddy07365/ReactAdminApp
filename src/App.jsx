import React from "react";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  { path:"/", element:<AdminLayout/> },
  { path:"/about", element:<About/> },
  { path:"/contact", element:<Contact/> },
  { path:"*", element:<NotFoundPage/> },
]);

const App = () => {
  return (
    <div>
      {/* <AdminLayout /> */}
      <RouterProvider router = {router} />
    </div>
  );
};

export default App;

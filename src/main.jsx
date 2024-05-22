import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createContext, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Conver from "./components/Conver.jsx";
import Remove from "./components/Remove.jsx";
import Search from "./components/Search.jsx";
import Setting from "./components/Setting.jsx";
import Support from "./components/Support.jsx";
import StartScreen from "./components/StartScreen.jsx";
import PrivateRoute from "./utils/PrivateRoute.jsx";

export const AuthContext = createContext();

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      
      {
        element: <PrivateRoute/>,
        children: [
          {
            path: "/badass",
            element: <StartScreen />,
          },
          {
            path: "/convert",
            element: <Conver />,
          },
          {
            path: "/remove",
            element: <Remove />,
          },
          {
            path: "/search",
            element: <Search />,
          },
          {
            path: "/setting",
            element: <Setting />,
          },
          {
            path: "/support",
            element: <Support />,
          },
        ],
      },
    ],
  },
]);

const AppWraper = () => {
  const [auth, setAuth] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      <RouterProvider router={AppRouter} />
    </AuthContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppWraper></AppWraper>
);
// https://weekly-test03-nu.vercel.app/app
// https://weekly-test03-nu.vercel.app/app/convert
// https://weekly-test03-nu.vercel.app/app/search
// https://weekly-test03-nu.vercel.app/app/remove
// https://weekly-test03-nu.vercel.app/app/settings
// https://weekly-test03-nu.vercel.app/app/support

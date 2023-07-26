import React from "react";
import Router, { fetchInitialData } from "./routes/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./routes/Layout";
import { GlobalStyles } from "./styles/globalStyles";
import { Global } from "@emotion/react";
import NotFound from "./pages/notFound/NotFound";
import RoomList from "./pages/chat/RoomList";

interface IProps {}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: fetchInitialData,
    children: [
      { index: true, element: <Home /> },
      { path: "/rooms", element: <RoomList /> },
    ],
    errorElement: <NotFound />,
  },
]);
function App(props: IProps) {
  return (
    <>
      <Global styles={GlobalStyles} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

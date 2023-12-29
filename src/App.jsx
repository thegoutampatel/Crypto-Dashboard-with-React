import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Transaction from "./Pages/Transaction/Transaction";
import Support from "./Pages/Support/Support";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },
  {
    path: "/dashboard",
    element: <Navigate to="/" />,
  },
  {
    path: "/transaction",
    element: <Transaction/>,
  },
  {
    path: "/support",
    element: <Support/>,
  },
]);

const App = () => {
  return (
    <>
     <RouterProvider router={router} />
    </>
      )
}

export default App
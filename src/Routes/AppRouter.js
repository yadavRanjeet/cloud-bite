import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../components/About";
import Contact from "../components/Contact";
import Error from "../components/Error";
import Faltu from "../components/Faltu";
import RestrauntMenu from "../components/RestrauntMenu";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Faltu /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restraunt/:resId", element: <RestrauntMenu  /> },
    ],
    errorElement: <Error />,
  },
]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={AppRouter} />
// );
export default AppRouter;

import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Attendance from "../../Pages/Dashboard/Attendance/Attendance";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import EmptyContent from "../../Pages/Dashboard/EmptyContent/EmptyContent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/attendance",
        element: <Attendance></Attendance>,
      },
      {
        path: "/dashboard/employees",
        element: <EmptyContent />,
      },
      {
        path: "/dashboard/leaves",
        element: <EmptyContent />,
      },
      {
        path: "/dashboard/expense",
        element: <EmptyContent />,
      },
      {
        path: "/dashboard/notice",
        element: <EmptyContent />,
      },
      {
        path: "/dashboard/departments",
        element: <EmptyContent />,
      },
    ],
  },
]);

export default router;

import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { DataProvider } from "./Component/Task9/context";
import ErrorBoundary from "./Component/Task11/ErrorBoundary";
import Error from "./Component/Task11/Error";
import ProtectedRoute from "./Component/Task12/ProtectedRoute";

import Home from "./Component/Home";
import Task1 from "./Component/Task1";
import Task2 from "./Component/Task2";
import Task3 from "./Component/Task3";
import Task4 from "./Component/Task4";
import Task5 from "./Component/Task5/Task5";
import Task6 from "./Component/Task6";
import Task7 from "./Component/Task7/Task7";
import Task8 from "./Component/Task8/Task8";
import Task9 from "./Component/Task9/Task9";
import Task10 from "./Component/Task10";
import Task11 from "./Component/Task11/Task11";
import Task12 from "./Component/Task12/Task12";
import Task14 from "./Component/Task14";
import Profile from "./Component/Task7/Page1";
import About from "./Component/Task7/Page2";
import Contact from "./Component/Task7/Page3";

const Task15 = lazy(() => import("./Component/Task15"));

const AppLayout = () => (
  <DataProvider>
    <ErrorBoundary>
      <Outlet />
    </ErrorBoundary>
  </DataProvider>
);

const AppProvider = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/task1",
        element: <Task1 />,
      },
      {
        path: "/task2",
        element: <Task2 />,
      },
      {
        path: "/task3",
        element: <Task3 />,
      },
      {
        path: "/task4",
        element: <Task4 />,
      },
      {
        path: "/task5",
        element: <Task5 />,
      },
      {
        path: "/task6",
        element: <Task6 />,
      },
      {
        path: "/task7",
        element: <Task7 />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
        ],
      },
      {
        path: "/task8",
        element: <Task8 />,
      },
      {
        path: "/task9",
        element: <Task9 />,
      },
      {
        path: "/task10",
        element: <Task10 />,
      },
      {
        path: "/task11",
        element: <Task11 />,
      },
      {
        path: "/task12",
        element: <Task12 />,
        children: [
          {
            element: <ProtectedRoute />,
            children: [
              {
                path: "profile",
                element: <Profile />,
              },
              {
                path: "about",
                element: <About />,
              },
              {
                path: "contact",
                element: <Contact />,
              },
            ],
          },
        ],
      },
      {
        path: "/task14",
        element: <Task14 />,
      },
      {
        path: "/task15",
        element: (
          <Suspense
            fallback={<h4 className="mt-10 text-center m-auto">Loading...</h4>}
          >
            <Task15 />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppProvider} />);

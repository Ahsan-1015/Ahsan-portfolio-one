import { Helmet } from "react-helmet";
import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Repositories from "../pages/Repositories";

// import Stars from "../pages/Stars";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <>
            <Helmet>
              <title>Overview || Portfolio</title>
            </Helmet>
            <Home />
          </>
        ),
      },
      {
        path: "Repositories",
        element: (
          <>
            <Helmet>
              <title>Repositories || Portfolio</title>
            </Helmet>
            <Repositories />
          </>
        ),
      },
      {
        path: "about",
        element: (
          <>
            <Helmet>
              <title>Projects || Portfolio</title>
            </Helmet>
            <Projects />
          </>
        ),
      },
      {
        path: "contact",
        element: (
          <>
            <Helmet>
              <title>Stars || Portfolio</title>
            </Helmet>
            {/* <Stars /> */}
          </>
        ),
      },
    ],
  },
]);

export default router;

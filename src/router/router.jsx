import { Helmet } from "react-helmet-async";
import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetails";
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
        path: "projects",
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
              <title>Contact || Portfolio</title>
            </Helmet>
            <Contact showBorder={true} />
          </>
        ),
      },
      {
        path: "projects/:id",
        element: (
          <>
            <Helmet>
              <title>Project Details || Portfolio</title>
            </Helmet>
            <ProjectDetails />
          </>
        ),
      },
    ],
  },
]);

export default router;

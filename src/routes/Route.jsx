import { createBrowserRouter, } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import SurveyCard from "../pages/home/surveyCard/SurveyCard";
import ContactUs from "../pages/home/contactUs/ContactUs";
import AboutUs from "../pages/home/aboutUs/AboutUs";
import CreateNewSurvey from "../pages/home/createNewSurvey/CreateNewSurvey";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "services",
        element: <SurveyCard></SurveyCard>
      },
      {
        path: "about",
        element: <AboutUs></AboutUs>
      },
      {
        path: "contact",
        element: <ContactUs></ContactUs>
      },
      {
        path: "createnewsurvey",
        element: <CreateNewSurvey></CreateNewSurvey>
      }
    ]
  },
])

export default router;
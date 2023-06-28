import { createBrowserRouter } from "react-router-dom";

import LandingPage from "../Pages/Landing";
import LoginPage from "../Pages/Landing/Form/loginPage";
import SignUpPage from "../Pages/Landing/Form/signUpPage";
import TestPage from "../Pages/UserTest";
import ErrorPage from "../Pages/Error";

const router = createBrowserRouter([
  {
    path: "",
    element: <LandingPage />,
  },
  {
    path: "test",
    element: <TestPage />,
  },
  {
    path: "form/login",
    element: <LoginPage />,
  },
  {
    path: "form/signup",
    element: <SignUpPage />,
  },

  // {

  // 	children: [
  // 		{
  // 			path: 'review/detail/:idx',
  // 			element: <ReviewDetail />,
  // 		},
  // 	],
  // },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;

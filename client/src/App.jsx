import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Shares,
  Contact,
  Demos,
  Docs,
  Error,
  HomeLayout,
  Landing,
  Login,
  Pricing,
  Register,
  Services,
  DashboardLayout,
  CompanyLayout,
  Account,
  Product,
  UserCrowdfunding,
  DeveloperCrowdfunding,
  Donations,
  Smuni,
  SmuniPayment,
  Transactions,
  ApplyCrowdFund,
} from "./pages";
import { action as loginAction } from "./pages/Login";
import { action as registerAction } from "./pages/Register";
import { action as productAction } from "./pages/Product";
import { action as accountAction } from "./pages/Account";
import { action as campaignAction } from "./components/CreateCampaign";
import { action as smuniAction } from "./pages/Smuni";
import { action as smuniPaymentAction } from "./pages/SmuniPayment";
import { action as applyCrowdFundAction } from "./pages/ApplyCrowdFund";

import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { loader as transactionLoader } from "./pages/Transactions";
import { loader as crowdFundingLoader } from "./pages/UserCrowdfunding";
import { loader as DeveloperCrowdfundingLoader } from "./pages/DeveloperCrowdfunding";
import { loader as smuniPaymentLoader } from "./pages/SmuniPayment";
import { loader as productLoader } from "./pages/Product";
import { loader as ApplyCrowdFundLoader } from "./pages/ApplyCrowdFund";
import { loader as sharesLoader } from "./pages/Shares";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      //COMPANY
      {
        path: "company",
        element: <CompanyLayout />,
        children: [
          {
            path: "about",
            element: <About />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "demo",
            element: <Demos />,
          },
          {
            path: "pricing",
            element: <Pricing />,
          },
          {
            path: "services",
            element: <Services />,
          },
          {
            path: "docs",
            element: <Docs />,
          },
        ],
      },
      //DASHBOARD
      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <Account />,
            action: accountAction,
          },
          {
            path: "transactions",
            element: <Transactions />,
            loader: transactionLoader,
          },
          {
            path: "user-crowd",
            element: <UserCrowdfunding />,
            loader: crowdFundingLoader,
          },
          {
            path: "developer-crowd",
            element: <DeveloperCrowdfunding />,
            loader: DeveloperCrowdfundingLoader,
            action: campaignAction,
          },
          {
            path: "donations",
            element: <Donations />,
          },
          {
            path: "product",
            element: <Product />,
            action: productAction,
            loader: productLoader,
          },
          // {
          //   path: "balance",
          //   element: <Balance />,
          // },
          {
            path: "smuni",
            element: <Smuni />,
            action: smuniAction,
          },
          {
            path: "shares",
            element: <Shares />,
            loader: sharesLoader,
          },
          {
            path: "smuni-payment/:id",
            element: <SmuniPayment />,
            loader: smuniPaymentLoader,
            action: smuniPaymentAction,
          },
          {
            path: "apply-crowdfund/:id",
            element: <ApplyCrowdFund />,
            loader: ApplyCrowdFundLoader,
            action: applyCrowdFundAction,
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;

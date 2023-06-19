import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import DashboardContainer from "../components/layout/dashboard_container/DashboardContainer";

// Routes
import { adminRoutes } from "./adminRoutes";
import DashboardPage from "../pages/dashboard_page/DashboardPage";
import Tour from "../components/Tour";
import News from "../components/News";

function ApplicationRoutes() {
  // const currentUser = useSelector((state) => {
  //     return state?.user?.currentUser?.user?.role;
  // });

  // const token = useSelector((state) => {
  //     return state?.user?.currentUser?.token;
  // });

  // const isLoggedIn = !!token;

  return (
    <Routes>
      {/* <Route element={<Auth />}>
        <Route path='/' element={<LoginForm />} />
        <Route path='/forgot' element={<ForgotForm />} />
        <Route path='/verify-otp' element={<VerifyOTP />} />
        <Route path='/set-new-password' element={<SetNewPassword />} />
      </Route> */}
      <Route path='/' element={<DashboardContainer />}>
        <Route path='/' element={<DashboardPage />} />
        <Route path='/tour' element={<Tour />} />
        <Route path='/news' element={<News />} />
      </Route>

      {/* {currentUser == userType.admin && (
                <Route
                    exact
                    path="/"
                    element={
                        <ProtectedRoute>
                            <DashboardContainer />
                        </ProtectedRoute>
                    }
                >
                    {adminRoutes.map((route, index) => {
                        return <Route path={route.path} element={route.element} {...route} key={index} />;
                    })}
                </Route>
            )} */}

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}

export default ApplicationRoutes;
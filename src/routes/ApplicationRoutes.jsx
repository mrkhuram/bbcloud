import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import { ProtectedRoute } from "./ProtectedRoute";
import DashboardContainer from "../components/layout/dashboard_container/DashboardContainer";

// Routes
// import { adminRoutes } from "./adminRoutes";
import DashboardPage from "../pages/dashboard_page/DashboardPage";
import Tour from "../components/Tour";
import News from "../components/News";
import Store from "../pages/store/Store";
import ProductPage from "../pages/store/product";
import Music from "../pages/Music/Music_page";
import PhotosPage from "../pages/Photos/Photos_page";
import Videos from "../pages/Videos/Videos";

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
      <Route path="/" element={<DashboardContainer />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/news" element={<News />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:slug" element={<ProductPage />} />
        <Route path="/music" element={<Music />} />
        <Route path="/photos" element={<PhotosPage />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/store" element={<Store />} />
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

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default ApplicationRoutes;

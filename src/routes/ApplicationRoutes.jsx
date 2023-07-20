import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import { ProtectedRoute } from "./ProtectedRoute";
import DashboardContainer from "../components/layout/dashboard_container/DashboardContainer";

// Routes
// import { adminRoutes } from "./adminRoutes";
import DashboardPage from "../pages/dashboard_page/DashboardPage";
import Tour from "../pages/tour/Tour";
import News from "../pages/news";
import Store from "../pages/store";
import ProductOverviewPage from "../pages/store/overview";
import Music from "../pages/Music";
import PhotosPage from "../pages/Photos";
import Videos from "../pages/Videos";

import NewsOverviewPage from "../pages/news/overview";
import MusicOverviewPage from "../pages/Music/overview";
import PhotosOverviewPage from "../pages/Photos/overview";
import VideosOverviewPage from "../pages/Videos/overview";

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
        <Route path="/news/:slug" element={<NewsOverviewPage />} />

        <Route path="/store" element={<Store />} />
        <Route path="/store/:slug" element={<ProductOverviewPage />} />

        <Route path="/music" element={<Music />} />
        <Route path="/music/:slug" element={<MusicOverviewPage />} />

        <Route path="/photos" element={<PhotosPage />} />
        <Route path="/photos/:slug" element={<PhotosOverviewPage />} />

        <Route path="/videos" element={<Videos />} />
        <Route path="/videos/:slug" element={<VideosOverviewPage />} />
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

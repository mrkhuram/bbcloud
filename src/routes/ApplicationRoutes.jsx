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
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import SuccessPayment from "../pages/payment/SuccessPayment";
import DeclinePayment from "../pages/payment/DeclinePayment";
import ScrollToTopHOC from "../components/scrollToTopHOC/scrollToTopHOC";

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

      <Route
        path="/"
        element={
          <ScrollToTopHOC>
            <DashboardContainer />
          </ScrollToTopHOC>
        }
      >
        <Route
          path="/"
          element={
            <ScrollToTopHOC>
              <DashboardPage />
            </ScrollToTopHOC>
          }
        />
        <Route
          path="/tour"
          element={
            <ScrollToTopHOC>
              <Tour />
            </ScrollToTopHOC>
          }
        />

        <Route
          path="/news"
          element={
            <ScrollToTopHOC>
              <News />
            </ScrollToTopHOC>
          }
        />
        <Route
          path="/news/:slug"
          element={
            <ScrollToTopHOC>
              <NewsOverviewPage />
            </ScrollToTopHOC>
          }
        />

        <Route
          path="/store"
          element={
            <ScrollToTopHOC>
              <Store />
            </ScrollToTopHOC>
          }
        />
        <Route
          path="/store/:slug"
          element={
            <ScrollToTopHOC>
              <ProductOverviewPage />
            </ScrollToTopHOC>
          }
        />

        <Route
          path="/music"
          element={
            <ScrollToTopHOC>
              <Music />
            </ScrollToTopHOC>
          }
        />
        <Route
          path="/music/:slug"
          element={
            <ScrollToTopHOC>
              <MusicOverviewPage />
            </ScrollToTopHOC>
          }
        />

        <Route
          path="/album"
          element={
            <ScrollToTopHOC>
              <PhotosPage />
            </ScrollToTopHOC>
          }
        />
        <Route
          path="/album/:slug"
          element={
            <ScrollToTopHOC>
              <PhotosOverviewPage />
            </ScrollToTopHOC>
          }
        />

        <Route
          path="/videos"
          element={
            <ScrollToTopHOC>
              <Videos />
            </ScrollToTopHOC>
          }
        />
        <Route
          path="/videos/:slug"
          element={
            <ScrollToTopHOC>
              <VideosOverviewPage />
            </ScrollToTopHOC>
          }
        />

        <Route
          path="/about"
          element={
            <ScrollToTopHOC>
              <About />
            </ScrollToTopHOC>
          }
        />
        <Route
          path="/login"
          element={
            <ScrollToTopHOC>
              <Login />
            </ScrollToTopHOC>
          }
        />
        <Route
          path="/register"
          element={
            <ScrollToTopHOC>
              <Register />
            </ScrollToTopHOC>
          }
        />

        <Route
          path="/success"
          element={
            <ScrollToTopHOC>
              <SuccessPayment />
            </ScrollToTopHOC>
          }
        />
        <Route
          path="/decline"
          element={
            <ScrollToTopHOC>
              <DeclinePayment />
            </ScrollToTopHOC>
          }
        />
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

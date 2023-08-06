import React from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { LoginSchema, RegisterSchema } from "./schema";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/userSlice";
import { postItem } from "../../constrain/helper";
import { useNotification } from "../../constrain/noficationHook";
import AppNotification from "../../constrain/AppNotification";

const Login = () => {
  const { closeNotification, notification, pushNotification } =
    useNotification();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginSubmit = async (values, actions) => {
    try {
      const user = await postItem("login", values);
      if (user?.data?.success) {
        pushNotification("Login successfully!");
        dispatch(loginSuccess({ payload: user?.data?.user }));
      }
      actions.resetForm();
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      pushNotification(error?.response?.data?.message, 100000);
    }
  };

  const handleRegisterSubmit = async (values, actions) => {
    try {
      const newUser = await postItem("register", {
        email: values.regEmail,
        password: values.regPassword,
        ...values,
      });

      if (newUser?.data?.success) {
        pushNotification("Register successfully!");
        dispatch(loginSuccess({ payload: newUser?.data?.user }));
        actions.resetForm();
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
    } catch (error) {
      pushNotification(error?.response?.data?.message, 100000);
    }
  };

  return (
    <div className="bg-black pt-20 pb-32">
      {notification && (
        <AppNotification close={closeNotification} message={notification} />
      )}
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl lg:text-5xl text-center text-white font-bold">
            Kid Rock login
          </h1>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={handleLoginSubmit}
          >
            {({ errors, touched }) => (
              <Form className="w-[80%] m-auto mt-12">
                <div className="mb-12">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-xl font-medium grey-tag"
                  >
                    Email
                  </label>
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="app-input-field"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-theme-1"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-xl font-medium grey-tag"
                  >
                    Password
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="app-input-field"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-theme-1"
                  />
                </div>
                <Link to={"/login"} className="text-white">
                  Forget your password
                </Link>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="border-theme-1 border px-8 py-2 mb-8 uppercase hover:bg-theme-1 text-white text-xl md:text-2xl "
                  >
                    Sign In
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <div className="flex-1 mt-12 lg:mt-0">
          <h1 className="text-2xl md:text-3xl lg:text-5xl text-center text-white font-bold">
            Kid Rock Registration
          </h1>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              regEmail: "",
              regPassword: "",
            }}
            validationSchema={RegisterSchema}
            onSubmit={handleRegisterSubmit}
          >
            {({ errors, touched }) => (
              <Form className="w-[80%] lg:w-[50%] m-auto mt-12">
                <div className="mb-6">
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-xl font-medium grey-tag"
                  >
                    First Name
                  </label>
                  <Field
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    className="app-input-field"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-theme-1"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-xl font-medium grey-tag"
                  >
                    Last Name
                  </label>
                  <Field
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    className="app-input-field"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-theme-1"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="regEmail"
                    className="block mb-2 text-xl font-medium grey-tag"
                  >
                    Email
                  </label>
                  <Field
                    type="text"
                    id="regEmail"
                    name="regEmail"
                    placeholder="Email"
                    className="app-input-field"
                  />
                  <ErrorMessage
                    name="regEmail"
                    component="div"
                    className="text-theme-1"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="regPassword"
                    className="block mb-2 text-xl font-medium grey-tag"
                  >
                    Password
                  </label>
                  <Field
                    type="password"
                    id="regPassword"
                    name="regPassword"
                    placeholder="Password"
                    className="app-input-field"
                  />
                  <ErrorMessage
                    name="regPassword"
                    component="div"
                    className="text-theme-1"
                  />
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="border-theme-1 border px-8 py-2 mb-8 uppercase hover:bg-theme-1 text-white text-xl md:text-2xl "
                  >
                    Register
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;

import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("email required"),
  password: Yup.string().required("password required"),
});

export const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required("first name required"),
  lastName: Yup.string().required("last name required"),
  regEmail: Yup.string().email("Invalid email").required("email required"),
  regPassword: Yup.string().required("password required"),
});

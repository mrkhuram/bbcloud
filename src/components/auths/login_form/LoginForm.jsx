import { Formik } from 'formik';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { BASE_URL, sendRequest } from '../../../helpers/utils';
import { loginSuccess } from '../../../redux/userSlice';
import { showSuccessToast, showErrorToast } from '../../../helpers/toast-helper';

const schema = yup.object().shape({
    email: yup.string().email('Must be valid Email').required('Email is required!'),
    password: yup.string().required('Password is required!'),
    rememberMe: yup.boolean()
});
const LoginForm = () => {
    let state = useSelector((state) => {
        return state;
    });

    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    //Yup Form Schema Validitions

    // Form Intial Values - If its New Form
    const initialValues = {
        email: '',
        password: '',
        rememberme: false
    };

    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            let response = await sendRequest(BASE_URL + '/user/login', { payload: values });
            if (response.status === 200) {
                response.data.values = {};
                response.data.values = response.data.user;
                //delete hash password
                let loginData = response.data;
                delete loginData?.user?.password;
                dispatch(loginSuccess(loginData));
                showSuccessToast(state.toast.toast, response?.data?.desc);
            } else if (response.status === 300) {
                showErrorToast(state.toast.toast, response?.data?.desc);
            } else {
                showErrorToast(state.toast.toast, response?.data?.desc || 'Backend Server Issue');
            }
            setLoading(false);
        } catch (error) {
            showErrorToast(state.toast.toast, error.response && error.response.data.desc ? error.response.data.desc : error.message);
        }
    };

    return (
        <>
            <div className="mb-4">
                <div className="text-900 font-26px font-semibold mb-2 text-primary">Login</div>
                <span className="text-600 font-light">Please enter your details</span>
            </div>
            <Formik validationSchema={schema} onSubmit={handleSubmit} initialValues={initialValues} enableReinitialize>
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <div className="flex flex-column">
                            <div className="field w-full">
                                <label htmlFor="email" className="block text-black">
                                    Email
                                </label>
                                <InputText
                                    id="email"
                                    type="email"
                                    aria-describedby="email-help"
                                    className={`block w-full ${touched.email && errors.email ? 'p-invalid' : ''}`}
                                    onChange={handleChange}
                                    value={values.email}
                                    placeholder="xyz@ropstam.com"
                                />
                                {touched.email && errors.email ? (
                                    <small id="email-help" className="p-error block">
                                        {errors.email}
                                    </small>
                                ) : null}
                            </div>

                            <div className="field w-full">
                                <label htmlFor="password" className="block text-black">
                                    Password
                                </label>
                                <InputText
                                    id="password"
                                    type="password"
                                    aria-describedby="password-help"
                                    className={`block w-full ${touched.password && errors.password ? 'p-invalid' : ''}`}
                                    onChange={handleChange}
                                    value={values.password}
                                    placeholder="**********"
                                />
                                {touched.password && errors.password ? (
                                    <small id="password-help" className="p-error block">
                                        {errors.password}
                                    </small>
                                ) : null}
                            </div>

                            <div className="mb-4 flex flex-wrap gap-3">
                                <div className="flex align-items-center login-remember-me">
                                    <Checkbox name="rememberme" inputId="rememberme" className="h-1n5rem" onChange={handleChange} checked={values.rememberme} />
                                    <label htmlFor="rememberme" className="text-600 font-light mr-8">
                                        Remember Me
                                    </label>
                                </div>
                                <Link
                                    to="/forgot"
                                    className="text-blue-500 cursor-pointer underline font-italic hover:text-primary hover-text-bold cursor-pointer ml-auto transition-colors transition-duration-300"
                                >
                                    Forgot password
                                </Link>
                            </div>
                            <Button type="submit" label="Login" loading={loading} loadingIcon="pi pi-spin pi-spinner" />
                        </div>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default LoginForm;

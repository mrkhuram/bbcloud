import { Formik } from 'formik';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
// import images from '../../../assets';
import { BASE_URL, sendRequest } from '../../../helpers/utils';
import { showErrorToast, showSuccessToast } from '../../../helpers/toast-helper';

const ForgetForm = () => {
    const [loading, setLoading] = useState(false);
    let state = useSelector((state) => {
        return state;
    });

    const navigate = useNavigate();

    //Yup Form Schema Validitions
    const schema = yup.object().shape({
        email: yup.string().email('Must be valid Email').required('Email is required!')
    });

    // Form Intial Values - If its New Form
    const initialValues = {
        email: ''
    };

    const handleSubmit = async (values) => {
        try {
            setLoading(true);
            let response = await sendRequest(BASE_URL + '/user/forgetPassword', { payload: values });

            if (response.status === 200) {
                let verifiedEmail = response?.data?.email || '';
                localStorage.setItem('email', verifiedEmail);
                showSuccessToast(state.toast.toast, response?.data?.desc);
                navigate('/verify-otp');
            } else if (response.status === 404) {
                showErrorToast(state.toast.toast, response?.data?.desc);
            }
        } catch (error) {
            showErrorToast(state.toast.toast, error.response && error.response.data.desc ? error.response.data.desc : error.message || 'Backend Server Issue');
        }
        setLoading(false);
    };

    return (
        <>
            <div className="mb-4">
                <div className="text-900 text-2xl font-semibold mb-2 text-primary">Forgot Password</div>
                <span className="text-600 font-light">Please enter the email address associated with your account</span>
            </div>
            <Formik validationSchema={schema} onSubmit={handleSubmit} initialValues={initialValues} enableReinitialize>
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <div className="flex flex-column forgot-password">
                            <div className="field w-full">
                                <label htmlFor="email" className="block text-800">
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

                            <Button type="submit" label="Send OTP" loading={loading} loadingIcon="pi pi-spin pi-spinner" />
                            <Button className="backToLogin bg-transparent border-0 border-white text-gray-500 justify-content-center outline-none hover-text-bold" onClick={() => navigate('/')}>
                                {/* <img src={images.BackArrowIcon} alt="" className="h-1n5rem mr-1 mt-1 " /> */}
                                Back to Login
                            </Button>
                        </div>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default ForgetForm;

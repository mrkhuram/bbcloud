import { Formik } from 'formik';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BASE_URL, sendRequest } from '../../../helpers/utils';
import * as yup from 'yup';
// import images from '../../../assets';
import { showErrorToast, showSuccessToast } from '../../../helpers/toast-helper';

const VerifyOTP = () => {
    const [loading, setLoading] = useState(false);
    let state = useSelector((state) => {
        return state;
    });

    const navigate = useNavigate();

    //Yup Form Schema Validitions
    const schema = yup.object().shape({
        otp: yup.number().required('otp is required!').max(99999, 'OTP must be a 5-digit number').min(10000, 'OTP must be at least 5 digits')
    });

    // Form Intial Values - If its New Form
    const initialValues = {
        otp: ''
    };

    const handleSubmit = async (values) => {
        const email = localStorage.getItem('email');

        let otpVerification = {
            email: email,
            code: values.otp
        };

        try {
            setLoading(true);
            let response = await sendRequest(BASE_URL + '/user/verifyOtp', { payload: otpVerification });

            if (response.status === 200) {
                showSuccessToast(state.toast.toast, response?.data?.desc);
                navigate('/set-new-password');
            } else if (response.status === 404) {
                showErrorToast(state.toast.toast, response?.data?.desc);
            } else if (response.status === 410) {
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
                <div className="text-900 text-2xl font-semibold mb-2 text-primary">Enter OTP</div>
                <span className="text-600 font-light">A 5 digit code has been sent to your email</span>
            </div>
            <Formik validationSchema={schema} onSubmit={handleSubmit} initialValues={initialValues} enableReinitialize>
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <div className="flex flex-column forgot-password">
                            <div className="field w-full">
                                <label htmlFor="otp" className="block text-800">
                                    OTP
                                </label>
                                <InputText
                                    id="otp"
                                    type="number"
                                    aria-describedby="otp-help"
                                    className={`block w-full ${touched.otp && errors.otp ? 'p-invalid' : ''}`}
                                    onChange={handleChange}
                                    value={values.otp}
                                    placeholder="12345"
                                />
                                {touched.otp && errors.otp ? (
                                    <small id="otp-help" className="p-error block">
                                        {errors.otp}
                                    </small>
                                ) : null}
                            </div>

                            <Button type="submit" label="Verify OTP" loading={loading} loadingIcon="pi pi-spin pi-spinner" />
                            <Button className="backToLogin bg-transparent border-0 border-white text-gray-500 justify-content-center outline-none" onClick={() => navigate(-1)}>
                                {/* <img src={images.BackArrowIcon} alt="" className="h-1n5rem mr-3 mt-1" /> Back to Login */}
                            </Button>
                        </div>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default VerifyOTP;

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BASE_URL, sendRequest } from '../../../helpers/utils';
import { Formik } from 'formik';
import * as yup from 'yup';
// import images from '../../../assets';
import { showErrorToast, showSuccessToast } from '../../../helpers/toast-helper';

const SetNewPassword = () => {
    const [loading, setLoading] = useState(false);
    let state = useSelector((state) => {
        return state;
    });

    const navigate = useNavigate();

    //Yup Form Schema Validitions
    const schema = yup.object().shape({
        password: yup.string().required('Password is required!'),
        passwordConfirmation: yup
            .string()
            .required('Confirm Password is Required!')
            .oneOf([yup.ref('password'), null], 'Passwords must match')
    });

    // Form Intial Values - If its New Form
    const initialValues = {
        password: '',
        passwordConfirmation: ''
    };

    const handleSubmit = async (values) => {
        setLoading(true);
        const email = localStorage.getItem('email');

        let resetPassword = {
            password: values.password,
            email: email
        };
        try {
            setLoading(true);
            let response = await sendRequest(BASE_URL + '/user/resetPassword', { payload: resetPassword });
            if (response.status === 200) {
                showSuccessToast(state.toast.toast, response?.data?.desc);
                localStorage.removeItem('email');
                navigate('/');
            } else if (response.status === 300) {
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
                <div className="text-900 text-2xl font-semibold mb-2 text-primary">Set New Password</div>
                <span className="text-600 font-light">Your email has been verified and set a new password.</span>
            </div>
            <Formik validationSchema={schema} onSubmit={handleSubmit} initialValues={initialValues} enableReinitialize>
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <div className="flex flex-column forgot-password">
                            <div className="field w-full">
                                <label htmlFor="password" className="block text-800">
                                    New Password
                                </label>
                                <InputText
                                    id="password"
                                    type="password"
                                    aria-describedby="password-help"
                                    className={`block w-full ${touched.password && errors.password ? 'p-invalid' : ''}`}
                                    onChange={handleChange}
                                    value={values.password}
                                    placeholder="New Password"
                                />
                                {touched.password && errors.password ? (
                                    <small id="password-help" className="p-error block">
                                        {errors.password}
                                    </small>
                                ) : null}
                            </div>
                            <div className="field w-full">
                                <label htmlFor="passwordConfirmation" className="block text-800">
                                    Confirm New Password
                                </label>
                                <InputText
                                    id="passwordConfirmation"
                                    type="password"
                                    aria-describedby="passwordConfirmation-help"
                                    className={`block w-full ${touched.passwordConfirmation && errors.passwordConfirmation ? 'p-invalid' : ''}`}
                                    onChange={handleChange}
                                    value={values.passwordConfirmation}
                                    placeholder="Confirm New Password"
                                />
                                {touched.passwordConfirmation && errors.passwordConfirmation ? (
                                    <small id="passwordConfirmation-help" className="p-error block">
                                        {errors.passwordConfirmation}
                                    </small>
                                ) : null}
                            </div>

                            <Button type="submit" label="Submit" loading={loading} loadingIcon="pi pi-spin pi-spinner" />
                            <Button className="backToLogin bg-transparent border-0 border-white text-gray-500 justify-content-center outline-none" onClick={() => navigate('/')}>
                                {/* <img src={images.BackArrowIcon} alt="" className="h-1n5rem mr-3 mt-1" /> Back to Login */}
                            </Button>
                        </div>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default SetNewPassword;

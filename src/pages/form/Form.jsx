import React, { useContext, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import * as yup from 'yup';
import { Formik } from 'formik';
import { showSuccessToast } from '../../helpers/toast-helper';
import { ToastContext } from '../../context/ToastContext';
import { Ripple } from 'primereact/ripple';

const Form = () => {
    const [loading, setLoading] = useState(false);

    const toast = useContext(ToastContext);

    //Yup Form Schema Validitions
    const schema = yup.object().shape({
        firstName: yup.string().required('First Name is required!'),
        lastName: yup.string().required('Last Name is required!'),
        address: yup.string().required('Address is required!'),
        city: yup.string().required('City is required!'),
        state: yup.string().required('State is required!'),
        zip: yup.string().required('Zip is required!')
    });

    // Form Intial Values - If its New Form
    const initialValues = {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zip: ''
    };

    const handleSubmit = async (values) => {
        showSuccessToast(toast, 'Success Message', 'My Deatils');
        setLoading(true);

        setLoading(false);
    };

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h4 className="mb-4 font-bold">
                        <span className="text-900">Forms With, </span>
                        <span className="text-primary">Formik & Yup</span>
                    </h4>
                    <Formik validationSchema={schema} onSubmit={handleSubmit} initialValues={initialValues} enableReinitialize>
                        {({ handleSubmit, handleChange, values, touched, errors }) => (
                            <form noValidate onSubmit={handleSubmit}>
                                <div className="p-fluid formgrid grid">
                                    <div className="field col-12 md:col-6">
                                        <label htmlFor="firstName">First Name</label>
                                        <InputText
                                            id="firstName"
                                            type="text"
                                            className={`block w-full ${touched.firstName && errors.firstName ? 'p-invalid' : ''}`}
                                            onChange={handleChange}
                                            value={values.firstName}
                                        />
                                        {touched.firstName && errors.firstName ? (
                                            <small id="firstName-help" className="p-error block">
                                                {errors.firstName}
                                            </small>
                                        ) : null}
                                    </div>
                                    <div className="field col-12 md:col-6">
                                        <label htmlFor="lastName">Last Name</label>
                                        <InputText
                                            id="lastName"
                                            type="text"
                                            className={`block w-full ${touched.lastName && errors.lastName ? 'p-invalid' : ''}`}
                                            onChange={handleChange}
                                            value={values.lastName}
                                        />
                                        {touched.lastName && errors.lastName ? (
                                            <small id="lastName-help" className="p-error block">
                                                {errors.lastName}
                                            </small>
                                        ) : null}
                                    </div>
                                    <div className="field col-12">
                                        <label htmlFor="address">Address</label>
                                        <InputTextarea
                                            id="address"
                                            type="text"
                                            className={`block w-full ${touched.address && errors.address ? 'p-invalid' : ''}`}
                                            onChange={handleChange}
                                            value={values.address}
                                            rows={4}
                                        />
                                        {touched.address && errors.address ? (
                                            <small id="address-help" className="p-error block">
                                                {errors.address}
                                            </small>
                                        ) : null}
                                    </div>
                                    <div className="field col-12 md:col-6">
                                        <label htmlFor="city">City</label>
                                        <InputText id="city" type="text" className={`block w-full ${touched.city && errors.city ? 'p-invalid' : ''}`} onChange={handleChange} value={values.city} />
                                        {touched.city && errors.city ? (
                                            <small id="city-help" className="p-error block">
                                                {errors.city}
                                            </small>
                                        ) : null}
                                    </div>
                                    <div className="field col-12 md:col-3">
                                        <label htmlFor="state">State</label>
                                        <InputText id="state" type="text" className={`block w-full ${touched.state && errors.state ? 'p-invalid' : ''}`} onChange={handleChange} value={values.state} />
                                        {touched.state && errors.state ? (
                                            <small id="state-help" className="p-error block">
                                                {errors.state}
                                            </small>
                                        ) : null}
                                    </div>
                                    <div className="field col-12 md:col-3">
                                        <label htmlFor="zip">Zip</label>
                                        <InputText id="zip" type="text" className={`block w-full ${touched.zip && errors.zip ? 'p-invalid' : ''}`} onChange={handleChange} value={values.zip} />
                                        {touched.zip && errors.zip ? (
                                            <small id="zip-help" className="p-error block">
                                                {errors.zip}
                                            </small>
                                        ) : null}
                                    </div>
                                    <div className="col-12 flex justify-content-end mt-2">
                                        <Button type="submit" label="Save" loading={loading} loadingIcon="pi pi-spin pi-spinner" className="w-auto">
                                            <Ripple />
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Form;

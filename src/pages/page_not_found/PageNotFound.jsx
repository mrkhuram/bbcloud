import React from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
            <div className="flex flex-column align-items-center justify-content-center">
                <div>
                    <div className="w-full surface-card py-8 px-5 sm:px-8 flex flex-column align-items-center">
                        <div className="flex justify-content-center align-items-center bg-pink-500 border-circle">
                            <i className="pi pi-fw pi-exclamation-circle text-2xl text-white"></i>
                        </div>
                        <h1 className="text-900 font-bold text-5xl mb-2 mt-2">404</h1>
                        <div className="text-600 mb-5">NOT FOUND</div>

                        <Button icon="pi pi-arrow-left" label="Go to Dashboard" className="p-button-text" onClick={() => navigate('/')} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;

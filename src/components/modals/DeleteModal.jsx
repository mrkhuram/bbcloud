import { Button } from 'primereact/button';
import React from 'react';
import { Dialog } from 'primereact/dialog';

const DeleteModal = ({ deleteProductDialog, onHide }) => {
    const deleteProductDialogFooter = (
        <>
            <Button label="No" icon="pi pi-times" className="p-button-warning" onClick={onHide} />
            <Button label="Yes" icon="pi pi-check" />
        </>
    );

    return (
        <Dialog visible={deleteProductDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={onHide}>
            <div className="confirmation-content">
                <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />

                <span>Are you sure you want to delete ?</span>
            </div>
        </Dialog>
    );
};

export default DeleteModal;

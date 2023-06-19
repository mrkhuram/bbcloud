export const showSuccessToast = (toast, title, detail) => {
    toast.current.show({ severity: "success", summary: title, detail: detail, life: 3000 });
};


export const showInfoToast = (toast, title, detail) => {
    toast.current.show({ severity: 'info', summary: title, detail: detail, life: 3000 });
}

export const showWarnToast = (toast, title, detail) => {
    toast.current.show({ severity: 'warn', summary: title, detail: detail, life: 3000 });
}

export const showErrorToast = (toast, title, detail) => {
    toast.current.show({ severity: 'error', summary: title, detail: detail, life: 3000 });
}
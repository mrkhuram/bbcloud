import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { tablesDummyData } from './tablesDummyData';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { Skeleton } from 'primereact/skeleton';
import { Button } from 'primereact/button';
import DeleteModal from '../../components/modals/DeleteModal';

const Tables = () => {
    const [products, setProducts] = useState(null);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [loading, setLoading] = useState(true);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: {
            operator: FilterOperator.AND,
            constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
        },
        'country.name': {
            operator: FilterOperator.AND,
            constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
        },
        'representative.name': {
            operator: FilterOperator.AND,
            constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
        },
        company: {
            operator: FilterOperator.AND,
            constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
        }
    });

    useEffect(() => {
        // SET TIMEOUT FUNCTION IS ONLY TO TEST THE SKELETON LOADING
        setTimeout(() => {
            setProducts(tablesDummyData);
            setLoading(false);
        }, 1000);
    }, []);

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-between">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-outlined p-button-icon-only mr-2" width="2rem" />
                <Button icon="pi pi-trash" className="p-button-danger p-button-outlined p-button-icon-only" onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        );
    };

    const confirmDeleteProduct = () => {
        setDeleteProductDialog(true);
    };

    const header = renderHeader();

    return (
        <>
            <div className="card">
                <h4 className="mb-4 font-bold text-3xl">
                    <span className="text-900">DataTables With </span>
                    <span className="text-primary">Sort</span>
                </h4>

                {!loading && (
                    <DataTable
                        value={products}
                        stripedRows
                        paginator
                        responsiveLayout="scroll"
                        rows={10}
                        rowsPerPageOptions={[10, 20, 50]}
                        selectionMode="checkbox"
                        selection={selectedProducts}
                        onSelectionChange={(e) => setSelectedProducts(e.value)}
                        dataKey="id"
                        header={header}
                        filters={filters}
                        emptyMessage="No Record found."
                        globalFilterFields={['name', 'country.name', 'representative.name', 'company']}
                    >
                        <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
                        <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name"></Column>
                        <Column field="country.name" header="Country" sortable filter filterPlaceholder="Search by Country name"></Column>
                        <Column field="company" header="Company" sortable filter filterPlaceholder="Search by Company"></Column>
                        <Column field="representative.name" header="Representative" sortable filter filterPlaceholder="Search by Representative"></Column>
                        <Column header="Actions" body={actionBodyTemplate}></Column>
                    </DataTable>
                )}

                {loading && <Skeleton height="28rem" />}
            </div>

            {deleteProductDialog && <DeleteModal deleteProductDialog={deleteProductDialog} onHide={() => setDeleteProductDialog(false)} />}
        </>
    );
};

export default Tables;

import {Name} from "../../components/Name/Name.jsx";
import {Type} from "../../components/Type/Type.jsx";
import {Price} from "../../components/Price/Price.jsx";
import {Rating} from "../../components/Rating/Rating.jsx";
import {Warranty} from "../../components/Warranty/Warranty.jsx";
import {Availability} from "../../components/Availibility/Availability.jsx";
import {DeleteProduct} from "../../components/DeleteProduct/DeleteProduct.jsx";

export const getColumns = (handleRowChange, refreshData) => {

    return [
        {
            field: 'id',
            headerName: 'Identifiant',
            flex: 1,
            minWidth: 150
        },
        {
            field: 'name',
            headerName: 'Nom',
            flex: 1,
            minWidth: 80,
            renderCell: (params) => (
                <Name
                    id={params.id}
                    row={params.field}
                    value={params.value}
                    onValueChange={(id, value) => handleRowChange(id, params.field, value)}
                />
            )
        },
        {
            field: 'type',
            headerName: 'Type',
            flex: 1,
            renderCell: (params) => (
                <Type
                    id={params.id}
                    row={params.field}
                    value={params.value}
                    onValueChange={(id, value) => handleRowChange(id, params.field, value)}
                />
            )
        },
        {
            field: 'price',
            headerName: 'Prix',
            flex: 1,
            minWidth: 60,
            renderCell: (params) => (
                <Price
                    id={params.id}
                    row={params.field}
                    value={params.value}
                    onValueChange={(id, value) => handleRowChange(id, params.field, value)}
                />
            ),
        },
        {
            field: 'rating',
            headerName: 'Note',
            flex: 1,
            minWidth: 140,
            renderCell: (params) => (
                <Rating
                    id={params.id}
                    row={params.field}
                    value={params.value}
                    onValueChange={(id, value) => handleRowChange(id, params.field, value)}
                    name={`rating-${params.id}`}
                />
            ),
        },
        {
            field: 'warranty_years',
            headerName: 'Garantie',
            flex: 1,
            maxWidth: 100,
            renderCell: (params) => (
                <Warranty
                    value={params.value}
                />
            ),
        },
        {
            field: 'available',
            align: 'center',
            headerName: 'Disponibilité',
            flex: 1,
            maxWidth: 100,
            renderCell: (params) => (
                <Availability
                    id={params.id}
                    row={params.field}
                    value={params.value}
                    onValueChange={(id, value) => handleRowChange(id, params.field, value)}
                />
            ),
        },
        {
            field: 'actions',
            headerName: 'Actions',
            headerAlign: 'center',
            align: 'center',
            maxWidth: 80,
            flex: 1,
            renderCell: (params) => (
                <DeleteProduct
                    value={params.id}
                    onDelete={refreshData}
                />
            ),
        }
    ];
}
import api from "../../services/lbaApi.js";
import {DataGrid} from '@mui/x-data-grid';
import {Box, TextField, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {getColumns} from "./Columns.jsx";

export default function ShowProducts() {
    const [rows, setRows] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filteredRows, setFilteredRows] = useState([]);

    const handleRowChange = (id, rowName, newValue) => {
        const updatedRows = rows.map((row) => {
            if (row.id === id) {
                return {...row, [rowName]: newValue};
            }
            return row;
        });

        setRows(updatedRows);
    };

    const refreshData = async () => {
        const dataRows = [
            ...await api.fetchAll(),
        ];
        setRows(dataRows);
        setFilteredRows(dataRows);
    }

    const columns = getColumns(handleRowChange, refreshData);

    useEffect(() => {
        refreshData();
    }, []);

    useEffect(() => {
    }, []);

    useEffect(() => {
        const filteredData = rows.filter((row) => {
            const searchFields = ['id', 'name', 'type'];

            return searchFields.some((field) => {
                return row[field].toLowerCase().includes(searchText.toLowerCase());
            });
        });

        setFilteredRows(filteredData);
    }, [searchText, rows]);

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    }

    return (
        //center this
        <div style={{height: 400, width: '80%', margin: "auto"}}>
            <Box sx={{p: 2}}>
                <Typography variant="h6" gutterBottom>
                    Liste des Produits
                </Typography>
                <TextField
                    sx={{width: "60%", display: "flex", mx: "auto", mb: 2}}
                    label="Recherche"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={searchText}
                    onChange={handleSearchChange}
                />
            </Box>
            <DataGrid
                rows={filteredRows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {page: 0, pageSize: 5},
                    },
                }}
                pageSizeOptions={[5, 10]}
                disableRowSelectionOnClick={true}
                checkboxSelection={false}
                autoHeight
            />
        </div>
    );
}
import {useState} from "react";
import {Box, Button, Modal, TextField} from "@mui/material";
import lbaApi from "../../services/lbaApi.js";

const TextFieldToPrint = ({value, onChange}) => {
    return <TextField
        label="Modifiez la valeur"
        value={value}
        onChange={onChange}
        fullWidth
    />
}

export const EditableValue = ({id, row, value, onValueChange, checkContent, parseContent, showContent}) => {

    const [open, setOpen] = useState(false);
    const [editedValue, setEditedValue] = useState(value);

    const handleChange = (e) => {
        editValue(e.target.value)
    }
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSave = async () => {
        setOpen(false);
        onValueChange(id, editedValue);
        await lbaApi.edit(id, {[row]: editedValue});
        console.log(editedValue)
    };
    const editValue = (value) => {
        if (checkContent(value)) {
            setEditedValue(value);
        }
    }

    return (
        <>
            <div onDoubleClick={handleOpen}>{parseContent(value)}</div>
            <Modal open={open} onClose={handleClose}>
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 250, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                    {showContent ? showContent(value, handleChange) : <TextFieldToPrint value={editedValue} onChange={handleChange} />}
                    <Button
                        onClick={handleSave}
                        sx={{ mt: 2, width: '100%' }}
                        variant="contained"
                    >
                        Enregistrer
                    </Button>
                </Box>
            </Modal>
        </>
    );
}
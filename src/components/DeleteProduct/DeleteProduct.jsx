import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {AlertModal} from "../AlertModal/AlertModal.jsx";
import {useState} from "react";
import lbaApi from "../../services/lbaApi.js";

export const DeleteProduct = ({value, onDelete}) => {
    const [open, setOpen] = useState(false);

    const handleClickDelete = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    const handleConfirmDelete = async () => {
        await lbaApi.delete(value)
        onDelete();
        setOpen(false);
    };

    return (
        <>
            <AlertModal
                title="Suppression d'un produit"
                content="Êtes-vous sûr de vouloir supprimer ce produit ?"
                open={open}
                onConfirm={handleConfirmDelete}
                onCancel={handleCloseModal}
            />

            <IconButton
                color="error"
                aria-label="delete"
                onClick={handleClickDelete}
            >
                <DeleteIcon />
            </IconButton>
        </>
    );
};
import {Modal, Typography, Box, Button} from "@mui/material";

export function AlertModal({title, content, open, onConfirm, onCancel}) {

    const handleClose = () => {
        if (onCancel) {
            onCancel();
        }
    };

    const handleConfirm = () => {
        if (onConfirm) {
            onConfirm();
        }
    };

    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h5" component="h2" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {content}
                    </Typography>
                    <Box sx={{mt: 2}}>
                        <Button onClick={handleConfirm} variant="contained" color="primary" sx={{mr: 2}}>
                            Confirmer
                        </Button>
                        <Button onClick={handleClose} variant="outlined" color="secondary">
                            Annuler
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}
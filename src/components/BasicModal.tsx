import * as React from 'react';
import Modal from '@mui/material/Modal';
import Player from "./Player";
import {ILesson} from "../types/types";
import {Box, Button, Typography} from "@mui/material";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
interface IModalProps {
    lesson: ILesson;
    isModalOpen: boolean;
    handleClose: () => void;
}

const BasicModal = ({lesson, isModalOpen, handleClose}:IModalProps) =>{
    return (
        <div>
            <Modal
                open={isModalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Button onClick={handleClose}>Close</Button>
                <Player lesson={lesson}/>
                </Box>

            </Modal>
        </div>
    );
}

export default BasicModal;
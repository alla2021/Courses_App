import * as React from 'react';
import Modal from '@mui/material/Modal';
import Player from "../Player";
import {ILesson} from "../../types/types";
import {Box, Button} from "@mui/material";
import style from "./style";

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
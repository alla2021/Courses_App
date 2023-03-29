import * as React from 'react';
import Modal from '@mui/material/Modal';
import Player from "../Player/Player";
import {Box, Button, Typography} from "@mui/material";
import style from "./style";
import {ILesson} from "../../types/ILesson";

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
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button onClick={handleClose}>
                        Close
                    </Button>
                    </Box>
                    <Typography variant='h4'>{lesson.title}</Typography>
                    <Player lesson={lesson} controls={true}/>
                </Box>
            </Modal>
        </div>
    );
}

export default BasicModal;
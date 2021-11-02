import { FC } from 'react';
import { IClient } from '../../interfaces/interfaces';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Moment from 'react-moment';

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

interface IModalSuccessProps {
  isOpen: boolean;
  client: IClient;
}

const ModalSuccess: FC<IModalSuccessProps> = ({ isOpen, client }) => {
  return (
    <Modal
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {client && client.firstName} {client && client.lastName}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          You have an oppointment at {client.date}
          {/* {client && <Moment format="YYYY/MM/DD"> {client.date}</Moment>} */}
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalSuccess;

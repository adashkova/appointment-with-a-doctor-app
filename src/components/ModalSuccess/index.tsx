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
  const { date, time, firstName, lastName } = client;
  const timeOfAppointment = new Date(time);

  return (
    <Modal
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {firstName} {lastName}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          You have an oppointment at
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {timeOfAppointment.getHours()} : {timeOfAppointment.getMinutes()}
          </Typography>
          on
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {<Moment format="MM/DD" date={date} />}
          </Typography>
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalSuccess;

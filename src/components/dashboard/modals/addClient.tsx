import * as React from 'react';
import { Modal, Box, Typography, TextField, Button, Stack } from '@mui/material';

interface AddClientModalProps {
  open: boolean;
  onClose: () => void;
  onAddClient: (client: {
    name: string;
    email: string;
    company: string;
    phone: string;
  }) => void;
}

const AddClientModal: React.FC<AddClientModalProps> = ({ open, onClose, onAddClient }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [phone, setPhone] = React.useState('');


  const handleAddClient = () => {
    onAddClient({ name, email, company, phone });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Add Client
        </Typography>
        <Stack spacing={2}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <TextField
            label="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            fullWidth
          />
          <TextField
            label="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
          />
      
          <Button variant="contained" onClick={handleAddClient}>
            Add
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default AddClientModal;

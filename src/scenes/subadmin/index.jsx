import React from 'react';
import { Box, Button, TextField, useTheme } from '@mui/material';
import Header from 'components/Header';

const SubAdmin = () => {
  const theme = useTheme();

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="SUBADMIN" subtitle="Add SubAdmin" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: theme.palette.primary.light,
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: 'none',
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
          }}
        >
          <Button
            sx={{ padding: 8, borderRadius: 5 }}
            variant="contained"
            component="label"
          >
            Upload Image
            <input type="file" hidden />
          </Button>
          <TextField
            sx={{ width: '80%' }}
            id="outlined-basic"
            label="Enter SubAdmin name..."
            variant="outlined"
          />
          <Button variant="contained" sx={{ px: 6, py: 1 }}>
            Add
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SubAdmin;

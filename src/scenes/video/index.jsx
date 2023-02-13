import React from 'react';
import { Box, Button, TextField, useTheme } from '@mui/material';
import Header from 'components/Header';

const Video = () => {
  const theme = useTheme();

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="VIDEO" subtitle="Add Video" />
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
          <TextField
            sx={{ width: '80%' }}
            id="outlined-basic"
            label="Enter video source"
            variant="outlined"
          />
          <TextField
            sx={{ width: '80%' }}
            id="outlined-basic"
            label="Enter Description"
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

export default Video;

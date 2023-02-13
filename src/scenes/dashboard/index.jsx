import React from 'react';
import FlexBetween from 'components/FlexBetween';
import Header from 'components/Header';
import { DownloadOutlined, Email } from '@mui/icons-material';
import { Box, Button, useTheme, useMediaQuery } from '@mui/material';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import MedicationIcon from '@mui/icons-material/Medication';
import StatBox from 'components/StatBox';

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery('(min-width: 1200px)');

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px',
            }}
          >
            <DownloadOutlined sx={{ mr: '10px' }} />
            Download Reports
          </Button>
        </Box>
      </FlexBetween>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          '& > div': { gridColumn: isNonMediumScreens ? undefined : 'span 12' },
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="Total Doctors"
          value={5}
          increase="+14%"
          description="Since last month"
          icon={
            <MedicationIcon
              sx={{ color: theme.palette.secondary[300], fontSize: '26px' }}
            />
          }
        />
        <StatBox
          title="Total Children"
          value={6}
          increase="+21%"
          description="Since last month"
          icon={
            <FamilyRestroomIcon
              sx={{ color: theme.palette.secondary[300], fontSize: '26px' }}
            />
          }
        />
      </Box>
    </Box>
  );
};

export default Dashboard;

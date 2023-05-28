import { BottomNavigation, BottomNavigationAction, CssBaseline, Paper } from '@mui/material';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box } from '@mui/material';

function HomeLayout() {
  const [tabMenu, setTabMenu] = useState(0);
  const navigate = useNavigate();
  return (
    <>
      <CssBaseline />
      <Box>
        <Outlet />
      </Box>
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          paddingBottom: 1,
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={tabMenu}
          onChange={(event, newValue) => {
            setTabMenu(newValue);
          }}
        >
          <BottomNavigationAction label="이적시장" icon={<RestoreIcon />} onClick={() => navigate('')} />
          <BottomNavigationAction label="마이팀" icon={<FavoriteIcon />} onClick={() => navigate('/my-team')} />
          <BottomNavigationAction label="관리자모드" icon={<SettingsIcon />} onClick={() => navigate('/settings')} />
        </BottomNavigation>
      </Paper>
    </>
  );
}

export default HomeLayout;

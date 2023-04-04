import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function App() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  return (
    <>
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
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} onClick={() => navigate('')} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} onClick={() => navigate('/about')} />
        </BottomNavigation>
      </Paper>
    </>
  );
}

export default App;

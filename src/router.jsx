import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import MyTeam from './pages/MyTeam.jsx';
import Settings from './pages/Settings/index.jsx';
import HomeLayout from "./components/HomeLayout.jsx";
import Players from './pages/Settings/Players/Players.jsx';
import Teams from './pages/Settings/Teams/Teams.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'my-team',
        element: <MyTeam />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'settings/players',
        element: <Players />,
      },
      {
        path: 'settings/teams',
        element: <Teams />,
      },
    ],
  },
], {
  basename: "/my-fifa/",
});

export default router;

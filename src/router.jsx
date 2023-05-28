import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import MyTeam from './pages/MyTeam.jsx';
import Settings from './pages/Settings/index.jsx';
import HomeLayout from "./components/HomeLayout.jsx";

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
    ],
  },
], {
  basename: "/my-fifa/",
});

export default router;

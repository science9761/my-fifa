import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import MyTeam from './pages/MyTeam';
import Settings from './pages/Settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
  basename: "/my-fifa",
});

export default router;

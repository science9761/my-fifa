import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './containers/Home';
import MyTeam from './containers/MyTeam';
import Settings from './containers/Settings';

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

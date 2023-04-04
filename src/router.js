import { createBrowserRouter } from 'react-router-dom';
// import About from './containers/About';
// import Home from './containers/Home';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
    //   {
    //     path: '',
    //     element: <Home />,
    //   },
    //   {
    //     path: 'about',
    //     element: <About />,
    //   },
    ],
  },
], {
  basename: "/my-fifa",
});

export default router;

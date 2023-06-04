import { lazy } from "react";

// Pages
const HomePage = lazy(() => import('./pages/home.js'));

const appRoutes = [
    {
        path: '',
        element: <HomePage />,
    },
];

export default appRoutes;
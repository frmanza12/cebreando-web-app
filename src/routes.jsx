import { Navigate } from 'react-router-dom';
import { lazy } from 'react';
const Brain  = lazy(() => import('./components/Brain'));

export const ROUTE_PATHS = {
    HOME: '/',
    BRAIN: '/brain',
};


const routes = [
    { path: ROUTE_PATHS.HOME, element: <Navigate to={ROUTE_PATHS.BRAIN} /> },
    { path: ROUTE_PATHS.BRAIN, element: <Brain /> },
];

export default routes;
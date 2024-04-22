import { Navigate } from 'react-router-dom';
import { lazy } from 'react';
const Brain  = lazy(() => import('./components/Brain'));

export const ROUTE_PATHS = {
    HOME: '/',
    NOT_FOUND: '*',
};


const routes = [
    { path: ROUTE_PATHS.HOME, element: <Brain /> },
    { path: ROUTE_PATHS.NOT_FOUND, element:<Navigate to={ROUTE_PATHS.HOME} />},
];

export default routes;
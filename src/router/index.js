import Auth from "../pages/Auth";

export const publicRoutes = [
    {path: '/login', component: Auth, exact: true},
    {path: '/register', component: Auth, exact: true},
]
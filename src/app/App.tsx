import { Route, Routes } from "react-router-dom";
import { RouterProvider } from "./lib/RouterProvider";
import { lazy } from "react";

const Login = lazy(() => import('../page/login/Login'))
const Statistics = lazy(() => import('../page/statistics/Statistics'))

export default function App() {
    return (
        <RouterProvider>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/statistics' element={<Statistics />} />
            </Routes>
        </RouterProvider>
    )
}
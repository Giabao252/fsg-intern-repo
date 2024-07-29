import {
    Route,
    createBrowserRouter,
    createRoutesFromElements
  } from "react-router-dom";
import { ProtectedHome, Home} from "../src/mains/export";
import { AuthLayout, HomeLayout, ProtectedLayout } from "../src/Routes/export";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<AuthLayout />}>
            <Route element={<HomeLayout />}>
                <Route path="/" element={<Home />} />
            </Route>

            <Route element={<ProtectedLayout />}>
                <Route path="/main" element={<ProtectedHome />} />

            </Route>
        </Route>
    )
);



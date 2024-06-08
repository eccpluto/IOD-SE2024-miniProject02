import { Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import LoginPage from "../pages/LoginPage";
import LibraryPage from "../pages/LibraryPage";
import Dashboard from "../pages/Dashboard";
import HomePage from "../pages/HomePage";
import NavigatorPage from "../pages/NavigatorPage";
import AboutPage from "../pages/AboutPage";
import AccountPage from "../pages/AccountPage";

/**
 * 
 * @param {Object} props 
 * @returns nested routes from clean URLs to page components. 
 */
function AppRoutes(props) {

    return (
        // root component which is a Routes component
        <Routes>
            {/* index routes allows child routes to be rendered in parent Outlet */}
            {/* <Route index element={unknown}></Route> */}
            <Route index element={<HomePage {...props} />} />
            <Route path="/navigator" element={<NavigatorPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes;
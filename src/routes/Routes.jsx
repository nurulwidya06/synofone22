import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import CartPage from "../pages/customer/CartPage";
import DaftarPage from "../pages/customer/DaftarPage";
import DetailPage from "../pages/customer/DetailPage";
import FinishPage from "../pages/customer/FinishPage";
import LandingPage from "../pages/customer/LandingPage";
import OrderPage from "../pages/customer/OrderPage";
import StatusPage from "../pages/customer/StatusPage";

import Dashboard from "../pages/dashboard/Dashboard"


import Banners from "../pages/dashboard/banners/Banners";
import CreateBanners from "../pages/dashboard/banners/CreateBanners";
import EditBanners from "../pages/dashboard/banners/EditBanners";
import Brands from "../pages/dashboard/brands/Brands";
import CreateBrands from "../pages/dashboard/brands/CreateBrands";
import EditBrands from "../pages/dashboard/brands/EditBrands";
import Products from "../pages/dashboard/products/Products";
import CreateProducts from "../pages/dashboard/products/CreateProducts";
import EditProducts from "../pages/dashboard/products/EditProducts";
import Users from "../pages/dashboard/users/Users";
import CreateUsers from "../pages/dashboard/users/CreateUsers";
import EditUsers from "../pages/dashboard/users/EditUsers";
import PrivateRoutes from "./PrivateRoutes";

const RouteIndex = () => {
    return (
        <Routes>
            {/* route customer  */}
            <Route path="/cart" Component={CartPage}/>
            <Route path="/daftar" Component={DaftarPage}/>
            <Route path="/login" Component={LoginPage}/>
            <Route path="/detail" Component={DetailPage}/>
            <Route path="/finish" Component={FinishPage}/>
            <Route path="/" Component={LandingPage}/>
            <Route path="/order" Component={OrderPage}/>
            <Route path="/status" Component={StatusPage}/>
            {/* <Route path="/dashboard" Component={Dashboard}/> */}


            {/* route dashboard */}
            <Route path="/dashboard/Dashboard" element={<PrivateRoutes> 
                <Dashboard/>
            </PrivateRoutes>}/>
            <Route path="dashboard/banners" element={<PrivateRoutes> 
                <Banners/>
            </PrivateRoutes>}/>
            <Route path="dashboard/banners/new" element={<PrivateRoutes> 
                <CreateBanners/>
            </PrivateRoutes>}/> 
            <Route path="dashboard/banners/:id" element={<PrivateRoutes> 
                <EditBanners/>
            </PrivateRoutes>}/>


            <Route path="dashboard/brands" element={<PrivateRoutes> 
                <Brands/>
            </PrivateRoutes>}/>
            <Route path="dashboard/brands/new" element={<PrivateRoutes> 
                <CreateBrands/>
            </PrivateRoutes>}/>
            <Route path="dashboard/brands/:id" element={<PrivateRoutes> 
                <EditBrands/>
            </PrivateRoutes>}/>

            <Route path="dashboard/products" element={<PrivateRoutes> 
                <Products/>
            </PrivateRoutes>}/>
            <Route path="dashboard/products/new" element={<PrivateRoutes> 
                <CreateProducts/>
            </PrivateRoutes>}/>
            <Route path="dashboard/products/:id" element={<PrivateRoutes> 
                <EditProducts/>
            </PrivateRoutes>}/>

            <Route path="dashboard/users" element={<PrivateRoutes> 
                <Users/>
            </PrivateRoutes>}/>
            <Route path="dashboard/users/new" element={<PrivateRoutes> 
                <CreateUsers/>
            </PrivateRoutes>}/>
            <Route path="dashboard/users/:id" element={<PrivateRoutes> 
                <EditUsers/>
            </PrivateRoutes>}/>



        </Routes>
    );
}


export default RouteIndex
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import UserListPage from "./pages/UserListPage";
import UserPage from "./pages/UserPage";
import NewUserPage from "./pages/NewUserPage";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";
import NewProductPage from "./pages/NewProductPage";
import { Routes, Route, Navigate} from 'react-router-dom'
import { useState } from "react";
import LoginPage from "./pages/LoginPage";

function App() {
  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)?.currentUser?.isAdmin;


  return (

    <div className=" flex flex-row max-w-screen overflow-hidden font-inter">
      {admin && <Sidebar />}
      
      
      <div className=" w-full h-full flex flex-col">


      <Topbar />
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />


            <Route exact path="/" element={admin ? <HomePage /> : <Navigate to={'/login'}/>} />
            <Route path="/users" element={admin ? <UserListPage /> : <Navigate to={'/login'}/>} />
            <Route path="/user/:userId" element={admin ?<UserPage /> : <Navigate to={'/login'}/>} />
            <Route path="/newUser" element={admin ?<NewUserPage /> : <Navigate to={'/login'}/>} />
            <Route path="/products" element={admin ? <ProductListPage /> : <Navigate to={'/login'}/>} />
            <Route path="/product/:productId" element={admin ?<ProductPage /> : <Navigate to={'/login'}/>} />
            <Route path="/newproduct" element={admin ?<NewProductPage /> : <Navigate to={'/login'}/>} />


        </Routes>
      </div>
      

    </div>
  );
}

export default App;

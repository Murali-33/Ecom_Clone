import React from "react";
import { createBrowserRouter,createRoutesFromElements,Outlet,Route,RouterProvider} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from './components/footer/Footer';
import Home from './components/pages/Home';
import Signin from './components/Signin/Signin'
import Registraction from './components/Signin/Registraction';
import Cart from './components/Header/Cart';
import { ScrollRestoration } from "react-router-dom";

const Layout = () =>{
  return(
    <div>
    <Header/>
    <ScrollRestoration/>
    <Outlet/>
    <Footer/>
   </div>
  )
 
}

function App() {
  const router =createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Layout/>}>
      <Route path="/cart" element={<Cart/>}></Route>
          <Route index element={<Home/>}></Route>
      </Route>
       <Route path="/signin" element={<Signin/>}></Route>
       <Route path="/register" element={<Registraction/>}></Route>
       </>
       
    )
  )
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {RouterProvider, createBrowserRouter, createHashRouter} from 'react-router-dom'

import Layout from "./Components/Layout/Layout"
import Home from "./Components/Home/Home"
import Brands from "./Components/Brands/Brands"
import Cart from "./Components/Cart/Cart"
import Categories from "./Components/Categories/Categories"
import Footer from "./Components/Footer/Footer"
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import Notfound from "./Components/Notfound/Notfound"

import Products from "./Components/Products/Products"
import  { Toaster } from 'react-hot-toast';

import UserCotextProvider, { UserCotext } from './Context/ContextUser';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import ProductDetalis from './Components/ProductDetalis/ProductDetalis'
import { QueryClient, QueryClientProvider } from 'react-query'
import CartContextProvider from './Context/ContextCart';
import WishListContextProvider from './Context/WishListContext';
import Wishlist from './Components/Wishlist/Wishlist';
import Forgetpassword from './Components/Forgetpassword/Forgetpassword';
import VerifyCode from './Components/VerifyCode/VerifyCode';
import CheckOut from './Components/CheckOut/CheckOut';
import AllOrders from './Components/AllOrders/AllOrders';
import ResetPassword from './Components/ResetPassword/ResetPassword';














let routers= createHashRouter([
{path:'/', element:<Layout/>, children:[

  {index:true,element: <ProtectedRoute> <Home/> </ProtectedRoute>},
  {path:'cart',element: <ProtectedRoute> <Cart/> </ProtectedRoute>},
  {path:'wishlist',element: <ProtectedRoute> <Wishlist/> </ProtectedRoute>},
  
  {path:'categories',element:  <ProtectedRoute> <Categories/> </ProtectedRoute>},
{path:'login',element:<Login/>},
  {path:'notfound',element:<Notfound/>},
  {path:'register',element:<Register/>},
  {path:'forgetpassword',element:<Forgetpassword/>},
  {path:'verfiycode',element:<VerifyCode/>},
  {path:'resetpassword',element:<ResetPassword/>},
  {path:'products',element: <ProtectedRoute> <Products/> </ProtectedRoute>},
  {path:'checkout',element: <ProtectedRoute> <CheckOut/> </ProtectedRoute>},
  {path:'allorders',element: <ProtectedRoute> <AllOrders/> </ProtectedRoute>},
  {path:'productdetalis/:id',element: <ProtectedRoute> <ProductDetalis/> </ProtectedRoute>},
  {path:'brands',element: <ProtectedRoute> <Brands/> </ProtectedRoute>},
  {path:'*',element:<Notfound/>},
 


]

}

])

function App() {

  let queryClient= new QueryClient()
  return <>



<QueryClientProvider client={queryClient}>



<UserCotextProvider>

<CartContextProvider>
  <WishListContextProvider>

  <RouterProvider router={routers}></RouterProvider>

  </WishListContextProvider>

</CartContextProvider>

<Toaster/>

</UserCotextProvider>

</QueryClientProvider>




  


 
  
 
 
  
  
  
  </>
}

export default App;

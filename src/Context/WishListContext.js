import axios from "axios";
import { createContext } from "react";

export let WishListContext = createContext();

export default function WishListContextProvider(props) {
  let headers = {token:localStorage.getItem('userToken')}
  function addToWishlist(id) {
    return axios.post(
      `https://ecommerce.routemisr.com/api/v1/wishlist`,
      {
        productId: id,
      },
      {
        headers,
      }
    ).then((response)=>response).catch((err)=>err);
  }

function getLoggedUserWishlist(){

    return axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
        headers
    }).then((response)=>response).catch((err)=>err)
}


function removeProductFromWishlist(id){
   return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{headers}).then((response)=>response).catch((err)=>err)
}






  return (
    <WishListContext.Provider value={{ addToWishlist ,getLoggedUserWishlist,removeProductFromWishlist,removeProductFromWishlist}}>
      {props.children}
    </WishListContext.Provider>
  );
}

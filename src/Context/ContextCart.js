import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";

export const CartContext = createContext();

export default function CartContextProvider(props) {
  let headers = { token: localStorage.getItem("userToken") };

  function addToCart(id) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          productId: id,
        },
        { headers }
      )
      .then((res) => res)
      .catch((err) => err);
  }

  function getLoggedUserCart() {
    return axios
      .get(`https://ecommerce.routemisr.com/api/v1/cart`, { headers })
      .then((res) => res)
      .catch((err) => err);
  }

  function removeProdouct(productId) {
    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
        headers,
      })
      .then((res) => res)
      .catch((err) => err);
  }
  function updateProductQuantity(productId, count) {
    return axios
      .put(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        { count },
        { headers }
      )
      .then((res) => res)
      .catch((err) => err);
  }

  function clearUserCart() {
    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart`, { headers })
      .then((res) => res)
      .catch((err) => err);
  }

  function onlinePayment(cartId, shippingAddress) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,
        { shippingAddress },
        { headers }
      )
      .then((res) => res)
      .catch((err) => err);
  }
// let [cartId,setCartid]=useState(null)
//   let [numOfCartItem, setnumOfCartItem] = useState(0);
//   async function getCartData() {
//     let { data } = await getLoggedUserCart();
//     setnumOfCartItem(data.numOfCartItems);
//     setCartid(data.data._id)
//     console.log(data);
//   }



let [cartId,setCartid]=useState(null)
  let [numOfCartItem, setnumOfCartItem] = useState(0);
  async function getCartData() {
   
    let { data } = await getLoggedUserCart();
    setnumOfCartItem(data?.numOfCartItems);
    setCartid(data?.data._id)
    console.log(data);

   
  }










  useEffect(() => {

    getCartData()




  
  }, []);

  return (
    <CartContext.Provider
      value={{
        addToCart,
        getLoggedUserCart,
        removeProdouct,
        updateProductQuantity,
        clearUserCart,
        numOfCartItem,
        setnumOfCartItem,
        getCartData,
        onlinePayment,
        cartId
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

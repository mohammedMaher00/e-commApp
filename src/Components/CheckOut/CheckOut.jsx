import React, { useContext } from "react";
import styles from "./CheckOut.module.css";
import { useFormik } from "formik";
import { CartContext } from "../../Context/ContextCart";
import { useNavigate } from "react-router-dom";


// "651b47de78f2a89cfd87df92"
export default function CheckOut() {
  const{onlinePayment,cartId}=useContext(CartContext)


  async function handelSubmit(values) {
    console.log(values);
    let {data}=await onlinePayment(cartId,values)
    console.log(data);

    if(data.status==='success'){

      console.log(data.session.url);
      window.location.href=data.session.url
    }
   
  }

  const formic = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: "",
    },
    onSubmit: handelSubmit,
  });

  return (
    <>
      <div className="container">
        <h2 className="text-center">Check Out</h2>

        <form onSubmit={formic.handleSubmit}>  
          <div>
            <label htmlFor="details" className="form-label h5">
              Details:
            </label>
            <input
              className="form-control"
              type="text"
              name="details"
              id="details"
              value={formic.values.details}
              onChange={formic.handleChange}
            />
          </div>

          <div>
            <label htmlFor="phone" className="form-label h5">
              Phone:
            </label>
            <input
              className="form-control"
              type="tel"
              name="phone"
              id="phone"
              value={formic.values.phone}
              onChange={formic.handleChange}
            />
          </div>

          <div>
            <label htmlFor="city" className="form-label h5">
              City:
            </label>
            <input
              className="form-control"
              type="text"
              name="city"
              id="city"
              value={formic.values.city}
              onChange={formic.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-outline-success w-100 mt-4">
            {" "}
            Pay Now
          </button>
        </form>
      </div>
    </>
  );
}

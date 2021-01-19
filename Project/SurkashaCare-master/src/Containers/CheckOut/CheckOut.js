import React, { useState, useEffect } from "react";
import Footer from '../../Containers/Footer/Footer';
import NavBar from "../../UI/NavBar/NavBar";
import { Redirect } from 'react-router-dom';
import "./cart.css";
export const Cart = (props) => {
  const [carts, setCarts] = useState([]);
  const [payload, setPayloader] = useState(0);
  const [hasError, setError] = useState(false);
  const [redirect,setRedirect] = useState(null);
  async function fetchCart() {
    let data = JSON.parse(localStorage.getItem("cart"));
    setCarts(data);
    let total = 0;
    data.map(doctor => {
      total += doctor.fee;
    })

    setPayloader(total);
  }

  async function removeItem(event) {
    console.log(carts)
    let current_total = payload;
    let new_data = carts.filter((doctor,i)=>{
      if(i===event){
        current_total-=doctor.fee;
      }
      return i!==event;
    });
    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(new_data));
    setCarts(new_data);
    setPayloader(current_total);

  }
  async function payCart() {

      let current_bill = JSON.parse(localStorage.getItem("cart"));
      current_bill["total"] = payload;
      
      let user = JSON.parse(localStorage.getItem("user"));
      user[0]["history"].push({...current_bill});
      console.log(user[0]);
      
      let cart=[];
      localStorage.setItem("cart",JSON.stringify(cart));
      localStorage.setItem("user",JSON.stringify(user));
      setRedirect(<Redirect to={{
        pathname: "/profile",
        state: {
          name:user[0]["name"],
          email:user[0]["email"],
          history:user[0]["history"]
         }
      }} to="/profile" />)
      setCarts([]);
      setPayloader(0);
  }
  async function emptyCart() {
    setCarts([{
      name: "You have not booked an appointment",
      fee: "0",
      timing: "-"
    }]);
    setPayloader(0);
  }
  useEffect(() => {
    fetchCart();
  }, []);
  return (
    <div>
      <NavBar/>
      {redirect}
      <div className="jumbotron pricing-header bg-primary text-white">
        <div className=" login-container container">
          <div className=" jumbo-row row">
            <div className="col-12 align-self-center">
              <h1>CHECKOUT</h1>
            </div>
            <div className="col-12 align-self-center">
              <h3>Confirm your booking.</h3>
            </div>
          </div>

        </div>
      </div>
      <section>
        <div className="spacer">
          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-9 shop-listing mx-auto">
                <div className="row shop-listing">
                  <table className="table shop-table">
                    <tr>
                      <th className="b-0">Doctor Name</th>
                      <th className="b-0">Date and Time</th>
                      <th className="b-0">Fee</th>
                      <th className="b-0">Add or Remove</th>

                    </tr>
                    {carts.map((item, i) => (
                      
                      <tr>
                        <td>{item.name}</td>
                        <td>{item.timing}</td>
                        <td>${item.fee}</td>
                    <td>
                      <button className="btn-sm btn-danger"  onClick={()=>{removeItem(i)}}><b>Remove</b></button></td>

                        <td className="text-right">
                          <h5 className="font-medium m-b-30">{item.total}</h5>
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td colspan="3" align="right">
                        <strong>Subtotal :</strong>${payload}
                      </td>

                    </tr>
                    <tr >
                      <td className="button-col" align="right">
                        <button
                          className="btn px-4 btn-success"
                          onClick={(e) => payCart()}
                        >
                          <b>Pay</b>
                        </button>
                      </td>
                      <td className="button-col" align="center">
                        <button
                          className="btn btn-danger"
                          onClick={(e) => emptyCart()}
                        >
                          <b>Empty cart</b>
                        </button>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Cart;
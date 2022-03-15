import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./Cart.css";
import axios from "axios";
import OrderOnline from "./OrderOnline";
export default function Cart() {
  let TOTAL_SUM = "TOTAL_SUM";
  const [cart, setCart] = useState([]);
  const [cartLen,setCartLen]=useState(0);
  const getCart = async () => {
    const cart = await axios.get("http://localhost:5000/cart");
    setCart(cart.data.cartList);
    setCartLen(cart.data.cartList.length);
  };
  useEffect(() => {
    getCart();
  }, []);
  const [quantity, setQuantity] = useState(1);
  let navigate = useNavigate();
  const getTotalSum = () => {
    TOTAL_SUM = cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
    return TOTAL_SUM;
  };

  const clearCart = () => {
    const url = "http://localhost:5000/cart";
    axios
      .delete(url)
      .then((res) => {
        console.log("res.data: ", res.data);
        getCart();
        
      })
      .catch((err) => {
        console.log(err.response);})
   
  };

  const addQuantity = (food, itemCount) => {
    const url = "http://localhost:5000/addquantity/cart";
    let quantity = parseInt(food.quantity) + 1
    axios
      .put(url, {food,quantity})
      .then((res) => {
        console.log("res.data: ", res.data);
        getCart();
      })
      .catch((err) => {
        console.log(err.response);})
  };
  const subQuantity = (food, itemCount) => {
    const url = "http://localhost:5000/subquantity/cart";
    let quantity = parseInt(food.quantity) - 1
    axios
      .put(url, {food,quantity})
      .then((res) => {
        console.log("res.data: ", res.data);
        getCart();
      })
      .catch((err) => {
        console.log(err.response);})
  }

  const removeFromCart = (foodToRemove) => {
    const url = "http://localhost:5000/removefood/cart";
    axios
      .post(url, foodToRemove)
      .then((res) => {
        console.log("res.data: ", res.data);
        getCart();
      })
      .catch((err) => {
        console.log(err.response);})
  };
  const initPayment = (data) => {
		const options = {
			key: process.env.KEY_ID,
			amount: data.amount,
			currency: data.currency,
			// name: food.name,
			description: "Test Transaction",
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:5000/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
          alert(data.message);
          if(data.message){
            clearCart();
          }
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#8a2b06",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};
  const handlePayment = async ()=>{
    try{
        // const orderUrl = "http://localhost:5000/orders";
  const { data } = await axios.post("http://localhost:5000/orders", { amount: TOTAL_SUM});
  console.log(data);
  initPayment(data.data);
    }
    catch(error){
        console.log(error);
    }
}

  return (

    <>
      <div className="Carthead">
        <h1 >Cart</h1>
        {cart.length > 0 &&
        <button className="btn"
        onClick={clearCart} style={{backgroundColor:"white",color:"#8a2b06"}}>Clear Cart</button>}
      </div>

      {cart.length > 0 &&
        <div>
        

          <div className="fooditems ">
            <table className='table mt-2'>
              <thead>
                <tr>
                  <th ></th>
                  <th >Product</th>
                  <th >Price</th>
                  <th >Quantity</th>
                  <th >Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((food, ind) => (
                  <tr key={ind}>
                    <th>
                      <img
                        style={{
                          maxWidth: '110px',
                        }}
                        src={require(`../../assets/img/${food.image_path}`)}
                        className="-imgcard-top1"
                        alt="Card image cap"
                      />
                    </th>
                    <td>
                      {food.name}
                    </td>
                    <td>
                      ₹{parseInt(food.price) * parseInt(food.quantity)}
                    </td>
                    <td>
                      <button className="addbutton btn mx-2"
                        onClick={() => {
                          setQuantity(Math.max(parseInt(food.quantity) - 1, 1));
                          subQuantity(food, parseInt(food.quantity) - 1)
                          // setItemCount(Math.max(itemCount - 1, 1));
                        }}
                      >-</button>
                      {food.quantity}
                      <span><button className="addbutton btn mx-2"
                        onClick={() => {
                          setQuantity(parseInt(food.quantity) + 1);
                          addQuantity(food, parseInt(food.quantity) + 1)
                          //setItemCount(itemCount + 1);

                        }}
                      >+
                      </button></span>

                    </td>
                    <td>

                      <button
                        className="removefromcart-btn btn"
                        onClick={() => removeFromCart(food)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="totalsum">
            <h5>Total Cost: ₹{getTotalSum()}</h5>
          </div>
          <div className="mt-5">
            <div className="cartbtns">
              <div className="addMorebtn  ">
                <button className="btn  addmore1"
                  onClick={() => navigate("/OrderOnline")}><span>&#8592;</span> Add More </button>
              </div>

              <div className="  placeorderbtn">
                <button className="btn btn-success"
                 onClick={handlePayment}>Proceed to Pay</button>
              </div>
            </div>
          </div>
        </div>

      }

    </>
  )
}

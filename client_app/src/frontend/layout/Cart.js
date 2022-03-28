import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./Cart.css";
import axios from "axios";
import OrderOnline from "./OrderOnline";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
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

  const addQuantity = (food) => {
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
  const subQuantity = (food) => {
    const url = "http://localhost:5000/subquantity/cart";
    let quantity = (parseInt(food.quantity)- 1,1)
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
          // alert(data.message);
          toast.success(data.message , {
            position: toast.POSITION.TOP_CENTER,
            autoClose:1000
          });
          const url1 = "http://localhost:5000/myOrders";
          axios
              .post(url1, cart)
              .then((res) => {
                  console.log("res.data: ", res.data);
              })
              .catch((err) => {
                  console.log(err.response);
              });
          const url = "http://localhost:5000/admin/orders";
        axios
            .post(url, cart)
            .then((res) => {
                console.log("res.data: ", res.data);
            })
            .catch((err) => {
                console.log(err.response);
            });
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
            <table className='cart_table mt-2'>
              <thead id="cart_thead">
                <tr>
                  <th className="cart_th" ></th>
                  <th className="cart_th">Product</th>
                  <th className="cart_th">Price</th>
                  <th className="cart_th">Quantity</th>
                  <th className="cart_th">Remove</th>
                </tr>
              </thead>
              <tbody id="cart_tbody">
                {cart.map((food, ind) => (
                  <tr className="cart_row" key={ind}>
                    <td className="cart_cell">
                      <img
                        src={require(`../../assets/img/${food.image_path}`)}
                        className="imgcard-top1"
                        alt="Card image cap"
                      />
                    </td>
                    <td className="cart_cell">
                      {food.name}
                    </td>
                    <td className="cart_cell">
                      ₹{parseInt(food.price) * parseInt(food.quantity)}
                    </td>
                    <td className="cart_cell">
                      <button className="addbutton btn"
                        onClick={() => {
                          setQuantity(Math.max((parseInt(food.quantity)- 1), 0));
                          subQuantity(food, parseInt(food.quantity) - 1)
                        }}
                      >-</button>
                      {food.quantity}
                      <span><button className="addbutton btn"
                        onClick={() => {
                          setQuantity(parseInt(food.quantity) + 1);
                          addQuantity(food, parseInt(food.quantity) + 1)
                        }}
                      >+
                      </button></span>

                    </td>
                    <td className="cart_cell">

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
          <div >
            <div className="cartbtns">
              <div className="addMorebtn  ">
                <button className="btn  addmore_btn"
                  onClick={() => navigate("/OrderOnline")}><span>&#8592;</span> Add More </button>
              </div>

              <div>
                <button className="btn btn-success  placeorderbtn"
                 onClick={handlePayment}>Proceed to Pay</button>
              </div>
            </div>
          </div>
        </div>

      }
      {cart.length==0 && 
        <div className="py-5">
          <h1 className="cartempty">Your Cart is empty</h1>
          <img
                  src={require("../../assets/img/cart1.jpg")}
                  alt=""
                  className="cart_img2"
                />
            <br/>
            <br/>
          <button className="btn  emptybtn"
                  onClick={() => navigate("/OrderOnline")}><span>&#8592;</span>Explore More</button>
        </div>

      }

    </>
  )
}

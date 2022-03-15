import React, { useState } from "react";
import "./Cart.css";
export default function Cart1({ cart, setCart }) {
  //const [itemCount, setItemCount] = useState(1);
  const getTotalSum = () => {
    return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  };
  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (food, price, quantity) => {
    const newCart = [...cart];
    newCart.find((item) => item.name == food.name).quantity = price;
    setCart(newCart);
  };
  const removeFromCart = (foodToRemove) => {
    setCart(cart.filter((food) => food != foodToRemove));
  };
  // console.log(price);
  return (

    <>
      <div className="Carthead">
        <h1 >Cart</h1>
        {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
      </div>
      <div className="fooditems ">
        <table className='table mt-5'>
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
                  ₹{food.price}
                </td>
                <td>
                <input
                type="number"
                min="1"
                    value={food.quantity}
                    onChange={(e) =>
                      setQuantity(food, parseInt(e.target.value))
                    }
                  />

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
      <div>
        <h3>Total Cost: ₹{getTotalSum()}</h3>
      </div>

    </>
  )
}
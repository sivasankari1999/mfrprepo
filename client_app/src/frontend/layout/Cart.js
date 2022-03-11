import React from 'react';
import "./Cart.css"
export default function Cart({ cart, setCart }) {
    const getTotalSum = () => {
        return cart.reduce(
            (sum, { price, quantity }) => sum + price * quantity,
            0
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    const setQuantity = (food, price) => {
        const newCart = [...cart];
        newCart.find(
            (item) => item.name == food.name
        ).quantity = price;
        setCart(newCart);
    };

    const removeFromCart = (foodToRemove) => {
        setCart(
            cart.filter((food) => food != foodToRemove)
        );
    };
    return (
        <>
            <h1>Cart</h1>
            {cart.length > 0 && (
                <button onClick={clearCart}>Clear Cart</button>
            )}
            <div className="fooditems">
                {cart.map((food, ind) => {
                    return (
                        <div className="card_container1 bg-light" key={ind}>

                            <div className="card1 ">
                                <img src={require(`../../assets/img/${food.image_path}`)} className="card-img-top1" alt="Card image cap" />
                                <div className="card-body1" id="card-1">
                                    <h4 className="card-title1">{food.name}</h4>
                                    <h6 className="card-subtitle1 pt-1">{food.description}</h6>
                                    <h4 className="card-subtitle1 mt-3">₹{food.price}</h4>
                                    <input
                                        value={food.quantity}
                                        onChange={(e) =>
                                            setQuantity(
                                                food,
                                                parseInt(e.target.value)
                                            )
                                        }
                                    />
                                    <button onClick={() => removeFromCart(food)}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
                )}
            </div>

            <div><h3>Total Cost: ₹{getTotalSum()}</h3></div>
        </>
    );
}
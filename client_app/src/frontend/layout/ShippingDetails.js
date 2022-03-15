import React, { useEffect, useState } from "react";
import "./ShippingDetails.css"
import axios from "axios";
export default function ShippingDetails({cart}) {
    
    console.log(cart);
    const [book, setBook] = useState({
		name: "The Fault In Our Stars",
		author: "John Green",
		img: "https://images-na.ssl-images-amazon.com/images/I/817tHNcyAgL.jpg",
		price: 250,
	});
    //let price = 500;
    const initPayment = (data) => {
		const options = {
			key: process.env.KEY_ID,
			amount: data.amount,
			currency: data.currency,
			name: book.name,
			description: "Test Transaction",
			image: book.img,
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:5000/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
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
			const { data } = await axios.post("http://localhost:5000/orders", { amount: book.price});
			console.log(data);
			initPayment(data.data);
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <>
            <div className="Carthead1">
                <h1 >Cart</h1>
            </div>
            <div className="shipping mt-3">
                <div className="text-start">
                    <div className="px-4 m-4 pt-4 ship"> <h4>Shipping Details <i className="fa fa-question-circle" style={{ fontSize: "14px" }}></i></h4></div>
                    <form className="mt-2">
                        <div className="namefield">
                            <div>
                                <input
                                    className="m-3 form-control"
                                    type="text"
                                    name="firstname"
                                    // value={data.email}
                                    // onChange={changeHandler}
                                    placeholder="FirstName"
                                    style={{ width: "18rem", height: "2.5rem" }}
                                ></input>
                            </div>
                            <div>
                                <input
                                    className="m-3 form-control"
                                    type="text"
                                    name="lastname"
                                    // value={data.email}
                                    // onChange={changeHandler}
                                    placeholder="LastName"
                                    style={{ width: "18rem", height: "2.5rem" }}
                                ></input>
                            </div>
                        </div>
                        <div className="namefield">
                            <div>
                                <input
                                    className="m-3 form-control"
                                    type="text"
                                    name="MobileNumber"
                                    // value={data.email}
                                    // onChange={changeHandler}
                                    placeholder="Mobile No:"
                                    style={{ width: "18rem", height: "2.5rem" }}
                                ></input>
                            </div>
                            <div>
                                <input
                                    className="m-3 form-control"
                                    type="text"
                                    name="alternatenumber"
                                    // value={data.email}
                                    // onChange={changeHandler}
                                    placeholder="Alternate Mobile No:"
                                    style={{ width: "18rem", height: "2.5rem" }}
                                ></input>
                            </div>
                        </div>
                        <div className="my-3">
                            <input
                                className="form-control"
                                type="text"
                                name="StreetAddress"
                                // value={data.email}
                                // onChange={changeHandler}
                                placeholder="Street Address"
                                style={{ width: "38rem", height: "2.5rem", margin: "0 auto" }}
                            ></input>
                        </div>
                        <div className="mb-3">
                            <input
                                className=" mt-4 form-control"
                                type="text"
                                name="State"
                                // value={data.email}
                                // onChange={changeHandler}
                                placeholder="State"
                                style={{ width: "38rem", height: "2.5rem", margin: "0 auto" }}
                            ></input>
                        </div>
                        <div className="namefield">
                            <div>
                                <input
                                    className="m-3 form-control"
                                    type="text"
                                    name="city"
                                    // value={data.email}
                                    // onChange={changeHandler}
                                    placeholder="City"
                                    style={{ width: "18rem", height: "2.5rem" }}
                                ></input>
                            </div>
                            <div>
                                <input
                                    className="m-3 form-control"
                                    type="text"
                                    name="Postalcode"
                                    // value={data.email}
                                    // onChange={changeHandler}
                                    placeholder="Postal Code"
                                    style={{ width: "18rem", height: "2.5rem" }}
                                ></input>
                            </div>
                        </div>
                    </form>
                    <div className="payment">
                        <div>
                        <h5 className="ship">Select Payment Method</h5>
                        <div className="py-2 form-check-inline" >
                            <input type="radio" name="paymenttype"
                                value="razorpay"
                                className="form-check-input"></input>
                            <label className="mx-2 radiolabel">RazorPay</label>
                        </div>
                        <div className="py-2 form-check-inline" >
                            <input type="radio" name="paymenttype"
                                value="cashondelivery"
                                className="form-check-input"></input>
                            <label className="mx-2 radiolabel">Cash On Delivery</label>
                        </div>
                        </div>
                    
                        <div className="btn paybtn1 ">
                            <button className="btn btn-success"
                            onClick={handlePayment}>Proceed to Pay</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
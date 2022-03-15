import React from 'react';
import "./AddToRecommended.css";
export default function AddToRecommended({ cart, setCart }) {
    return (
        <>
            <h1>Recommended List</h1>
            <div className="container1">
                {cart.map((book, ind) => {
                    return (
                    <div className="card_container1 bg-light" key={ind}>

                        <div className="card1 ">
                            <img src={require(`../assets_ict/img/${book.image}`)} className="card-img-top1" alt="Card image cap" />
                            <div className="card-body1" id="card-1">
                                <h4 className="card-title1">{book.Book_Title}</h4>
                                <h6 className="card-body1 ">Author:{book.author}</h6>
                                <h6 className="card-body1 ">{book.description}</h6>
                                <h6 className="card-body1 ">Language:{book.language}</h6>
                            </div>
                        </div>
                    </div>
                    )
                }
                )}
            </div>
        </>
    );
}
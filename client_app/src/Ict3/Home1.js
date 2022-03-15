import React, { useEffect, useState } from "react";
import './Home1.css';
import Navbar1 from "./Navbar1";
import axios from "axios"
import { useNavigate } from "react-router";
const Fiction = 'Fiction';
const Latest = 'Latest';
const Romance = 'Romance';
const Philosophy = 'Philosophy';
const Fantasy = 'Fantasy';
const Novel = 'Novel';
export default function Home1({ setCard, card, cart, setCart }) {
  const [errormsg, setErrormsg] = useState("");
  const [booklist, setbookList] = useState([]);
  let navigate = useNavigate();
  const getUsers = async () => {
    const users = await axios.get('http://localhost:5000/home1');
    setbookList(users.data.bookList);
  };
  useEffect(() => {
    getUsers();
  }, []);
  console.log(booklist);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const addTofavourites = (book) => {
    card = card.filter((favcardbook, ind) => {
      if (favcardbook.id == book.id) {
        alert("Already added to favourites");
      }
      return favcardbook.id !== book.id;
    });
    setCard(card);
    let newCard = [...card, book];
    console.log(newCard);
    setCard(newCard);
  };
  const addToRecommended = (book) => {
  cart = cart.filter((reccartbook, ind) => {
      if (reccartbook.id == book.id) {
        alert("Already Recommended");
      }
      return reccartbook.id !== book.id;
    });
    setCart(cart);
    let newCart = [...cart, book];
    console.log(newCart);
    setCart(newCart);
  };  
  return (
    <>
      <Navbar1 />
      <h3>Select a Category of book!!!</h3>
      <select className="mt-4 form-select ml-5 ms-auto px-3 mb-4" onChange={(e) => setSelectedCategory(e.target.value)} >
        <option value='All'>All</option>
        <option value={Fiction}>{Fiction}</option>
        <option value={Latest}>{Latest}</option>
        <option value={Romance}>{Romance}</option>
        <option value={Philosophy}>{Philosophy}</option>
        <option value={Fantasy}>{Fantasy}</option>
        <option value={Novel}>{Novel}</option>
      </select>
      <div className="container1">

        {selectedCategory &&
          booklist.filter((book) => book.categories.trim() == selectedCategory.trim())
            .map((book, ind) => {
              return (
                <div className="card_container1 bg-light" key={ind}>

                  <div className="card1 ">
                    <img src={require(`../assets_ict/img/${book.image}`)} className="card-img-top1" alt="Card image cap" />
                    <div className="card-body1" id="card-1">
                      <h4 className="card-title1">{book.Book_Title}</h4>
                      <h6 className="card-body1 ">Author:{book.author}</h6>
                      <h6 className="card-body1 ">{book.description}</h6>
                      <h6 className="card-body1 ">Language:{book.language}</h6>
                      <div className="row py-2 mx-2">
                        <div className="col-auto">
                          <button className="btn btn-success"
                            onClick={() => addTofavourites(book)}
                          >favourite</button>
                        </div>
                        <div className="col-auto">
                          <button className="btn btn-success"
                            onClick={() => addToRecommended(book)}
                          >Recommend</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              )
            })
        }
         {selectedCategory=="All" &&
            booklist.map((book, ind) => {
              return (
                <div className="card_container1 bg-light" key={ind}>

                  <div className="card1 ">
                    <img src={require(`../assets_ict/img/${book.image}`)} className="card-img-top1" alt="Card image cap" />
                    <div className="card-body1" id="card-1">
                      <h4 className="card-title1 pt-2">{book.Book_Title}</h4>
                      <h6 className="card-body1 "><span className="auth">Author:</span>{book.author}</h6>
                      <h6 className="card-body1 ">{book.description}</h6>
                      <h6 className="card-body1 "><span className="lang">Language:</span>:{book.language}</h6>
                      <div className="row py-2">
                        <div className="col-auto">
                          <button className="btn btn-success"
                            onClick={() => addTofavourites(book)}
                          >favourite</button>
                        </div>
                        <div className="col-auto">
                          <button className="btn btn-success"
                            onClick={() => addToRecommended(book)}
                          >Recommend</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              )
            })
        }
      </div>
    </>
  )
}
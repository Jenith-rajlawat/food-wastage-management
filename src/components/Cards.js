import React from "react";
import CardItem from "./CardItem";
import img9 from "../images/img-9.jpg";
import img2 from "../images/img-2.jpg";
import "./Cards.css";
function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destination</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img9}
              text="Explore the hidden waterfall deep inside the 
            Amazon Jungle"
              label="Adventure"
              path="/ourmission"
            />
            <CardItem
              src={img2}
              text="Explore the hidden waterfall deep inside the 
            Amazon Jungle"
              label="Adventure"
              path="/ourmission"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img9}
              text="Explore the hidden waterfall deep inside the 
            Amazon Jungle"
              label="Adventure"
              path="/ourmission"
            />
            <CardItem
              src={img2}
              text="Explore the hidden waterfall deep inside the 
            Amazon Jungle"
              label="Adventure"
              path="/ourmission"
            />
            <CardItem
              src={img2}
              text="Explore the hidden waterfall deep inside the 
            Amazon Jungle"
              label="Adventure"
              path="/ourmission"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;

import React from "react";
import "./header.css";

import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Get current stock data, discover trends and build out your portfolio.
        </h1>
        <p>
          Build your own portfolio of stocks, compare metrics and visualize
          growth in a easy and free manner. Bring your stock analysis to a next
          level by getting started today
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="People" />
          <p>1,600 people requested access in the last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="AI" />
      </div>
    </div>
  );
};

export default Header;

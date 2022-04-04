import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="phone-review">
        <h1>Choose your next phone</h1>
        <h1 style={{ color: "blue" }}>Choose your best phone</h1>
        <p>
          The iPhone 13 and 13 Mini have better battery life, better cameras and
          a newer processor than last year's iPhone 12 and 12 Mini. Overall both
          the iPhone 13 and 13 Mini are excellent phones for most people, which
          is why we've given them a CNET Editors' Choice Award. Our original
          review, first published in September, follows.
        </p>
        <button>Live Demo</button>
      </div>
      <div className="phone-img">
        <img
          src="https://m.media-amazon.com/images/I/61HnuJc8WHL._AC_SX522_.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;

import "./productCard.css";
import { useState, useEffect } from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import axios from "axios";

export function ProductCard() {
  const [housesData, setHousesData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        "https://www.anapioficeandfire.com/api/houses"
      );
      setHousesData(res.data);
    })();
  }, []);

  return (
    <div className="main">
      {housesData.map(({ name, region }) => (
        <div className="img-card-container">
          <AiTwotoneHeart className="red-color heart" />

          <img
            className="img-container"
            src={"https://source.unsplash.com/random?random?sig=9 "}
            alt="product"
          />
          <h4>{name}</h4>
          <h5>Region: {region}</h5>
          <div className="img-description-rating">
            {((name.length / 30) * 5).toFixed(1)}★
          </div>
          <div className="card-price">
            ₹{name.length * 200 < 3000 ? "Free Entry" : name.length * 200}
          </div>

          <div className="btn-container">
            <button className="add-to-cart-btn btn">GO TO CART</button>
          </div>
        </div>
      ))}
    </div>
  );
}

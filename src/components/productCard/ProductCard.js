import "./productCard.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AiTwotoneHeart } from "react-icons/ai";
import axios from "axios";

export function ProductCard({ housesData, pageNumber }) {
  return (
    <div className="main">
      {housesData.map(({ name, region, houseImage }) => (
        <div className="img-card-container">
          <img className="img-container" src={houseImage} alt="product" />
          <h4>{name}</h4>
          <h5>Region: {region}</h5>
          <div className="img-description-rating">
            {((name?.length / 30) * 5).toFixed(1)}★
          </div>
          <div className="card-price">₹{name?.length * 200}</div>
        </div>
      ))}
    </div>
  );
}

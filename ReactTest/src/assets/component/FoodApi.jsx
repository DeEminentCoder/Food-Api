import React, { useState } from "react";
import axios from "axios";

const FoodApi = () => {
  // let foodArray = [{}];
  const [foods, setfoods] = useState([]);
  const [me, setMe] = useState("");
  let endpoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${me}`;
  const getData = () => {
    axios
      .get(endpoint)
      .then((response) => {
        setfoods(response.data.meals);
        console.log(foods);
      })
      .catch((err) => {});
  };
  return (
    <>
      <center className="p-2">
        <input
          placeholder="Which food are you looking for?"
          type="text"
          onChange={(e) => setMe(e.target.value)}
          className="form-control p-2 display fs-3 mb-2"
        >
            <label htmlFor=""></label>
        </input>
        <button onClick={getData} className="btn btn-dark form-control fs-2">
          Get Food
        </button>

        {foods.map((endpoint, index) => (
          <div className="row m-5 p-5 container">
          <div key={index} className="card my-2 border col p-5 m-5" style={{ width: "30rem" }}>
            <img
              src={endpoint.strMealThumb}
              className="card-img-top"
              alt="..."
            ></img>
            <div className="card-body">
              <h5 className="card-title">{endpoint.strMeal}</h5>
              <p className="card-text">
               {endpoint.strInstructions}
              </p>
              <a href="#{endpoint.strYoutube}" className="btn btn-primary">
              Watch Tutorial video
              </a>
            </div>
          </div>
          </div>
        ))}
      </center>
    </>
  );
};

export default FoodApi;

import React from "react";
import "../App.css";
import axios from "axios";
import Form from "./Form";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function App() {
  const [showform, setShowform] = useState(false);
  const [card, setCard] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        "https://jio-clickstream-product-suggestion.extensions.jiox0.de/api/promotions?page=1&size=1&sort=id,desc"
      )
      .then((res) => {
        setCard(res.data);
      })
      .catch((err) => {
        console.log(err);
        // if (err.res.status === 404) {
        //   navigate("/Page404");

        //   return;
        // }
      });
  }, []);

  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          {card.map((cards) => (
            <div class="carousel-item active" id="car">
              <Link to={`/${cards.id}`}>
                <img
                  src={cards.desktopImageUrl}
                  class="d-block w-80 "
                  marginLeft="200px"
                  alt="..."
                  onClick={() => setShowform(true)}
                  // onClick={handleClick}
                />
              </Link>
              <br />
              <div>
                <h3>{cards.title}</h3>
                <br />
                {cards.description}
              </div>
            </div>
          ))}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {showform ? <Form /> : undefined}
    </div>
  );
}

export default App;

import React from "react";
import "../App.css";
import axios from "axios";
import Form1 from "./Form1";
import { useState } from "react";
function App() {
  const [showform, setShowform] = useState(false);
  const [card, setCard] = useState([
    {
      id: 5,
      name: "JIO DIGITAL DEAL DAYS",
      urlName: "jddd",
      desktopImageUrl:
        "https://i.pinimg.com/736x/70/11/1e/70111e568787b06c99a215766a9d0cdc.jpg",
      tabletImageUrl:
        "https://i.pinimg.com/736x/70/11/1e/70111e568787b06c99a215766a9d0cdc.jpg",
      mobileImageUrl:
        "https://i.pinimg.com/736x/70/11/1e/70111e568787b06c99a215766a9d0cdc.jpg",
      title: "JIO DIGITAL DEAL DAYS",
      description:
        "UPTO 90% of on digital equipment in jio mart digital applications. Products can be bought in-store via retailer or by our online shopping platform at https://jmd-b2b.jiohostx0.de/.",
      tnc: "tnc",
      tncLink: "terms&Conditions",
      landingUrl: "https://www.landingurl.com",
      position: 1,
      isEnabled: true,
      startDate: "2007-12-03",
      endDate: "2007-12-03",
      createdBy: "jio",
      createdDate: "2022-07-25T13:58:57Z",
      lastModifiedBy: "jio",
      lastModifiedDate: "2022-07-25T13:58:57Z",
      formId: {
        id: 4,
        name: "This is Jiomart Digital Deals of the day Offer",
        title: "This is Jiomart Digital Deals of the day Offer",
        isActive: true,
        multiSubmissionAllowed: true,
        fields: null,
      },
    },

    {
      id: 3,
      name: "JIO DIGITAL DEAL DAYS",
      urlName: "jddd",
      desktopImageUrl:
        "https://hdn-1.jiox0.de/jiox0/platform/extensions/screensaver/free/original/AgtYP1jSV-file.jpeg",
      tabletImageUrl:
        "https://yb4ke1guf9g32qn4pnt1k17m-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/deal-sites.jpg",
      mobileImageUrl:
        "https://yb4ke1guf9g32qn4pnt1k17m-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/deal-sites.jpg",
      title: "JIO DIGITAL DEAL DAYS",
      description:
        "UPTO 70% of on digital equipment in jio mart digital applications. Products can be bought in-store via retailer or by our online shopping platform at https://jmd-b2b.jiohostx0.de/.",
      tnc: "tnc",
      tncLink: "terms&Conditions",
      landingUrl: "https://www.landingurl.com",
      position: 1,
      isEnabled: true,
      startDate: "2007-12-03",
      endDate: "2007-12-03",
      createdBy: "jio",
      createdDate: "2022-07-25T13:58:57Z",
      lastModifiedBy: "jio",
      lastModifiedDate: "2022-07-25T13:58:57Z",
      formId: {
        id: 1,
        name: "Promotion Lead Capture",
        title: "Promotion Lead Capture",
        isActive: true,
        multiSubmissionAllowed: true,
        fields: [
          {
            id: 1,
            key: "Name",
            type: "TextBox",
            isMandatory: true,
            form: {
              id: 1,
              name: null,
              title: null,
              isActive: null,
              multiSubmissionAllowed: null,
              fields: null,
            },
            options: [],
          },
          {
            id: 2,
            key: "Gender",
            type: "RadioGroup",
            isMandatory: true,
            form: {
              id: 1,
              name: null,
              title: null,
              isActive: null,
              multiSubmissionAllowed: null,
              fields: null,
            },
            options: [
              { id: 1, valueStr: "female", title: "Female", isDefault: false },
              { id: 2, valueStr: "male", title: "Male", isDefault: true },
            ],
          },
        ],
      },
    },
  ]);

  // useEffect(() => {
  //   getCard();
  // }, []);

  const getCard = async () => {
    try {
      const res = await axios.get(
        "https://jio-clickstream-product-suggestion.extensions.jiox0.de/api/promotions?page=1&size=1&sort=id,desc"
      );
      setCard(res.data.results);
    } catch (err) {
      alert(err.message);
    }
  };

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
              <img
                src={cards.desktopImageUrl}
                class="d-block w-80 "
                marginLeft="200px"
                alt="..."
                onClick={() => setShowform(true)}
              />
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

      {showform ? <Form1 /> : undefined}
    </div>
  );
}

export default App;

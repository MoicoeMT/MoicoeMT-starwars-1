import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const People = () => {
  const { store, actions } = useContext(Context);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div id="cardscontainer" className="container-fluid my-5">
        <h1 className="text-danger">| People</h1>
        <Slider {...settings} className="">
          {store.people.length > 0 ? (
            store.people.map((item, index) => {
              return (
                <div key={index} id="peoplecardsscss" className="card">
                  <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${item.result.uid}.jpg`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.result.properties.name}
                    </h5>
                    <ul className="card-text">
                      <li>Gender: {item.result.properties.gender}</li>
                      <li>Birth Year: {item.result.properties.birth_year}</li>
                      <li>Eye Color: {item.result.properties.eye_color}</li>
                      <li>Hair Color: {item.result.properties.hair_color}</li>
                    </ul>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <Link
                        to={`/PeopleDetails/${item.result.uid}`}
                        className="btn bg-info bg-opacity-50 bg-primary text-white border-succes border-info rounded"
                      >
                        Learn More!
                      </Link>
                      <button
                        onClick={() => actions.addFavorites(item)}
                        className="btn bg-info bg-opacity-75 bg-danger text-warning border-warning border-info rounded mx-3"
                      >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </Slider>
      </div>
    </>
  );
};

export default People;

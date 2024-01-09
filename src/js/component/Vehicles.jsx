import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Vehicles = () => {
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
        <h1 className="text-danger ">| Vehicles</h1>
        <hr />
        <Slider {...settings} className="">
          {store.vehicles.length > 0 ? (
            store.vehicles.map((vehiclesItem, index) => {
              return (
                <div key={index} id="cardsscss" className="card">
                  <img
                    src={`https://starwars-visualguide.com/assets/img/vehicles/${vehiclesItem.result.uid}.jpg`}
                    className=" w-100"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-title">
                      {vehiclesItem.result.properties.name}
                    </h6>
                    <small className="card-text">
                      <li>{vehiclesItem.result.properties.model}</li>
                      <li>${vehiclesItem.result.properties.cost_in_credits}</li>
                    </small>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <Link
                        to={`/Details/${vehiclesItem.result.uid}`}
                        className="btn bg-info bg-opacity-50 bg-primary text-white border-succes border-info rounded"
                      >
                        Learn More!
                      </Link>
                      <button
                        onClick={() => actions.addFavorites(vehiclesItem)}
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

export default Vehicles;

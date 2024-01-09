import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const Details = () => {
  const { store } = useContext(Context);
  const params = useParams();
  const vehiclesFilter = store.vehicles.find(
    (item) => item.result.uid == params.id
  );

  return (
    <div id="fondo">
      <div id="vehiclesDetailscss" className="container card ">
        <div className="row">
          <div className="col-md-4 p-0">
            <img
              id="imagenDetails"
              src={`https://starwars-visualguide.com/assets/img/vehicles/${vehiclesFilter.result.uid}.jpg`}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">
                {vehiclesFilter.result.properties.name}
              </h3>
              <ul id="detailscss" className="card-text">
                <li>
                  {" "}
                  <strong>Model</strong>:{" "}
                  {vehiclesFilter.result.properties.model}
                </li>
                <li>
                  {" "}
                  <strong>Cargo Capacity</strong>:{" "}
                  {vehiclesFilter.result.properties.cargo_capacity}
                </li>
                <li>
                  {" "}
                  <strong>Manufacturer</strong>:{" "}
                  {vehiclesFilter.result.properties.manufacturer}
                </li>
                <li>
                  {" "}
                  <strong>Vehicle Class</strong>:{" "}
                  {vehiclesFilter.result.properties.vehicle_class}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

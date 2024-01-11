import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const PlanetsDetails = () => {
  const { store } = useContext(Context);
  const params = useParams();
  const planetsFilter = store.planets.find(
    (item) => item.result.uid == params.id
  );

  return (
    <div id="fondo">
      <div id="planetsDetailscss" className="container card mt-5">
        <div className="row">
          <div className="col-md-4 p-0">
            <img
              id="imagenDetails"
              src={`https://starwars-visualguide.com/assets/img/planets/${
                planetsFilter.result.uid == 1 ? 8 : planetsFilter.result.uid
              }.jpg`}
              className="img-fluid rounded-start h-100"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">
                {planetsFilter.result.properties.name}
              </h3>
              <ul id="detailscss" className="card-text">
                <li>
                  {" "}
                  <strong>Climate</strong>:{" "}
                  {planetsFilter.result.properties.climate}
                </li>
                <li>
                  {" "}
                  <strong>Diameter</strong>:{" "}
                  {planetsFilter.result.properties.diameter}
                </li>
                <li>
                  {" "}
                  <strong>Gravity</strong>:{" "}
                  {planetsFilter.result.properties.gravity}
                </li>
                <li>
                  {" "}
                  <strong>Orbital period</strong>:{" "}
                  {planetsFilter.result.properties.orbital_period}
                </li>
                <li>
                  {" "}
                  <strong>Population</strong>:{" "}
                  {planetsFilter.result.properties.population}
                </li>
                <li>
                  {" "}
                  <strong>Rotation period</strong>:{" "}
                  {planetsFilter.result.properties.rotation_period}
                </li>
                <li>
                  {" "}
                  <strong>Surface water</strong>:{" "}
                  {planetsFilter.result.properties.surface_water}
                </li>
                <li>
                  {" "}
                  <strong>Terrain</strong>:{" "}
                  {planetsFilter.result.properties.terrain}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetsDetails;

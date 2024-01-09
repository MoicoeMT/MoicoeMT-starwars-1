import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const PeopleDetails = () => {
  const { store } = useContext(Context);
  const params = useParams();
  const peopleFilter = store.people.find((item) => item.result.uid == params.id);

  return (
    <div id="fondo">
      <div id="peopleDetailscss" className="container card mb-3 mt-5">
        <div className="row">
          <div className="col-md-4 p-0">
            <img id="imagenDetails" src={`https://starwars-visualguide.com/assets/img/characters/${peopleFilter.result.uid}.jpg`} className="img-fluid h-100 rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{peopleFilter.result.properties.name}</h3>
              <ul id="detailscss" className="card-text">
                <li> <strong>Birth Year</strong>: {peopleFilter.result.properties.birth_year}</li>
                <li> <strong>Eye Color</strong>: {peopleFilter.result.properties.eye_color}</li>
                <li> <strong>Gender</strong>: {peopleFilter.result.properties.gender}</li>
                <li> <strong>Hair Color</strong>: {peopleFilter.result.properties.hair_color}</li>
                <li> <strong>Height</strong>: {peopleFilter.result.properties.height}</li>
                <li> <strong>Mass</strong>: {peopleFilter.result.properties.mass}</li>
                <li> <strong>Skin Color</strong>: {peopleFilter.result.properties.skin_color}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleDetails;

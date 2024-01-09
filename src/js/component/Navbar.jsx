import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-expand-xs navbar-expand-md bg-black p-0">
      <div
        id="navcontent"
        className="container-fluid d-flex justify-content-between p-0 align-items-center"
      >
        <div className="d-flex justify-content-between">
          <Link to={"/"} className="navbar-brand text-light">
            <img
              id="imagestar"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li>
                <button
                  type="button"
                  className="btn bg-info bg-opacity-50 bg-danger text-white border-danger border-info rounded"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i className="fa-regular fa-heart"></i> Favorites
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content text-white">
                      <div className="modal-header">
                        <h5
                          className="modal-title fs-5 text-white"
                          id="exampleModalLabel"
                        >
                          Favorites
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body d-flex flex-column">
                        {store.favorites.map((navitem) => {
                          return (
                            <div key={navitem.result._id}>
                              <div
                                className="d-flex justify-content-between align-items-center mb-2"
                                
                              >
                                <p className="fs-5">
                                  {navitem.result.properties.name}
                                </p>
                                <button id="deletebutton" onClick={() => actions.deleteFavorites(navitem)} className="btn">
                                  <i className="fa-solid fa-trash"></i>
                                </button>
                              </div>
                              <hr />
                            </div>
                          );
                        })}
                      </div>
                      <div className="modal-footer ">
                        <button
                          type="button"
                          className="btn bg-black text-white"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <Link to={"/"} className="text-warning fs-5 mx-3">
              <i className="fa-solid fa-house"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

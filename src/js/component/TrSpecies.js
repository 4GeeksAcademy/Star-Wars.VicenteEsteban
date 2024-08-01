import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Species } from "../views/Species";

export const TrSpecies = ({ title, text, children }) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [dataSpecies, setDataSpecies] = useState({});

  useEffect(() => {
    const result = store.species.filter(
      (manzana) => manzana.uid === params.theid
    );
    setDataSpecies(result[0]);
    console.log(result[0]);
  }, []);

  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={`https://starwars-visualguide.com/assets/img/species/${params.theid}.jpg`}
            className="d-block w-50 rounded mx-auto"
            alt="..."
          />
        </div>

        <div className="container carousel-item">
          <h1 className="ms-2 text-warning">{dataSpecies.name}</h1>

          <ul className="col float-end bullets text-primary bg-black fs-4 border border-warning rounded-3 p-2">
            <li className="mt-3 list-unstyled">
              Description: {dataSpecies.description}
            </li>
            <li className="mt-5 list-unstyled">
              Language: {dataSpecies.language}
            </li>
            <li className="mt-5 list-unstyled">
              Designation: {dataSpecies.designation}
            </li>
            <li className="mt-5 list-unstyled">
              Classification: {dataSpecies.classification}
            </li>
            <li className="mt-5 list-unstyled">
              Height: {dataSpecies.average_height}
            </li>
            <li className="mt-5 list-unstyled">
              Lifespan: {dataSpecies.average_lifespan}
            </li>
            <li className="mt-5 list-unstyled">
              Skin color: {dataSpecies.skin_colors}
            </li>
          </ul>

          <div>
            <img
              src={`https://starwars-visualguide.com/assets/img/species/${params.theid}.jpg`}
            />
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden ">Next</span>
      </button>
    </div>
  );
};

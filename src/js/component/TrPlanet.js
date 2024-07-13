import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const TrPlanet = ({ title, text, children }) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [dataPlanet, setDataPlanet] = useState({});

  useEffect(() => {
    const result = store.planets.filter(
      (platano) => platano.uid === params.theid
    );
    setDataPlanet(result[0]);
    console.log(result[0]);
  }, []);

  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`}
            className="d-block w-50 rounded mx-auto "
            alt="..."
          />
        </div>

        <div className="container carousel-item">
          <h1 className="ms-2 text-warning">{dataPlanet.name}</h1>

          <ul className="col float-end bullets text-primary bg-black fs-4">
            <li className="mt-3 list-unstyled">
              Description: {dataPlanet.description}
            </li>
            <li className="mt-5 list-unstyled">
              Grabity: {dataPlanet.gravity}
            </li>
            <li className="mt-5 list-unstyled">
              Population: {dataPlanet.population}
            </li>
            <li className="mt-5 list-unstyled">
              Diameter: {dataPlanet.diameter}
            </li>
            <li className="mt-5 list-unstyled">
              Climate: {dataPlanet.climate}
            </li>
          </ul>

          <div>
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`}
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
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

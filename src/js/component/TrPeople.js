import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const TrPeople = ({ title, text, children }) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [dataPeople, setDataPeople] = useState({});
  console.log(store.people);

  useEffect(() => {
    const result = store.people.filter((patata) => patata.uid === params.theid);
    setDataPeople(result[0]);
    console.log(result[0]);
  }, []);

  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`}
            className="d-block w-50  mx-auto"
            alt="..."
          />
        </div>

        <div className="container carousel-item">
          <h1 className="ms-2 text-warning">{dataPeople.name}</h1>

          <ul className="col float-end bullets text-primary bg-black  fs-4  ">
            <li className="mt-3 list-unstyled">
              Description: {dataPeople.description}
            </li>
            <li className="mt-5 list-unstyled">Gender: {dataPeople.gender}</li>
            <li className="mt-5 list-unstyled">Height: {dataPeople.height}</li>
            <li className="mt-5 list-unstyled">Mass: {dataPeople.mass}</li>
            <li className="mt-5 list-unstyled">
              Hair color: {dataPeople.hair_color}
            </li>
            <li className="mt-5 list-unstyled">
              Skin Color: {dataPeople.skin_color}
            </li>
            <li className="mt-5 list-unstyled">
              Eye color: {dataPeople.eye_color}
            </li>
          </ul>

          <div>
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`}
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

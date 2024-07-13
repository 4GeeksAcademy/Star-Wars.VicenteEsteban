import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { TrPlanet } from "../component/TrPlanet";

export const Planet = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <div className="container mt-2">
      <div className="row justify-content-center">
        <div className="col-10">
          <TrPlanet />
        </div>
      </div>
    </div>
  );
};

Planet.propTypes = {
  match: PropTypes.object,
};

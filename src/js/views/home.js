import React, { useContext, useEffect } from "react";

import "../../styles/home.css";
import Card from "../component/Card";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
export const Home = () => {
  const { store, actions } = useContext(Context);

  const handleAddFavorite = (name) => {
    actions.addFavorite(name);
  };

  useEffect(() => {
    actions.loadPlanets();
    actions.loadPeople();
    actions.loadSpecies();
  }, []);

  return (
    <div className="container">
      <h1 className="text-warning">Planets</h1>
      <div className="row flex-nowrap overflow-auto">
        {store.planets.map((planet, i) => (
          <div className="col-3" key={i}>
            <Card title={planet.name}>
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                alt={planet.name}
                className="card-img-top"
              />
              <pre>
                {planet.description}
                <br></br>
                {planet.climate}
              </pre>
            </Card>
            <div className="d-flex justify-content-between">
              <div className="ms-3">
                <Link to={"/Planet/" + planet.uid}>
                  <p href="#" className="btn btn-warning">
                    More info
                  </p>
                </Link>
              </div>
              <div className="me-3">
                <i
                  className={`fa-regular fa-star ${
                    store.favorites.includes(planet.name) ? "active" : ""
                  }`}
                  onClick={() => handleAddFavorite(planet.name)}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-warning">Characters</h1>
      <div className="row flex-nowrap overflow-auto">
        {store.people.map((person, i) => (
          <div className="col-3" key={i}>
            <Card title={person.name}>
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
                alt={person.name}
                className="card-img-top"
              />
              <pre>
                {person.description}
                <br></br>
                {person.climate}
              </pre>
            </Card>
            <div className="d-flex justify-content-between">
              <div className="ms-3">
                <Link to={"/People/" + person.uid}>
                  <p href="#" className="btn btn-warning">
                    More info
                  </p>
                </Link>
              </div>
              <div className="me-3">
                <i
                  className={`fa-regular fa-star ${
                    store.favorites.includes(person.name) ? "active" : ""
                  }`}
                  onClick={() => handleAddFavorite(person.name)}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-warning">Species</h1>
      <div className="row flex-nowrap overflow-auto">
        {store.species.map((specie, i) => (
          // {sortedSpecies.map((specie, i) => (
          <div className="col-3" key={i}>
            <Card title={specie.name}>
              <img
                src={`https://starwars-visualguide.com/assets/img/species/${specie.uid}.jpg`}
                alt={specie.name}
                className="card-img-top"
              />
              <pre>
                {specie.description}
                <br></br>
                {specie.climate}
              </pre>
            </Card>
            <div className="d-flex justify-content-between">
              <div className="ms-3">
                <Link to={"/Species/" + specie.uid}>
                  <p href="#" className="btn btn-warning">
                    More info
                  </p>
                </Link>
              </div>
              <div className="me-3">
                <i
                  className={`fa-regular fa-star ${
                    store.favorites.includes(specie.name) ? "active" : ""
                  }`}
                  onClick={() => handleAddFavorite(specie.name)}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

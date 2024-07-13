import { element, elementType } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      planets: [],
      people: [],
      species: [],
      infoIndex: 1,
      favorites:[],
    },
    actions: {
      // Use getActions to call a function within a fuction
  addFavorite:(name) =>{
    const store = getStore();
    const favorites = store.favorites;
    if (favorites.find((n) => n == name)){
      return;
    }
    console.log(name)
    setStore({
      favorites: [...store.favorites, name],
    });
  },
 

  delFavorite:(nameToDelete)=>{
    const store = getStore();
    const favorites = store.favorites;
    const newFavorites = favorites.filter((name) => name != nameToDelete );
    setStore({
      favorites: newFavorites
    })
  },


      getPlanet: async (elementType, id) => {
        //https://swapi.tech/api/people
        try {
          let resp = await fetch(`https://swapi.tech/api/${elementType}/${id}`);
          if (!resp.ok) {
            console.error("Error en la peticion: ${resp.status}");
            return;
          }
          let data = await resp.json();
          let planet = {
            uid: data.result.uid,
            description: data.result.description,
            name: data.result.properties.name,
            climate: data.result.properties.climate,
            gravity: data.result.properties.gravity,
            population: data.result.properties.population,
            diameter: data.result.properties.diameter,
          };

          const store = getStore();
          setStore({
            planets: [...store.planets, planet],
          });
        } catch (error) {
          console.error("Error en la promesa: ${error}");
          return;
        }
      },

      loadPlanets: async () => {
        const actions = getActions();
        const planetPromises = [];
        setStore({ planets: [] });
        for (let i = 1; i <= 10; i++) {
          planetPromises.push(actions.getPlanet("planets", i));
        }
        await Promise.all(planetPromises);
      },

      getPerson: async (elementType, id) => {
        //https://swapi.tech/api/people
        try {
          let resp = await fetch(`https://swapi.tech/api/${elementType}/${id}`);
          if (!resp.ok) {
            console.error("Error en la peticion: ${resp.status}");
            return;
          }
          let data = await resp.json();
          let person = {
            uid: data.result.uid,
            description: data.result.description,
            name: data.result.properties.name,
            height: data.result.properties.height,
            mass: data.result.properties.mass,
            hair_color: data.result.properties.hair_color,
            skin_color: data.result.properties.skin_color,
            eye_color: data.result.properties.eye_color,
            gender: data.result.properties.gender,
          };

          const store = getStore();
          setStore({
            people: [...store.people, person],
          });
        } catch (error) {
          console.error("Error en la promesa: ${error}");
          return;
        }
      },

      loadPeople: async () => {
        const actions = getActions();
        const personPromises = [];
        setStore({ people: [] });
        for (let i = 1; i <= 10; i++) {
          personPromises.push(actions.getPerson("people", i));
        }
        await Promise.all(personPromises);
      },

      getSpecie: async (elementType, id) => {
        //https://swapi.tech/api/people
        try {
          let resp = await fetch(`https://swapi.tech/api/${elementType}/${id}`);
          if (!resp.ok) {
            console.error("Error en la peticion: ${resp.status}");
            return;
          }
          let data = await resp.json();
          let specie = {
            uid: data.result.uid,
            description: data.result.description,
            name: data.result.properties.name,
            language: data.result.properties.language,
            designation: data.result.properties.designation,
            classification: data.result.properties.classification,
            average_height: data.result.properties.average_height,
            average_lifespan: data.result.properties.average_lifespan,
            skin_colors: data.result.properties.skin_colors,
          };
        

          const store = getStore();
          setStore({
            species: [...store.species, specie],
          });
        } catch (error) {
          console.error("Error en la promesa: ${error}");
          return;
        }
      },

      loadSpecies: async () => {
        const actions = getActions();
        const speciePromises = [];
        setStore({ species: [] });
        for (let i = 1; i <= 10; i++) {
          speciePromises.push(actions.getSpecie("species", i));
        }
        await Promise.all(speciePromises);
      },

     
    },
  };
};

export default getState;

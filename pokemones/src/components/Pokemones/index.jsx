import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerPokemonesAccion } from "../../redux/pokeDucks";
import { siguientePokemonAccion } from "./../../redux/pokeDucks";
import Pokemon from "../pokemon";
const Pokemones = () => {
  const dispatch = useDispatch();
  const pokemones = useSelector((store) => store.pokemones.array);
  console.log(pokemones);
  function getData() {
    dispatch(obtenerPokemonesAccion());
  }
  function sigData() {
    dispatch(siguientePokemonAccion());
  }
  return (
    <div>
      Lista de Pokemones
      <button onClick={getData}>Get Pokemones</button>
      <button onClick={sigData}>Siguiente</button>
      <ul>
        {pokemones.map((item) => (
          <Pokemon key={item.name} title={item.name} url={item.url} />
        ))}
      </ul>
    </div>
  );
};

export default Pokemones;

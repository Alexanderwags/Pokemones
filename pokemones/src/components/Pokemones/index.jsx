import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerPokemonesAccion } from "../../redux/pokeDucks";
const Pokemones = () => {
  const dispatch = useDispatch();
  const pokemones = useSelector((store) => store.pokemones);
  console.log(pokemones);
  function getData() {
    dispatch(obtenerPokemonesAccion());
  }
  return (
    <div>
      Lista de Pokemones
      <button onClick={getData}>Get Pokemones</button>
      <ul>
        {pokemones.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemones;

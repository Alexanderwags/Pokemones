import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerPokemonesAccion } from "../../redux/pokeDucks";
const Pokemones = () => {
  const dispatch = useDispatch(obtenerPokemonesAccion);
  return <div></div>;
};

export default Pokemones;

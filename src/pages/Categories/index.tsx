import { useEffect, useState } from "react";
import ProductsList from "../../components/ProductsList";
// import ResidentPng from "../../assets/images/resident.png";:
// import DiabloPng from "../../assets/images/diablo.png";
// import ZeldaPng from "../../assets/images/zelda.png";
// import StarWarsPng from "../../assets/images/star_wars.png";
import type { Game } from "../Home";

const Categories = () => {
  const [acao, setAcao] = useState<Game[]>([]);
  const [esportes, setEsportes] = useState<Game[]>([]);
  const [simulacao, setSimulacao] = useState<Game[]>([]);
  const [luta, setLuta] = useState<Game[]>([]);
  const [RPG, setRPG] = useState<Game[]>([]);

  useEffect(() => {
    fetch("https://api-ebac.vercel.app/api/eplay/acao")
      .then((resp) => resp.json())
      .then((resp) => setAcao(resp));

    fetch("https://api-ebac.vercel.app/api/eplay/esportes")
      .then((resp) => resp.json())
      .then((resp) => setEsportes(resp));

    fetch("https://api-ebac.vercel.app/api/eplay/simulacao")
      .then((resp) => resp.json())
      .then((resp) => setSimulacao(resp));

    fetch("https://api-ebac.vercel.app/api/eplay/luta")
      .then((resp) => resp.json())
      .then((resp) => setLuta(resp));

    fetch("https://api-ebac.vercel.app/api/eplay/rpg")
      .then((resp) => resp.json())
      .then((resp) => setRPG(resp));
  }, []);

  return (
    <>
      <ProductsList games={acao} title="Ação" background="black" />
      <ProductsList games={esportes} title="Esportes" background="gray" />
      <ProductsList games={simulacao} title="Simulação" background="black" />
      <ProductsList games={luta} title="Luta" background="gray" />
      <ProductsList games={RPG} title="RPG" background="black" />
    </>
  );
};
export default Categories;

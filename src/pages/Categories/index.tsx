import ProductsList from "../../components/ProductsList";
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetSimulationGamesQuery,
  useGetRpgGamesQuery,
  useGetSportsGamesQuery,
} from "../../services/api";

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery();
  const { data: fightGames } = useGetFightGamesQuery();
  const { data: rpgGames } = useGetRpgGamesQuery();
  const { data: sportGames } = useGetSportsGamesQuery();
  const { data: simulationGames } = useGetSimulationGamesQuery();

  if (actionGames && fightGames && rpgGames && sportGames && simulationGames) {
    return (
      <>
        <ProductsList
          games={actionGames}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductsList
          games={sportGames}
          title="Esportes"
          background="gray"
          id="sports"
        />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="black"
          id="simulation"
        />
        <ProductsList
          games={fightGames}
          title="Luta"
          background="gray"
          id="fight"
        />
        <ProductsList
          games={rpgGames}
          title="RPG"
          background="black"
          id="rpg"
        />
      </>
    );
  } else {
    return <h4>Carregando...</h4>;
  }
};
export default Categories;

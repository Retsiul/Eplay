import type { Game } from "../../pages/Home";
import Loader from "../Loader";
import Product from "../Product";

import { formatPrice } from "./fomartPrice";

import * as S from "./styles";

export type Props = {
  title: string;
  $background: "gray" | "black";
  games?: Game[];
  id?: string;
  isLoading: boolean;
};

const ProductsList = ({ title, $background, games, id, isLoading }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = [];
    if (game.release_date) {
      tags.push(game.release_date);
    }
    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`);
    }

    if (game.prices.current) {
      tags.push(formatPrice(game.prices.current));
    }
    return tags;
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <S.Container $background={$background} id={id}>
      <div className="container">
        <h2>{title}</h2>
        <S.List>
          {games &&
            games.map((g) => (
              <li key={g.id}>
                <Product
                  id={g.id}
                  category={g.details.category}
                  description={g.description}
                  image={g.media.thumbnail}
                  infos={getGameTags(g)}
                  system={g.details.system}
                  title={g.name}
                />
              </li>
            ))}
        </S.List>
      </div>
    </S.Container>
  );
};

export default ProductsList;

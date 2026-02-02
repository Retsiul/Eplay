import type { Game } from "../../pages/Home";
import Product from "../Product";
import { Container, List } from "./styles";
import formatPrice from "./fomartPrice";
export type Props = {
  title: string;
  background: "gray" | "black";
  games: Game[];
  id?: string;
};

const ProductsList = ({ title, background, games, id }: Props) => {
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

  return (
    <Container background={background} id={id}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {games.map((g) => (
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
        </List>
      </div>
    </Container>
  );
};

export default ProductsList;

import Game from "../../models/Game";
import Product from "../Product";
import { Container, List } from "./styles";
export type Props = {
  title: string;
  background: "gray" | "black";
  games: Game[];
};

const ProductsList = ({ title, background, games }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {games.map((g) => (
            <Product
              key={g.id}
              category={g.category}
              description={g.description}
              image={g.image}
              infos={g.infos}
              system={g.system}
              title={g.title}
            />
          ))}
        </List>
      </div>
    </Container>
  );
};

export default ProductsList;

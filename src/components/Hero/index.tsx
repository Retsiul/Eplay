import { useDispatch } from "react-redux";
import type { Game } from "../../pages/Home";
import Button from "../Button";
import { formatPrice } from "../ProductsList/fomartPrice";
import Tag from "../Tag";
import * as S from "./styles";
import { add, open } from "../../store/reducers/sliceCart";
type Props = {
  game: Game;
};

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(game));
    dispatch(open());
  };

  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>

        <S.Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span> De {formatPrice(game.prices.old)}</span>
            )}
            {game.prices.current && <>Por {formatPrice(game.prices.current)}</>}
          </p>

          {game.prices.current && (
            <Button
              type="button"
              title="clique aqui para adicionar ao carrinho"
              $variant="primary"
              onClick={addToCart}
            >
              Adicionar ao Carrinho
            </Button>
          )}
        </S.Infos>
      </div>
    </S.Banner>
  );
};

export default Hero;

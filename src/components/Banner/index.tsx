import { Imagem, Preco, Titulo } from "./styles";
import Tag from "../Tag";
import Button from "../Button";
import formatPrice from "../ProductsList/fomartPrice";

import { useGetFeaturedGameQuery } from "../../services/api";

const Banner = () => {
  const { data: banner, isLoading } = useGetFeaturedGameQuery();

  if (!banner) {
    return `...Carregando`;
  }
  return (
    <>
      <Imagem style={{ backgroundImage: `url(${banner.media.cover})` }}>
        <div className="container">
          <div>
            <Tag size="big">Destaque Do Dia</Tag>
            <Titulo>{banner.name}</Titulo>
            <Preco>
              De <span>{formatPrice(banner.prices.old)}</span>
              <br /> por apenas {formatPrice(banner.prices.current)}
            </Preco>
          </div>
          <Button
            type="link"
            to={`product/${banner.id}`}
            title="Clique aqui para aproveitar essa oferta"
          >
            Aproveitar
          </Button>
        </div>
      </Imagem>
    </>
  );
};

export default Banner;

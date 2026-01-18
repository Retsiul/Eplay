import { Imagem, Preco, Titulo } from "./styles";
import Tag from "../Tag";
import Button from "../Button";
import { useEffect, useState } from "react";
import type { Game } from "../../pages/Home";
import formatPrice from "../ProductsList/fomartPrice";

const Banner = () => {
  const [banner, setBanner] = useState<Game>();

  useEffect(() => {
    fetch("https://api-ebac.vercel.app/api/eplay/destaque")
      .then((resp) => resp.json())
      .then((resp) => setBanner(resp));
  }, []);
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

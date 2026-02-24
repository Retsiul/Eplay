import Tag from "../Tag";
import Loader from "../Loader";
import Button from "../Button";

import { formatPrice } from "../ProductsList/fomartPrice";
import { useGetFeaturedGameQuery } from "../../services/api";

import * as S from "./styles";

const Banner = () => {
  const { data: banner } = useGetFeaturedGameQuery();

  if (!banner) {
    return <Loader />;
  }
  return (
    <>
      <S.Image style={{ backgroundImage: `url(${banner.media.cover})` }}>
        <div className="container">
          <div>
            <Tag size="big">Destaque Do Dia</Tag>
            <S.Title>{banner.name}</S.Title>
            <S.Prices>
              De <span>{formatPrice(banner.prices.old)}</span>
              <br /> por apenas {formatPrice(banner.prices.current)}
            </S.Prices>
          </div>
          <Button
            type="link"
            to={`product/${banner.id}`}
            title="Clique aqui para aproveitar essa oferta"
          >
            Aproveitar
          </Button>
        </div>
      </S.Image>
    </>
  );
};

export default Banner;

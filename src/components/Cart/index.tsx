import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { formatPrice, getTotalPrice } from "../ProductsList/fomartPrice";
import type { RootReducer } from "../../store";
import { close, remove } from "../../store/reducers/sliceCart";

import Button from "../Button";
import Tag from "../Tag";

import * as S from "./styles";

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const goToCheckout = () => {
    navigate("/checkout");
    closeCart();
  };

  return (
    <S.CartContainer className={isOpen ? "is-open" : ""}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formatPrice(item.prices.current)}</span>
              </div>
              <button
                onClick={() => {
                  removeItem(item.id);
                }}
                type="button"
              ></button>
            </S.CartItem>
          ))}
        </ul>
        <S.Quantity>{items.length}</S.Quantity>
        <S.Prices>
          {formatPrice(getTotalPrice(items))} <span>Em até 6X sem juros</span>
        </S.Prices>
        <Button
          title="Clique aqui para continuar com a compra"
          type="button"
          onClick={goToCheckout}
        >
          Continuar com a compra
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  );
};

export default Cart;

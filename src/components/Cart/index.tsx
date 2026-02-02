import Button from "../Button";
import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quantity,
  Sidebar,
} from "./styles";
import Tag from "../Tag";
import { useDispatch, useSelector } from "react-redux";
import type { RootReducer } from "../../store";
import { close, remove } from "../../store/reducers/sliceCart";
import formatPrice from "../ProductsList/fomartPrice";

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.prices.current!);
    }, 0);
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <CartContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
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
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length}</Quantity>
        <Prices>
          {formatPrice(getTotalPrice())} <span>Em até 6X sem juros</span>
        </Prices>
        <Button title="Clique aqui para continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;

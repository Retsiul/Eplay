import { Link } from "react-router-dom";
import { CartButton, HeaderBar, Links, LinksItems } from "./styles";
import logo from "../../assets/images/logo.svg";
import carrinho from "../../assets/images/carrinho.svg";
import { open } from "../../store/reducers/sliceCart";
import { useDispatch, useSelector } from "react-redux";
import type { RootReducer } from "../../store";

const Header = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);

  const openCart = () => {
    dispatch(open());
  };

  return (
    <>
      <HeaderBar>
        <div>
          <Link to="/">
            <img src={logo} alt="EPLAY logo" />
          </Link>
          <nav>
            <Links>
              <LinksItems>
                <Link to="/categorias">Categorias</Link>
              </LinksItems>
              <LinksItems>
                <Link to=" ">Novidades</Link>
              </LinksItems>
              <LinksItems>
                <a href="#">Promoções</a>
              </LinksItems>
            </Links>
          </nav>
        </div>
        <CartButton onClick={openCart} href="#">
          {items.length} - produto(s)
          <img src={carrinho} alt="icone carrinho" />
        </CartButton>
      </HeaderBar>
    </>
  );
};

export default Header;

import { Link } from "react-router-dom";
import { HeaderBar, LinkCart, Links, LinksItems } from "./styles";
import logo from "../../assets/images/logo.svg";
import carrinho from "../../assets/images/carrinho.svg";

const Header = () => {
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
                <Link to="/product">Novidades</Link>
              </LinksItems>
              <LinksItems>
                <a href="#">Promoções</a>
              </LinksItems>
            </Links>
          </nav>
        </div>
        <LinkCart href="#">
          0 - produto(s)
          <img src={carrinho} alt="icone carrinho" />
        </LinkCart>
      </HeaderBar>
    </>
  );
};

export default Header;

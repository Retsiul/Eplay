import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import * as S from "./styles";
import logo from "../../assets/images/logo.svg";
import cartIcon from "../../assets/images/carrinho.svg";
import { open } from "../../store/reducers/sliceCart";
import { useDispatch, useSelector } from "react-redux";
import type { RootReducer } from "../../store";
import { useState } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);

  const openCart = () => {
    dispatch(open());
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <S.HeaderBar>
        <S.HeaderRow>
          <div>
            <S.Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span />
              <span />
              <span />
            </S.Hamburger>

            <Link to="/">
              <img src={logo} alt="EPLAY logo" />
            </Link>

            <nav>
              <S.Links>
                <S.LinksItems>
                  <Link
                    title="Clique aqui para acessar a página de categorias"
                    to="/categories"
                  >
                    Categorias
                  </Link>
                </S.LinksItems>
                <S.LinksItems>
                  <HashLink
                    title="Clique aqui para acessar a seção de em breve"
                    to="/#coming-soon"
                  >
                    Em breve
                  </HashLink>
                </S.LinksItems>
                <S.LinksItems>
                  <HashLink
                    title="Clique aqui para acessar a seção de promoções"
                    to="/#on-sale"
                  >
                    Promoções
                  </HashLink>
                </S.LinksItems>
              </S.Links>
            </nav>
          </div>

          <S.CartButton onClick={openCart} href="#">
            {items.length} <span>- produto(s)</span>
            <img src={cartIcon} alt="icone carrinho" />
          </S.CartButton>
        </S.HeaderRow>

        <S.NavMobile className={isMenuOpen ? "is-open" : ""}>
          <S.Links>
            <S.LinksItems>
              <Link
                title="Clique aqui para acessar a página de categorias"
                to="/categories"
                onClick={() => setIsMenuOpen(false)}
              >
                Categorias
              </Link>
            </S.LinksItems>
            <S.LinksItems>
              <HashLink
                title="Clique aqui para acessar a seção de em breve"
                to="/#coming-soon"
                onClick={() => setIsMenuOpen(false)}
              >
                Em breve
              </HashLink>
            </S.LinksItems>
            <S.LinksItems>
              <HashLink
                title="Clique aqui para acessar a seção de promoções"
                to="/#on-sale"
                onClick={() => setIsMenuOpen(false)}
              >
                Promoções
              </HashLink>
            </S.LinksItems>
          </S.Links>
        </S.NavMobile>
      </S.HeaderBar>
    </>
  );
};

export default Header;

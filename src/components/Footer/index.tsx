import * as S from "./styles";

const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <S.Container>
      <div className="container">
        <S.FooterSection>
          <S.SectionTitle>Categorias</S.SectionTitle>
          <S.ContainerLinks>
            <li>
              <S.Links
                title="Clique aqui para acessar jogos de ação"
                to="/categories#action"
              >
                Ação
              </S.Links>
              <S.Links
                title="Clique aqui para acessar jogos de esportes"
                to="/categories#sports"
              >
                Esportes
              </S.Links>
              <S.Links
                title="Clique aqui para acessar jogos de simulação"
                to="/categories#simulation"
              >
                Simulação
              </S.Links>
              <S.Links
                title="Clique aqui para acessar jogos de luta"
                to="/categories#fight"
              >
                Luta
              </S.Links>
              <S.Links
                title="Clique aqui para acessar jogos de RPG"
                to="/categories#rpg"
              >
                RPG
              </S.Links>
            </li>
          </S.ContainerLinks>
        </S.FooterSection>

        <S.FooterSection>
          <S.SectionTitle>Acesso rápido</S.SectionTitle>
          <S.ContainerLinks>
            <li>
              <S.Links
                title="Clique aqui para acessar a seção de promoções"
                to="/#on-sale"
              >
                {" "}
                Promoções
              </S.Links>
              <S.Links
                title="Clique aqui para acessar a seção de em breve"
                to="/#coming-soon"
              >
                {" "}
                Em breve
              </S.Links>
            </li>
          </S.ContainerLinks>
        </S.FooterSection>
        <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
      </div>
    </S.Container>
  );
};

export default Footer;

import {
  Container,
  ContainerLinks,
  FooterSection,
  Links,
  SectionTitle,
} from "./styles";

const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <Container>
      <div className="container">
        <FooterSection>
          <SectionTitle>Categorias</SectionTitle>
          <ContainerLinks>
            <li>
              <Links to="/categories#action">Ação</Links>
              <Links to="/categories#sports">Esportes</Links>
              <Links to="/categories#simulation">Simulação</Links>
              <Links to="/categories#fight">Luta</Links>
              <Links to="/categories#rpg">RPG</Links>
            </li>
          </ContainerLinks>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Acesso rápido</SectionTitle>
          <ContainerLinks>
            <li>
              <Links to="/#on-sale"> Promoções</Links>
              <Links to="/#coming-soon"> Em breve</Links>
            </li>
          </ContainerLinks>
        </FooterSection>
        <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
      </div>
    </Container>
  );
};

export default Footer;

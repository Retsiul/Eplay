import {
  Container,
  ContainerLinks,
  FooterSection,
  Links,
  SectionTitle
} from './styles'

const currentYear = new Date().getFullYear()
const Footer = () => {
  return (
    <Container>
      <div className="container">
        <FooterSection>
          <SectionTitle>Categorias</SectionTitle>
          <ContainerLinks>
            <li>
              <Links>RPG</Links>
              <Links>Ação</Links>
              <Links>Aventura</Links>
              <Links>Esportes</Links>
              <Links>Simulação</Links>
              <Links>Estratégia</Links>
              <Links>FPS</Links>
            </li>
          </ContainerLinks>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Acesso rápido</SectionTitle>
          <ContainerLinks>
            <li>
              <Links>Novidades</Links>
              <Links> Promoções</Links>
              <Links> Em breve</Links>
            </li>
          </ContainerLinks>
        </FooterSection>
        <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
      </div>
    </Container>
  )
}

export default Footer

import bannerHero from '../../assets/images/fundo_hogwarts.png'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './styles'
const Hero = () => {
  return (
    <Banner style={{ backgroundImage: `url(${bannerHero})` }}>
      <div className="container">
        <div>
          <Tag>RPG</Tag>
          <Tag>PS5</Tag>
        </div>

        <Infos>
          <h2>Hogwarts legacy</h2>
          <p>
            <span> De R$ 250,00</span>
            Por R$ 199,00
          </p>

          <Button
            type="button"
            title="clique aqui para adicionar ao carrinho"
            variant="primary"
          >
            Adicionar ao Carrinho
          </Button>
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import ResidentPng from '../../assets/images/resident.png'
import DiabloPng from '../../assets/images/diablo.png'
import ZeldaPng from '../../assets/images/zelda.png'
import StarWarsPng from '../../assets/images/star_wars.png'
import Game from '../../models/Game'

const promocoes: Game[] = [
  {
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: `${ResidentPng}`,
    infos: ['-10%', 'R$ 250,00'],
    system: 'Windows',
    title: 'Resident Evil 4',
    id: 1
  },
  {
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: `${ResidentPng}`,
    infos: ['-5%', 'R$ 290,00'],
    system: 'PS5',
    title: 'Resident Evil 4',
    id: 2
  },
  {
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: `${ResidentPng}`,
    infos: ['-10%', 'R$ 250,00'],
    system: 'Windows',
    title: 'Resident Evil 4',
    id: 3
  },
  {
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: `${ResidentPng}`,
    infos: ['-10%', 'R$ 250,00'],
    system: 'Windows',
    title: 'Resident Evil 4',
    id: 4
  }
]

const emBreve: Game[] = [
  {
    category: 'Rpg',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    image: `${DiabloPng}`,
    infos: ['17/05'],
    system: 'Windows',
    title: 'Diablo 4',
    id: 5
  },
  {
    category: 'Rpg',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    image: `${ZeldaPng}`,
    infos: ['17/05'],
    system: 'Windows',
    title: 'Zelda',
    id: 6
  },
  {
    category: 'Rpg',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    image: `${StarWarsPng}`,
    infos: ['17/05'],
    system: 'Windows',
    title: 'Star Wars',
    id: 7
  },
  {
    category: 'Rpg',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    image: `${ResidentPng}`,
    infos: ['17/05'],
    system: 'Nitendo Switch',
    title: 'Residente evil 4',
    id: 8
  }
]

const Home = () => {
  return (
    <>
      <Banner />
      <ProductsList games={promocoes} title="Promoções" background="gray" />
      <ProductsList games={emBreve} title="Em Breve" background="black" />
    </>
  )
}
export default Home

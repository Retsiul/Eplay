import Section from '../Section'
import spider from '../../assets/images/banner-homem-aranha.png'
import hogwarts from '../../assets/images/fundo_hogwarts.png'
import fechar from '../../assets/images/fechar.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import { Action, Item, Items, Modal, ModalContent } from './styles'
import { useState } from 'react'

interface GalleryItem {
  type: 'image' | 'video'
  url: string
}
const mock: GalleryItem[] = [
  {
    type: 'image',
    url: spider
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/uHGShqcAHlQ'
  }
]

type Props = {
  defaultCover: string
  name: string
}

interface ModalState extends GalleryItem {
  isVisibel: boolean
}

const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    type: 'image',
    url: '',
    isVisibel: false
  })

  const closeModal = () => {
    setModal({
      type: 'image',
      url: '',
      isVisibel: false
    })
  }

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      {' '}
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <>
              <Item
                key={media.url}
                onClick={() => {
                  setModal({
                    type: media.type,
                    url: media.url,
                    isVisibel: true
                  })
                }}
              >
                <img
                  src={getMediaCover(media)}
                  alt={`media ${index + 1} do Jogo ${name}`}
                />
                <Action>
                  <img
                    src={getMediaIcon(media)}
                    alt="clique para maximizar a midia"
                  />

                  {/* <img src={play} alt="icone do play" /> */}
                </Action>
              </Item>
            </>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisibel ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={fechar}
              alt="icone de fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe src={modal.url} />
          )}
        </ModalContent>

        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Gallery

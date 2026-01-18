import Section from "../Section";
import fechar from "../../assets/images/fechar.png";
import play from "../../assets/images/play.png";
import zoom from "../../assets/images/zoom.png";
import { Action, Item, Items, Modal, ModalContent } from "./styles";
import { useState } from "react";

interface GalleryItem {
  type: "image" | "video";
  url: string;
}

type Props = {
  defaultCover: string;
  name: string;
  items: GalleryItem[];
};

interface ModalState extends GalleryItem {
  isVisible: boolean;
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    type: "image",
    url: "",
    isVisible: false,
  });

  const closeModal = () => {
    setModal({
      type: "image",
      url: "",
      isVisible: false,
    });
  };

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === "image") return item.url;
    return defaultCover;
  };

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === "image") return zoom;
    return play;
  };

  return (
    <>
      {" "}
      <Section title="Galeria" background="black">
        <Items>
          {items.map((media, index) => (
            <>
              <Item
                key={media.url}
                onClick={() => {
                  setModal({
                    type: media.type,
                    url: media.url,
                    isVisible: true,
                  });
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
      <Modal className={modal.isVisible ? "visible" : ""}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={fechar}
              alt="icone de fechar"
              onClick={() => {
                closeModal();
              }}
            />
          </header>
          {modal.type === "image" ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe src={modal.url} />
          )}
        </ModalContent>

        <div
          onClick={() => {
            closeModal();
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  );
};

export default Gallery;

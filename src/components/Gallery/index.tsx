import { useState } from "react";

import Section from "../Section";

import closeIcon from "../../assets/images/fechar.png";
import play from "../../assets/images/play.png";
import zoom from "../../assets/images/zoom.png";

import * as S from "./styles";

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
      <Section title="Galeria" $background="black">
        <S.Items>
          {items.map((media, index) => (
            <>
              <S.Item
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
                <S.Action>
                  <img
                    src={getMediaIcon(media)}
                    alt="clique para maximizar a midia"
                  />
                </S.Action>
              </S.Item>
            </>
          ))}
        </S.Items>
      </Section>
      <S.Modal className={modal.isVisible ? "visible" : ""}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={closeIcon} alt="icone de fechar" onClick={closeModal} />
          </header>
          {modal.type === "image" ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe src={modal.url} />
          )}
        </S.ModalContent>

        <div
          onClick={() => {
            closeModal();
          }}
          className="overlay"
        ></div>
      </S.Modal>
    </>
  );
};

export default Gallery;

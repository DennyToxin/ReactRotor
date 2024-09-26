import { useState } from "react";
import { galleryList } from "../constant";
import { cancel } from "../utils";
import { ModalPhoto } from "./ModalPhoto";

type ModalGalleryProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const ModalGallery = ({ isOpen, onClose }: ModalGalleryProps) => {
  if (!isOpen) return null;

  const [openPhoto, setOpenPhoto] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const handleClosePhoto = () => {
    setOpenPhoto(false);
    document.body.style.overflow = "";
  };

  const handleOpenPhoto = () => {
    console.log("handleOpenPhoto");
    setOpenPhoto(true);
    document.body.style.overflow = "hidden";
  };

  const handleNextPhoto = () => {
    if (currentPhoto < galleryList.length - 1) {
      setCurrentPhoto(currentPhoto + 1);
    } else {
      setCurrentPhoto(0);
    }
  };

  const handlePrevPhoto = () => {
    if (currentPhoto > 0) {
      setCurrentPhoto(currentPhoto - 1);
    } else {
      setCurrentPhoto(galleryList.length - 1);
    }
  };

  return (
    <main className="modal__view">
      <ModalPhoto
        isOpenPhoto={openPhoto}
        onClosePhoto={handleClosePhoto}
        nextPhoto={handleNextPhoto}
        prevPhoto={handlePrevPhoto}
      >
        <img src={galleryList[currentPhoto].src} className="modal__photo" />
      </ModalPhoto>
      <div
        className="relative h-full w-full flex
        justify-center items-center"
      >
        <div className="modal__tablet">
          <img
            src={cancel}
            alt="Close"
            className="modal-button close z-20"
            onClick={onClose}
          />
          <div className="modal__grid">
            {galleryList.map(({ id, src }) => (
              <div
                onClick={() => {
                  setCurrentPhoto(id);
                  handleOpenPhoto();
                }}
              >
                <img src={src} key={id} className="modal__image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

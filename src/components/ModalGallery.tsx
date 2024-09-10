import { galleryList } from "../constant";
import { cancel } from "../utils";

type ModalGalleryProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const ModalGallery = ({ isOpen, onClose }: ModalGalleryProps) => {
  if (!isOpen) return null;
  return (
    <main className="modal__view">
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
              <img src={src} key={id} className="modal__image" />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

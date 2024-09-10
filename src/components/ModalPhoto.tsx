import { back, cancel, forward } from "../utils";

type ModalPhotoProps = {
  isOpenPhoto: boolean;
  onClosePhoto: () => void;
  nextPhoto: () => void;
  prevPhoto: () => void;
  children: React.ReactNode;
};

export const ModalPhoto = ({
  isOpenPhoto,
  onClosePhoto,
  nextPhoto,
  prevPhoto,
  children,
}: ModalPhotoProps) => {
  if (!isOpenPhoto) return null;
  return (
    <main className="modal__view">
      <div
        className="relative h-full w-full flex
        justify-center items-center"
      >
        <div className="modal__tablet">
          <img src={cancel} alt="Close" className="modal-button close" onClick={onClosePhoto} />
          <img src={back} alt="Prev" className="modal-button prev" onClick={prevPhoto} />
          <img src={forward} alt="Next" className="modal-button next" onClick={nextPhoto} />
          {children}
        </div>
      </div>
    </main>
  );
};

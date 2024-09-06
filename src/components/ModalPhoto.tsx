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
    <div className="modal-view">
      <div
        className="relative h-full w-full flex
        justify-center items-center"
      >
        <div className="relative flex justify-center items-center bg-bgSecondaryLt rounded-xl w-5/6 h-5/6">
          <button className="modal-button close" onClick={onClosePhoto}>
            CLOSE
          </button>
          <button className="modal-button prev" onClick={prevPhoto}>
            PREV
          </button>
          <button className="modal-button next" onClick={nextPhoto}>
            NEXT
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

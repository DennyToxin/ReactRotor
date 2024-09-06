type ModalGalleryProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const ModalGallery = ({ isOpen, onClose }: ModalGalleryProps) => {
  if (!isOpen) return null;
  return (
    <div className="modal-view">
      <div
        className="relative h-full w-full flex
        justify-center items-center"
      >
        <div className="relative flex justify-center items-center bg-bgSecondaryLt rounded-xl w-5/6 h-5/6">
          <button className="modal-button close" onClick={onClose}>
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, EffectCoverflow } from "swiper/modules";

import "../assets/swiper/swiper.css";
import "../assets/swiper/navigation.css";
import { galleryList } from "../constant";
import { useState } from "react";
import { ModalGallery } from "./ModalGallery";
import { ModalPhoto } from "./ModalPhoto";

export const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [openPhoto, setOpenPhoto] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const handleClose = () => {
    setOpen(false);
    document.body.style.overflow = "";
  };

  const handleOpen = () => {
    setOpen(true);
    document.body.style.overflow = "hidden";
  };

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
    <main
      id="gallery"
      className="bg-bgPrimaryLt page-view flex flex-col
      items-center justify-center"
    >
      <ModalGallery isOpen={open} onClose={handleClose} />
      <ModalPhoto
        isOpenPhoto={openPhoto}
        onClosePhoto={handleClosePhoto}
        nextPhoto={handleNextPhoto}
        prevPhoto={handlePrevPhoto}
      >
        <img src={galleryList[currentPhoto].src} className="modal__photo" />
      </ModalPhoto>
      <div
        className="flex relative justify-center
        items-center h-4/5 w-5/6"
      >
        <button className="gallery__button button" onClick={handleOpen}>
          Все фото
        </button>
        <Swiper
          className="h-2/3"
          loop={true}
          navigation={true}
          mousewheel={true}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: -12,
            stretch: 0,
            depth: 60,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[Navigation, Mousewheel, EffectCoverflow]}
          spaceBetween={64}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          {galleryList.map(({ id, src }) => (
            <SwiperSlide key={id}>
              <div
                className="gallery__placeholder"
                onClick={() => {
                  setCurrentPhoto(id);
                  handleOpenPhoto();
                }}
              >
                <img className="gallery__image" src={src} alt="gallery" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

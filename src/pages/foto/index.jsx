import { Dialog, Transition } from "@headlessui/react";
import { ArrowLeft3, ArrowRight3 } from "iconsax-react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Foto() {
  const data = [
    {
      id: 1,
      title: "Suasana Pasar Asemka",
      thumbnail: "https://jonggolberkah.com/asset/img_galeri/6asemka9.jpg",
      jumlah: 12,
    },
    {
      id: 2,
      title: "Suasana Pasar Asemka",
      thumbnail: "https://jonggolberkah.com/asset/img_galeri/6asemka9.jpg",
      jumlah: 12,
    },
    {
      id: 3,
      title: "Suasana Pasar Asemka",
      thumbnail: "https://jonggolberkah.com/asset/img_galeri/6asemka9.jpg",
      jumlah: 12,
    },
    {
      id: 4,
      title: "Suasana Pasar Asemka",
      thumbnail: "https://jonggolberkah.com/asset/img_galeri/6asemka9.jpg",
      jumlah: 12,
    },
    {
      id: 5,
      title: "Suasana Pasar Asemka",
      thumbnail: "https://jonggolberkah.com/asset/img_galeri/6asemka9.jpg",
      jumlah: 12,
    },
    {
      id: 6,
      title: "Suasana Pasar Asemka",
      thumbnail: "https://jonggolberkah.com/asset/img_galeri/6asemka9.jpg",
      jumlah: 12,
    },
    {
      id: 7,
      title: "Suasana Pasar Asemka",
      thumbnail: "https://jonggolberkah.com/asset/img_galeri/6asemka9.jpg",
      jumlah: 12,
    },
  ];
  return (
    <>
      <div className="pt-[100px]  w-full">
        <div className="lg:px-16 px-10">
          <div className="mt-20 flex justify-center">
            <div className=" rounded-full px-10 py-3 bg-[#7D8F69] cursor-default">
              <h1 className="font-bold text-4xl text-white">Foto</h1>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 mb-20 gap-4 mt-20">
            {data.map((i, key) => (
              <CardFoto key={key} data={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function CardFoto({ data }) {
  const [open, setOpen] = React.useState(false);
  const cancelButtonRef = React.useRef(null);

  // hover
  const [isHovering, setIsHovering] = React.useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <>
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={() => {
          setOpen(true);
        }}
        className="my-auto items-center"
      >
        <div
          style={{
            backgroundImage: `url(${data.thumbnail})`,
          }}
          className=" rounded-lg mx-auto max-h-96 min-w-full bg-no-repeat bg-cover relative"
        >
          <div
            className={` rounded-lg   bg-black xl:p-36 md:p-32 sm:p-36 p-28 cursor-pointer  ${
              isHovering
                ? "hover:bg-gradient-to-t hover:from-black bg-black bg-opacity-25 transition-all ease-in-out "
                : "bg-black bg-opacity-25 transition-all ease-in-out "
            }`}
          >
            <div className="absolute justify-start flex flex-col bottom-5 left-5 w-4/5">
              <p className="uppercase font-bold text-white xl:text-base lg:text-base md:text-sm text-sm truncate ">
                {data.title}
              </p>
              <p
                className={`${
                  isHovering ? "flex transition-all" : "hidden transition-all"
                }  text-white text-sm `}
              >
                {data.jumlah} Foto
              </p>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} cancelButtonRef={cancelButtonRef} />
    </>
  );
}

function Modal({ open, setOpen, cancelButtonRef }) {
  const swiperRef = React.useRef();

  const data = [
    {
      id: 1,
      img: "https://jonggolberkah.com/asset/img_galeri/84asemka2.jpg",
      desc: "Seorang pedagang sedang membungkus souvenir penikahan yang akan dijual ataupun pesanan dari pelanggangnnya.",
      place: "Desa Singasari",
      createAt: "24 Desember 2022",
    },
    {
      id: 2,
      img: "https://jonggolberkah.com/asset/img_galeri/84asemka2.jpg",
      desc: "Seorang pedagang sedang membungkus souvenir penikahan yang akan dijual ataupun pesanan dari pelanggangnnya.",
      place: "Desa Singasari",
      createAt: "24 Desember 2022",
    },
    {
      id: 3,
      img: "https://jonggolberkah.com/asset/img_galeri/84asemka2.jpg",
      desc: "Seorang pedagang sedang membungkus souvenir penikahan yang akan dijual ataupun pesanan dari pelanggangnnya.",
      place: "Desa Singasari",
      createAt: "24 Desember 2022",
    },
    {
      id: 4,
      img: "https://jonggolberkah.com/asset/img_galeri/84asemka2.jpg",
      desc: "Seorang pedagang sedang membungkus souvenir penikahan yang akan dijual ataupun pesanan dari pelanggangnnya.",
      place: "Desa Singasari",
      createAt: "24 Desember 2022",
    },
  ];
  return (
    <>
      <Transition.Root show={open} as={React.Fragment}>
        <Dialog
          as="div"
          className="relative z-40"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end md:pt-32 md:pb-28 md:my-0 py-32 justify-center min-h-full p-4 text-center ">
              <div className="cursor-pointer flex absolute xl:right-[19.5rem] lg:right-10 right-5 2xl:top-16 top-10 text-white">
                <svg
                  onClick={() => {
                    setOpen(false);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className=" relative flex lg:gap-x-20 lg:space-y-0 space-y-20  text-center overflow-hidden transform transition-all  justify-center 2xl:w-3/5">
                  <div className={`lg:flex hidden justify-center items-center`}>
                    <ArrowLeft3
                      onClick={() => swiperRef.current.slidePrev()}
                      size="42"
                      color="#FFFFFF"
                      className="cursor-pointer"
                    />
                  </div>
                  <Swiper
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    spaceBetween={30}
                    onSwiper={(swiper) => {
                      swiperRef.current = swiper;
                    }}
                    className="modalSwiper"
                  >
                    {data.map((i, key) => (
                      <SwiperSlide className="modalGalery" key={key}>
                        <CardModal
                          img={i.img}
                          summary={i.desc}
                          tgl={i.createAt}
                          place={i.place}
                        ></CardModal>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className={`lg:flex hidden justify-center items-center`}>
                    <ArrowRight3
                      onClick={() => swiperRef.current.slideNext()}
                      size="42"
                      color="#FFFFFF"
                      className="cursor-pointer"
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

function CardModal({ img, tgl, place, summary }) {
  return (
    <>
      <div className=" items-center flex flex-col justify-center">
        <img
          className=" rounded-lg  2xl:min-w-[680px] 2xl:min-h-[443px] 2xl:max-h-[443px] md:min-w-[490px] md:min-h-[318px] md:max-h-[318px] min-w-[353px] min-h-[215px] max-h-[215px]"
          src={img}
          alt="gambar album"
        />
        <div className=" items-center gap-y-5 flex flex-col mt-10 w-11/12">
          <h1 className="font-semibold text-white lg:text-lg">
            {tgl} | {place}
          </h1>

          <p className="text-white lg:w-3/4 md:w-full sm:w-1/2 w-4/5  2xl:text-sm text-xs font-extralight">
            {summary}
          </p>
        </div>
      </div>
    </>
  );
}

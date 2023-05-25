import { ArrowRight3, ArrowLeft3 } from "iconsax-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper";
import { Dialog, Transition } from "@headlessui/react";
import { getApi } from "../../../API/restApi";
import parse from "html-react-parser";
import NoImage from "../../../assets/images/thumbnail.jpg";
import AnimatedButton from "../../../component/animatedButton";

export default function Galeri() {
  const navigate = useNavigate();
  // const swiperRef = React.useRef(null);

  const load = [1, 2, 3, 5, 6, 7];
  const [dataGaleri, setDataGaleri] = React.useState([]);
  const [loadGaleri, setLoadGaleri] = React.useState(true);
  const getGaleri = async () => {
    try {
      getApi("album").then((res) => {
        setDataGaleri(res.data.data);
        setLoadGaleri(false);
      });
    } catch (error) {
      console.log(error);
      setLoadGaleri(false);
    }
  };

  React.useEffect(() => {
    getGaleri();
  }, []);
  const [page, setPage] = React.useState(0);
  const handleSlideChange = (swiper) => {
    setPage(swiper.realIndex);
    console.log(swiper.realIndex);
  };

  return (
    <>
      <section className="mt-28 mb-10 flex flex-col items-center justify-center bg-[#3C903C] lg:pl-10 lg:pt-20 lg:pb-10 2xl:pl-16">
        <div className="mt-20  mb-20 flex w-full flex-col items-center justify-center gap-x-10 lg:flex-row lg:justify-between">
          <div className="kiri mb-10 flex flex-col items-center gap-y-5 px-8 lg:mb-0 lg:w-1/3 lg:items-start lg:gap-y-0 lg:px-0">
            <h1 className="text-6xl font-semibold text-white">Foto</h1>
            <p className="my-3 text-white lg:text-sm 2xl:w-3/4 2xl:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, in
              unde eos alias tenetur totam debitis cum sint ad minima, modi nam.
              Earum tempora nemo a magnam iusto, sequi quo!
            </p>

            {/* <button
              onClick={() => navigate('/foto')}
              onMouseEnter={handleMouseOver}
              onMouseLeave={handleMouseOut}
              className={`lg:flex hidden px-5 py-2 2xl:py-3 rounded-full lg:text-sm 2xl:text-base font-semibold mt-10 ${
                hoverButton
                  ? 'bg-[#007100] text-white transition-all border-2 border-[#007100]'
                  : 'border-white border-2  text-white transition-all'
              }`}
            >
              Selengkapnya
            </button> */}
            <div className="hidden lg:block">
              <AnimatedButton
                onClick={() => navigate("/foto")}
                label={"Selengkapnya"}
                styleButton={
                  "px-5 mt-5 py-1 rounded-full text-[15px] text-white border-2 border-white hover:text-black hover:border-kuningPrimary before:bg-bgKuningPrimary hover:text-black"
                }
              />
            </div>
          </div>
          <div className="kanan w-full lg:w-2/3">
            {/* <Swiper
              spaceBetween={20}
              //   controller={{ control: firstSwiper }}
              scrollbar={{
                el: '.swiper-scrollbar',
                draggable: true,
                hide: false,
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Scrollbar]}
              className="myGaleri"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >
              {!loadGaleri ? (
                dataGaleri.map((i, key) => (
                  <SwiperSlide className="swiper-image" key={key}>
                    <CardFoto i={i} />
                  </SwiperSlide>
                ))
              ) : (
                <></>
              )}
            </Swiper> */}
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 3,
                slideShadows: false,
              }}
              onSlideChange={handleSlideChange}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={{
                el: ".swiper-scrollbar",
                draggable: true,
                hide: false,
              }}
              modules={[EffectCoverflow, Autoplay]}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 2,
                },
                1560: {
                  slidesPerView: 3,
                },
              }}
            >
              {!loadGaleri ? (
                dataGaleri.map((i, key) => (
                  <SwiperSlide className="swiper-image" key={key}>
                    <CardFoto i={i} page={page} index={key} />
                  </SwiperSlide>
                ))
              ) : (
                <></>
              )}
            </Swiper>
            <div className="swiper-scrollbar my-scrollbar mt-20 !hidden lg:flex"></div>
            <div className="flex justify-center lg:hidden">
              <AnimatedButton
                onClick={() => navigate("/foto")}
                label={"Selengkapnya"}
                styleButton={
                  "px-5 mt-5 py-1 rounded-full text-[15px] text-white border-2 border-white hover:text-black hover:border-kuningPrimary before:bg-bgKuningPrimary hover:text-black"
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CardFoto({ i, page, index }) {
  const [open, setOpen] = React.useState(false);
  const cancelButtonRef = React.useRef(null);

  return (
    <>
      <div
        onClick={() => {
          if (i.cover != null || page == index - 1) {
            setOpen(true);
          }
        }}
        className=" m-7 h-96 w-full cursor-pointer rounded-2xl bg-cover bg-center shadow-lg lg:h-96   2xl:min-h-[30rem]"
        style={{
          backgroundImage: `url(${
            i.cover != null ? i.cover.thumbnail : NoImage
          })`,
        }}
      >
        <div className="flex h-full w-full flex-col justify-end rounded-2xl  bg-black bg-opacity-25 px-5 py-5 transition duration-500 ease-in-out group-hover:bg-opacity-70">
          {page == index - 1 && (
            <h1 className="font-semibold text-white">{i.nama_album}</h1>
          )}
        </div>
      </div>
      <Modal
        open={open}
        setOpen={setOpen}
        cancelButtonRef={cancelButtonRef}
        foto={i}
      />
    </>
  );
}

function Modal({ open, setOpen, cancelButtonRef, foto }) {
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

  const [listFoto, setListFoto] = React.useState([]);
  const [loadFoto, setLoadFoto] = React.useState(true);
  const getList = async () => {
    try {
      getApi(`galeri/${foto.cover.slug}`).then((res) => {
        setListFoto(res.data.data);
        setLoadFoto(false);
      });
    } catch (error) {
      console.log(error);
      setLoadFoto(false);
    }
  };

  React.useEffect(() => {
    getList();
  }, []);

  // console.log(foto);
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

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 py-32 text-center md:my-0 md:pt-32 md:pb-28 ">
              <div className="absolute right-5 top-10 flex cursor-pointer text-white lg:right-10 xl:right-[19.5rem] 2xl:top-16">
                <svg
                  onClick={() => {
                    setOpen(false);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 "
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
                <Dialog.Panel className=" relative flex transform justify-center space-y-20  overflow-hidden text-center transition-all lg:gap-x-20  lg:space-y-0 ">
                  {/* <div className={`lg:flex hidden justify-center items-center`}>
                    <ArrowLeft3
                      onClick={() => swiperRef.current.slidePrev()}
                      size="42"
                      color="#FFFFFF"
                      className="cursor-pointer"
                    />
                  </div> */}
                  {!loadFoto && listFoto ? (
                    <CardModal
                      img={listFoto.thumbnail}
                      summary={listFoto.deskripsi}
                      tgl={listFoto.createdAt}
                      nama={listFoto.nama}
                    ></CardModal>
                  ) : (
                    <></>
                  )}
                  {/* <Swiper
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    spaceBetween={30}
                    onSwiper={(swiper) => {
                      swiperRef.current = swiper;
                    }}
                    className="modalSwiper"
                  >
                    {!loadFoto ? (
                      listFoto.map((i, key) => (
                        <SwiperSlide className="modalGalery" key={key}>
                          <CardModal
                            img={i.thumbnail}
                            summary={i.desc}
                            tgl={i.createdAt}
                            place={i.nama}
                          ></CardModal>
                        </SwiperSlide>
                      ))
                    ) : (
                      <></>
                    )}
                  </Swiper> */}
                  {/* <div className={`lg:flex hidden justify-center items-center`}>
                    <ArrowRight3
                      onClick={() => swiperRef.current.slideNext()}
                      size="42"
                      color="#FFFFFF"
                      className="cursor-pointer"
                    />
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

function CardModal({ img, tgl, nama, summary }) {
  const date = new Date(tgl);
  var months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "May",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  var monthName = months[date.getMonth()];
  return (
    <>
      <div className=" flex flex-col items-center justify-center">
        <img
          className=" max-h-[215px]  min-h-[215px] min-w-[353px] rounded-lg md:max-h-[318px] md:min-h-[318px] md:min-w-[490px] 2xl:max-h-[443px] 2xl:min-h-[443px] 2xl:min-w-[680px]"
          src={img}
          alt="gambar album"
        />
        <div className=" mt-10 flex w-11/12 flex-col items-center gap-y-5">
          <h1 className="font-semibold text-white lg:text-lg">
            {date.getDate()} {monthName} {date.getFullYear()} | {nama}
          </h1>

          <p className="w-4/5 text-xs font-extralight text-white sm:w-1/2  md:w-full lg:w-3/4 2xl:text-sm">
            <Isi text={summary} />
          </p>
        </div>
      </div>
    </>
  );
}

function Isi({ text }) {
  const reactElement = parse(`${text}`);
  return reactElement;
}

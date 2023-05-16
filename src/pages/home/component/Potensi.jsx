import React, { useEffect, useState } from "react";
import { getApi } from "../../../API/restApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import NoImage from "../../../assets/images/thumbnail.jpg";
import Lottie from "lottie-react";
import NotFound from "../../../assets/json/93134-not-found.json";
import { EffectCoverflow } from "swiper";
import { NavLink, useNavigate } from "react-router-dom";
import AnimatedButton from "../../../component/animatedButton";
import ImageZoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { FiExternalLink } from "react-icons/fi";

export default function Potensi() {
  const navigate = useNavigate();
  const swiperRef = React.useRef(null);

  const [dataPotensi, setDataPotensi] = React.useState({
    data: [],
    loading: true,
    error: false,
  });
  const [search, setSearch] = React.useState("");

  const [hoverButton, setHoverButton] = React.useState(false);
  const handleMouseOver = () => {
    setHoverButton(true);
  };

  const handleMouseOut = () => {
    setHoverButton(false);
  };

  const getPotensi = async () => {
    try {
      await getApi(
        `potensi-desa?limit=9&${search != "" && `key=${search}`}`
      ).then((res) => {
        setDataPotensi((s) => ({ ...s, data: res.data.data, loading: false }));
      });
    } catch (error) {
      console.log(error);
      setDataPotensi((s) => ({ ...s, loading: false, error: true }));
    }
  };

  React.useEffect(() => {
    getPotensi();
  }, [search]);
  return (
    <>
      <section className="mb-20 flex h-full flex-col items-center justify-between space-x-5 bg-[#3C903C]  py-20 px-8 lg:flex-row lg:px-20">
        <div className="flex w-[20%] flex-col items-end gap-y-5 lg:flex-row lg:gap-y-0">
          <div className="left title flex w-full flex-col gap-y-5 text-white">
            <div>
              <div className="w-[120%] lg:w-full">
                <div className="text-center text-[40px] font-bold capitalize lg:text-left">
                  WISATA JONGGOL
                </div>
                <div
                  className={`my-2  flex h-[5px] w-full bg-white lg:h-[3px] lg:w-[100px]`}
                ></div>
              </div>
              {/* <p>
                Potensi desa Kecamatan Jonggol sangat besar, terutama dalam
                bidang pertanian dan pariwisata. Desa-desa di Jonggol memiliki
                lahan yang subur dan cocok untuk bercocok tanam, seperti padi,
                sayuran, dan buah-buahan. Selain itu, desa-desa di Jonggol juga
                memiliki keindahan alam yang memikat, seperti air terjun, danau,
                dan bukit-bukit yang hijau, yang dapat menjadi destinasi wisata
                yang menarik bagi wisatawan lokal maupun mancanegara.
              </p> */}
            </div>

            {/* <div className="right relative lg:w-auto w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                onChange={(e) => {
                  setSearch(e.target.value);
                  setDataPotensi((s) => ({ ...s, loading: true }));
                }}
                type="text"
                className="block w-full placeholder:text-gray-400 text-gray-400 pl-12 px-4 py-3 bg-white border rounded-xl focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Search..."
              />
            </div> */}
          </div>
        </div>
        {/* Content */}
        <div className="kanan mt-10 h-[100%] w-[80%]">
          <Swiper
            // spaceBetween={20}
            //   controller={{ control: firstSwiper }}
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 3,
              slideShadows: false,
            }}
            scrollbar={{
              el: ".swiper-scrollbar2",
              draggable: true,
              hide: false,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Scrollbar, EffectCoverflow]}
            className="myGaleri"
            breakpoints={{
              640: {
                slidesPerView: 3,
                // spaceBetween: 20,
              },
              1000: {
                slidesPerView: 3,
                // spaceBetween: 20,
              },
              1400: {
                slidesPerView: 3,
                // spaceBetween: 30,
              },
            }}
          >
            {!dataPotensi.loading
              ? dataPotensi.data.map((i, key) => (
                  <SwiperSlide className="swiper-image" key={key}>
                    <CardFoto i={i} />
                  </SwiperSlide>
                ))
              : Array.from({ length: 10 }).map((_, index) => (
                  <SwiperSlide key={index}>
                    <Loading />
                  </SwiperSlide>
                ))}
          </Swiper>
          {dataPotensi.loading != true && dataPotensi.data.length == 0 && (
            <>
              <div className="flex flex-col items-center justify-center">
                <Lottie animationData={NotFound} />
                <h1 className="font-bold">
                  Potensi {search != null && search != "" && `"${search}"`}
                  Tidak Tersedia
                </h1>
              </div>
            </>
          )}
          <div className="swiper-scrollbar2 my-scrollbar mt-20 !hidden lg:flex"></div>
          <div className="flex justify-center lg:hidden">
            {/* <button
                onClick={() => navigate("/foto")}
              onMouseEnter={handleMouseOver}
              onMouseLeave={handleMouseOut}
              className={` px-5 py-2 2xl:py-3 rounded-full lg:text-sm 2xl:text-base font-semibold mt-16 ${
                hoverButton
                  ? "bg-[#007100] text-white transition-all border-2 border-[#007100]"
                  : "border-white border-2  text-white transition-all"
              }`}
            >
              Selengkapnya
            </button> */}
            <AnimatedButton
              onClick={() => navigate("/foto")}
              label={"Selengkapnya"}
              styleButton={
                "px-5 mt-5 py-1 rounded-full text-[15px] text-white border-2 border-white hover:text-black hover:border-kuningPrimary before:bg-bgKuningPrimary hover:text-black"
              }
            />
          </div>
        </div>
        {/* Content */}
      </section>
    </>
  );
}

function CardFoto({ i }) {
  const [open, setOpen] = React.useState(false);
  const cancelButtonRef = React.useRef(null);
  const [cardHover, setCardHover] = useState(false);

  const [translateY, setTranslateY] = useState("translate-y-[415px]");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1530) {
        setTranslateY("translate-y-[320px]");
      } else if (window.innerWidth < 1345) {
        setTranslateY("translate-y-[320px]");
      } else {
        setTranslateY("translate-y-[415px]");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        onClick={() => {
          if (i.cover != null) {
            setOpen(true);
          }
        }}
        className="mb-10 h-96 w-full rounded-2xl bg-cover bg-center shadow-2xl lg:h-96 2xl:min-h-[30rem]"
        style={{
          backgroundImage: `url(${
            i.thumbnail != null ? i.thumbnail : NoImage
          })`,
        }}
      >
        <div
          onMouseEnter={() => setCardHover(true)}
          onMouseLeave={() => setCardHover(false)}
          className="relative flex h-full w-full flex-col justify-end overflow-hidden rounded-2xl bg-black bg-opacity-25"
        >
          <div
            className={`${
              cardHover ? "translate-y-0" : translateY
              // cardHover ? "-mt-0" : "-mt-[200px]"
            } potensiCardHover absolute h-full w-full  cursor-pointer rounded-br-2xl rounded-bl-2xl bg-white px-5 py-5 transition-all duration-700 ease-in-out`}
          >
            <div>
              <h1 className="truncate text-[18px] font-semibold uppercase text-white">
                {i.nama_potensi}
              </h1>
            </div>
            <div
              className={`${cardHover ? "opacity-100" : "opacity-0"} h-full`}
            >
              <div
                className={`mt-[15px] mb-[40px] h-[1px] w-full bg-white duration-[1000ms]`}
              />
              <div className="flex h-[75%] flex-col justify-between xl:h-[80%]">
                <p className="capitalize text-white">{i.deskripsi}</p>
                <button className="w-fit uppercase">
                  <NavLink
                    to={"foto"}
                    className={"flex w-fit items-center space-x-2"}
                  >
                    {" "}
                    <p className="text-kuningPrimary hover:underline hover:underline-offset-4">
                      Selengkapnya
                    </p>
                    <FiExternalLink color="#fff012" />
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Loading() {
  return (
    <>
      <div className=" h-96 animate-pulse rounded-2xl bg-gray-300">
        <div className="flex h-full w-full flex-col justify-end p-10">
          <div className="h-4 w-1/4 rounded-full bg-gray-500 text-xs font-bold"></div>
        </div>
      </div>
    </>
  );
}

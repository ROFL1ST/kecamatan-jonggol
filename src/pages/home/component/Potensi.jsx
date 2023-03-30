import React from "react";
import { getApi } from "../../../API/restApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import NoImage from "../../../assets/images/thumbnail.jpg";
import Lottie from "lottie-react";
import NotFound from "../../../assets/json/93134-not-found.json";

export default function Potensi() {
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
      <div className="flex flex-col justify-center items-center py-20  mb-20 bg-[#3C903C] lg:px-20 px-8">
        <div className="flex lg:flex-row flex-col lg:gap-y-0 gap-y-5 justify-between w-full items-end">
          <div className="left title flex flex-col gap-y-5 lg:w-1/3 text-white">
            <div className="h1">
              <div className="  capitalize text-3xl font-bold">
                Wisata Jonggol
              </div>
              <div className={`flex  my-2 h-0.5 w-44 bg-white`}></div>
            </div>
            <p>
              Potensi desa Kecamatan Jonggol sangat besar, terutama dalam bidang
              pertanian dan pariwisata. Desa-desa di Jonggol memiliki lahan yang
              subur dan cocok untuk bercocok tanam, seperti padi, sayuran, dan
              buah-buahan. Selain itu, desa-desa di Jonggol juga memiliki
              keindahan alam yang memikat, seperti air terjun, danau, dan
              bukit-bukit yang hijau, yang dapat menjadi destinasi wisata yang
              menarik bagi wisatawan lokal maupun mancanegara.
            </p>
          </div>
          <div className="right relative lg:w-auto w-full">
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
          </div>
        </div>
        {/* Content */}
        <div className="kanan mt-10 w-full">
          <Swiper
            spaceBetween={20}
            //   controller={{ control: firstSwiper }}
            scrollbar={{
              el: ".swiper-scrollbar2",
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
            {!dataPotensi.loading ? (
              dataPotensi.data.map((i, key) => (
                <SwiperSlide className="swiper-image" key={key}>
                  <CardFoto i={i} />
                </SwiperSlide>
              ))
            ) : (
              <>
                <SwiperSlide>
                  <Loading />
                </SwiperSlide>
                <SwiperSlide>
                  <Loading />
                </SwiperSlide>
                <SwiperSlide>
                  <Loading />
                </SwiperSlide>
                <SwiperSlide>
                  <Loading />
                </SwiperSlide>
                <SwiperSlide>
                  <Loading />
                </SwiperSlide>
                <SwiperSlide>
                  <Loading />
                </SwiperSlide>
                <SwiperSlide>
                  <Loading />
                </SwiperSlide>
                <SwiperSlide>
                  <Loading />
                </SwiperSlide>
                <SwiperSlide>
                  <Loading />
                </SwiperSlide>
                <SwiperSlide>
                  <Loading />
                </SwiperSlide>
              </>
            )}
          </Swiper>
          {dataPotensi.loading != true && dataPotensi.data.length == 0 && (
            <>
              <div className="flex flex-col justify-center items-center">
                <Lottie animationData={NotFound} />
                <h1 className="font-bold">Potensi "{search}" Tidak Tersedia</h1>
              </div>
            </>
          )}
          <div className="swiper-scrollbar2 my-scrollbar mt-20"></div>
          <div className="lg:hidden flex justify-center">
            <button
              //   onClick={() => navigate("/foto")}
              onMouseEnter={handleMouseOver}
              onMouseLeave={handleMouseOut}
              className={` px-5 py-2 2xl:py-3 rounded-full lg:text-sm 2xl:text-base font-semibold mt-16 ${
                hoverButton
                  ? "bg-[#007100] text-white transition-all border-2 border-[#007100]"
                  : "border-white border-2  text-white transition-all"
              }`}
            >
              Selengkapnya
            </button>
          </div>
        </div>
        {/* Content */}
      </div>
    </>
  );
}

function CardFoto({ i }) {
  const [open, setOpen] = React.useState(false);
  const cancelButtonRef = React.useRef(null);
  return (
    <>
      <div
        onClick={() => {
          if (i.cover != null) {
            setOpen(true);
          }
        }}
        className="lg:h-96 2xl:min-h-[30rem]  h-96 rounded-2xl w-full bg-cover bg-center shadow-2xl"
        style={{
          backgroundImage: `url(${
            i.thumbnail != null ? i.thumbnail : NoImage
          })`,
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-25 px-5 py-5 rounded-2xl flex flex-col justify-end">
          <h1 className="text-white font-semibold">{i.nama_potensi}</h1>
        </div>
      </div>
    </>
  );
}

function Loading() {
  return (
    <>
      <div className=" h-96 rounded-2xl bg-gray-300 animate-pulse">
        <div className="w-full h-full flex flex-col justify-end p-10">
          <div className="text-xs font-bold h-4 w-1/4 bg-gray-500 rounded-full"></div>
        </div>
      </div>
    </>
  );
}
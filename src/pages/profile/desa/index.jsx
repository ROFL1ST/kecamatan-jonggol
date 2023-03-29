import React from "react";
import { useParams } from "react-router-dom";
import { getApi } from "../../../API/restApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import NoImage from "../../../assets/images/thumbnail.jpg";
import Lottie from "lottie-react";
import NotFound from "../../../assets/json/93134-not-found.json";

export default function DetailDesa() {
  const { slug } = useParams();
  const [name] = slug.split("-");

  React.useEffect(() => {
    document.title = `Desa ${name}`;
  });
  return (
    <>
      <div className="pt-[100px]  w-full">
        <div className="2xl:px-24 px-10">
          {/* top */}
          <div className="flex flex-col gap-y-10 mb-20">
            <div className="mt-20 flex justify-start">
              <div className="flex  bg-[#3C903C] cursor-default  rounded-xl lg:px-7 px-4 py-3 gap-x-4">
                <p className="text-3xl text-white font-semibold capitalize">
                  {name}
                </p>
              </div>
            </div>
            <p className="font-medium">
              Lorem ipsum dolor sit amet consectetur. Tortor risus dolor platea
              non urna sapien ac. Tincidunt sem sed interdum vel. Mauris mauris
              sagittis morbi sed sed et ut at ut. Mauris potenti odio purus elit
              amet. Sit viverra at sed cras. Pretium accumsan augue nulla
              aliquet libero. Lorem ipsum dolor sit amet consectetur. Tortor
              risus dolor platea non urna sapien ac. Tincidunt sem sed interdum
              vel. Mauris mauris sagittis morbi sed sed et ut at ut. Mauris
              potenti odio purus elit amet. Sit viverra at sed cras. Pretium
              accumsan augue nulla aliquet libero.
            </p>
          </div>
          {/* top */}
          {/* Penduduk for dekstop */}
          <div className="bg-[#3C903C] px-12 py-10 rounded-xl lg:flex hidden justify-center flex-row gap-x-20 mb-20">
            <div className="left flex gap-x-5">
              <div className="left flex flex-col gap-y-20">
                <div className="top px-10 py-3 rounded-xl bg-white">
                  <h1 className="font-semibold 2xl:text-2xl">Laki - laki</h1>
                </div>
                <div className="bottom px-10 py-8 rounded-xl items-center flex justify-center bg-white">
                  <h1 className="font-semibold 2xl:text-2xl">77</h1>
                </div>
              </div>
              <div className="left flex flex-col gap-y-20">
                <div className="top px-10 py-3 rounded-xl bg-white">
                  <h1 className="font-semibold 2xl:text-2xl">Laki - laki</h1>
                </div>
                <div className="bottom px-10 py-8 rounded-xl items-center flex justify-center bg-white">
                  <h1 className="font-semibold 2xl:text-2xl">77</h1>
                </div>
              </div>
            </div>
            <div className="border-l-2 border-black lg:flex hidden "></div>
            <div className="center flex gap-x-5">
              <div className="left flex flex-col gap-y-20">
                <div className="top px-10 py-3 rounded-xl bg-white">
                  <h1 className="font-semibold 2xl:text-2xl">Laki - laki</h1>
                </div>
                <div className="bottom px-10 py-8 rounded-xl items-center flex justify-center bg-white">
                  <h1 className="font-semibold 2xl:text-2xl">77</h1>
                </div>
              </div>
              <div className="left flex flex-col gap-y-20">
                <div className="top px-10 py-3 rounded-xl bg-white">
                  <h1 className="font-semibold 2xl:text-2xl">Laki - laki</h1>
                </div>
                <div className="bottom px-10 py-8 rounded-xl items-center flex justify-center bg-white">
                  <h1 className="font-semibold 2xl:text-2xl">77</h1>
                </div>
              </div>
            </div>
            <div className="border-l-2 border-black lg:flex hidden"></div>
            <div className="right flex gap-x-5">
              <div className="left flex flex-col gap-y-20">
                <div className="top px-10 py-3 rounded-xl bg-white">
                  <h1 className="font-semibold 2xl:text-2xl">Laki - laki</h1>
                </div>
                <div className="bottom px-10 py-8 rounded-xl items-center flex justify-center bg-white">
                  <h1 className="font-semibold 2xl:text-2xl">77</h1>
                </div>
              </div>
              <div className="left flex flex-col gap-y-20">
                <div className="top px-10 py-3 rounded-xl bg-white">
                  <h1 className="font-semibold 2xl:text-2xl">Laki - laki</h1>
                </div>
                <div className="bottom px-10 py-8 rounded-xl items-center flex justify-center bg-white">
                  <h1 className="font-semibold 2xl:text-2xl">77</h1>
                </div>
              </div>
            </div>
          </div>
          {/* Penduduk for dekstop */}
          {/* penduduk for mobile */}
          <div className="bg-[#3C903C] px-12 py-10 rounded-xl flex lg:hidden mb-10">
            <div className="grid grid-cols-2 w-full gap-y-20 gap-x-5 ">
              <div className="left flex flex-col gap-y-10 justify-center text-center">
                <div className="top px-3 py-3 rounded-xl bg-white">
                  <h1 className="font-semibold">Laki - laki</h1>
                </div>
                <div className="bottom px-3 py-8 rounded-xl items-center flex justify-center bg-white">
                  <h1 className="font-semibold">77</h1>
                </div>
              </div>
              <div className="center flex flex-col gap-y-10 justify-center text-center">
                <div className="top px-3 py-3 rounded-xl bg-white">
                  <h1 className="font-semibold">Perempuan</h1>
                </div>
                <div className="bottom px-3 py-8 rounded-xl items-center flex justify-center bg-white">
                  <h1 className="font-semibold">77</h1>
                </div>
              </div>
              <div className="right flex flex-col gap-y-10 justify-center text-center">
                <div className="top px-3 py-3 rounded-xl bg-white">
                  <h1 className="font-semibold">Laki - laki</h1>
                </div>
                <div className="bottom px-3 py-8 rounded-xl items-center flex justify-center bg-white">
                  <h1 className="font-semibold">77</h1>
                </div>
              </div>
              <div className="right flex flex-col gap-y-10 justify-center text-center">
                <div className="top px-3 py-3 rounded-xl bg-white">
                  <h1 className="font-semibold">Laki - laki</h1>
                </div>
                <div className="bottom px-3 py-8 rounded-xl items-center flex justify-center bg-white">
                  <h1 className="font-semibold">77</h1>
                </div>
              </div>
              <div className="right flex flex-col gap-y-10 justify-center text-center">
                <div className="top px-3 py-3 rounded-xl bg-white">
                  <h1 className="font-semibold">Laki - laki</h1>
                </div>
                <div className="bottom px-3 py-8 rounded-xl items-center flex justify-center bg-white">
                  <h1 className="font-semibold">77</h1>
                </div>
              </div>
              <div className="right flex flex-col gap-y-10 justify-center text-center">
                <div className="top px-3 py-3 rounded-xl bg-white">
                  <h1 className="font-semibold">Laki - laki</h1>
                </div>
                <div className="bottom px-3 py-8 rounded-xl items-center flex justify-center bg-white">
                  <h1 className="font-semibold">77</h1>
                </div>
              </div>
            </div>
          </div>
          {/* penduduk for mobile */}
          <p className="font-medium mb-20">
            Lorem ipsum dolor sit amet consectetur. Tortor risus dolor platea
            non urna sapien ac. Tincidunt sem sed interdum vel. Mauris mauris
            sagittis morbi sed sed et ut at ut. Mauris potenti odio purus elit
            amet. Sit viverra at sed cras. Pretium accumsan augue nulla aliquet
            libero. Lorem ipsum dolor sit amet consectetur. Tortor risus dolor
            platea non urna sapien ac. Tincidunt sem sed interdum vel. Mauris
            mauris sagittis morbi sed sed et ut at ut. Mauris potenti odio purus
            elit amet. Sit viverra at sed cras. Pretium accumsan augue nulla
            aliquet libero.
          </p>
          {/* Potensi */}
          <Potensi />
          {/* Potensi */}
        </div>
      </div>
    </>
  );
}

function Potensi(params) {
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
      <div className="kanan mt-10 w-full mb-20">
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

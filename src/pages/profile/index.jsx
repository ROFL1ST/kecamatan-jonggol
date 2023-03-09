import React from "react";
import CountUp from "react-countup";
import ProfileLogo from "../../assets/Icon/Profile.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowRight2 } from "iconsax-react";
import { Autoplay, Pagination } from "swiper";
export default function Profile() {
  const data = [
    {
      id: 1,
      count: "1300",
      title: "Penduduk",
    },
    {
      id: 2,
      count: "14",
      title: "Jumlah Desa",
    },
    {
      id: 3,
      count: "16",
      title: "Jumlah ASN",
    },
    {
      id: 4,
      count: "16",
      title: "Jumlah Bumdes",
    },
  ];

  const dataSekolah = [
    {
      id: 1,
      nama: "TK",
      initial: "Taman Kanak-kanak",
      desc: "Kecamatan Jonggol memiliki beberapa TK yang berkualitas dan berkomitmen untuk memberikan pendidikan terbaik bagi siswanya",
      swasta: 10,
      negri: 5,
    },
    {
      id: 2,
      nama: "SD",
      initial: "Sekolah Dasar",
      desc: "Kecamatan Jonggol memiliki beberapa SD yang berkualitas dan berkomitmen untuk memberikan pendidikan terbaik bagi siswanya",
      swasta: 10,
      negri: 5,
    },
    {
      id: 3,
      nama: "SMP",
      initial: "Sekolah Menengah Pertama",
      desc: "Kecamatan Jonggol memiliki beberapa SMP yang berkualitas dan berkomitmen untuk memberikan pendidikan terbaik bagi siswanya",
      swasta: 10,
      negri: 5,
    },
    {
      id: 4,
      nama: "SMA",
      initial: "Sekolah Menengah Atas",
      desc: "Kecamatan Jonggol memiliki beberapa SMA yang berkualitas dan berkomitmen untuk memberikan pendidikan terbaik bagi siswanya",
      swasta: 10,
      negri: 5,
    },
    {
      id: 5,
      nama: "SMK",
      initial: "Sekolah Menengah Kejuruan",
      desc: "Kecamatan Jonggol memiliki beberapa SMK yang berkualitas dan berkomitmen untuk memberikan pendidikan terbaik bagi siswanya",
      swasta: 10,
      negri: 5,
    },
    {
      id: 6,
      nama: "MA",
      initial: "Madrasah Aliyah",
      desc: "Kecamatan Jonggol memiliki beberapa MA yang berkualitas dan berkomitmen untuk memberikan pendidikan terbaik bagi siswanya",
      swasta: 10,
      negri: 5,
    },
    {
      id: 7,
      nama: "MTS",
      initial: "Madrasah Tsanawiyah",
      desc: "Kecamatan Jonggol memiliki beberapa MTS yang berkualitas dan berkomitmen untuk memberikan pendidikan terbaik bagi siswanya",
      swasta: 10,
      negri: 5,
    },
    {
      id: 8,
      nama: "MI",
      initial: "Madrasah Ibtida'iyah",
      desc: "Kecamatan Jonggol memiliki beberapa MI yang berkualitas dan berkomitmen untuk memberikan pendidikan terbaik bagi siswanya",
      swasta: 10,
      negri: 5,
    },
  ];

  const [limit, setLimit] = React.useState(4);
  const [hoverButton2, setHoverButton2] = React.useState(false);

  const handleMouseOver2 = () => {
    setHoverButton2(true);
  };

  const handleMouseOut2 = () => {
    setHoverButton2(false);
  };

  const datas = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="lg:pt-[100px] pt-[80px] w-screen">
        <div className="flex lg:flex-row flex-col-reverse justify-between w-full  px-16 py-32 lg:items-center items-start bg-[#A8CAA8]">
          <img src={ProfileLogo} className="lg:w-1/3" alt="" />
          <div className="w-1/4">
            <h1 className="lg:text-6xl text-4xl font-bold w-3/5 text-center text-white">
              Profile Kecamatan Jonggol
            </h1>
          </div>
        </div>
        {/* Informasi Desa */}
        <div className="lg:px-16 px-5 py-10 lg:gap-y-0 gap-y-3 flex flex-col justify-center items-center bg-[#3C903C]">
          <h1 className="text-2xl font-bold text-white">
            Informasi Seputar Desa
          </h1>
          <div className="w-full">
            <Swiper
              className="mt-10 mySwiper"
              spaceBetween={20}
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
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination]}
              pagination={true}
            >
              {datas.map((i, key) => (
                <SwiperSlide key={key}>
                  <Desa />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* Informasi Desa */}
        {/* Data Sekolah */}
        <div className="py-10 flex flex-col justify-center items-center mt-20 gap-y-10 px-16">
          <div className="top flex flex-col gap-y-5 justify-center items-center lg:w-3/5 text-center">
            <h1 className="font-bold text-2xl">Informasi Seputar Pendidikan</h1>
            <p>
              Kecamatan Jonggol memiliki beragam sekolah yang meliputi jenjang
              pendidikan dari SMP ,SMA , dan SMK. Berikut total sekolah di
              kecamatan Jonggol mencakup sekolah negeri dan swasta
            </p>
          </div>
          <div className="content grid lg:grid-cols-4 grid-cols-1 gap-16 w-full justify-center items-center">
            {dataSekolah.slice(0, limit).map((i, key) => (
              <CardSekolah key={key} i={i} />
            ))}
          </div>
          {limit > 4 ? (
            <></>
          ) : (
            <div className=" flex justify-center items-center mb-32">
              <button
                onClick={() => setLimit(limit + 12)}
                onMouseEnter={handleMouseOver2}
                onMouseLeave={handleMouseOut2}
                className={` px-5 py-2 2xl:py-3 rounded-full lg:text-sm 2xl:text-base font-semibold ${
                  hoverButton2
                    ? "bg-[#3C903C] text-white transition-all border-2 border-[#3C903C]"
                    : "border-[#3C903C] border-2  text-[#3C903C] transition-all"
                }`}
              >
                Selengkapnya
              </button>
            </div>
          )}
        </div>
        {/* Data Sekolah */}
        {/* Geografis Jonggol */}
        <div className="py-10 flex flex-col justify-center items-center mt-20 gap-y-10 px-16"></div>
        {/* Geografis Jonggol */}
      </div>
    </>
  );
}

function Desa(params) {
  const data = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="2xl:px-16 px-10 py-10 rounded-2xl bg-white flex flex-col items-center">
        <div className="uppercase px-7 py-3 font-bold bg-[#3C903C] text-white rounded-2xl text-xl">
          Cibodas
        </div>
        <div className="flex 2xl:flex-row flex-col justify-between w-full mt-5">
          <div>
            <h1 className="font-bold">Kepala Desa</h1>
            <h1 className="flex justify-start items-start">
              Suhanda Anda Permana
            </h1>
          </div>
          <div className="flex gap-x-2 text-gray-300 cursor-pointer hover:text-[#3C903C] transition-all h-full">
            <h1>Selengkapnya </h1>
            <ArrowRight2 />
          </div>
        </div>
      </div>
      <div className="2xl:px-20 px-10 py-10 rounded-2xl bg-white flex flex-col items-center">
        <div className="uppercase px-7 py-3 font-bold bg-[#3C903C] text-white rounded-2xl text-xl">
          Potensi Desa
        </div>
        <div className="mt-5 mySwiper w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            modules={[Autoplay]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
          >
            {data.map((i, key) => (
              <SwiperSlide key={key}>
                <CardFotoPotensi />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

function CardFotoPotensi() {
  return (
    <>
      <div
        className="lg:h-96 2xl:min-h-[30rem]  h-96 rounded-2xl bg-cover bg-center shadow-2xl"
        style={{
          backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/005/464/515/original/spring-landscape-with-mountains-natural-scenery-in-portrait-format-vector.jpg)`,
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-25 px-5 py-5 rounded-2xl flex flex-col justify-start items-center">
          <h1 className="text-white font-bold text-2xl">Tempat Wisata</h1>
          <h1 className="text-white font-semibold text-xl">Curug Kejora</h1>
        </div>
      </div>
    </>
  );
}

function CardSekolah({ i }) {
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
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
        className={`card flex flex-col text-center items-center gap-y-5 bg-white  w-full 2xl:px-4 lg:px-3 px-4 py-20 rounded-[20px] cursor-pointer transition-all  ${
          isHovering && "-translate-y-1 -translate-x-1 shadow-xl transition-all"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-20"
          viewBox="0 0 15 15"
        >
          <path
            fill="none"
            stroke="currentColor"
            d="m7.5 4.5l4 2v8h-8v-8l4-2Zm0 0V0M0 14.5h15m-13.5 0v-6h2m10 6v-6h-2m-5 6v-3h2v3m-1-14h3v2h-3m0 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"
          />
        </svg>
        <div className="title flex flex-col gap-y-2 items-center">
          <h1 className="font-bold text-lg">{i.nama}</h1>
          <h2>({i.initial})</h2>
        </div>
        <p>{i.desc}</p>
        <div className="jumlahSekolah flex gap-x-5 font-bold">
          <div className="swasta flex flex-col items-center">
            <p>{i.swasta}</p>
            <p>Swasta</p>
          </div>
          <div className="border-l-2 border-black "></div>
          <div className="swasta flex flex-col items-center">
            <p>{i.negri}</p>
            <p>Negeri</p>
          </div>
        </div>
      </div>
    </>
  );
}

function CardInfo({ index, data }) {
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
        className={`penduduk flex flex-col  items-center lg:gap-y-5 gap-y-1 lg:px-12 px-5  lg:py-5 py-2 transition-all cursor-default ${
          isHovering && "-translate-y-1 -translate-x-1 shadow-xl transition-all"
          // eslint-disable-next-line eqeqeq
        } ${index != 0 && !isHovering ? "border-l-2" : "rounded-xl"}`}
      >
        <CountUp
          className="font-bold lg:text-2xl text-base"
          duration={5}
          decimal={data.count}
          end={data.count}
        />
        <p className="lg:text-xl text-sm">{data.title}</p>
      </div>
    </>
  );
}

function CardInfoMobile({ data }) {
  return (
    <>
      <div
        className={`penduduk flex flex-col justify-center text-center  items-center  gap-y-1  px-5 border-[0.5px]  py-5 `}
      >
        <CountUp
          className="font-bold text-2xl "
          duration={5}
          decimal={data.count}
          end={data.count}
        />
        <p className="text-xl ">{data.title}</p>
      </div>
    </>
  );
}

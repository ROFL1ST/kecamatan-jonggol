import React from "react";
import CountUp from "react-countup";
import { Dialog, Transition } from "@headlessui/react";
import Lottie from "lottie-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { getApi } from "../../API/restApi";
import Kesehatan from "./component/Kesehatan";
import ProfilePic from "../../assets/json/27562-searching-for-profile.json";
import NotFound from "../../assets/json/93134-not-found.json";
import { NavLink, useNavigate } from "react-router-dom";
import ErrorIndicator from "../../assets/json/98642-error-404.json";
import { ArrowRight2 } from "iconsax-react";
import UnderlineButton from "../home/component/underlineButton";
import AnimatedButton from "../../component/animatedButton";
import { FiExternalLink } from "react-icons/fi";

export default function Profile() {
  const [penduduk, setPenduduk] = React.useState();
  const getPenduduk = async () => {
    try {
      await getApi("penduduk/total").then((res) => {
        setPenduduk(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [asn, setAsn] = React.useState();
  const getAsn = async () => {
    try {
      await getApi("pegawai/total").then((res) => {
        setAsn(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [desa, setDesa] = React.useState([]);
  const listLoad = [1, 2, 3, 4, 5, 6, 7, 8];
  const [desaError, setDesaError] = React.useState(false);
  const [loadDesa, setLoadDesa] = React.useState(true);
  const getDesa = async () => {
    try {
      await getApi("desa").then((res) => {
        setDesa(res.data.data);
        setLoadDesa(false);
      });
    } catch (error) {
      console.log(error);
      setLoadDesa(false);
      setDesaError(true);
    }
  };
  const data = [
    {
      id: 1,
      count: penduduk,
      title: "Penduduk",
    },
    {
      id: 2,
      count: desa.length,
      title: "Jumlah Desa",
    },
    {
      id: 3,
      count: asn,
      title: "Jumlah ASN",
    },
    {
      id: 4,
      count: 158.9,
      title: "Luas Wilayah",
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
      logoPendidikan:
        "https://blog.pengajartekno.com/wp-content/uploads/2022/11/logo-tk-png.png",
    },
    {
      id: 2,
      nama: "SD",
      initial: "Sekolah Dasar",
      desc: "Kecamatan Jonggol memiliki beberapa SD yang berkualitas dan berkomitmen untuk memberikan pendidikan terbaik bagi siswanya",
      swasta: 10,
      negri: 5,
      logoPendidikan:
        "https://siap-sekolah.s3.amazonaws.com/17724/files/2014/03/logo-sd1.png",
    },
    {
      id: 3,
      nama: "SMP",
      initial: "Sekolah Menengah Pertama",
      desc: "Kecamatan Jonggol memiliki beberapa SMP yang berkualitas dan berkomitmen untuk memberikan pendidikan terbaik bagi siswanya",
      swasta: 10,
      negri: 5,
      logoPendidikan:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIvTdX754HDd_esf3o6e4wbFThVMz3IdHT7mVzG75sdiwueT7XUOps-_s5dRkN8Q73uLStyjrztY3EYWT9K8ORhROkXSd7kQz4RLzpofDzbPI3B_0Js7608kMaQ3GI5Ff2WpCk93qlSh9ei4ps42ZIkX2oq0zj6ldPIWkg7CIKTxbpDqGoK8UJURac/s1049/logo-smp.png",
    },
    {
      id: 4,
      nama: "SMA",
      initial: "Sekolah Menengah Atas",
      desc: "Kecamatan Jonggol memiliki beberapa SMA yang berkualitas dan berkomitmen untuk memberikan pendidikan terbaik bagi siswanya",
      swasta: 10,
      negri: 5,
      logoPendidikan:
        "https://sman1sukaresmi.sch.id/media_library/posts/post-image-1601167638481.png",
    },
    {
      id: 5,
      nama: "SMK",
      initial: "Sekolah Menengah Kejuruan",
      desc: "Kecamatan Jonggol memiliki beberapa SMK yang berkualitas dan berkomitmen untuk memberikan pendidikan terbaik bagi siswanya",
      swasta: 10,
      negri: 5,
      logoPendidikan:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiro7tiXSyLj1CLoOyVMSKZl_IKv5OXGFHHorA-42WoEaJjdKkVjH5pGkhB8sQOzHl0aMBvtHHuQ6UPoJ2jOjpLvhPzOyljOVnYZFvTjZWnewvppOxyRwQrN7c2raHXq2-tFU7fLVomRAienX_I0KUFixoJ7a_g6zrp6jnj-icChRUM8rVlGucEpDKd/s1130/SMK%20BISA%20HEBAT.png",
    },
    {
      id: 6,
      nama: "MA",
      initial: "Madrasah Aliyah",
      desc: "Kecamatan Jonggol memiliki beberapa MA yang berkualitas dan berkomitmen untuk memberikan pendidikan terbaik bagi siswanya",
      swasta: 10,
      negri: 5,
      logoPendidikan:
        "https://rekreartive.com/wp-content/uploads/2019/04/Logo-Madrasah-MI-Mts-dan-MA-Warna.png",
    },
    {
      id: 7,
      nama: "MTS",
      initial: "Madrasah Tsanawiyah",
      desc: "Kecamatan Jonggol memiliki beberapa MTS yang berkualitas dan berkomitmen untuk memberikan pendidikan terbaik bagi siswanya",
      swasta: 10,
      negri: 5,
      logoPendidikan:
        "https://rekreartive.com/wp-content/uploads/2019/04/Logo-Madrasah-MI-Mts-dan-MA-Warna.png",
    },
    {
      id: 8,
      nama: "MI",
      initial: "Madrasah Ibtida'iyah",
      desc: "Kecamatan Jonggol memiliki beberapa MI yang berkualitas dan berkomitmen untuk memberikan pendidikan terbaik bagi siswanya",
      swasta: 10,
      negri: 5,
      logoPendidikan:
        "https://rekreartive.com/wp-content/uploads/2019/04/Logo-Madrasah-MI-Mts-dan-MA-Warna.png",
    },
  ];

  const [agama, setAgama] = React.useState([]);
  const [loadAgama, setLoadAgama] = React.useState(true);
  const [agamaError, setAgamaError] = React.useState(false);
  const [limitAgama, setLimitAgama] = React.useState(6);

  const [search, setSearch] = React.useState("");

  const getAgama = async () => {
    try {
      await getApi(
        `sarana-keagamaan?${search !== "" && `key=${search}`}&${limit}`
      ).then((res) => {
        setAgama(res.data.data);
        setLoadAgama(false);
      });
    } catch (error) {
      console.log(error);
      setLoadAgama(false);
      setAgamaError(true);
    }
  };

  const [limit, setLimit] = React.useState(4);
  const [hoverButton2, setHoverButton2] = React.useState(false);

  const handleMouseOver2 = () => {
    setHoverButton2(true);
  };

  const handleMouseOut2 = () => {
    setHoverButton2(false);
  };

  React.useEffect(() => {
    getDesa();
    getPenduduk();
    getAsn();
  }, []);

  React.useEffect(() => {
    getAgama();
  }, [search]);

  return (
    <>
      <div className="w-screen pt-[80px] lg:pt-[100px]">
        <div className="flex w-full flex-col items-start justify-between  bg-[#A8CAA8] px-16 py-32 lg:flex-row lg:items-center">
          <Lottie animationData={ProfilePic} className="lg:w-1/3" />
          <div className="lg:w-1/4">
            <h1 className="text-4xl font-bold text-white lg:w-3/5 lg:text-center lg:text-6xl">
              Profile Kecamatan Jonggol
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-3 bg-[#3C903C] px-5 py-10 lg:gap-y-0 lg:px-16">
          {/* Informasi Desa */}
          <h1 className="text-4xl font-bold text-white">
            Informasi Seputar Desa
          </h1>
          <div className="w-full">
            <Swiper
              className="mySwiper mt-10"
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
              {!loadDesa ? (
                desa.length != 0 ? (
                  desa.map((i, key) => (
                    <SwiperSlide key={key}>
                      <Desa i={i} />
                    </SwiperSlide>
                  ))
                ) : desaError ? (
                  <>
                    <div className="flex flex-col items-center justify-center">
                      <Lottie animationData={ErrorIndicator} />
                      <h1 className="font-bold text-white">
                        Terjadi Kesalahan
                      </h1>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col items-center justify-center">
                      <Lottie animationData={NotFound} />
                      <h1 className="font-bold text-white">
                        Desa Tidak Tersedia
                      </h1>
                    </div>
                  </>
                )
              ) : (
                listLoad.map((i, key) => (
                  <SwiperSlide key={key}>
                    <CardLoadingDesa />
                  </SwiperSlide>
                ))
              )}
            </Swiper>
          </div>
          {/* Informasi Desa */}
          {/* jumlah for dekstop */}
          <h1 className="mt-10 px-10 text-center text-4xl font-bold text-white">
            Informasi Seputar Jonggol
          </h1>
          <div className="mt-10 mb-10 hidden justify-center px-16 lg:flex">
            <div className=" flex rounded-xl bg-white lg:px-5 lg:py-5 ">
              {data.map((i, key) => (
                <CardInfo key={key} index={key} data={i} />
              ))}
            </div>
          </div>
          {/* jumlah for dekstop */}
          {/* jumlah for mobile */}
          <div className="mt-10 mb-10 flex justify-center px-8 lg:hidden">
            <div className="grid grid-cols-2 rounded-xl bg-white">
              {data.map((i, key) => (
                <CardInfoMobile key={key} index={key} data={i} />
              ))}
            </div>
          </div>
          {/* jumlah for mobile */}
          <div className="w-1/2  border-b-2 lg:w-3/5"></div>
          {/* Data Sekolah */}
          <div className="mt-10 flex flex-col items-center justify-center gap-y-10 py-10 lg:px-16">
            <div className="top flex flex-col items-center justify-center gap-y-5 text-center lg:w-3/5">
              <h1 className="text-4xl font-bold text-white">
                Informasi Seputar Pendidikan
              </h1>
              <p className="text-white">
                Kecamatan Jonggol memiliki beragam sekolah yang meliputi jenjang
                pendidikan dari SMP, SMA, dan SMK. Berikut total sekolah di
                kecamatan Jonggol mencakup sekolah negeri dan swasta
              </p>
            </div>
            <div className="w-full">
              <div
                className={`  grid  h-full grid-cols-1 items-center justify-center gap-16 lg:grid-cols-4`}
              >
                {dataSekolah.slice(0, limit).map((i, key) => (
                  <CardSekolah key={key} i={i} />
                ))}
              </div>
            </div>
            {limit > 4 ? (
              <></>
            ) : (
              <div className=" flex items-center justify-center">
                <AnimatedButton
                  onClick={() => setLimit(limit + 12)}
                  label={"Selengkapnya"}
                  styleButton={
                    "px-5 mt-5 py-1 rounded-full text-[15px] text-white border-2 border-white hover:text-black hover:border-kuningPrimary before:bg-bgKuningPrimary hover:text-black"
                  }
                />
              </div>
            )}
          </div>
          {/* Data Sekolah */}
        </div>
        {/* Kesehatan */}
        <div className="flex flex-col items-center justify-center gap-y-3 px-5 py-10 lg:gap-y-0 lg:px-16 2xl:px-28">
          <h1 className="text-4xl font-bold text-[#3C903C]">
            Informasi Seputar Kesehatan
          </h1>
          <Kesehatan />
        </div>
        {/* Kesehatan */}

        {/* Keagamaan */}
        <div className="mb-20 flex flex-col items-center justify-center rounded-xl bg-[#3C903C] py-20 px-10 lg:px-28">
          {/* top */}
          <div className="flex w-full flex-col-reverse items-center justify-between gap-y-5 lg:flex-row lg:gap-y-0">
            <div className="left relative w-full lg:w-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 left-3 my-auto h-6 w-6 text-white"
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
                }}
                type="text"
                className="block w-full rounded-xl border bg-[#3C903C] px-4 py-3 pl-12 text-white placeholder:text-white focus:border-white focus:outline-none focus:ring focus:ring-white focus:ring-opacity-40"
                placeholder="Search..."
              />
            </div>
            <div className="right">
              <div className="flex w-full items-center justify-center rounded-xl border-2 border-white py-3 px-5">
                <h1 className="text-2xl font-bold text-white">
                  Menampilkan Sarana-Sarana Keagamaan
                </h1>
              </div>
            </div>
          </div>
          <div className="mt-10 mb-10 w-full border-b-2"></div>
          {/* top */}
          {/* content */}
          <div className=" w-full py-5">
            <div
              className={`${
                loadAgama
                  ? "grid grid-cols-1 lg:grid-cols-3"
                  : agama.length == 0
                  ? ""
                  : "grid grid-cols-1 lg:grid-cols-3"
              } mb-20 gap-4 `}
            >
              {!loadAgama ? (
                agama.length != 0 ? (
                  agama.map((i, key) => <CardIbadah key={key} i={i} />)
                ) : agamaError ? (
                  <>
                    <div className="flex flex-col items-center justify-center">
                      <Lottie animationData={ErrorIndicator} />
                      <h1 className="font-bold text-white">
                        Terjadi Kesalahan
                      </h1>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col items-center justify-center">
                      <Lottie animationData={NotFound} />
                      <h1 className="font-bold text-white">
                        Agama Tidak Tersedia
                      </h1>
                    </div>
                  </>
                )
              ) : (
                [1, 2, 3, 4, 5, 6, 7, 8].map((i, key) => <CardLoadingIbadah />)
              )}
            </div>
            {agama.length < 12 ? (
              <></>
            ) : (
              <AnimatedButton
                onClick={() => setLimitAgama(limitAgama + 6)}
                label={"Selengkapnya"}
                styleButton={
                  "px-5 mt-5 py-1 rounded-full text-[15px] text-white border-2 border-white hover:text-black hover:border-kuningPrimary before:bg-bgKuningPrimary hover:text-black"
                }
              />
            )}
          </div>
          {/* content */}
        </div>
        {/* Keagamaan */}
      </div>

      {/* penutup */}
      <div className="bg-jonggol flex h-[1000px] w-full flex-col justify-between bg-blue-400">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#F0F0F0"
              fillOpacity={1}
              d="M0,128L80,117.3C160,107,320,85,480,101.3C640,117,800,171,960,192C1120,213,1280,203,1360,197.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            />
          </svg>
        </div>

        <div className="z-10 flex w-full flex-col items-center justify-center">
          <h1 className="text-center text-[30px] font-bold capitalize text-white">
            segera unduh{" "}
            <span className="underline underline-offset-4">
              aplikasi pelayanan masyarakat
            </span>
          </h1>
          <div className="flex w-[100%] justify-center">
            <AnimatedButton
              styleButton={
                "xl:w-[15%] w-[20%] px-5 py-1 mt-5 rounded-full hover:text-hijauPrimary text-white border-2 border-white before:bg-white"
              }
              label={
                <NavLink to={"/aplikasi"}>
                  <div className="flex items-center justify-center space-x-1">
                    <p>Lihat Aplikasi</p>
                    <FiExternalLink />
                  </div>
                </NavLink>
              }
            />
          </div>
        </div>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#F0F0F0"
              fillOpacity={1}
              d="M0,128L80,117.3C160,107,320,85,480,101.3C640,117,800,171,960,192C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
        </div>
      </div>
      {/* penutup */}
    </>
  );
}

function CardLoadingIbadah(params) {
  return (
    <>
      <div className="flex flex-col items-center gap-y-3 rounded-2xl bg-white px-10 py-5 2xl:px-16">
        <div className="animate-pulse rounded-2xl bg-[#3C903C] px-7 py-3 text-xl font-bold uppercase text-white">
          <div className="h-5 w-20 rounded-2xl bg-gray-300 bg-cover bg-center"></div>
        </div>
        <div className="flex h-full w-1/2 animate-pulse flex-col items-center gap-y-2">
          <div className="h-5 w-1/2 rounded-2xl bg-gray-300 bg-cover bg-center"></div>
          <div className="h-5 w-1/3 rounded-2xl bg-gray-300 bg-cover bg-center"></div>
        </div>
      </div>
    </>
  );
}

function CardLoadingDesa(params) {
  return (
    <>
      <div className="flex flex-col items-center rounded-2xl bg-white px-10 py-10 2xl:px-16 ">
        <div className="animate-pulse rounded-2xl bg-[#3C903C] px-7 py-3 text-xl font-bold uppercase text-white">
          <div className="h-5 w-20 rounded-2xl bg-gray-300 bg-cover bg-center"></div>
        </div>
        <div className="mt-10 flex w-full animate-pulse justify-between">
          <div className="flex h-full w-1/2 flex-col gap-y-2">
            <div className="h-5 w-1/2 rounded-2xl bg-gray-300 bg-cover bg-center"></div>
            <div className="h-5 w-1/3 rounded-2xl bg-gray-300 bg-cover bg-center"></div>
          </div>
          <div className="h-5 w-1/3 rounded-2xl bg-[#3C903C] bg-cover bg-center"></div>
        </div>
      </div>
      <div className="flex flex-col items-center rounded-2xl bg-white px-10 py-10 2xl:px-20">
        <div className="animate-pulse rounded-2xl bg-[#3C903C] px-7 py-3 text-xl font-bold uppercase text-white">
          <div className="h-5 w-20 rounded-2xl bg-gray-300 bg-cover bg-center"></div>
        </div>
        <div className=" mt-10 h-96 w-full animate-pulse rounded-2xl bg-gray-300">
          <div className="flex h-full w-full flex-col items-center justify-center "></div>
        </div>
      </div>
    </>
  );
}

function CardIbadah({ i }) {
  return (
    <>
      <div className="flex flex-col items-center gap-y-3 rounded-2xl bg-white px-10 py-5 2xl:px-16">
        <div className="rounded-full bg-[#3C903C] px-7 py-3 text-xl font-bold uppercase text-white">
          {i.nama_sarana.includes("Masjid") ? "Masjid" : "Gereja"}
        </div>
        <h1 className="font-bold">{i.nama_sarana}</h1>
        <h1 className="font-bold">Desa {i.desa.nama_desa}</h1>
      </div>
    </>
  );
}

function Desa({ i }) {
  const navigate = useNavigate();

  const [potensi, setPotensi] = React.useState([]);
  const [loadPotensi, setLoadPotensi] = React.useState(true);
  const getPotensi = async () => {
    try {
      await getApi(`potensi-desa?id_desa=${i.id}`).then((res) => {
        setPotensi(res.data.data);
        setLoadPotensi(false);
      });
    } catch (error) {
      console.log(error);
      setLoadPotensi(false);
    }
  };

  React.useEffect(() => {
    getPotensi();
  }, []);
  return (
    <>
      <div className="mb-5 flex flex-col items-center rounded-2xl bg-white px-10 py-10 2xl:px-16">
        <div className="rounded-2xl bg-[#3C903C] px-7 py-3 text-xl font-bold uppercase text-white">
          {i.nama_desa}
        </div>
        <div className="mt-5 flex w-full items-end justify-between">
          <div>
            <h1 className="font-bold">Kepala Desa</h1>
            <h1 className="flex items-start justify-start">{i.kepala_desa}</h1>
          </div>
          {/* <div className="flex flex-col items-end gap-y-2 text-gray-300 cursor-pointer hover:text-[#3C903C] transition-all h-full">
            <h1>Longtitude : {i.longtitude}</h1>
            <h1>Latitude : {i.latitude}</h1>
          </div> */}

          {/* <div
            onClick={() => {
              navigate(`desa/${i.slug}`);
            }}
            className="flex flex-row gap-x-2 items-end gap-y-2 text-gray-300 cursor-pointer hover:text-[#3C903C] transition-all h-full justify-end"
          >
            <h1>Selengkapnya</h1>
            <ArrowRight2 />
          </div> */}
          <UnderlineButton
            onClick={() => {
              navigate(`desa/${i.slug}`);
            }}
            label={"Selengkapnya..."}
            styleP={"text-gray-300 text-[15px] before:text-hijauPrimary"}
            styleSvg={
              "text-transparent hover:text-hijauPrimary transform translate-x-4"
            }
            styleButton={"after:bg-hijauPrimary"}
          />
        </div>
      </div>

      <div className="flex flex-col items-center rounded-2xl bg-white px-10 py-10 2xl:px-20">
        <div className="rounded-2xl bg-[#3C903C] px-7 py-3 text-xl font-bold uppercase text-white">
          Potensi Desa
        </div>
        <div className="mySwiper mt-5 w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            modules={[Autoplay]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
          >
            {!loadPotensi ? (
              potensi.length != 0 ? (
                potensi.map((i, key) => (
                  <SwiperSlide key={key}>
                    <CardFotoPotensi i={i} />
                  </SwiperSlide>
                ))
              ) : (
                <>
                  <SwiperSlide>
                    <div className="flex flex-col items-center justify-center">
                      <Lottie animationData={NotFound} />
                      <h1 className="text-lg font-bold">Tidak ada data</h1>
                    </div>
                  </SwiperSlide>
                </>
              )
            ) : (
              <>
                <SwiperSlide>
                  <div className=" mt-10 h-96 w-full animate-pulse rounded-2xl bg-gray-300">
                    <div className="flex h-full w-full flex-col items-center justify-center "></div>
                  </div>
                </SwiperSlide>
              </>
            )}
          </Swiper>
        </div>
      </div>
    </>
  );
}

function CardFotoPotensi({ i }) {
  const [open, setOpen] = React.useState(false);
  const cancelButtonRef = React.useRef(null);
  return (
    <>
      <div
        onClick={() => {
          setOpen(true);
        }}
        className="h-96 rounded-2xl  bg-cover bg-center shadow-2xl lg:h-96 2xl:min-h-[27.5rem]"
        style={{
          backgroundImage: `url(${i.thumbnail})`,
        }}
      >
        <div className="flex h-full w-full flex-col items-center justify-start rounded-2xl bg-black bg-opacity-25 px-5 py-5">
          <h1 className="text-2xl font-bold text-white">{i.kategori}</h1>
          <h1 className="text-xl font-semibold text-white">{i.nama_potensi}</h1>
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
  const [listFoto, setListFoto] = React.useState([]);
  const [loadFoto, setLoadFoto] = React.useState(true);
  const getList = async () => {
    try {
      getApi(`potensi-desa/${foto.slug}`).then((res) => {
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
                      nama={listFoto.nama_potensi}
                    ></CardModal>
                  ) : (
                    <></>
                  )}
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
            {summary}
          </p>
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

  const [isHovering2, setIsHovering2] = React.useState(false);
  const handleMouseOver2 = () => {
    setIsHovering(true);
  };

  const handleMouseOut2 = () => {
    setIsHovering2(false);
  };
  const navigate = useNavigate();

  const [countSekolah, setCountSekolah] = React.useState({
    swasta: 0,
    negeri: 0,
  });

  const getCountSwasta = async () => {
    try {
      await getApi(
        `sekolah/total?bentuk_pendidikan=${i.nama}&status=Swasta`
      ).then((res) => {
        // console.log(res.data.data);
        setCountSekolah((s) => ({ ...s, swasta: res.data.data }));
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getCountNegeri = async () => {
    try {
      await getApi(
        `sekolah/total?bentuk_pendidikan=${i.nama}&status=Negeri`
      ).then((res) => {
        // console.log(res.data.data);
        setCountSekolah((s) => ({ ...s, negeri: res.data.data }));
      });
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getCountSwasta();
    getCountNegeri();
  }, []);
  return (
    <>
      <div
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
        className={`flex h-[100%] w-full cursor-default flex-col items-center justify-between gap-y-5  rounded-[20px] bg-white px-5 py-[50px] text-center transition-all lg:px-3 2xl:px-4  ${
          isHovering && "-translate-y-1 -translate-x-1 shadow-xl transition-all"
        }`}
      >
        <div className="w-full">
          <div className="mb-5 flex h-[150px] w-full items-center justify-center">
            <img src={i.logoPendidikan} alt="" className="w-[150px]" />
          </div>
          <div className="title flex flex-col items-center gap-y-2">
            <h1 className="text-lg font-bold">{i.nama}</h1>
            <h2>({i.initial})</h2>
          </div>
          <p>{i.desc}</p>
        </div>

        <div>
          <div className="jumlahSekolah flex gap-x-5 font-bold">
            <div className="swasta flex flex-col items-center">
              <p>{countSekolah.swasta}</p>
              <p>Swasta</p>
            </div>
            <div className="border-l-2 border-black "></div>
            <div className="swasta flex flex-col items-center">
              <p>{countSekolah.negeri}</p>
              <p>Negeri</p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <AnimatedButton
              onClick={() => navigate(`/sekolah/${i.nama}&${i.initial}`)}
              label={"Selengkapnya"}
              styleButton={
                "px-5 py-1 mt-5 rounded-full hover:text-white text-hijauPrimary border-2 border-hijauPrimary before:bg-bgHijauPrimary"
              }
            />
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
        className={`penduduk flex cursor-default  flex-col items-center gap-y-1 px-5 py-2  transition-all lg:gap-y-5 lg:px-12 lg:py-5 ${
          isHovering && "-translate-y-1 -translate-x-1 shadow-xl transition-all"
          // eslint-disable-next-line eqeqeq
        } ${index != 0 && !isHovering ? "border-l-2" : "rounded-xl"}`}
      >
        <div className="flex gap-x-3">
          <CountUp
            className="text-2xl font-bold "
            duration={5}
            decimal={data.count}
            end={data.count}
          />
          {data.title == "Luas Wilayah" && "KM"}
        </div>
        <p className="text-sm lg:text-xl">{data.title}</p>
      </div>
    </>
  );
}

function CardInfoMobile({ data }) {
  return (
    <>
      <div
        className={`penduduk flex flex-col items-center justify-center  gap-y-1  border-[0.5px]  px-5 py-5  text-center ${
          data.id == 1
            ? "rounded-tl-xl"
            : data.id == 2
            ? "rounded-tr-xl"
            : data.id == 3
            ? "rounded-bl-xl"
            : "rounded-br-xl"
        }`}
      >
        <div className="flex gap-x-3">
          <CountUp
            className="text-2xl font-bold "
            duration={5}
            decimal={data.count}
            end={data.count}
          />
          {data.title == "Luas Wilayah" && "KM"}
        </div>
        <p className="text-xl ">{data.title}</p>
      </div>
    </>
  );
}

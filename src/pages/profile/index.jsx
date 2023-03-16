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
import { useNavigate } from "react-router-dom";
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

  const [bumdes, setBumdes] = React.useState();
  const getBumdes = async () => {
    try {
      await getApi("bumd/total").then((res) => {
        setBumdes(res.data.data);
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
      count: bumdes,
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

  const [agama, setAgama] = React.useState([]);
  const [loadAgama, setLoadAgama] = React.useState(true);
  const [search, setSearch] = React.useState("");

  const getAgama = async () => {
    try {
      await getApi(`sarana-keagamaan?${search !== "" && `key=${search}`}`).then(
        (res) => {
          setAgama(res.data.data);
          setLoadAgama(false);
        }
      );
    } catch (error) {
      console.log(error);
      setLoadAgama(false);
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
    getBumdes();
    getAsn();
  }, []);

  React.useEffect(() => {
    getAgama();
  }, [search]);

  return (
    <>
      <div className="lg:pt-[100px] pt-[80px] w-screen">
        <div className="flex lg:flex-row flex-col justify-between w-full  px-16 py-32 lg:items-center items-start bg-[#A8CAA8]">
          <Lottie animationData={ProfilePic} className="lg:w-1/3" />
          <div className="lg:w-1/4">
            <h1 className="lg:text-6xl text-4xl font-bold lg:w-3/5 lg:text-center text-white">
              Profile Kecamatan Jonggol
            </h1>
          </div>
        </div>
        <div className="lg:px-16 px-5 py-10 lg:gap-y-0 gap-y-3 flex flex-col justify-center items-center bg-[#3C903C]">
          {/* Informasi Desa */}
          <h1 className="text-4xl font-bold text-white">
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
              {!loadDesa ? (
                desa.map((i, key) => (
                  <SwiperSlide key={key}>
                    <Desa i={i} />
                  </SwiperSlide>
                ))
              ) : (
                <></>
              )}
            </Swiper>
          </div>
          {/* Informasi Desa */}
          {/* jumlah for dekstop */}
          <h1 className="text-4xl mt-10 font-bold text-white px-10 text-center">
            Informasi Seputar Jonggol
          </h1>
          <div className="mt-10 mb-10 px-16 lg:flex hidden justify-center">
            <div className=" rounded-xl bg-white flex lg:px-5 lg:py-5 ">
              {data.map((i, key) => (
                <CardInfo key={key} index={key} data={i} />
              ))}
            </div>
          </div>
          {/* jumlah for dekstop */}
          {/* jumlah for mobile */}
          <div className="mt-10 mb-10 px-8 lg:hidden flex justify-center">
            <div className="rounded-xl bg-white grid grid-cols-2">
              {data.map((i, key) => (
                <CardInfoMobile key={key} index={key} data={i} />
              ))}
            </div>
          </div>
          {/* jumlah for mobile */}
          <div className="border-b-2  lg:w-3/5 w-1/2"></div>
          {/* Data Sekolah */}
          <div className="py-10 flex flex-col justify-center items-center mt-10 gap-y-10 lg:px-16">
            <div className="top flex flex-col gap-y-5 justify-center items-center lg:w-3/5 text-center">
              <h1 className="font-bold text-4xl text-white">
                Informasi Seputar Pendidikan
              </h1>
              <p className="text-white">
                Kecamatan Jonggol memiliki beragam sekolah yang meliputi jenjang
                pendidikan dari SMP, SMA, dan SMK. Berikut total sekolah di
                kecamatan Jonggol mencakup sekolah negeri dan swasta
              </p>
            </div>
            <div
              className={`content  gap-16 w-full justify-center items-center grid lg:grid-cols-4 grid-cols-1`}
            >
              {dataSekolah.slice(0, limit).map((i, key) => (
                <CardSekolah key={key} i={i} />
              ))}
            </div>
            {limit > 4 ? (
              <></>
            ) : (
              <div className=" flex justify-center items-center">
                <button
                  onClick={() => setLimit(limit + 12)}
                  onMouseEnter={handleMouseOver2}
                  onMouseLeave={handleMouseOut2}
                  className={` px-5 py-2 2xl:py-3 rounded-full lg:text-sm 2xl:text-base font-semibold mt-5 ${
                    hoverButton2
                      ? "bg-[#2F872F] text-white transition-all border-2 border-[#2F872F]"
                      : "border-white border-2  text-white transition-all"
                  }`}
                >
                  Selengkapnya
                </button>
              </div>
            )}
          </div>
          {/* Data Sekolah */}
        </div>
        {/* Kesehatan */}
        <div className="2xl:px-28 lg:px-16 px-5 py-10 lg:gap-y-0 gap-y-3 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-[#3C903C]">
            Informasi Seputar Kesehatan
          </h1>
          <Kesehatan />
        </div>
        {/* Kesehatan */}

        {/* Keagamaan */}
        <div className="flex flex-col justify-center items-center py-20 lg:px-28 px-10 mb-20 bg-[#3C903C] rounded-xl">
          {/* top */}
          <div className="flex lg:flex-row flex-col-reverse lg:gap-y-0 gap-y-5 justify-between w-full items-center">
            <div className="left relative lg:w-auto w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-white left-3"
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
                className="block w-full placeholder:text-white text-white pl-12 px-4 py-3 bg-[#3C903C] border rounded-xl focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Search..."
              />
            </div>
            <div className="right">
              <div className="w-full py-3 border-2 px-5 rounded-xl flex justify-center items-center border-white">
                <h1 className="font-bold text-2xl text-white">
                  Menampilkan Sarana Sarana Keagamaan
                </h1>
              </div>
            </div>
          </div>
          <div className="border-b-2 mt-10 w-full mb-10"></div>
          {/* top */}
          {/* content */}
          <div className=" py-5 w-full">
            <div
              className={`${
                loadAgama
                  ? "grid lg:grid-cols-3 grid-cols-1"
                  : agama.length == 0
                  ? ""
                  : "grid lg:grid-cols-3 grid-cols-1"
              } mb-20 gap-4 `}
            >
              {!loadAgama ? (
                agama.length != 0 ? (
                  agama.map((i, key) => <CardIbadah key={key} />)
                ) : (
                  <>
                    <div className="flex flex-col justify-center items-center">
                      <Lottie animationData={NotFound} className="lg:w-1/4" />
                      <h1 className="font-bold text-white">
                        Sarana Keagaman Tidak Tersedia
                      </h1>
                    </div>
                  </>
                )
              ) : (
                <></>
              )}
            </div>
          </div>
          {/* content */}
        </div>
        {/* Keagamaan */}
      </div>
    </>
  );
}

function CardIbadah() {
  return (
    <>
      <div className="2xl:px-16 px-10 py-5 gap-y-3 rounded-2xl bg-white flex flex-col items-center">
        <div className="uppercase px-7 py-3 font-bold bg-[#3C903C] text-white rounded-full text-xl">
          Masjid
        </div>
        <h1 className="font-bold">Masjid Umar Bin Khottob</h1>
        <h1 className="font-bold">Desa Suka Galih</h1>
      </div>
    </>
  );
}

function Desa({ i }) {
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
      <div className="2xl:px-16 px-10 py-10 rounded-2xl bg-white flex flex-col items-center">
        <div className="uppercase px-7 py-3 font-bold bg-[#3C903C] text-white rounded-2xl text-xl">
          {i.nama_desa}
        </div>
        <div className="flex 2xl:flex-row flex-col justify-between w-full mt-5">
          <div>
            <h1 className="font-bold">Kepala Desa</h1>
            <h1 className="flex justify-start items-start">{i.kepala_desa}</h1>
          </div>
          <div className="flex flex-col items-end gap-y-2 text-gray-300 cursor-pointer hover:text-[#3C903C] transition-all h-full">
            <h1>Longtitude : {i.longtitude}</h1>
            <h1>Latitude : {i.latitude}</h1>
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
                    <div className="flex flex-col justify-center items-center">
                      <Lottie animationData={NotFound} />
                      <h1 className="font-bold text-lg">Tidak ada data</h1>
                    </div>
                  </SwiperSlide>
                </>
              )
            ) : (
              <></>
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
        className="lg:h-96 2xl:min-h-[27.5rem]  h-96 rounded-2xl bg-cover bg-center shadow-2xl"
        style={{
          backgroundImage: `url(${i.thumbnail})`,
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-25 px-5 py-5 rounded-2xl flex flex-col justify-start items-center">
          <h1 className="text-white font-bold text-2xl">{i.kategori}</h1>
          <h1 className="text-white font-semibold text-xl">{i.nama_potensi}</h1>
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

  console.log(foto);
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
                <Dialog.Panel className=" relative flex lg:gap-x-20 lg:space-y-0 space-y-20  text-center overflow-hidden transform transition-all  justify-center ">
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
      <div className=" items-center flex flex-col justify-center">
        <img
          className=" rounded-lg  2xl:min-w-[680px] 2xl:min-h-[443px] 2xl:max-h-[443px] md:min-w-[490px] md:min-h-[318px] md:max-h-[318px] min-w-[353px] min-h-[215px] max-h-[215px]"
          src={img}
          alt="gambar album"
        />
        <div className=" items-center gap-y-5 flex flex-col mt-10 w-11/12">
          <h1 className="font-semibold text-white lg:text-lg">
            {date.getDate()} {monthName} {date.getFullYear()} | {nama}
          </h1>

          <p className="text-white lg:w-3/4 md:w-full sm:w-1/2 w-4/5  2xl:text-sm text-xs font-extralight">
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
        console.log(res.data.data);
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
        console.log(res.data.data);
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
        className={`card flex flex-col text-center items-center gap-y-5 bg-white  w-full 2xl:px-4 lg:px-3 px-4 pt-20 pb-10 rounded-[20px] cursor-pointer transition-all  ${
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
            <p>{countSekolah.swasta}</p>
            <p>Swasta</p>
          </div>
          <div className="border-l-2 border-black "></div>
          <div className="swasta flex flex-col items-center">
            <p>{countSekolah.negeri}</p>
            <p>Negeri</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={() => navigate(`/sekolah/${i.nama}&${i.initial}`)}
            onMouseEnter={handleMouseOver2}
            onMouseLeave={handleMouseOut2}
            className={` px-5 py-2 2xl:py-3 rounded-full lg:text-sm 2xl:text-base font-semibold mt-5 bg-[#2F872F] text-white transition-all border-2 border-[#2F872F] `}
          >
            Selengkapnya
          </button>
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
        className={`penduduk flex flex-col justify-center text-center  items-center  gap-y-1  px-5 border-[0.5px]  py-5 ${
          data.id == 1
            ? "rounded-tl-xl"
            : data.id == 2
            ? "rounded-tr-xl"
            : data.id == 3
            ? "rounded-bl-xl"
            : "rounded-br-xl"
        }`}
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

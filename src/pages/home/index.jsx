import React, { useEffect, useRef, useState } from "react";
import Slider from "./component/Slider";
import siapmasjo from "../../assets/logo/siapmasjo.png";
import sipahadasi from "../../assets/logo/sipahadesi.png";
import sipaojol from "../../assets/logo/sipaojol.png";
import Galeri from "./component/Galeri";
import {
  ArrowCircleRight,
  ArrowRight2,
  Calendar,
  Location,
} from "iconsax-react";
import CountUp from "react-countup";
import { getApi } from "../../API/restApi";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import NotFound from "../../assets/json/93134-not-found.json";
import ErrorIndicator from "../../assets/json/98642-error-404.json";
import Potensi from "./component/Potensi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/effect-fade";
import "swiper/css";
import UnderlineButton2 from "./component/underlineButton2";
import AnimatedButton from "../../component/animatedButton";
import AnimatedButton2 from "../../component/animatedButton2";
import { useDispatch, useSelector } from "react-redux";
import { changeState } from "../../redux/actions";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Agendacard from "./component/CardAgenda";
import AgendaContent from "./component/AgendaContent";
import AgendaForMobile from "./component/AgendaForMobile";
export default function Home() {
  const navigate = useNavigate();
  const swiperRef = React.useRef();
  const [pageAgendaSlider, setPageAgendaSlider] = React.useState(0);
  const [agendaError, setAgendaError] = React.useState(false);
  const [limit, setLimit] = React.useState(9);
  const [agenda, setAgenda] = React.useState([]);
  const [agendaSidebar, setAgendaSidebar] = useState(false);
  const [loadAgenda, setLoadAgenda] = React.useState(true);
  const [penduduk, setPenduduk] = React.useState();
  const load = [1, 2, 3];
  const [isSticky, setIsSticky] = useState(true);

  const handleScroll = (e) => {
    const scrollPosition = e.target.scrollTop;
    const secondSectionTop =
      document.querySelector("#second-section").offsetTop;
    const isPastSecondSection = scrollPosition > secondSectionTop;

    if (isPastSecondSection && isSticky) {
      setIsSticky(false);
    } else if (!isPastSecondSection && !isSticky) {
      setIsSticky(true);
    }
  };

  const getAgenda = async () => {
    try {
      await getApi(`agenda?limit=${limit}`).then((res) => {
        console.log(res);
        setAgenda(res.data.data);
        setLoadAgenda(false);
      });
    } catch (error) {
      console.log(error);
      setLoadAgenda(false);
      setAgendaError(true);
    }
  };

  const handleSlideChange = (swiper) => {
    setPageAgendaSlider(swiper.realIndex);
  };

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

  const getDesa = async () => {
    try {
      await getApi("desa").then((res) => {
        setDesa(res.data.data);
      });
    } catch (error) {
      console.log(error);
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

  const app = [
    {
      id: 1,
      url: siapmasjo,
      desc: "Lorem ipsum dolor sit amet consectetur. Eget laoreet donec commodo placerat viverra scelerisque ut. Sed lorem diam nunc cursus arcu nulla sapien. Non tempor donec suspendisse suspendisse egestas urna adipiscing feugiat. Sit velit eleifend eleifend felis arcu nisi. Eu gravida ultricies amet ut pretium purus aliquam porta a. Duis consectetur donec auctor lorem metus.",
    },
    {
      id: 2,
      url: sipahadasi,
      desc: "Lorem ipsum dolor sit amet consectetur. Eget laoreet donec commodo placerat viverra scelerisque ut. Sed lorem diam nunc cursus arcu nulla sapien. Non tempor donec suspendisse suspendisse egestas urna adipiscing feugiat. Sit velit eleifend eleifend felis arcu nisi. Eu gravida ultricies amet ut pretium purus aliquam porta a. Duis consectetur donec auctor lorem metus.",
    },
    {
      id: 3,
      url: sipaojol,
      desc: "Lorem ipsum dolor sit amet consectetur. Eget laoreet donec commodo placerat viverra scelerisque ut. Sed lorem diam nunc cursus arcu nulla sapien. Non tempor donec suspendisse suspendisse egestas urna adipiscing feugiat. Sit velit eleifend eleifend felis arcu nisi. Eu gravida ultricies amet ut pretium purus aliquam porta a. Duis consectetur donec auctor lorem metus.",
    },
  ];

  const [hoverButton2, setHoverButton2] = React.useState(false);
  const handleMouseOver2 = () => {
    setHoverButton2(true);
  };

  const handleMouseOut2 = () => {
    setHoverButton2(false);
  };

  const [berita, setBerita] = React.useState([]);
  const [beritaError, setBeritaError] = React.useState(false);

  const [loadBerita, setLoadBerita] = React.useState(true);
  const getBerita = async () => {
    try {
      await getApi("berita").then((val) => {
        // console.log(val.data.data);
        setBerita(val.data.data);
        setLoadBerita(false);
      });
    } catch (error) {
      console.log(error);
      setLoadBerita(false);
      setBeritaError(true);
    }
  };

  const handleAgendaSidebar = () => {
    return setAgendaSidebar(!agendaSidebar);
  };

  React.useEffect(() => {
    getBerita();
    getDesa();
    getPenduduk();
    getAsn();
    getAgenda();
  }, []);

  return (
    <>
      <div className=" lg:pt-[100px] pt-[80px] w-full">
        <Slider />

        <section className="" onScroll={handleScroll}>
          <div
            className={`z-50 ${
              isSticky ? "sticky top-[100px]" : "relative"
            } hidden lg:block`}
          >
            <div className="flex items-start absolute">
              <div
                className={`${
                  agendaSidebar ? "ml-0" : "-ml-[350px]"
                } bg-[#017002] drop-shadow-lg rounded-lg rounded-tr-none rounded-tl-none rounded-bl-none w-[350px] h-auto border border-black rounded-br-lg border-l-0 transition-all ease-in-out duration-700`}
              >
                <Agendacard />
              </div>
              <div
                onClick={() => handleAgendaSidebar()}
                className={` flex items-center transition-[0.3s] ease-in-out cursor-pointer duration-700`}
              >
                <div className="bg-[#017002] text-white w-[50px] h-[150px] z-10 flex border border-l-0 border-black rounded-tr-lg rounded-br-lg justify-center items-center">
                  <p className="-rotate-90 text-center z-50">Agenda</p>
                </div>
                <div
                  className={`${
                    agendaSidebar ? "rotate-180" : "rotate-0"
                  } bg-[#017002] rounded-full border border-black transition-all ease-in-out w-fit h-fit`}
                >
                  <ArrowCircleRight size="27" color="#ffffff" />
                </div>
              </div>
            </div>
          </div>
          {/* 
        <div className="mt-32 lg:flex hidden flex-row justify-between items-center 2xl:px-16 lg:px-10 px-8 mb-20 gap-x-96">
          <div className="left flex flex-col gap-y-20 2xl:w-1/3 lg:w-11/12">
            <h1 className="font-bold 2xl:text-6xl lg:text-5xl 2xl:w-3/4">
              Welcome to <span className="font-mono">Jonggol</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Eget laoreet donec commodo
              placerat viverra scelerisque ut. Sed lorem diam nunc cursus arcu
              nulla sapien. Non tempor donec suspendisse suspendisse egestas
              urna adipiscing feugiat. Sit velit eleifend eleifend felis arcu
              nisi. Eu gravida ultricies amet ut pretium purus aliquam porta a.
              Duis consectetur donec auctor lorem metus.
            </p>
          </div>
          <div className="right flex justify-center items-center 2xl:w-1/6 lg:w-1/3 ">
            <img src={Logoutama} draggable="false" className="w-full" alt="" />
          </div>
        </div>
      
        <div className="mt-20 lg:hidden flex flex-col justify-start items-start px-8">
          <div className="top">
            <h1 className="font-bold text-4xl w-3/4">
              Welcome to <span className="font-mono">Jonggol</span>
            </h1>
            <img src={Logoutama} draggable="false" className="w-1/2" alt="" />
          </div>
          <div className="bottom w-3/4 mt-5">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
              molestias voluptatum dolores saepe et quasi voluptates
              necessitatibus optio consequuntur maiores non, repudiandae esse
              excepturi, sit, voluptatibus sint modi quod rem.
            </p>
          </divF>
        </div> 


        {/* jumlah for dekstop */}
          <div className="mt-20 mb-10 px-24 lg:flex hidden justify-center">
            {/* <div className=" rounded-xl bg-white flex lg:px-5 lg:py-5 ">
            {data.map((i, key) => (
              <CardInfo key={key} index={key} data={i} />
            ))}
          </div> */}
            <div className="grid grid-cols-4 gap-x-5 w-full">
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
          {/* Potensi Desa */}
          <Potensi />

          {/* Agenda */}
          <div className="lg:hidden mt-28 mb-10 2xl:px-16 lg:px-10 px-8 flex flex-col items-center justify-center">
            <div className="w-full overflow-hidden  rounded-md">
              <div className="flex flex-col gap-1 bg-green-700 px-5 pt-3 pb-4 text-white">
                <h4 className="text-xl leading-8 font-bold">Agenda Kecamatan Jonggol</h4>{" "}
                <p className="text-xs leading-5">
                  Dapatkan informasi terkait semua kegiatan yang dilakukan di
                  Kecamatan Jonggol.
                </p>
              </div>
              <AgendaForMobile/>
            </div>
          </div>

          {/* program */}
          <div className="mt-28 mb-10 2xl:px-16 lg:px-10 px-8 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold capitalize underline decoration-[#3C903C]">
              Aplikasi Pemerintah
            </h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 2xl:gap-x-24 lg:gap-x-10 gap-10 mt-16 mb-16 w-full justify-center h-full">
              {/* box */}
              {app.map((i, key) => (
                <CardApp key={key} data={i} />
              ))}
              {/* box */}
            </div>
            <AnimatedButton
              onClick={() => navigate("/aplikasi")}
              label={"Lebih Banyak"}
              styleButton={
                "px-5 py-1 rounded-full hover:text-white text-hijauPrimary border-2 border-hijauPrimary before:bg-bgHijauPrimary"
              }
            />
            {/* <div
            onClick={() => navigate('/aplikasi')}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut}
            className={`border-2 border-gray-400 rounded-full px-6 py-3 cursor-pointer ${
              hoverButton
                ? "bg-gray-400 text-white transition-all -translate-y-1 "
                : "text-gray-400 transition-all"
            }`}
          >
            <p className="font-semibold ">Lebih Banyak</p>
          </div> */}
          </div>
          {/* program */}
          {/* Gallery */}
          <Galeri />
          {/* Gallery */}
        </section>

        <section id="second-section">
          {/* Berita */}
          <div className="mt-28 mb-28 flex flex-col items-center justify-center 2xl:px-16 lg:px-10 px-8">
            {/* Title for dekstop */}
            <div className="top lg:flex hidden justify-between items-center w-full">
              <h1 className="font-bold 2xl:text-4xl lg:text-2xl">
                Berita Terbaru
              </h1>
              <div
                onClick={() => {
                  navigate("/berita");
                }}
                className={`flex items-center justify-center gap-x-2  cursor-pointer ${
                  hoverButton2
                    ? "text-[#007100] transition-all -translate-x-1 -translate-y-1"
                    : " text-[#6B7280] transition-all"
                }`}
                onMouseEnter={handleMouseOver2}
                onMouseLeave={handleMouseOut2}
              >
                <h1 className="font-bold 2xl:text-xl lg:text-lg">More News</h1>
                <ArrowRight2
                  size="22"
                  color={`${hoverButton2 ? "#547153" : "#6B7280"}`}
                />
              </div>
            </div>
            {/* Title for dekstop */}
            {/* Title For Mobile */}
            <div className="lg:hidden flex justify-center items-center">
              <h1 className="font-bold text-2xl underline underline-[#547153]">
                Berita Terbaru
              </h1>
            </div>
            {/* Title For Mobile */}
            <div
              className={` content w-full 2xl:mt-20 mt-10   2xl:gap-x-16 lg:gap-x-4 lg:gap-y-0 gap-y-10 ${
                loadBerita
                  ? "grid lg:grid-cols-4 grid-cols-1"
                  : berita.length == 0
                  ? ""
                  : "grid lg:grid-cols-4 grid-cols-1"
              }`}
            >
              {loadBerita ? (
                <>
                  <CardBeritaLoading />
                  <CardBeritaLoading />
                  <CardBeritaLoading />
                  <CardBeritaLoading />
                </>
              ) : berita.length != 0 ? (
                berita
                  .slice(0, 4)
                  .map((i, key) => <CardBerita key={key} i={i} />)
              ) : beritaError ? (
                <>
                  <div className="flex flex-col justify-center items-center">
                    <Lottie animationData={ErrorIndicator} />
                    <h1 className="font-bold">Terjadi Kesalahan</h1>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col justify-center items-center">
                    <Lottie animationData={NotFound} />
                    <h1 className="font-bold">Berita Tidak Tersedia</h1>
                  </div>
                </>
              )}
              <div className="lg:hidden flex justify-center items-center">
                <AnimatedButton
                  onClick={() => navigate("/berita")}
                  label={"More News"}
                  styleButton={
                    "px-5 py-1 rounded-full hover:text-white text-hijauPrimary border-2 border-hijauPrimary before:bg-bgHijauPrimary"
                  }
                />
              </div>
            </div>
          </div>
          {/* Berita */}
        </section>
      </div>
    </>
  );
}

function CardBeritaLoading(params) {
  return (
    <>
      <div className="bg-gray-100 w-full h-80 rounded-2xl border-blue-300 animate-pulse">
        <div className="w-full h-1/2 bg-cover rounded-t-2xl bg-center bg-gray-300"></div>
        <div className="pl-2 pr-10 py-5 space-y-16">
          <div className="space-y-2">
            <div className="text-xs font-bold h-4  bg-gray-300 rounded-full"></div>
            <div className="text-xs font-bold h-4 w-1/4 bg-gray-300 rounded-full"></div>
          </div>
          <div className="text-xs font-bold h-4 w-1/4 bg-gray-300 rounded-full"></div>
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
        className={`penduduk relative flex flex-col  items-center lg:gap-y-5 gap-y-1 lg:px-12 px-5  lg:py-16 py-10 transition-all cursor-default rounded-2xl border-2 ${
          isHovering &&
          "-translate-y-1 -translate-x-1 shadow-xl transition-all bg-white border-0"
          // eslint-disable-next-line eqeqeq
        } `}
      >
        <div className="flex gap-x-3">
          <CountUp
            className="font-bold text-4xl text-[#007100]"
            duration={5}
            decimal={data.count}
            end={data.count}
          />
          {data.title == "Luas Wilayah" && "KM"}
        </div>
        <p className="lg:text-2xl text-lg">{data.title}</p>

        <div
          className={`${
            isHovering ? "absolute opacity-40" : "opacity-0 absolute"
          } top-10 -right-5 `}
        >
          <img
            src="https://cdn.pixabay.com/photo/2012/04/10/17/02/pattern-26432_1280.png"
            alt=""
            width={70}
            className="animated-image"
          />
        </div>
        <div
          className={`${
            isHovering ? "absolute opacity-40" : "opacity-0 absolute"
          } top-0 left-1 transition-all ease-in-out`}
        >
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/001/191/999/small/circle-abstract.png"
            alt=""
            width={70}
            className="animated-image"
          />
        </div>
        <div
          className={`${
            isHovering ? "absolute opacity-40" : "opacity-0 absolute"
          } -bottom-5 left-5 transition-all ease-in-out `}
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/011/196/545/original/zigzag-line-hand-drawn-illustration-design-png.png"
            alt=""
            width={70}
            className="animated-image2"
          />
        </div>
        <div
          className={`${
            isHovering ? "absolute opacity-40" : "opacity-0 absolute"
          } -bottom-10 left-5 transition-all ease-in-out `}
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/011/196/545/original/zigzag-line-hand-drawn-illustration-design-png.png"
            alt=""
            width={70}
            className="animated-image2"
          />
        </div>
        <div
          className={`${
            isHovering ? "absolute opacity-40" : "opacity-0 absolute"
          } -bottom-6 right-5 transition-all ease-in-out rotate-45`}
        >
          <img
            src="https://www.shareicon.net/data/2016/11/08/851132_triangle_512x512.png"
            alt=""
            width={70}
            className="animated-image3 "
          />
        </div>
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
        <div className="flex gap-x-3">
          <CountUp
            className="font-bold text-2xl "
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

function CardApp({ data }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col bg-[#007100]  rounded-xl">
        <div className="atas bg-[#3C903C] bg-opacity-40 py-10 rounded-t-xl px-5 flex justify-center items-center">
          <div
            style={{ backgroundImage: `url(${data.url})` }}
            className="iconApp w-36 h-36 bg-cover bg-center rounded-full"
          ></div>
        </div>
        <div className="bawah   text-center text-white">
          <p className="py-10 2xl:px-16 lg:px-7 px-5 2xl:text-lg">
            {data.desc}
          </p>
          <div className="2xl:text-xl  justify-end font-bold 2xl:mb-10 mb-5 2xl:mr-10 mr-5  flex items-center ">
            <UnderlineButton2
              onClick={() => navigate(`/aplikasi/${data.id}`)}
              label={"Selengkapnya..."}
              styleP={"text-white text-[20px] before:text-kuningPrimary"}
              styleSvg={
                "text-transparent hover:text-kuningPrimary transform translate-x-4"
              }
              styleButton={"after:bg-kuningPrimary"}
            />
            {/* <p
              onClick={() => navigate(`/aplikasi/${data.id}`)}
              onMouseEnter={handleMouseOver}
              onMouseLeave={handleMouseOut}
              className={`cursor-pointer ${
                isHovering
                  ? "text-[#3C903C] -translate-y-0.5 transition ease-in-out"
                  : "text-white transition ease-in-out"
              }`}
            >
              Selengkapnya...
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}

function CardBerita({ i }) {
  const state = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [route, setRoute] = React.useState([]);
  React.useEffect(() => {
    dispatch(
      changeState({
        desa_id: state?.desa_id,
        status: state?.status,
        route: route,
      })
    );
  }, [route.length]);
  // console.log(route);
  const navigate = useNavigate();
  const date = new Date(i.createdAt);
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
      <div
        title={i.judul}
        onClick={() => {
          // setRoute(`/berita/${i.slug}`)
          navigate(`/berita/${i.slug}`, {
            state: { route: `/berita/${i.slug}` },
          });
        }}
        className="bg-[#f5f5fa] w-full 2xl:h-[350px] h-[300px] beritaHover rounded-3xl shadow-md cursor-pointer hover:border hover:border-hijauPrimary transition-all ease-in-out"
      >
        <div
          style={{ backgroundImage: `url(${i.thumbnail})` }}
          className="w-full h-1/2 bg-cover rounded-t-3xl bg-center"
        ></div>
        <div className=" 2xl:px-5 px-3 2xl:py-4 py-2 flex  flex-col justify-between">
          <p className="text-xs 2xl:font-bold lg:font-semibold text-gray-500">
            {date.getDate()} {monthName} {date.getFullYear()}
          </p>
          <div className="2xl:h-28 lg:h-24 w-11/12">
            <h3 className="my-3 font-bold capitalize 2xl:text-xl lg:text-base 2xl:pr-16 anti-blos">
              {i.judul}
            </h3>
          </div>
          <small className="text-xs font-bold  text-[#547153] capitalize">
            {i.author.username}
          </small>
        </div>
      </div>
    </>
  );
}

function CardAgendaLoading() {
  return (
    <div className="bg-[#3C903C] w-full h-80 flex flex-col rounded-2xl py-10 px-5 border-blue-300 animate-pulse">
      <div className="flex justify-between flex-col h-full">
        <div>
          <div className="flex justify-between w-full">
            <div className="left w-1/4 h-4 bg-gray-300 rounded-full"></div>
            <div className="left w-1/5 h-4 bg-gray-300 rounded-full"></div>
          </div>
          <div className="space-y-2 mt-7">
            <div className="text-xs font-bold h-4 w-3/4 bg-gray-300 rounded-full"></div>
            <div className="text-xs font-bold h-4 w-1/4 bg-gray-300 rounded-full"></div>
          </div>
        </div>
        <div className="flex justify-between w-full items-end">
          <div className="left w-1/4 h-10 bg-gray-300 rounded-full"></div>
          <div className="left w-1/5 h-4 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

function CardAgenda({ data }) {
  const navigate = useNavigate();
  const date = new Date(data.tanggal);
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

  const [hoursStart, minutesStart] = data.start.split(":");
  const formatedStart = `${hoursStart}:${minutesStart}`;
  const [hoursEnd, minutesEnd] = data.end.split(":");
  const formatedEnd = `${hoursEnd}:${minutesEnd}`;

  return (
    <>
      <div className="agendaHover hover:border hover:border-hijauPrimary transition-all ease-in-out 2xl:h-[350px] my-5 lg:h-[350px] h-[300px] w-full bg-white rounded-2xl px-6 py-5 shadow-xl">
        {/* top */}
        <div className="flex justify-between w-full  items-center mb-8">
          <p className="font-bold">
            {formatedStart} - {formatedEnd}
          </p>
          <div className="flex font-bold gap-x-3 items-center text-[#6D6D6D]">
            <Location size="22" color="#6D6D6D" />
            <p>{data.tempat}</p>
          </div>
        </div>
        {/* top */}
        {/* Center */}
        <div className="flex flex-col justify-between h-4/5">
          <h1 className="font-bold text-2xl 2xl:w-3/4">{data.nama_agenda}</h1>
          <div className="flex justify-between w-full items-end">
            {/* <button
              onClick={() => {
                navigate(`/agenda/${data.slug}`);
              }}
              className="px-7 py-3 font-bold bg-[#3C903C] text-white rounded-2xl text-xl"
            >
              Detail
            </button> */}
            <AnimatedButton2
              onClick={() => {
                navigate(`/agenda/${data.slug}`);
              }}
              label={"Detail"}
              styleButton={"bg-hijauPrimary after:bg-kuningPrimary rounded-xl"}
              styleP={
                "px-8 py-4 text-white text-[18px] tracking-wider hover:text-black"
              }
            />

            <div className="flex text-[#6D6D6D] gap-x-3 font-bold text-sm ">
              <Calendar size="22" color="#6D6D6D" />
              <p>
                {date.getDate()} {monthName} {date.getFullYear()}
              </p>
            </div>
          </div>
        </div>
        {/* Center */}
        {/* Bottom */}
      </div>
    </>
  );
}

import React from "react";
import Slider from "./component/Slider";
import Logoutama from "../../assets/logo/logo-utama.png";
import siapmasjo from "../../assets/logo/siapmasjo.png";
import sipahadasi from "../../assets/logo/sipahadesi.png";
import sipaojol from "../../assets/logo/sipaojol.png";
import Galeri from "./component/Galeri";
import { ArrowRight2 } from "iconsax-react";
import berita1 from "../../assets/images/save-rohingya.jpg";
import berita2 from "../../assets/images/anies.jpeg";
import berita3 from "../../assets/images/jakarta.jpeg";
import berita4 from "../../assets/images/suami.jpeg";
import CountUp from "react-countup";
import { getApi } from "../../API/restApi";
import { useNavigate } from "react-router-dom";
import beritaNotFound from "../../assets/Icon/berita not found.png";

export default function Home() {
  const navigate = useNavigate();
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

  const dataBerita = [
    {
      id: 1,
      title: "Solidaritas Tanpa Batas Untuk Rohingnya",
      cover: berita1,
      date: "24 Desember 2022",
      vilage: "Desa Singasari",
    },
    {
      id: 2,
      title:
        "Viral Kuda Delman Anies Mundur-mundur Menuju Deklarasi, Ini Kata PKS",
      cover: berita2,
      date: "24 Februari 2023",
      vilage: "Desa Singasari",
    },
    {
      id: 3,
      title:
        "Banjir Jakarta 24 Februari 2023: Titik Lokasi hingga Kondisi Terkini",
      cover: berita3,
      date: "19 Februari 2023",
      vilage: "Desa Cibodas",
    },
    {
      id: 4,
      title: "Viral Suami Lempar Istri ke Laut dari Kapal Merak-Bakauheni",
      cover: berita4,
      date: "1 Januari 2023",
      vilage: "Desa Cibodas",
    },
  ];

  const [berita, setBerita] = React.useState([]);
  const [loadBerita, setLoadBerita] = React.useState(true);
  const getBerita = async () => {
    try {
      getApi("berita").then((val) => {
        console.log(val.data.data);
        setBerita(val.data.data);
        setLoadBerita(false);
      });
    } catch (error) {
      console.log(error);
      setLoadBerita(false);
    }
  };



  React.useEffect(() => {
    getBerita();

  }, []);

  return (
    <>
      <div className=" lg:pt-[100px] pt-[80px] w-full">
        <Slider />
        {/* about for dekstop */}
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
            <img src={Logoutama} className="w-full" alt="" />
          </div>
        </div>
        {/* about for dekstop */}
        {/* about for mobile */}
        <div className="mt-20 lg:hidden flex flex-col justify-start items-start px-8">
          <div className="top">
            <h1 className="font-bold text-4xl w-3/4">
              Welcome to <span className="font-mono">Jonggol</span>
            </h1>
            <img src={Logoutama} className="w-1/2" alt="" />
          </div>
          <div className="bottom w-3/4 mt-5">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
              molestias voluptatum dolores saepe et quasi voluptates
              necessitatibus optio consequuntur maiores non, repudiandae esse
              excepturi, sit, voluptatibus sint modi quod rem.
            </p>
          </div>
        </div>
        {/* about for mobile */}

        {/* jumlah for dekstop */}
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
          {/* <div
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut}
            className={`border-2 border-gray-400 rounded-full px-6 py-3 cursor-pointer ${
              hoverButton
                ? "bg-gray-400 text-white transition-all -translate-y-1 "
                : "text-gray-400 transition-all"
            }`}
          >
            <p className="font-semibold ">See More</p>
          </div> */}
        </div>
        {/* program */}
        {/* Gallery */}
        <Galeri />
        {/* Gallery */}
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
              berita.slice(0, 4).map((i, key) => <CardBerita key={key} i={i} />)
            ) : (
              <>
                <div className="relative flex justify-center items-center py-20">
                  <img src={beritaNotFound} className="h-[200px]" alt="" />
                </div>
              </>
            )}
            <div className="lg:hidden flex justify-center items-center">
              <button
                onClick={() => {
                  navigate("/berita");
                }}
                onMouseEnter={handleMouseOver2}
                onMouseLeave={handleMouseOut2}
                className={` px-5 py-2 2xl:py-3 rounded-full lg:text-sm 2xl:text-base font-semibold ${
                  hoverButton2
                    ? "bg-[#007100] text-white transition-all border-2 border-[#007100]"
                    : "border-[#007100] border-2  text-[#007100] transition-all"
                }`}
              >
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
        {/* Berita */}
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

function CardApp({ data }) {
  const [isHovering, setIsHovering] = React.useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
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
            <p
              onMouseEnter={handleMouseOver}
              onMouseLeave={handleMouseOut}
              className={`cursor-pointer ${
                isHovering
                  ? "text-[#3C903C] -translate-y-0.5 transition ease-in-out"
                  : "text-white transition ease-in-out"
              }`}
            >
              Selengkapnya...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function CardBerita({ i }) {
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
          navigate(`/berita/${i._id}`);
        }}
        className="bg-[#f5f5fa] w-full 2xl:h-[350px] h-[300px]  rounded-3xl shadow-md cursor-pointer"
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
          <small className="text-xs font-bold  text-[#547153]">
            {i.author.email}
          </small>
        </div>
      </div>
    </>
  );
}

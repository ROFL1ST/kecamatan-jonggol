import React from "react";
import CountUp from "react-countup";
import Logoutama from "../../assets/logo/logo-utama.png";

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
  return (
    <>
      <div className="lg:pt-[100px] pt-[80px] w-screen">
        {/* about for dekstop */}
        <div className="mt-32 lg:flex hidden flex-row justify-between items-center 2xl:px-16 lg:px-10 px-8 mb-28 gap-x-96">
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
        {/* Data Sekolah */}
        <div className="py-10 flex flex-col justify-center items-center mt-20 gap-y-10 px-16">
          <div className="top flex flex-col gap-y-5 justify-center items-center lg:w-3/5 text-center">
            <h1 className="font-bold text-2xl">Data Sekolah</h1>
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

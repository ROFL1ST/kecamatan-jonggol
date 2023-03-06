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
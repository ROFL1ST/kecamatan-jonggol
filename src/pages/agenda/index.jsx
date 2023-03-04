import { Calendar, Location } from "iconsax-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Agenda() {
  const [hoverButton2, setHoverButton2] = React.useState(false);

  const handleMouseOver2 = () => {
    setHoverButton2(true);
  };

  const handleMouseOut2 = () => {
    setHoverButton2(false);
  };
  const data = [
    {
      _id: 1,
      title: "Pelantikan Pengurus Gerakan Pramuka Kwartir Ranting Jonggol",
      jamIn: "10.00",
      jamOut: "13.00",
      tgl: "28 Desmber 2023",
      tempat: "Desa Singasari",
    },
    {
      _id: 2,
      title: "Pelantikan Pengurus Gerakan Pramuka Kwartir Ranting Jonggol",
      jamIn: "10.00",
      jamOut: "13.00",
      tgl: "28 Desmber 2023",
      tempat: "Desa Singasari",
    },
    {
      _id: 3,
      title: "Pelantikan Pengurus Gerakan Pramuka Kwartir Ranting Jonggol",
      jamIn: "10.00",
      jamOut: "13.00",
      tgl: "28 Desmber 2023",
      tempat: "Desa Singasari",
    },
    {
      _id: 4,
      title: "Pelantikan Pengurus Gerakan Pramuka Kwartir Ranting Jonggol",
      jamIn: "10.00",
      jamOut: "13.00",
      tgl: "28 Desmber 2023",
      tempat: "Desa Singasari",
    },
    {
      _id: 5,
      title: "Pelantikan Pengurus Gerakan Pramuka Kwartir Ranting Jonggol",
      jamIn: "10.00",
      jamOut: "13.00",
      tgl: "28 Desmber 2023",
      tempat: "Desa Singasari",
    },
  ];
  return (
    <>
      <div className="w-screen pt-[100px]">
        <div className="lg:px-24 px-10">
          <div className="mt-20 flex justify-center ">
            <div className=" rounded-full px-10 py-3 bg-[#3C903C] cursor-default">
              <h1 className="font-bold text-4xl text-white">Agenda</h1>
            </div>
          </div>
          <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 mb-20 gap-y-10 gap-x-10 mt-20">
            {data.map((i, key) => (
              <Card key={key} data={i} />
            ))}
          </div>
          <div className=" flex justify-center items-center mb-32">
            <button
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
        </div>
      </div>
    </>
  );
}

function Card({ data }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="2xl:h-[350px] lg:h-[350px] h-[300px] w-full bg-white rounded-2xl px-6 py-5 shadow-xl">
        {/* top */}
        <div className="flex justify-between w-full  items-center mb-8">
          <p className="font-bold">
            {data.jamIn} - {data.jamOut}
          </p>
          <div className="flex font-bold gap-x-3 items-center text-[#6D6D6D]">
            <Location size="22" color="#6D6D6D" />
            <p>{data.tempat}</p>
          </div>
        </div>
        {/* top */}
        {/* Center */}
        <div className="flex flex-col justify-between h-4/5">
          <h1 className="font-bold text-2xl 2xl:w-3/4">{data.title}</h1>
          <div className="flex justify-between w-full items-end">
            <button
              onClick={() => {
                navigate(`/agenda/${data._id}`);
              }}
              className="px-7 py-3 font-bold bg-[#3C903C] text-white rounded-2xl text-xl"
            >
              Detail
            </button>
            <div className="flex text-[#6D6D6D] gap-x-3 font-bold text-sm">
              <Calendar size="22" color="#6D6D6D" />
              <p>{data.tgl}</p>
            </div>
          </div>
        </div>
        {/* Center */}
        {/* Bottom */}

        {/* Bottom */}
      </div>
    </>
  );
}

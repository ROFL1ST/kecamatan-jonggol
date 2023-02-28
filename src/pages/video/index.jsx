import React from "react";
import { useNavigate } from "react-router-dom";

export default function Video() {
  const data = [
    {
      id: 1,
      title: "Cara Jadi Orang Asik dan Pede",
      thumbnail:
        "https://i.ytimg.com/vi/k_Yg0jvDFr4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7JU2F4Wo0wZM9owZF0PDAsR6JnA",
      url: "https://www.youtube.com/embed/k_Yg0jvDFr4",
      views: 10,
    },
    {
      id: 2,
      title: "NERAKA TERDALAM DI MITOLOGI YUNANI, TARTARUS.",
      thumbnail:
        "https://i.ytimg.com/vi/jb5lve165uQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDt6lG6g_nRa4BiR79V1pOR_qO4LQ",
      url: "https://www.youtube.com/embed/jb5lve165uQ",
      views: 100,
    },
    {
      id: 3,
      title: "Cara Istirahat Yang Benar Menurut Psikologi",
      thumbnail:
        "https://i.ytimg.com/vi/CRGf7ZmLDNY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKCQPBZ-goHYleepYe_4BevPrXug",
      url: "https://www.youtube.com/embed/CRGf7ZmLDNY",
      views: 100,
    },
    {
      id: 4,
      title: "Orang-Orang Ini Bisa ‘Melihat’ Suara",
      thumbnail:
        "https://i.ytimg.com/vi/pCMxuCqRWO4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDufGfD7EPHSWGGw_JE2VK4lRcUuw",
      url: "https://www.youtube.com/embed/pCMxuCqRWO4",
      views: 100,
    },
    {
      id: 5,
      title:
        "DIBACAIN: Fokus Ke 1%, Dapet Hasil 300% — Atomic Habits (James Clear)",
      thumbnail:
        "https://i.ytimg.com/vi/ecDqujAaa0Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDrDIBr6VMD0C-ATBn7NpUDFC6TQ",
      url: "https://www.youtube.com/embed/ecDqujAaa0Y",
      views: 100,
    },
  ];

  
  return (
    <>
      <div className="w-screen pt-[100px]">
        <div className="lg:px-16 px-10">
          <div className="mt-20 flex justify-center ">
            <div className=" rounded-full px-10 py-3 bg-[#3C903C] cursor-default">
              <h1 className="font-bold text-4xl text-white">Video</h1>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 mb-20 gap-4 mt-20">
            {data.map((i, key) => (
              <CardVideo key={key} data={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function CardVideo({ data }) {
  const navigate = useNavigate();

  // hover
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
        onClick={() => {
          navigate(`/video/${data.id}`);
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="my-auto items-center"
      >
        <div
          style={{
            backgroundImage: `url(${data.thumbnail})`,
          }}
          className=" rounded-lg mx-auto max-h-96 min-w-full bg-no-repeat bg-cover relative"
        >
          <div
            className={` rounded-lg   bg-black xl:p-28 md:p-20 sm:p-36 p-20 cursor-pointer  ${
              isHovering
                ? "hover:bg-gradient-to-t hover:from-black bg-black bg-opacity-25 transition-all ease-in-out "
                : "bg-black bg-opacity-25 transition-all ease-in-out "
            }`}
          >
            <div className="mx-auto flex justify-center items-center ">
              <div className="bg-white bg-opacity-25 rounded-full xl:p-5 p-2 border-white border flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="lg:w-10 lg:h-10 w-5 h-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                  />
                </svg>
              </div>
            </div>

            <div className="absolute justify-start flex flex-col bottom-5 left-5 w-4/5">
              <p className="uppercase font-bold text-white xl:text-base lg:text-base md:text-sm text-sm truncate ">
                {data.title}
              </p>
              <p
                className={`${
                  isHovering ? "flex transition-all" : "hidden transition-all"
                }  text-white text-sm `}
              >
                Views {data.views}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

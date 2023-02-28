import React from "react";

export default function DetailVideo() {
  const data = [
    {
      id: 1,
      title: "Cara Jadi Orang Asik dan Pede",
      thumbnail:
        "https://i.ytimg.com/vi/k_Yg0jvDFr4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7JU2F4Wo0wZM9owZF0PDAsR6JnA",
      url: "https://www.youtube.com/embed/k_Yg0jvDFr4",
      author: "Satu Persen - Indonesia Life School",
      views: 10,
      createAt: "03 Desember 2022",
    },
    {
      id: 2,
      title: "NERAKA TERDALAM DI MITOLOGI YUNANI, TARTARUS.",
      thumbnail:
        "https://i.ytimg.com/vi/jb5lve165uQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDt6lG6g_nRa4BiR79V1pOR_qO4LQ",
      url: "https://www.youtube.com/embed/jb5lve165uQ",
      author: "Aurel Val",
      views: 100,
      createAt: "03 Desember 2022",
    },
    {
      id: 3,
      title: "Cara Istirahat Yang Benar Menurut Psikologi",
      thumbnail:
        "https://i.ytimg.com/vi/CRGf7ZmLDNY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKCQPBZ-goHYleepYe_4BevPrXug",
      url: "https://www.youtube.com/embed/CRGf7ZmLDNY",
      author: "Satu Persen - Indonesia Life School",
      views: 100,
      createAt: "03 Desember 2022",
    },
    {
      id: 4,
      title: "Orang-Orang Ini Bisa ‘Melihat’ Suara",
      thumbnail:
        "https://i.ytimg.com/vi/pCMxuCqRWO4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDufGfD7EPHSWGGw_JE2VK4lRcUuw",
      url: "https://www.youtube.com/embed/pCMxuCqRWO4",
      author: "Kok Bisa?",
      views: 100,
      createAt: "03 Desember 2022",
    },
    {
      id: 5,
      title:
        "DIBACAIN: Fokus Ke 1%, Dapet Hasil 300% — Atomic Habits (James Clear)",
      thumbnail:
        "https://i.ytimg.com/vi/ecDqujAaa0Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDrDIBr6VMD0C-ATBn7NpUDFC6TQ",
      url: "https://www.youtube.com/embed/ecDqujAaa0Y",
      author: "Satu Persen - Indonesia Life School",
      views: 100,
      createAt: "03 Desember 2022",
    },
  ];

  
  return (
    <>
      <div className="w-screen lg:pt-[110px] pt-[80px]">
        <div className="pb-20 lg:px-16 flex lg:flex-row flex-col h-full lg:justify-between justify-center gap-x-7">
          <div className="left lg:w-[70%] w-full h-full flex flex-col pb-20">
            <iframe
              title="yt"
              className="xl:h-[680px] md:h-[450px] h-[280px]  pb-5"
              src="https://www.youtube.com/embed/NTiugMmMVBc"
              frameborder="0"
            ></iframe>
            <div className="lg:px-0 px-5">
              <h1 className="text-xl font-bold pb-2 capitalize">
                Alasan Bahasa Inggris Susah Dipelajari (Solusi Belajar Bahasa
                Inggris) | Satu Insight Episode 39
              </h1>
              <p className="text-xs">10 Views • 03 Desember 2022</p>
              <div className="border-b-2 pt-2 border-black"></div>
              <p className="pt-10 text-sm lg:w-3/4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ab
                nobis dolor excepturi suscipit, aspernatur est fugit sint eaque
                ullam eveniet, deserunt illum quidem laborum velit cupiditate
                earum reiciendis? Cupiditate, dolorem perspiciatis cum esse
                explicabo nesciunt dicta modi amet magni exercitationem
                necessitatibus, rerum facere temporibus officiis? Porro quam
                iure vitae molestias est sapiente sunt. Laboriosam suscipit
                impedit ducimus voluptatibus? Harum accusantium expedita
                provident doloremque libero tempora suscipit eligendi non
                explicabo. Mollitia delectus hic, incidunt molestiae saepe
                labore amet suscipit distinctio veniam quibusdam enim ipsa odit
                laudantium praesentium ducimus atque vitae totam in itaque
                recusandae fugiat deserunt vero impedit. Cupiditate, recusandae.
              </p>
            </div>
          </div>
          <div className="right right  lg:w-[29%] w-full h-full  flex flex-col lg:px-0 px-5">
            <div className="border-b-2 mb-7 border-gray-300 flex lg:hidden"></div>
            <div className="lg:space-y-2 space-y-2">
              {data.map((i, key) => (
                <CardVideo key={key} data={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function CardVideo({ data }) {
  return (
    <>
      <div className="flex justify-between cursor-pointer gap-x-3">
        <img src={data.thumbnail} className="w-1/2 rounded-lg" alt="" />
        <div className="right w-1/2 flex flex-col  gap-y-2">
          <div className="top">
            <h1 className="font-bold anti-blos lg:text-lg">{data.title}</h1>
          </div>
          <div className="bottom font-semibold text-sm">
            <p className="anti-blos2">{data.author}</p>
            <p>
              {data.views} x ditonton • {data.createAt}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

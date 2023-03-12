import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import { Link21 } from "iconsax-react";
export default function Kesehatan() {
  const data = [1, 2, 3, 4, 5, 5];
  return (
    <>
      <div className="w-full mt-10">
        <Swiper
          direction={"vertical"}
          slidesPerView={"auto"}
          freeMode={true}
          
          mousewheel={true}
          modules={[FreeMode, Scrollbar, Mousewheel]}
          className="mySwiper  h-[80vh]"
        >
          {data.map((i, key) => (
            <SwiperSlide key={key}>
              <div className="flex flex-col  items-start">
                <h1 className="text-3xl font-semibold text-[#3C903C]">
                  Rumah sakit (RS)
                </h1>
                <div className="border-b-2 border-[#3C903C] w-full pt-2"></div>
                <div className="flex justify-between w-full gap-x-20 mt-10">
                  <div className="left w-1/3">
                    <div className="foto h-[50vh] bg-cover bg-center bg-red-500 rounded-xl flex"></div>
                  </div>
                  <div className="right w-[60%]">
                    <h1 className="font-bold text-4xl text-[#3C903C]">
                      Rs Permata Jonggol
                    </h1>
                    <p className="pt-10 text-lg">
                      RS Permata Jonggol adalah rumah sakit umum yang didirikan
                      pada tahun 2014 dengan visi menjadi rumah sakit pilihan
                      utama di wilayah Bogor Timur. Mereka berkomitmen untuk
                      memberikan pelayanan yang bermutu, profesional, dan
                      berorientasi pada keselamatan pasien, didukung oleh
                      fasilitas dan peralatan medis berteknologi modern serta
                      dokter ahli dalam bidangnya. Fasilitas medis yang tersedia
                      termasuk laboratorium, radiologi, dan farmasi yang buka
                      selama 24 jam. RS Permata Jonggol juga memiliki klinik
                      eksekutif yang memungkinkan pasien untuk membuat janji
                      terlebih dahulu dan berkonsultasi dengan dokter tanpa
                      perlu antri untuk mengambil obat di bagian farmasi.
                    </p>
                    <div className="flex flex-row gap-x-5 mt-10">
                      <div className="view text-white font-semibold px-10 py-4 rounded-xl bg-[#3C903C]">
                        View Detail
                      </div>
                      <div className="px-12 py-4 border-2 border-[#3C903C] rounded-xl text-[#3C903C]">
                        Maps
                      </div>
                      <div className="flex gap-x-2 px-5 py-4 border-2 border-[#3C903C] rounded-xl text-[#3C903C]">
                        <Link21 /> rspermatajonggol.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

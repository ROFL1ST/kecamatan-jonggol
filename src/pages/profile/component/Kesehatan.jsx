import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import Lottie from "lottie-react";
import NotFound from "../../../assets/json/93134-not-found.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import { Link21, Map } from "iconsax-react";
import { getApi } from "../../../API/restApi";
export default function Kesehatan() {
  const [kesehatan, setKesehatan] = React.useState({
    data: [],
    loading: true,
    error: false,
  });

  const getKesehatan = async () => {
    try {
      await getApi("kesehatan").then((res) => {
        setKesehatan((s) => ({ ...s, data: res.data.data, loading: false }));
      });
    } catch (error) {
      console.log(error);
      setKesehatan((s) => ({ ...s, loading: false, error: true }));
    }
  };

  React.useEffect(() => {
    getKesehatan();
  }, []);
  return (
    <>
      <div className="w-full mt-10">
        <Swiper
          direction={"vertical"}
          slidesPerView={"auto"}
          freeMode={true}
          mousewheel={true}
          modules={[FreeMode, Scrollbar, Mousewheel]}
          className="mySwiper  lg:h-[80vh] h-[130vh]"
        >
          {kesehatan.loading != true ? (
            kesehatan.data.length != 0 ? (
              kesehatan.data.map((i, key) => (
                <SwiperSlide key={key}>
                  <Isi i={i} />
                </SwiperSlide>
              ))
            ) : (
              <>
                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <Lottie animationData={NotFound} />
                    <h1 className="font-bold">Kesehatan Tidak Tersedia</h1>
                  </div>
                </SwiperSlide>
              </>
            )
          ) : (
            <></>
          )}
        </Swiper>
      </div>
    </>
  );
}

function Isi({ i }) {
  return (
    <>
      <div className="flex flex-col  items-start">
        <h1 className="text-3xl font-semibold text-[#3C903C]">
          Rumah sakit (RS)
        </h1>
        <div className="border-b-2 border-[#3C903C] w-full pt-2"></div>
        <div className="flex lg:flex-row flex-col justify-between w-full gap-x-20 mt-10">
          <div className="left lg:mb-0 mb-5 lg:w-1/3">
            <div
              style={{ backgroundImage: `url(${i.thumbnail})` }}
              className="foto h-[50vh] bg-cover bg-center  rounded-xl flex"
            ></div>
          </div>
          <div className="right lg:w-[60%]">
            <h1 className="font-bold text-4xl text-[#3C903C]">{i.nama}</h1>
            <p className="pt-10 text-lg">{i.deskripsi}</p>
            <div className="flex gap-5 mt-10">
              <div className="view text-white font-semibold px-10 py-4 rounded-xl bg-[#3C903C]">
                Kontak
              </div>
              <div
                onClick={() => {
                  window.open(`${i.maps}`);
                }}
                className="lg:px-12 px-5 flex cursor-pointer gap-x-4 py-4 border-2 border-[#3C903C] rounded-xl text-[#3C903C]"
              >
                <Map />
                Maps
              </div>
              <div className="flex gap-x-2 px-5 py-4 border-2 border-[#3C903C] rounded-xl text-[#3C903C]">
                <Link21 /> {i.web}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

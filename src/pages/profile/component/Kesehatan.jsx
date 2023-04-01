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
import ErrorIndicator from "../../../assets/json/98642-error-404.json";
import AnimatedButton from "../../../component/animatedButton";

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
        <div className="grid grid-cols-4 gap-5 mt-10">
          {kesehatan.loading != true ? (
            kesehatan.data.length != 0 ? (
              kesehatan.data.map((i, key) => <Card i={i} key={key} />)
            ) : kesehatan.error ? (
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
                  <h1 className="font-bold">Kesehatan Tidak Tersedia</h1>
                </div>
              </>
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

function Card({ i }) {
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
  return (
    <>
      <div
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
        className="card flex flex-col  gap-y-5 bg-bgHijauPrimary  w-full  pb-10 rounded-[20px] cursor-pointer transition-all"
      >
        <div
          style={{ backgroundImage: `url(${i.thumbnail})` }}
          className="w-full h-[200px] bg-cover rounded-t-3xl bg-center"
        ></div>
        <div className=" px-5 flex flex-col gap-y-5">
          <h1 className="text-white font-bold">{i.nama}</h1>
          <p className="text-white font-medium">{i.deskripsi}</p>
          <div className="flex gap-x-10 justify-center">
            <AnimatedButton
              // onClick={() => navigate('/aplikasi')}
              label={"Lebih Banyak"}
              styleButton={
                "px-5 py-1 rounded-xl hover:text-black text-white border-2 border-white before:bg-white"
              }
            />
            <AnimatedButton
              // onClick={() => navigate('/aplikasi')}
              label={"Lebih Banyak"}
              styleButton={
                "px-5 py-1 rounded-xl hover:text-black text-white border-2 border-white  before:bg-white"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

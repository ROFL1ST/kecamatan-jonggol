import React from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import Lottie from 'lottie-react';
import NotFound from '../../../assets/json/93134-not-found.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar, Mousewheel } from 'swiper';
import { Call, Link21, Map } from 'iconsax-react';
import { getApi } from '../../../API/restApi';
import ErrorIndicator from '../../../assets/json/98642-error-404.json';
import AnimatedButton from '../../../component/animatedButton';
import AnimatedButton2 from '../../../component/animatedButton2';

export default function Kesehatan() {
  const [kesehatan, setKesehatan] = React.useState({
    data: [],
    loading: true,
    error: false,
  });

  const getKesehatan = async () => {
    try {
      await getApi('kesehatan').then((res) => {
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
        <div
          className={` gap-5 mt-10 ${
            kesehatan.loading == true
              ? 'grid lg:grid-cols-4 grid-cols-1'
              : kesehatan.data.length == 0 || kesehatan.error == true
              ? ''
              : 'grid lg:grid-cols-4 grid-cols-1'
          }`}
        >
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
            [1, 2, 3, 4, 5, 6, 7, 8].map((i, key) => <CardLoading />)
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
        className="card flex flex-col  gap-y-5 bg-bgHijauPrimary w-full pb-10 rounded-[20px] transition-all"
      >
        <div
          style={{ backgroundImage: `url(${i.thumbnail})` }}
          className="w-full h-[200px] bg-cover rounded-t-3xl bg-center"
        ></div>
        <div className=" px-5 flex flex-col gap-y-5">
          <h1 className="text-white font-extrabold text-[18px]">{i.nama}</h1>
          <p className="text-white font-medium text-[15px]">{i.deskripsi}</p>
          <div className="flex justify-between">
            <a href={`tel:${i.kontak}`} className="">
              {/* <Call />
              <p>Call Center</p> */}
              <AnimatedButton2
                styleButton={
                  'bg-white after:bg-kuningPrimary rounded-xl h-full'
                }
                styleP={
                  'flex items-center justify-center gap-x-3 px-8 py-3 text-hijauPrimary text-[13px] tracking-wider hover:text-black'
                }
                label={
                  <>
                    {' '}
                    <Call />
                    <p className="text-left">
                      Call
                      <br />
                      Center
                    </p>{' '}
                  </>
                }
              />
            </a>
            <a href={`${i.maps}`} className="">
              {/* <Map />
              <p>Map</p> */}
              <AnimatedButton2
                styleButton={
                  'bg-white after:bg-kuningPrimary rounded-xl h-full'
                }
                styleP={
                  'flex items-center justify-center gap-x-3 px-8 py-3 text-hijauPrimary text-[13px] tracking-wider hover:text-black'
                }
                label={
                  <>
                    {' '}
                    <Map />
                    <p className="text-left">Map</p>{' '}
                  </>
                }
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function CardLoading(params) {
  return (
    <>
      <div className="bg-gray-100 w-full h-[500px] rounded-2xl border-blue-300 animate-pulse">
        <div className="w-full h-1/2 bg-cover rounded-t-2xl bg-center bg-gray-300"></div>
        <div className="pl-2 pr-10 py-5 space-y-16">
          <div className="space-y-2">
            <div className="text-xs font-bold h-4  bg-gray-300 rounded-full"></div>
            <div className="text-xs font-bold h-4 w-1/4 bg-gray-300 rounded-full"></div>
            <div className="text-xs font-bold h-4  bg-gray-300 rounded-full"></div>
            <div className="text-xs font-bold h-4 w-1/4 bg-gray-300 rounded-full"></div>
            <div className="text-xs font-bold h-4  bg-gray-300 rounded-full"></div>
            <div className="text-xs font-bold h-4 w-1/4 bg-gray-300 rounded-full"></div>
          </div>
          <div className="text-xs font-bold h-4 w-1/4 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </>
  );
}

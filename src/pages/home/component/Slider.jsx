import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper";
import Banner1 from "../../../assets/images/banner1.jpg";
import Banner2 from "../../../assets/images/banner2.jpg";
import Banner3 from "../../../assets/images/banner3.jpg";
import Banner4 from "../../../assets/images/banner4.jpg";

import "swiper/css/effect-fade";
import "swiper/css";
import { ArrowLeft3, ArrowRight3 } from "iconsax-react";
export default function Slider() {
  const swiperRef = React.useRef();
  const banner = [
    {
      id: 1,
      url: Banner1,
      title: "Clean",
      desc: "di kelola secara profesional, menghindari benturan kepentingan, tidak menoleransi suap, menjunjung tinggi kepercayaan dan integritas. Berpedoman pada asas tata kelola pemerintah yang bersih dan baik",
    },
    {
      id: 2,
      url: Banner2,
      title: "Confident",
      desc: "berperan dalam pembangunan ekonomi nasional, menjadi pelopor dalam mewujudkan kabupaten bogor yang termaju dan berkeradaban",
    },
    {
      id: 3,
      url: Banner3,
      title: "Commercial",
      desc: "Menciptakan nilai tambah dengan orientasi komersial, mengambil keputusan berdasarkan prinsip-prinsip bisnis yang sehat",
    },
    {
      id: 4,
      url: Banner4,
      title: "COMPETITIVE",
      desc: "Mampu berkompetisi dalam skala regional maupun internasional, mendorong pertumbuhan investasi, membangun budaya sadar biaya dan menghargai kinerja",
    },
  ];

  const [page, setPage] = React.useState(0);
  const handleSlideChange = (swiper) => {
    setPage(swiper.realIndex);
  };
  return (
    <>
      <Swiper
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={0}
        loop={true}
        //   controller={{ control: firstSwiper }}
        onSlideChange={handleSlideChange}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
       
        modules={[EffectFade,  Autoplay]}
        onSwiper={(swiper) => {
          setPage(swiper.realIndex);
          swiperRef.current = swiper;
        }}
        className="rounded-b-3xl w-screen"
        effect={"fade"}
      >
        {banner.map((i, key) => (
          <SwiperSlide key={key}>
            <div
              className="lg:h-[83vh] h-[70vh] bg-cover bg-center "
              style={{ backgroundImage: `url(${i.url})` }}
            >
              <div className="w-full h-full bg-black bg-opacity-25 2xl:px-16 lg:px-10 px-8 lg:py-32 py-20 rounded-b-2xl flex flex-col justify-end">
                <div className="flex flex-col lg:gap-y-40 gap-y-10 text-white">
                  <h1 className=" font-bold lg:text-6xl text-4xl uppercase">{i.title}</h1>
                  <p className="lg:text-lg 2xl:w-1/3 lg:w-1/2 w-3/4 capitalize">{i.desc}</p>
                </div>
                <div className="absolute bottom-10 right-14 text-white lg:flex hidden items-center">
                  <div className="arrow space-x-5 flex">
                    <ArrowLeft3
                      onClick={() => swiperRef.current.slidePrev()}
                      size="42"
                      color="#FFFFFF"
                      className="cursor-pointer"
                    />
                    <ArrowRight3
                      onClick={() => swiperRef.current.slideNext()}
                      size="42"
                      color="#FFFFFF"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="flex ml-8 items-center gap-x-2">
                    {banner.map((i, key) => (
                      <div
                        key={key}
                        className={`${
                          // eslint-disable-next-line eqeqeq
                          page == key
                            ? "border rounded-full p-[4px] border-white transition-all"
                            : "bg-white rounded-full p-[4px] transition-all"
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

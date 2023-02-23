import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Controller } from "swiper";
import Banner1 from "../../../assets/images/banner1.jpg";
import Banner2 from "../../../assets/images/banner2.jpg";
import Banner3 from "../../../assets/images/banner3.jpg";
import Banner4 from "../../../assets/images/banner4.jpg";

import "swiper/css/effect-fade";
import "swiper/css";
import axios from "axios";
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
  //   const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const handleSlideChange = (swiper) => {
    console.log(`Slide changed to: ${swiper.realIndex}`);
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
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination, Controller]}
        onSwiper={(swiper) => {
          setPage(swiper.realIndex);
          swiperRef.current = swiper;
        }}
        className="rounded-b-2xl"
        effect={"fade"}
      >
        {banner.map((i, key) => (
          <SwiperSlide key={key}>
            <div
              className="h-[83vh] bg-cover bg-center "
              style={{ backgroundImage: `url(${i.url})` }}
            >
              <div className="w-full h-full bg-black bg-opacity-25 px-16 py-32 rounded-2xl flex flex-col justify-end">
                <div className="flex flex-col gap-y-20 text-white">
                  <h1 className=" font-bold text-6xl uppercase">{i.title}</h1>
                  <p className="text-lg w-1/3 capitalize">{i.desc}</p>
                </div>
                <div className="absolute bottom-10 right-10 text-white flex items-center">
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
                            ? "border rounded-full p-[6px] border-white transition-all"
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

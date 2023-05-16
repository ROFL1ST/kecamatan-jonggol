import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper";
import Banner1 from "../../../assets/images/banner1.jpg";
import Banner2 from "../../../assets/images/banner2.jpg";
import Banner3 from "../../../assets/images/banner3.jpg";
import Banner4 from "../../../assets/images/banner4.jpg";
import Banner5 from "../../../assets/images/banner5.jpg";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

import "swiper/css/effect-fade";
import "swiper/css";
import { ArrowLeft3, ArrowRight3 } from "iconsax-react";
export default function Slider() {
  const swiperRef = React.useRef();

  const social = [
    {
      id: 1,
      url: "",
      icon: (
        <FaInstagram color="white" size={20} className="social-slider-icon" />
      ),
    },
    {
      id: 2,
      url: "",
      icon: (
        <FaFacebook color="white" size={20} className="social-slider-icon" />
      ),
    },
    {
      id: 3,
      url: "",
      icon: (
        <FaTwitter color="white" size={20} className="social-slider-icon" />
      ),
    },
    {
      id: 4,
      url: "",
      icon: (
        <FaYoutube color="white" size={20} className="social-slider-icon" />
      ),
    },
  ];
  const banner = [
    {
      id: 1,
      url: Banner1,
      title: "Bersama",
      desc: "di kelola secara profesional, menghindari benturan kepentingan, tidak menoleransi suap, menjunjung tinggi kepercayaan dan integritas. Berpedoman pada asas tata kelola pemerintah yang bersih dan baik",
    },
    {
      id: 2,
      url: Banner2,
      title: "Ekonomis",
      desc: "berperan dalam pembangunan ekonomi nasional, menjadi pelopor dalam mewujudkan kabupaten bogor yang termaju dan berkeradaban",
    },
    {
      id: 3,
      url: Banner3,
      title: "Komunikatif",
      desc: "Menciptakan nilai tambah dengan orientasi komersial, mengambil keputusan berdasarkan prinsip-prinsip bisnis yang sehat",
    },
    {
      id: 4,
      url: Banner4,
      title: "Aman",
      desc: "Mampu berkompetisi dalam skala regional maupun internasional, mendorong pertumbuhan investasi, membangun budaya sadar biaya dan menghargai kinerja",
    },
    {
      id: 5,
      url: Banner5,
      title: "Harmonis",
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
          // controller={{ control: firstSwiper }}
        onSlideChange={handleSlideChange}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        onSwiper={(swiper) => {
          setPage(swiper.realIndex);
          swiperRef.current = swiper;
        }}
        className="w-screen rounded-b-3xl"
        effect={"fade"}
      >
        {banner.map((i, key) => (
          <SwiperSlide key={key}>
            <div
              className="relative h-[70vh] bg-cover bg-center lg:h-[83vh]"
              style={{ backgroundImage: `url(${i.url})` }}
            >
              <div className="absolute flex h-full w-full flex-col items-end justify-center space-y-5 pr-5">
                {social.map((_, index) => {
                  return (
                    <a href={_.url}>
                      <div
                        className="social-slider changeColor cursor-pointer rounded-lg p-3 transition-all ease-in-out"
                        key={index}
                      >
                        {_.icon}
                      </div>
                    </a>
                  );
                })}
              </div>
              <div className="flex h-full w-full flex-col justify-end rounded-b-2xl bg-black bg-opacity-25 px-8 py-20 lg:px-10 lg:py-32 2xl:px-16">
                <div className="flex flex-col gap-y-10 text-white lg:gap-y-40">
                  <h1 className=" text-4xl font-bold uppercase lg:text-6xl">
                    {i.title}
                  </h1>
                  <p className="w-3/4 capitalize lg:w-1/2 lg:text-lg 2xl:w-1/3">
                    {i.desc}
                  </p>
                </div>
                <div className="absolute bottom-10 right-14 hidden items-center text-white lg:flex">
                  <div className="arrow flex space-x-5">
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
                  <div className="ml-8 flex items-center gap-x-2">
                    {banner.map((i, key) => (
                      <div
                        key={key}
                        className={`${
                          // eslint-disable-next-line eqeqeq
                          page == key
                            ? "rounded-full border border-white p-[4px] transition-all"
                            : "rounded-full bg-white p-[4px] transition-all"
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

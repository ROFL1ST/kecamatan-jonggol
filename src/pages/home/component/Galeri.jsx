import { ArrowRight3, ArrowLeft3 } from 'iconsax-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import slide1 from '../../../assets/images/kevinmarcus.jpg';
import slide2 from '../../../assets/images/save-rohingya.jpg';
import slide3 from '../../../assets/images/sri-mulyani.jpg';
import { Dialog, Transition } from '@headlessui/react';
import { getApi } from '../../../API/restApi';
import parse from 'html-react-parser';
import NoImage from '../../../assets/images/thumbnail.jpg';
import AnimatedButton from '../../../component/animatedButton';


export default function Galeri() {
  const navigate = useNavigate();
  // const swiperRef = React.useRef(null);

  const [hoverButton, setHoverButton] = React.useState(false);
  const handleMouseOver = () => {
    setHoverButton(true);
  };

  const handleMouseOut = () => {
    setHoverButton(false);
  };

  const load = [1, 2, 3, 5, 6, 7];
  const [dataGaleri, setDataGaleri] = React.useState([]);
  const [loadGaleri, setLoadGaleri] = React.useState(true);
  const getGaleri = async () => {
    try {
      getApi('album').then((res) => {
        setDataGaleri(res.data.data);
        setLoadGaleri(false);
      });
    } catch (error) {
      console.log(error);
      setLoadGaleri(false);
    }
  };

  React.useEffect(() => {
    getGaleri();
  }, []);

  const swiperRef = React.useRef(null);

  return (
    <>
      <div className="mt-28 mb-10 2xl:pl-16 lg:pl-10 lg:pt-20 lg:pb-10 flex flex-col items-center justify-center bg-[#3C903C]">
        <div className="w-full  flex lg:flex-row flex-col lg:justify-between justify-center gap-x-10 mt-20 mb-20 items-center">
          <div className="kiri lg:px-0 px-8 lg:w-1/3 flex flex-col lg:items-start items-center lg:mb-0 mb-10 lg:gap-y-0 gap-y-5">
            <h1 className="text-6xl text-white font-semibold">Foto</h1>
            <p className="text-white my-3 lg:text-sm 2xl:text-lg 2xl:w-3/4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, in
              unde eos alias tenetur totam debitis cum sint ad minima, modi nam.
              Earum tempora nemo a magnam iusto, sequi quo!
            </p>

            {/* <button
              onClick={() => navigate('/foto')}
              onMouseEnter={handleMouseOver}
              onMouseLeave={handleMouseOut}
              className={`lg:flex hidden px-5 py-2 2xl:py-3 rounded-full lg:text-sm 2xl:text-base font-semibold mt-10 ${
                hoverButton
                  ? 'bg-[#007100] text-white transition-all border-2 border-[#007100]'
                  : 'border-white border-2  text-white transition-all'
              }`}
            >
              Selengkapnya
            </button> */}
            <div className='lg:block hidden'>
              <AnimatedButton
                onClick={() => navigate('/foto')}
                label={'Selengkapnya'}
                styleButton={
                  'px-5 mt-5 py-1 rounded-full text-[15px] text-white border-2 border-white hover:text-black hover:border-kuningPrimary before:bg-bgKuningPrimary hover:text-black'
                }
              />
            </div>
          </div>
          <div className="kanan lg:w-2/3 w-full">
            <Swiper
              spaceBetween={20}
              //   controller={{ control: firstSwiper }}
              scrollbar={{
                el: '.swiper-scrollbar',
                draggable: true,
                hide: false,
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Scrollbar]}
              className="myGaleri"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >
              {!loadGaleri ? (
                dataGaleri.map((i, key) => (
                  <SwiperSlide className="swiper-image" key={key}>
                    <CardFoto i={i} />
                  </SwiperSlide>
                ))
              ) : (
                <></>
              )}
            </Swiper>
            <div className="swiper-scrollbar my-scrollbar mt-20 lg:flex !hidden"></div>
            <div className="lg:hidden flex justify-center">
              <AnimatedButton
                onClick={() => navigate('/foto')}
                label={'Selengkapnya'}
                styleButton={
                  'px-5 mt-5 py-1 rounded-full text-[15px] text-white border-2 border-white hover:text-black hover:border-kuningPrimary before:bg-bgKuningPrimary hover:text-black'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function CardFoto({ i }) {
  const [open, setOpen] = React.useState(false);
  const cancelButtonRef = React.useRef(null);
  return (
    <>
      <div
        onClick={() => {
          if (i.cover != null) {
            setOpen(true);
          }
        }}
        className="lg:h-96 2xl:min-h-[30rem] m-7 h-96 rounded-2xl w-full bg-cover bg-center shadow-2xl transition-all ease-in-out hover:scale-105 cursor-pointer"
        style={{
          backgroundImage: `url(${
            i.cover != null ? i.cover.thumbnail : NoImage
          })`,
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-25 px-5 py-5 rounded-2xl flex flex-col justify-end">
          <h1 className="text-white font-semibold">{i.nama_album}</h1>
        </div>
      </div>
      <Modal
        open={open}
        setOpen={setOpen}
        cancelButtonRef={cancelButtonRef}
        foto={i}
      />
    </>
  );
}

function Modal({ open, setOpen, cancelButtonRef, foto }) {
  const swiperRef = React.useRef();

  const data = [
    {
      id: 1,
      img: 'https://jonggolberkah.com/asset/img_galeri/84asemka2.jpg',
      desc: 'Seorang pedagang sedang membungkus souvenir penikahan yang akan dijual ataupun pesanan dari pelanggangnnya.',
      place: 'Desa Singasari',
      createAt: '24 Desember 2022',
    },
    {
      id: 2,
      img: 'https://jonggolberkah.com/asset/img_galeri/84asemka2.jpg',
      desc: 'Seorang pedagang sedang membungkus souvenir penikahan yang akan dijual ataupun pesanan dari pelanggangnnya.',
      place: 'Desa Singasari',
      createAt: '24 Desember 2022',
    },
    {
      id: 3,
      img: 'https://jonggolberkah.com/asset/img_galeri/84asemka2.jpg',
      desc: 'Seorang pedagang sedang membungkus souvenir penikahan yang akan dijual ataupun pesanan dari pelanggangnnya.',
      place: 'Desa Singasari',
      createAt: '24 Desember 2022',
    },
    {
      id: 4,
      img: 'https://jonggolberkah.com/asset/img_galeri/84asemka2.jpg',
      desc: 'Seorang pedagang sedang membungkus souvenir penikahan yang akan dijual ataupun pesanan dari pelanggangnnya.',
      place: 'Desa Singasari',
      createAt: '24 Desember 2022',
    },
  ];

  const [listFoto, setListFoto] = React.useState([]);
  const [loadFoto, setLoadFoto] = React.useState(true);
  const getList = async () => {
    try {
      getApi(`galeri/${foto.cover.slug}`).then((res) => {
        setListFoto(res.data.data);
        setLoadFoto(false);
      });
    } catch (error) {
      console.log(error);
      setLoadFoto(false);
    }
  };

  React.useEffect(() => {
    getList();
  }, []);

  // console.log(foto);
  return (
    <>
      <Transition.Root show={open} as={React.Fragment}>
        <Dialog
          as="div"
          className="relative z-40"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end md:pt-32 md:pb-28 md:my-0 py-32 justify-center min-h-full p-4 text-center ">
              <div className="cursor-pointer flex absolute xl:right-[19.5rem] lg:right-10 right-5 2xl:top-16 top-10 text-white">
                <svg
                  onClick={() => {
                    setOpen(false);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className=" relative flex lg:gap-x-20 lg:space-y-0 space-y-20  text-center overflow-hidden transform transition-all  justify-center ">
                  {/* <div className={`lg:flex hidden justify-center items-center`}>
                    <ArrowLeft3
                      onClick={() => swiperRef.current.slidePrev()}
                      size="42"
                      color="#FFFFFF"
                      className="cursor-pointer"
                    />
                  </div> */}
                  {!loadFoto && listFoto ? (
                    <CardModal
                      img={listFoto.thumbnail}
                      summary={listFoto.deskripsi}
                      tgl={listFoto.createdAt}
                      nama={listFoto.nama}
                    ></CardModal>
                  ) : (
                    <></>
                  )}
                  {/* <Swiper
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    spaceBetween={30}
                    onSwiper={(swiper) => {
                      swiperRef.current = swiper;
                    }}
                    className="modalSwiper"
                  >
                    {!loadFoto ? (
                      listFoto.map((i, key) => (
                        <SwiperSlide className="modalGalery" key={key}>
                          <CardModal
                            img={i.thumbnail}
                            summary={i.desc}
                            tgl={i.createdAt}
                            place={i.nama}
                          ></CardModal>
                        </SwiperSlide>
                      ))
                    ) : (
                      <></>
                    )}
                  </Swiper> */}
                  {/* <div className={`lg:flex hidden justify-center items-center`}>
                    <ArrowRight3
                      onClick={() => swiperRef.current.slideNext()}
                      size="42"
                      color="#FFFFFF"
                      className="cursor-pointer"
                    />
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

function CardModal({ img, tgl, nama, summary }) {
  const date = new Date(tgl);
  var months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'May',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
  var monthName = months[date.getMonth()];
  return (
    <>
      <div className=" items-center flex flex-col justify-center">
        <img
          className=" rounded-lg  2xl:min-w-[680px] 2xl:min-h-[443px] 2xl:max-h-[443px] md:min-w-[490px] md:min-h-[318px] md:max-h-[318px] min-w-[353px] min-h-[215px] max-h-[215px]"
          src={img}
          alt="gambar album"
        />
        <div className=" items-center gap-y-5 flex flex-col mt-10 w-11/12">
          <h1 className="font-semibold text-white lg:text-lg">
            {date.getDate()} {monthName} {date.getFullYear()} | {nama}
          </h1>

          <p className="text-white lg:w-3/4 md:w-full sm:w-1/2 w-4/5  2xl:text-sm text-xs font-extralight">
            <Isi text={summary} />
          </p>
        </div>
      </div>
    </>
  );
}

function Isi({ text }) {
  const reactElement = parse(`${text}`);
  return reactElement;
}

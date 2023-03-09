/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import { Dialog, Transition } from "@headlessui/react";
import React from "react";
import "swiper/css";
import { getApi } from "../../API/restApi";
import galeriNotFound from "../../assets/Icon/galery not found.png";

export default function Foto() {
  const [dataGaleri, setDataGaleri] = React.useState([]);
  const [loadGaleri, setLoadGaleri] = React.useState(true);
  const getGaleri = async () => {
    try {
      getApi("album").then((res) => {
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
  return (
    <>
      <div className="pt-[100px]  w-full">
        <div className="lg:px-16 px-10">
          <div className="mt-20 flex justify-center">
            <div className=" rounded-full px-10 py-3 bg-[#3C903C] cursor-default">
              <h1 className="font-bold text-4xl text-white">Foto</h1>
            </div>
          </div>
          <div
            className={` mb-20 gap-4 mt-20 ${
              loadGaleri
                ? "grid lg:grid-cols-3 grid-cols-1"
                : dataGaleri.length == 0
                ? ""
                : "grid lg:grid-cols-3 grid-cols-1"
            }`}
          >
            {!loadGaleri ? (
              dataGaleri.length != 0 ? (
                dataGaleri.map((i, key) => <CardFoto key={key} data={i} />)
              ) : (
                <>
                  <div className="relative flex justify-center items-center py-20">
                    <img src={galeriNotFound} className="h-[200px]" alt="" />
                  </div>
                </>
              )
            ) : (
              <>
                <CardFotoLoading />
                <CardFotoLoading />
                <CardFotoLoading />
                <CardFotoLoading />
                <CardFotoLoading />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function CardFotoLoading(params) {
  return (
    <>
      <div className=" h-96 rounded-2xl bg-gray-300 animate-pulse">
        <div className="w-full h-full flex flex-col justify-center items-center "></div>
      </div>
    </>
  );
}

function CardFoto({ data }) {
  const [open, setOpen] = React.useState(false);
  const cancelButtonRef = React.useRef(null);

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
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={() => {
          setOpen(true);
        }}
        className="my-auto items-center"
      >
        <div
          style={{
            backgroundImage: `url(${data.cover.thumbnail})`,
          }}
          className=" rounded-lg mx-auto max-h-96 min-w-full bg-no-repeat bg-cover relative"
        >
          <div
            className={` rounded-lg   bg-black xl:p-36 md:p-32 sm:p-36 p-28 cursor-pointer  ${
              isHovering
                ? "hover:bg-gradient-to-t hover:from-black bg-black bg-opacity-25 transition-all ease-in-out "
                : "bg-black bg-opacity-25 transition-all ease-in-out "
            }`}
          >
            <div className="absolute justify-start flex flex-col bottom-5 left-5 w-4/5">
              <p className="uppercase font-bold text-white xl:text-base lg:text-base md:text-sm text-sm truncate ">
                {data.nama_album}
              </p>
              <p
                className={`${
                  isHovering ? "flex transition-all" : "hidden transition-all"
                }  text-white text-sm `}
              >
                {data.jumlah} Foto
              </p>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        setOpen={setOpen}
        cancelButtonRef={cancelButtonRef}
        foto={data}
      />
    </>
  );
}

function Modal({ open, setOpen, cancelButtonRef, foto }) {
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

  console.log(foto);
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
    "Januari",
    "Februari",
    "Maret",
    "April",
    "May",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
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
            {summary}
          </p>
        </div>
      </div>
    </>
  );
}

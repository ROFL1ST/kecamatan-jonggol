import React from "react";
import { getApi } from "../../API/restApi";
import { Listbox } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import notFound from "../../assets/Icon/berita not found.png";
import Loading from "../../component/Loading";
export default function Berita() {
  const [berita, setBerita] = React.useState([]);
  const [loadBerita, setLoadBerita] = React.useState(true);
  const [limit, setLimit] = React.useState(12);
  const [hoverButton2, setHoverButton2] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const load = [1, 2, 3, 4, 5, 6, 7, 8];
  const handleMouseOver2 = () => {
    setHoverButton2(true);
  };

  const handleMouseOut2 = () => {
    setHoverButton2(false);
  };
  const getBerita = async () => {
    try {
      getApi(`berita?limit=${limit}&${search !== "" && `key=${search}`}`).then(
        (val) => {
          setBerita(val.data.data);
          setLoadBerita(false);
        }
      );
    } catch (error) {
      console.log(error);
      setLoadBerita(false);
    }
  };

  React.useEffect(() => {
    getBerita();
  }, [limit, search]);

  return (
    <>
      <div className="w-screen pt-[100px]">
        <div className="lg:px-16 px-10">
          <div className="mt-20 flex justify-center ">
            <div className=" rounded-full px-10 py-3 bg-[#3C903C] cursor-default">
              <h1 className="font-bold text-4xl text-white">Berita</h1>
            </div>
          </div>
          <div className="flex justify-start w-full mt-20 mb-10 items-center">
            <div className="left relative lg:w-auto w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                type="text"
                className="block w-full pl-12 px-4 py-2  bg-white border rounded-full focus:border-[#3C903C] focus:ring-[#3C903C] focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Search..."
              />
            </div>
          </div>
          <div
            className={`${
              loadBerita
                ? "grid lg:grid-cols-4 grid-cols-1"
                : berita.length == 0
                ? ""
                : "grid lg:grid-cols-4 grid-cols-1"
            } mb-20 gap-4 `}
          >
            {!loadBerita ? (
              berita.length != 0 ? (
                berita.map((i, key) => <CardBerita i={i} key={key} />)
              ) : (
                <>
                  <div className="relative flex justify-center items-center py-20">
                    <img src={notFound} className="h-[200px]" alt="" />
                  </div>
                </>
              )
            ) : (
              load.map((i, key) => <CardBeritaLoading key={key} />)
            )}
          </div>
          {berita.length < 12 ? (
            <></>
          ) : (
            <div className=" flex justify-center items-center mb-32">
              <button
                disabled={loadBerita ? true : false}
                onClick={() => setLimit(limit + 12)}
                onMouseEnter={handleMouseOver2}
                onMouseLeave={handleMouseOut2}
                className={` px-5 py-2 2xl:py-3 rounded-full lg:text-sm 2xl:text-base font-semibold ${
                  hoverButton2 || !loadBerita
                    ? "bg-[#3C903C] text-white transition-all border-2 border-[#3C903C]"
                    : "border-[#3C903C] border-2  text-[#3C903C] transition-all"
                }`}
              >
                {loadBerita ? (
                  <>
                    <div className="mx-auto ">
                      <Loading />
                    </div>
                  </>
                ) : (
                  "Selengkapnya"
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function CardBeritaLoading(params) {
  return (
    <>
      <div className="bg-gray-100 w-full h-80 rounded-2xl border-blue-300 animate-pulse">
        <div className="w-full h-1/2 bg-cover rounded-t-2xl bg-center bg-gray-300"></div>
        <div className="pl-2 pr-10 py-5 space-y-16">
          <div className="space-y-2">
            <div className="text-xs font-bold h-4  bg-gray-300 rounded-full"></div>
            <div className="text-xs font-bold h-4 w-1/4 bg-gray-300 rounded-full"></div>
          </div>
          <div className="text-xs font-bold h-4 w-1/4 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </>
  );
}

function CardBerita({ i }) {
  const date = new Date(i.createdAt);
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
  const navigate = useNavigate();

  return (
    <>
      <div
        title={i.judul}
        onClick={() => {
          navigate(`/berita/${i.slug}`);
        }}
        className="bg-[#f5f5fa] w-full 2xl:h-[350px] h-[300px]  rounded-3xl shadow-md cursor-pointer"
      >
        <div
          style={{ backgroundImage: `url(${i.thumbnail})` }}
          className="w-full h-1/2 bg-cover rounded-t-3xl bg-center"
        ></div>
        <div className=" 2xl:px-5 px-3 2xl:py-4 py-2 flex  flex-col justify-between">
          <p className="text-xs 2xl:font-bold lg:font-semibold text-gray-500">
            {date.getDate()} {monthName} {date.getFullYear()}
          </p>
          <div className="2xl:h-28 lg:h-24 w-11/12">
            <h3 className="my-3 font-bold capitalize 2xl:text-xl lg:text-base 2xl:pr-16 anti-blos">
              {i.judul}
            </h3>
          </div>
          <small className="text-xs font-bold  text-[#547153] capitalize">
            {i.author.username}
          </small>
        </div>
      </div>
    </>
  );
}

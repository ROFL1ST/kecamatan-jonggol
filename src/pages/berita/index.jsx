import React from "react";
import { getApi } from "../../API/restApi";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../component/Loading";
import Lottie from "lottie-react";
import NotFound from "../../assets/json/93134-not-found.json";
import ErrorIndicator from "../../assets/json/98642-error-404.json";
import { Listbox } from "@headlessui/react";
import { ArrowDown2 } from "iconsax-react";
import { Dialog, Transition } from "@headlessui/react";

export default function Berita() {
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("search");
  const navigate = useNavigate();
  const [berita, setBerita] = React.useState([]);
  const [loadBerita, setLoadBerita] = React.useState(true);
  const [beritaError, setBeritaError] = React.useState(false);
  const [limit, setLimit] = React.useState(12);
  const [hoverButton2, setHoverButton2] = React.useState(false);
  const [searches, setSearch] = React.useState("");
  const load = [1, 2, 3, 4, 5, 6, 7, 8];
  const handleMouseOver2 = () => {
    setHoverButton2(true);
  };

  const handleMouseOut2 = () => {
    setHoverButton2(false);
  };

  const pilihan = ["terbaru", "terlama"];
  const [selectedChoice, setSelectedChoice] = React.useState(pilihan[0]);

  const getBerita = async () => {
    try {
      await getApi(
        `berita?limit=${limit}&${
          query !== "" && query != null && `key=${query}`
        }&sort=${selectedChoice}`
      ).then((val) => {
        setBerita(val.data.data);
        setLoadBerita(false);
      });
    } catch (error) {
      console.log(error);
      setLoadBerita(false);
      setBeritaError(true);
    }
  };

  // const query2 = new URLSearchParams(location.search).set("search")

  function handleKeyDown(event) {
    // console.log(event);
    if (event.key === "enter") {
      event.preventDefault(); // Prevent default form submission behavior
      event.target.blur(); // Remove focus from the input field
      event.target.form.submit(); // Trigger form submission
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const submittedValue = formData.get("search");
    // setSearch(event.target.value);
    navigate(`/berita?search=${submittedValue}`);
  }

  // console.log(query);

  React.useEffect(() => {
    setSearch(query);
    if (query == null || query == "") {
      navigate("/berita");
    }
  }, [query]);

  React.useEffect(() => {
    getBerita();
    if (query) {
      setLoadBerita(true);
    }
  }, [limit, query, selectedChoice]);

  React.useEffect(() => {
    document.title = "Berita";
  });

  return (
    <>
      <div className="w-screen pt-[100px]">
        <div className="lg:px-16 px-10">
          <div className="mt-20 flex justify-center ">
            <div className=" rounded-full px-10 py-3 bg-[#3C903C] cursor-default">
              <h1 className="font-bold text-4xl text-white">Berita</h1>
            </div>
          </div>
          <div className="flex justify-between gap-x-5 w-full mt-20 mb-10 items-center">
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
              <form onSubmit={handleSubmit}>
                <input
                  onKeyDown={handleKeyDown}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    navigate(`/berita?search=${e.target.value}`);
                  }}
                  // onChange={(e) => {
                  //   setSearch(e.target.value);
                  //   navigate(`/berita?search=${e.target.value}`);
                  //   // if (e.target.value == undefined || e.target.value == null) {
                  //   //   navigate("/berita");
                  //   // }
                  // }}
                  value={searches}
                  name="search"
                  type="text"
                  className="block w-full pl-12 px-4 py-2  bg-white border rounded-full focus:border-[#3C903C] focus:ring-[#3C903C] focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Search..."
                />
              </form>
            </div>
            <div className="right">
              <Listbox value={selectedChoice} onChange={setSelectedChoice}>
                <div className="relative mt-1">
                  <Listbox.Button className="bg-[#007100] py-2 pl-5 pr-10 rounded-md text-white font-semibold w-full flex justify-between items-center">
                    <span className="block truncate capitalize">
                      {selectedChoice}{" "}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ArrowDown2
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={React.Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#007100] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm text-white">
                      {pilihan.map((pilihan, id) => (
                        <Listbox.Option
                          key={id}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-6 pr-4 ${
                              active
                                ? "bg-green-100 text-[#007100]"
                                : "text-white "
                            }`
                          }
                          value={pilihan}
                        >
                          {({ selectedChoice }) => (
                            <>
                              <span
                                // onClick={() => {
                                //   window.open(pilihan.url);
                                // }}
                                className={`block truncate cursor-pointer capitalize ${
                                  selectedChoice ? "font-medium" : "font-normal"
                                }`}
                              >
                                {pilihan}
                              </span>
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>
          <div
            className={`${
              loadBerita
                ? "grid lg:grid-cols-4 grid-cols-1"
                : berita.length == 0 || beritaError
                ? ""
                : "grid lg:grid-cols-4 grid-cols-1"
            } mb-20 gap-4 `}
          >
            {!loadBerita ? (
              berita.length != 0 ? (
                berita.map((i, key) => <CardBerita i={i} key={key} />)
              ) : beritaError ? (
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
                    <h1 className="font-bold">Berita Tidak Tersedia</h1>
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

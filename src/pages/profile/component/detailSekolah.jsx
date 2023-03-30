import React from "react";
import { useParams } from "react-router-dom";
import { getApi } from "../../../API/restApi";
import Lottie from "lottie-react";
import NotFound from "../../../assets/json/93134-not-found.json";
import { Spinner } from "@chakra-ui/react";
import MenuDesa from "./menu/menuDesa";
import MenuStatus from "./menu/menuStatus";
import { useSelector } from "react-redux";

export default function DetailSekolah() {
  const [sort, setSort] = React.useState(false);
  const state = useSelector((state) => state.data);
  const { slug } = useParams();
  //   console.log(slug);
  const [name, initial] = slug.split("&");
  // console.log(name);

  const [sekolah, setSekolah] = React.useState({
    data: [],
    loading: true,
    error: false,
  });

  const getDesa = async (desa_id = state?.desa_id, status = state?.status) => {
    try {
      await getApi(
        `sekolah?bentuk_pendidikan=${name}&${
          desa_id != undefined && desa_id != "" ? `id_desa=${desa_id}` : ""
        }&${status != "" && status != undefined ? `status=${status}` : ""}`
      ).then((res) => {
        setSekolah((s) => ({ ...s, data: res.data.data, loading: false }));
      });
    } catch (error) {
      console.log(error);
      setSekolah((s) => ({ ...s, loading: false, error: true }));
    }
  };

  React.useEffect(() => {
    document.title = name;
  });
  React.useEffect(() => {
    getDesa();
  }, [state?.desa_id, state?.status]);
  return (
    <>
      <div className="w-screen pt-[100px]">
        <div className="lg:px-16 px-10">
          {/* Top */}
          <div className="flex justify-between w-full mt-20 mb-10">
            <div
              onClick={() => {
                setSort(true);
              }}
              className="flex border cursor-pointer border-[#3C903C] rounded-xl px-5 py-3 gap-x-4 items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="lg:w-8 lg:h-8 w-6 h-6 text-[#3C903C]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
              <p className="lg:text-2xl text-lg text-[#3C903C]">Filter</p>
            </div>
            <div className="lg:flex hidden bg-[#3C903C] cursor-default  rounded-xl lg:px-7 px-4 py-3 gap-x-4">
              <p className="lg:text-2xl text-white font-semibold">
                {name} ({initial})
              </p>
            </div>
          </div>
          {/* Top */}
          {/* table */}
          <div className="mb-20 overflow-x-auto h-full">
            <table class="min-w-full text-center rounded-xl text-sm font-light">
              <thead class="border-b  bg-[#B1D3B1] font-medium text-black text-lg">
                <tr>
                  <th scope="col" class=" px-2 py-4">
                    No
                  </th>
                  <th scope="col" class=" px-4 py-4">
                    Nama Sekolah
                  </th>
                  <th scope="col" class=" px-4 py-4">
                    NPSN
                  </th>
                  <th scope="col" class=" px-4 py-4">
                    Status
                  </th>
                  <th scope="col" class=" px-4 py-4">
                    Alamat
                  </th>
                  <th scope="col" class=" px-4 py-4">
                    Desa
                  </th>
                </tr>
              </thead>
              <tbody className="text-lg text-[#3C903C]">
                {sekolah.loading != true ? (
                  sekolah.data.map((i, key) => (
                    <tr
                      key={key}
                      className=" dark:border-neutral-500 font-medium"
                    >
                      <td className="whitespace-nowrap  px-2 py-4 ">
                        {key + 1}
                      </td>
                      <td className="whitespace-nowrap  px-4 py-4">
                        {i.nama_sekolah}
                      </td>
                      <td className="whitespace-nowrap  px-4 py-4">{i.npsn}</td>
                      <td className="whitespace-nowrap  px-4 py-4">
                        {i.status}
                      </td>
                      <td className="whitespace-nowrap  px-4 py-4 anti-blos2">
                        {i.alamat}
                      </td>
                      <td className="whitespace-nowrap  px-4 py-4">
                        {i.desa.nama_desa}
                      </td>
                    </tr>
                  ))
                ) : (
                  <></>
                )}
              </tbody>
            </table>
            {sekolah.loading != true && sekolah.data.length == 0 && (
              <div className="flex flex-col justify-center items-center w-full mx-auto">
                <Lottie animationData={NotFound} />
                <h1 className="font-bold">Data Sekolah Tidak Tersedia</h1>
              </div>
            )}
          </div>
          {sekolah.loading == true && (
            <>
              <div className="flex justify-center items-center h-screen">
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />
              </div>
            </>
          )}
          {/* table */}
        </div>
      </div>
      <Sidebar sort={sort} setSort={setSort} getData={getDesa} />
    </>
  );
}

function Sidebar({ setSort, sort, getData }) {
  const [isVisible, setIsVisible] = React.useState(true);
  React.useEffect(() => {
    let prevScrollPosition = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      setIsVisible(prevScrollPosition > currentScrollPosition);
      prevScrollPosition = currentScrollPosition;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div
        className={`${
          sort ? "flex" : "hidden"
        } top-0 fixed  flex-col z-30 bg-black  bg-opacity-60 backdrop-blur-lg drop-shadow-lg 2xl:w-1/4 xl:w-1/3 lg:w-1/2 w-full h-full transition-[0.3s] ${!isVisible ? "" : "lg:mt-[104px] mt-[80px]"} px-10 py-10 pb-10 overflow-y-auto`}
      >
        {/* Top */}
        <div className="flex justify-between items-center mb-7">
          <div
            onClick={() => {
              setSort(false);
            }}
            className="flex  px-5 py-3 gap-x-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
            <p className="text-lg text-white">Filter</p>
          </div>
          <div className="flex justify-center ">
            <div
              onClick={() => {
                setSort(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* Top */}
        <div className="border-b-white border-b mb-7"></div>
        {/* Filter */}
        <div className="bg-[#f5f5fa] rounded-xl py-7 px-12  overflow-auto scrollbar h-3/4">
          <h2 className="font-semibold text-base tracking-widest text-gray-900 mb-10  text-center sm:text-left">
            Filter By
          </h2>
          <div className="flex flex-col gap-y-3 pb-20">
            <MenuDesa type={"Desa"} show={false} />
            <MenuStatus getData={getData} type={"Status"} show={true} />
          </div>
        </div>
        {/* Filter */}
      </div>
    </>
  );
}

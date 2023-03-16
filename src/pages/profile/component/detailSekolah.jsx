import React from "react";
import { useParams } from "react-router-dom";
import { getApi } from "../../../API/restApi";
import Lottie from "lottie-react";
import NotFound from "../../../assets/json/93134-not-found.json";
export default function DetailSekolah() {
  const { slug } = useParams();
  //   console.log(slug);
  const [name, initial] = slug.split("&");
  console.log(name);

  const [sekolah, setSekolah] = React.useState({
    data: [],
    loading: true,
    error: false,
  });

  const getDesa = async () => {
    try {
      await getApi(`sekolah?bentuk_pendidikan=${name}`).then((res) => {
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
  }, []);
  return (
    <>
      <div className="w-screen pt-[100px]">
        <div className="lg:px-16 px-10">
          {/* Top */}
          <div className="flex justify-between w-full mt-20 mb-10">
            <div
              onClick={() => {}}
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
          {/* table */}
        </div>
      </div>
    </>
  );
}

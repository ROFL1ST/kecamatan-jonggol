import React from "react";
import kementrian from "../assets/logo/kementrianSekertariat.jpg";
import dpr from "../assets/logo/dpr.png";
import dalamNegri from "../assets/logo/kementriandalamnegeri.png";
import jabar from "../assets/logo/provinsi.png";
import bogor from "../assets/logo/kabupatenbogor.png";

export default function Footer() {
  return (
    <>
      <div className="w-screen z-20 bg-[#007100]   flex flex-col justify-center items-center">
        <div className="top py-5 bg-[#3C903C] w-full 2xl:px-16 lg:px-10 px-8">
          {/* tautan terkait */}
          <div className="flex justify-center gap-x-5 items-center">
            <div className="border-b-2 lg:w-1/12 w-1/6"></div>
            <h1 className="font-semibold text-white lg:text-lg">
              Tautan ke situs web terkait
            </h1>
            <div className="border-b-2  lg:w-1/12 w-1/6"></div>
          </div>
          {/* tautan terkait */}
          {/* List Tautan */}
          <div className="lg:flex grid grid-cols-3 items-center justify-between 2xl:px-10 lg:px-6 lg:gap-x-16 gap-x-5 lg:gap-y-0 gap-y-5 mt-2 border-b-2 2xl:w-11/12 mx-auto py-6">
            {/* sekretariat */}
            <div className="flex justify-center items-center gap-x-2">
              <div
                className="bg-cover bg-center 2xl:p-5 lg:p-4 p-3 rounded-md"
                style={{ backgroundImage: `url(${kementrian})` }}
              ></div>
              <h5 className="font-semibold text-white 2xl:text-base text-xs">Sekretarian Negara</h5>
            </div>
            {/* sekretariat */}
            {/* DPR */}
            <div className="flex justify-center items-center gap-x-2">
              <img src={dpr} className="2xl:w-14 lg:w-12 w-9" alt="" />
              <h5 className="font-semibold text-white 2xl:text-base text-xs">
                Dewan Perwakilan Rakyat
              </h5>
            </div>
            {/* DPR */}
            {/* Kementrian Dalam Negri */}
            <div className="flex justify-center items-center gap-x-2">
              <img src={dalamNegri} className="2xl:w-14 lg:w-12 w-9" alt="" />
              <h5 className="font-semibold text-white 2xl:text-base text-xs">
                Kementrian Dalam Negeri
              </h5>
            </div>
            {/* Kementrian Dalam Negri */}
            {/* Provinsi Jabar */}
            <div className="flex justify-center items-center gap-x-2">
              <img src={jabar} className="2xl:w-14 lg:w-12 w-9" alt="" />
              <h5 className="font-semibold text-white 2xl:text-base text-xs">Provinsi Jawa Barat</h5>
            </div>
            {/* Provinsi Jabar */}
            {/* Kabupaten Bogor */}
            <div className="flex justify-center items-center gap-x-2">
              <img src={bogor} className="2xl:w-14 lg:w-12 w-9" alt="" />
              <h5 className="font-semibold text-white 2xl:text-base text-xs">Kabupaten Bogor</h5>
            </div>
            {/* Kabupaten Bogor */}
          </div>
          {/* List Tautan */}
          {/* Kecamatan Jonggol */}
          <div className="flex items-center justify-start gap-x-10 mt-2 border-b-2 2xl:w-4/5 lg:w-11/12 mx-auto py-6">
            {/* Kabupaten Bogor */}
            <div className="flex justify-center items-center gap-x-2 px-3">
              <img src={bogor} className="2xl:w-14 lg:w-12 w-9" alt="" />
              <h5 className="font-semibold text-white">Kecamatan Jonggol</h5>
            </div>
            {/* Kabupaten Bogor */}
          </div>
          {/* Kecamatan Jonggol */}
          {/* Information */}
          <div className="flex lg:flex-row flex-col lg:gap-y-0 gap-y-10 justify-between mx-auto text-white 2xl:w-4/5 lg:w-11/12 gap-x-10 py-16">
            {/* About And Location */}
            <div className="flex flex-col gap-y-5 lg:w-1/4">
              <div className="about flex flex-col gap-y-3">
                <h1 className="font-bold 2xl:text-lg">About</h1>
                <p className="2xl:text-base text-sm">
                  Lorem ipsum dolor sit amet consectetur. Eget laoreet donec
                  commodo placerat viverra scelerisque ut.{" "}
                </p>
              </div>
              <div className="Lokasi flex flex-col gap-y-3">
                <h1 className="font-bold 2xl:text-lg">Lokasi</h1>
                <p className="2xl:text-base text-sm">
                  Lorem ipsum dolor sit amet consectetur. Eget laoreet donec
                  commodo placerat viverra scelerisque ut.
                </p>
              </div>
            </div>
            {/* About And Location */}
            {/* Contact And Social Media */}
            <div className="flex flex-col gap-y-6 lg:w-1/4">
              <div className="Contact flex flex-col gap-y-3">
                <h1 className="font-bold 2xl:text-lg">Contact Us</h1>
                <p className="2xl:text-base text-sm">
                  Kami siap membantu Anda dalam mendapatkan informasi mengenai
                  pelayanan publik yang tersedia di Kecamatan Jonggol. hubungi
                  kami melalui telepon (0331) 123456 atau email ke
                  kecjonggol@bogorkab.go.id :
                </p>
              </div>
              <div className="flex flex-col gap-y-4">
                {/* Instagram */}
                <div className="flex gap-x-2  items-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 font-bold"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
                    />
                  </svg>
                  <h1 className="2xl:text-base text-sm">@Kecamatanjonggol</h1>
                </div>
                {/* Instagram */}
                {/* Twitter */}
                <div className="flex gap-x-2  items-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 font-bold"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M247.4 68.9A8 8 0 0 0 240 64h-30.4a47.8 47.8 0 0 0-75.2-10.1A47.7 47.7 0 0 0 120 88v6.1C79.3 83.5 46 50.7 45.7 50.3a8 8 0 0 0-8.1-1.9a8.1 8.1 0 0 0-5.5 6.2c-8.7 48.2 5.8 80.5 19.5 99.1a108.6 108.6 0 0 0 24.7 24.4c-15.3 17.3-38.9 26.3-39.1 26.4a8 8 0 0 0-3.9 11.9c.8 1.2 3.8 5.1 11.1 8.8c9.1 4.5 21.1 6.8 35.6 6.8c70.5 0 129.5-54.3 135.5-124.2l30.2-30.1a8.4 8.4 0 0 0 1.7-8.8Zm-45.3 29.7a7.8 7.8 0 0 0-2.3 5.2C195.7 166.7 143.1 216 80 216c-10.6 0-18-1.4-23.2-3.1c11.5-6.2 27.5-17 37.9-32.5a8 8 0 0 0 1-6.4a8.1 8.1 0 0 0-4.1-5.1c-.1-.1-14.9-7.8-27.6-25.3c-14.4-19.8-20.5-43.9-18.1-71.7c15.8 13 46 34.2 80.8 40a8.1 8.1 0 0 0 6.5-1.8a8.2 8.2 0 0 0 2.8-6.1V88a32 32 0 0 1 61.3-12.8a8.1 8.1 0 0 0 7.4 4.8h16Z"
                    />
                  </svg>
                  <h1 className="2xl:text-base text-sm">@Jonggolkec</h1>
                </div>
                {/* Twitter */}
                {/* Facebook */}
                <div className="flex gap-x-2  items-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 font-bold"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
                    />
                  </svg>
                  <h1 className="2xl:text-base text-sm">@KecamatanJonggol</h1>
                </div>
                {/* Facebook */}
                {/* Youtube */}
                <div className="flex gap-x-2  items-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 font-bold"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M29.41 9.26a3.5 3.5 0 0 0-2.47-2.47C24.76 6.2 16 6.2 16 6.2s-8.76 0-10.94.59a3.5 3.5 0 0 0-2.47 2.47A36.13 36.13 0 0 0 2 16a36.13 36.13 0 0 0 .59 6.74a3.5 3.5 0 0 0 2.47 2.47c2.18.59 10.94.59 10.94.59s8.76 0 10.94-.59a3.5 3.5 0 0 0 2.47-2.47A36.13 36.13 0 0 0 30 16a36.13 36.13 0 0 0-.59-6.74ZM13.2 20.2v-8.4l7.27 4.2Z"
                    />
                  </svg>
                  <h1 className="2xl:text-base text-sm">@KecamatanJonggol</h1>
                </div>
                {/* Youtube */}
              </div>
            </div>
            {/* Contact And Social Media */}
            {/* Privacy Policy */}
            <div className="flex flex-col gap-y-5 lg:w-1/4">
              <div className="Contact flex flex-col gap-y-3">
                <h1 className="font-bold 2xl:text-lg">Privacy Policy</h1>
                <ul className="flex flex-col gap-y-2 2xl:text-base lg:text-sm">
                  <li>
                    1. Perubahan Kebijakan Privasi <br /> Kebijakan privasi kami
                    dapat berubah dari waktu ke waktu, dan perubahan tersebut
                    akan diberitahukan melalui situs web kami.
                  </li>
                  <li>
                    2. Perubahan Kebijakan Privasi <br /> Kebijakan privasi kami
                    dapat berubah dari waktu ke waktu, dan perubahan tersebut
                    akan diberitahukan melalui situs web kami.
                  </li>
                  <li>
                    3. Perubahan Kebijakan Privasi <br /> Kebijakan privasi kami
                    dapat berubah dari waktu ke waktu, dan perubahan tersebut
                    akan diberitahukan melalui situs web kami.
                  </li>
                </ul>
              </div>
            </div>
            {/* Privacy Policy */}
          </div>
          {/* Information */}
        </div>
        <div className="py-5 lg:w-full w-11/12 flex justify-center items-center text-white">
          <h1>
            © 2022 Pemerintah Kabupaten Bogor, Kecamatan Cileungsi, Republik
            Indonesia
          </h1>
        </div>
      </div>
    </>
  );
}

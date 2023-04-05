import React from 'react';
import kementrian from '../assets/logo/kementrianSekertariat.jpg';
import dpr from '../assets/logo/dpr.png';
import dalamNegri from '../assets/logo/kementriandalamnegeri.png';
import jabar from '../assets/logo/provinsi.png';
import bogor from '../assets/logo/kabupatenbogor.png';
import * as dayjs from 'dayjs';
import { Home, Location } from 'iconsax-react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
export default function Footer() {
  const now = dayjs();

  function klikTautan(link) {
    window.open(link, '_blank');
  }
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
            <div
              onClick={() => klikTautan('https://www.setneg.go.id/')}
              className="flex justify-center items-center gap-x-2 rounded-lg hover:bg-[#007100] hover:drop-shadow-xl hover:scale-105 transition-all ease-in-out py-2 px-3 cursor-pointer"
            >
              <div
                className="bg-cover bg-center 2xl:p-5 lg:p-4 p-3 rounded-md"
                style={{ backgroundImage: `url(${kementrian})` }}
              ></div>
              <h5 className="font-semibold text-white 2xl:text-base text-xs">
                Sekretarian Negara
              </h5>
            </div>
            {/* sekretariat */}
            {/* DPR */}
            <div
              onClick={() => klikTautan('https://www.dpr.go.id/')}
              className="flex justify-center items-center gap-x-2 rounded-lg hover:bg-[#007100] hover:drop-shadow-xl hover:scale-105 transition-all ease-in-out py-2 px-3 cursor-pointer"
            >
              <img src={dpr} className="2xl:w-14 lg:w-12 w-9" alt="" />
              <h5 className="font-semibold text-white 2xl:text-base text-xs">
                Dewan Perwakilan Rakyat
              </h5>
            </div>
            {/* DPR */}
            {/* Kementrian Dalam Negri */}
            <div
              onClick={() => klikTautan('https://www.kemendagri.go.id/')}
              className="flex justify-center items-center gap-x-2 rounded-lg hover:bg-[#007100] hover:drop-shadow-xl hover:scale-105 transition-all ease-in-out py-2 px-3 cursor-pointer"
            >
              <img src={dalamNegri} className="2xl:w-14 lg:w-12 w-9" alt="" />
              <h5 className="font-semibold text-white 2xl:text-base text-xs">
                Kementrian Dalam Negeri
              </h5>
            </div>
            {/* Kementrian Dalam Negri */}
            {/* Provinsi Jabar */}
            <div
              onClick={() => klikTautan('https://jabarprov.go.id/')}
              className="flex justify-center items-center gap-x-2 rounded-lg hover:bg-[#007100] hover:drop-shadow-xl hover:scale-105 transition-all ease-in-out py-2 px-3 cursor-pointer"
            >
              <img src={jabar} className="2xl:w-14 lg:w-12 w-9" alt="" />
              <h5 className="font-semibold text-white 2xl:text-base text-xs">
                Provinsi Jawa Barat
              </h5>
            </div>
            {/* Provinsi Jabar */}
            {/* Kabupaten Bogor */}
            <div
              onClick={() => klikTautan('https://bogorkab.go.id/')}
              className="flex justify-center items-center gap-x-2 rounded-lg hover:bg-[#007100] hover:drop-shadow-xl hover:scale-105 transition-all ease-in-out py-2 px-3 cursor-pointer"
            >
              <img src={bogor} className="2xl:w-14 lg:w-12 w-9" alt="" />
              <h5 className="font-semibold text-white 2xl:text-base text-xs">
                Kabupaten Bogor
              </h5>
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
                <div className="flex items-start space-x-5">
                  <div className="flex items-center justify-center p-2 bg-white rounded-lg drop-shadow-lg">
                    <Home size="24" color="#2a9134" />
                  </div>
                  <p className="2xl:text-base text-sm">
                    Lorem ipsum dolor sit amet consectetur. Eget laoreet donec
                    commodo placerat viverra scelerisque ut.{' '}
                  </p>
                </div>
              </div>
              <div className="Lokasi flex flex-col gap-y-3">
                <h1 className="font-bold 2xl:text-lg">Lokasi</h1>
                <div className="flex items-start space-x-5">
                  <div className="flex items-center justify-center p-2 bg-white rounded-lg drop-shadow-lg">
                    <Location size="24" color="#2a9134" />
                  </div>
                  <p className="2xl:text-base text-sm">
                    Jl. Raya Alun-Alun Utara No.7, Jonggol, Bogor, Kabupaten
                    Bogor, Jawa Barat 16830
                  </p>
                </div>
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
                <div className="flex gap-x-5 hover:text-kuningPrimary hover:underline transition-all ease-in-out items-center cursor-pointer">
                  <div className="flex items-center justify-center p-2 bg-white rounded-lg drop-shadow-lg">
                    <FaInstagram size="24" color="#2a9134" />
                  </div>
                  <h1 className="2xl:text-base text-sm">@Kecamatanjonggol</h1>
                </div>
                {/* Instagram */}
                {/* Twitter */}
                <div className="flex gap-x-5 hover:text-kuningPrimary hover:underline transition-all ease-in-out items-center cursor-pointer">
                  <div className="flex items-center justify-center p-2 bg-white rounded-lg drop-shadow-lg">
                    <FaTwitter size="24" color="#2a9134" />
                  </div>
                  <h1 className="2xl:text-base text-sm">@Jonggolkec</h1>
                </div>
                {/* Twitter */}
                {/* Facebook */}
                <div className="flex gap-x-5 hover:text-kuningPrimary hover:underline transition-all ease-in-out items-center cursor-pointer">
                  <div className="flex items-center justify-center p-2 bg-white rounded-lg drop-shadow-lg">
                    <FaFacebook size="24" color="#2a9134" />
                  </div>
                  <h1 className="2xl:text-base text-sm">@KecamatanJonggol</h1>
                </div>
                {/* Facebook */}
                {/* Youtube */}
                <div className="flex gap-x-5 hover:text-kuningPrimary hover:underline transition-all ease-in-out items-center cursor-pointer">
                  <div className="flex items-center justify-center p-2 bg-white rounded-lg drop-shadow-lg">
                    <FaYoutube size="24" color="#2a9134" />
                  </div>
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
            Copyright © {now.format('YYYY')} Pemerintah Daerah Kabupaten Bogor,
            Kecamatan Jonggol. All Right Reserved
          </h1>
        </div>
      </div>
    </>
  );
}

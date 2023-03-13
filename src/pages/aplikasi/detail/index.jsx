import React from "react";
import siapmasjo from "../../../assets/logo/siapmasjo.png";
import playStore from "../../../assets/logo/play-store.png";
import appStore from "../../../assets/logo/app-store.png";

export default function DetailAplikasi() {
  return (
    <>
      <div className="w-screen pt-[100px]">
        <div className="mt-20 flex justify-center ">
          <div className=" rounded-full px-10 py-3 bg-[#3C903C] cursor-default">
            <h1 className="font-bold text-4xl text-white">
              Aplikasi Pemerintah
            </h1>
          </div>
        </div>
        <div className="2xl:px-16 px-8 lg:py-24 py-10">
          {/* TItle */}
          <div className="flex lg:flex-row flex-col-reverse justify-between w-full gap-x-10">
            <div className="left lg:w-[40%] lg:mt-0 mt-10 flex flex-col gap-y-10">
              <h1 className="font-bold text-4xl">
                Sipahadesi Aplikasi pelayanan masyarakat Kecamatan Jonggol{" "}
              </h1>
              <div className="download rounded-lg px-10 py-5 flex gap-x-10 justify-between bg-[#3C903C] bg-opacity-70">
                <div className="flex w-1/2">
                  <img src={playStore} className="w-full" alt="" />
                </div>
                <div className="flex w-1/2">
                  <img src={appStore} alt="" />
                </div>
              </div>
            </div>
            <div className="right  lg:w-1/2">
              <div className="flex justify-center">
                <div
                  style={{ backgroundImage: `url(${siapmasjo})` }}
                  className="iconApp w-[401px] h-[401px] bg-cover bg-center rounded-full"
                ></div>
              </div>
            </div>
          </div>
          {/* TItle */}
          {/* desc */}
          <div className="flex flex-col gap-y-10 mt-20">
            <p className="font-semibold">
              Sipahadesi adalah sebuah aplikasi pelayanan masyarakat yang
              dirancang untuk mempermudah masyarakat Kecamatan Jonggol dalam
              mengakses informasi publik dan layanan pemerintah. Aplikasi ini
              memiliki beberapa fitur utama yang akan membantu masyarakat untuk
              mendapatkan informasi dan layanan dengan lebih cepat dan efisien.
              Beberapa fitur yang mungkin dimiliki oleh aplikasi SiapMasjo
              adalah:
            </p>
            <ol
              style={{ listStyleType: "number" }}
              className="pl-4 mt-5 flex flex-col gap-y-5 font-semibold"
            >
              <li>
                Layanan Pengaduan Fitur ini memungkinkan masyarakat untuk
                membuat pengaduan terkait layanan publik, infrastruktur,
                keamanan, atau masalah lainnya yang terkait dengan wilayah
                Kecamatan Jonggol. Pengaduan ini dapat dilakukan dengan mudah
                melalui aplikasi, dan pengguna akan mendapatkan notifikasi
                ketika pengaduan telah ditindaklanjuti oleh pihak berwenang.
              </li>
              <li>
                Layanan Pengaduan Fitur ini memungkinkan masyarakat untuk
                membuat pengaduan terkait layanan publik, infrastruktur,
                keamanan, atau masalah lainnya yang terkait dengan wilayah
                Kecamatan Jonggol. Pengaduan ini dapat dilakukan dengan mudah
                melalui aplikasi, dan pengguna akan mendapatkan notifikasi
                ketika pengaduan telah ditindaklanjuti oleh pihak berwenang.
              </li>
              <li>
                Layanan Pengaduan Fitur ini memungkinkan masyarakat untuk
                membuat pengaduan terkait layanan publik, infrastruktur,
                keamanan, atau masalah lainnya yang terkait dengan wilayah
                Kecamatan Jonggol. Pengaduan ini dapat dilakukan dengan mudah
                melalui aplikasi, dan pengguna akan mendapatkan notifikasi
                ketika pengaduan telah ditindaklanjuti oleh pihak berwenang.
              </li>
            </ol>
            <p className="mt-5 font-semibold">
              Ayo unduh aplikasi Sipahadesi sekarang untuk memperoleh kemudahan
              dalam mengakses informasi dan layanan pemerintah di wilayah
              Jonggol. Dengan aplikasi ini, kamu bisa melaporkan pengaduan,
              mengakses informasi terkait kegiatan pemerintah, layanan publik,
              peta wilayah, dan berita terkini. Download sekarang dan nikmati
              kemudahan yang disediakan oleh aplikasi Sipahadesi!
            </p>
          </div>
          {/* desc */}
        </div>
      </div>
    </>
  );
}

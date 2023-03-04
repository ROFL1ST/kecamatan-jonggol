import { Calendar, Location } from "iconsax-react";
import React from "react";

export default function DetailAgenda() {
  return (
    <>
      <div className="w-screen pt-[100px]">
        <div className="2xl:px-16 px-8 lg:py-24 py-10">
          {/* cover */}
          <div
            style={{
              backgroundImage: `url(https://jonggolberkah.com/asset/foto_berita/samsung_note_8.jpg)`,
            }}
            className="2xl:h-[659px] lg:h-[500px] h-[300px] bg-cover bg-center rounded-xl lg:mb-10 mb-0"
          >
            <div className="h-full w-full bg-black bg-opacity-60 rounded-xl flex flex-col justify-end lg:p-8 p-4"></div>
          </div>
          {/* cover */}
          {/* title */}
          <div className="flex lg:flex-row flex-col justify-between lg:items-center">
            <div className="left flex flex-col gap-y-2 lg:w-3/4">
              <h1 className="flex title-font text-3xl mb-4 font-bold pt-5 ">
                Dijual Mahal, Samsung Galaxy Note 8 Lebih Laku dari Galaxy S8
              </h1>
              <div className="flex font-bold gap-x-3 items-center text-[#6D6D6D]">
                <Location size="22" color="#6D6D6D" />
                <p>Desa Singasari</p>
              </div>
            </div>
            <div className="right flex flex-col gap-y-4  h-full items-end">
              <p className="font-bold">10.00 - 13.00</p>
              <div className="flex  text-[#6D6D6D] gap-x-3 font-bold text-sm">
                <Calendar size="22" color="#6D6D6D" />
                <p>28 Desember 2023</p>
              </div>
            </div>
          </div>
          {/* title */}
          {/* Content */}
          <div className="pt-10">
          <p>
            Pelantikan Pengurus Gerakan Pramuka Kwartir Ranting Jonggol adalah
            acara penting yang diadakan oleh kwartir ranting Jonggol dalam
            rangka memperkenalkan pengurus baru yang akan memimpin organisasi
            pramuka di wilayah tersebut. Acara ini biasanya dihadiri oleh para
            pengurus pramuka tingkat nasional, daerah, dan kabupaten/kota serta
            seluruh anggota pramuka di wilayah tersebut. Pelantikan pengurus
            pramuka merupakan salah satu momen penting dalam organisasi pramuka,
            karena melalui pelantikan tersebut, pengurus baru resmi ditetapkan
            dan diamanahkan untuk memimpin dan mengembangkan gerakan pramuka di
            wilayahnya masing-masing. Acara pelantikan ini juga menjadi momentum
            untuk mengucapkan terima kasih dan penghargaan kepada pengurus lama
            yang telah berkontribusi selama satu periode kepengurusan. Acara
            pelantikan pengurus pramuka kwartir ranting Jonggol biasanya
            diadakan di aula atau gedung serbaguna yang cukup besar dan
            representatif. Acara dimulai dengan sambutan dari ketua kwartir
            ranting dan tamu undangan, diikuti dengan penampilan seni dan budaya
            dari anggota pramuka. Selanjutnya, acara dilanjutkan dengan prosesi
            pelantikan, di mana pengurus baru akan diambil sumpah jabatan dan
            diserahkan tanda pengenal sebagai tanda resmi pelantikan. Setelah
            acara pelantikan selesai, biasanya diadakan acara ramah tamah antara
            pengurus baru dan tamu undangan. Acara ini merupakan kesempatan yang
            baik bagi pengurus baru untuk berkenalan dengan pengurus tingkat
            nasional, daerah, dan kabupaten/kota serta para tokoh masyarakat
            yang hadir. Acara pelantikan pengurus pramuka kwartir ranting
            Jonggol merupakan momen yang sangat penting bagi seluruh anggota
            pramuka di wilayah tersebut, karena melalui acara tersebut, mereka
            dapat merasakan semangat persaudaraan dan kebersamaan yang menjadi
            ciri khas dari gerakan pramuka. Acara ini juga menjadi bukti bahwa
            pramuka di wilayah Jonggol terus berkembang dan semakin kuat dalam
            menghadapi tantangan masa depan.
          </p>
          </div>
          {/* Content */}
        </div>
      </div>
    </>
  );
}

import React from "react";
import SO from "../../assets/images/struktur.png";
import berita1 from "../../assets/images/save-rohingya.jpg";
import berita2 from "../../assets/images/anies.jpeg";
import berita3 from "../../assets/images/jakarta.jpeg";
import berita4 from "../../assets/images/suami.jpeg";
import { getApi } from "../../API/restApi";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export default function Struktur() {
  const dataBerita = [
    {
      id: 1,
      title: "Solidaritas Tanpa Batas Untuk Rohingnya",
      cover: berita1,
      date: "24 Desember 2022",
      vilage: "Desa Singasari",
    },
    {
      id: 2,
      title:
        "Viral Kuda Delman Anies Mundur-mundur Menuju Deklarasi, Ini Kata PKS",
      cover: berita2,
      date: "24 Februari 2023",
      vilage: "Desa Singasari",
    },
    {
      id: 3,
      title:
        "Banjir Jakarta 24 Februari 2023: Titik Lokasi hingga Kondisi Terkini",
      cover: berita3,
      date: "19 Februari 2023",
      vilage: "Desa Cibodas",
    },
    {
      id: 4,
      title: "Viral Suami Lempar Istri ke Laut dari Kapal Merak-Bakauheni",
      cover: berita4,
      date: "1 Januari 2023",
      vilage: "Desa Cibodas",
    },
  ];
  const data = [
    {
      id: 1,
      title: "Camat",
      desc: "Kepala kecamatan yang bertanggung jawab atas pelaksanaan kegiatan pembangunan dan pelayanan masyarakat di wilayah kecamatan.",
    },
    {
      id: 2,
      title: "SEKCAM (Sekretaris Camat)",
      desc: "Bertanggung jawab membantu Camat dalam koordinasi, administrasi, pengarsipan, dan pelaporan kegiatan di kecamatan.",
    },
    {
      id: 3,
      title:
        "KASIBAG PROGRAM DAN KEUANGAN (Kepala Seksi Bagian Program dan Keuangan)",
      desc: "bertanggung jawab dalam penganggaran, perencanaan, pelaporan keuangan, dan pengawasan keuangan di kecamatan.",
    },
    {
      id: 4,
      title:
        "KASUBAG UMUM DAN KEPEGAWAIAN (Kepala Seksi Bagian Umum dan Kepegawaian)",
      desc: "bertanggung jawab dalam pengelolaan kepegawaian dan umum, termasuk pengadaan, inventarisasi, dan pengamanan aset kecamatan.",
    },
    {
      id: 5,
      title: "KASI PEMERINTAHAN (Kepala Seksi Pemerintahan)",
      desc: "bertanggung jawab dalam penyelenggaraan administrasi pemerintahan dan pelayanan publik di kecamatan, termasuk perizinan, keamanan, dan ketertiban masyarakat.",
    },
    {
      id: 6,
      title:
        "Plt. KASI PEMBERDAYAAN MASYARAKAT (Pelaksana Tugas Kepala Seksi Pemberdayaan Masyarakat)",
      desc: "Bertanggung jawab dalam meningkatkan partisipasi masyarakat dan memfasilitasi kegiatan pembangunan masyarakat, termasuk pemberdayaan ekonomi dan sosial.",
    },
    {
      id: 7,
      title:
        "KASI KETENTRAMAN DAN KETERTIBAN (Kepala Seksi Ketentraman dan Ketertiban)",
      desc: "Bertanggung jawab dalam menjaga keamanan dan ketertiban masyarakat, termasuk penanggulangan bencana, pemadam kebakaran, dan penegakan hukum.",
    },
    {
      id: 8,
      title:
        "KASI PEREKONOMIAN DAN PEMBANGUNAN (Kepala Seksi Perekonomian dan Pembangunan)",
      desc: "Bertanggung jawab dalam pengembangan ekonomi dan pembangunan wilayah di kecamatan, termasuk pengembangan industri, pertanian, dan pariwisata.",
    },
    {
      id: 9,
      title:
        "KASI PENDIDIKAN DAN KESEHATAN (Kepala Seksi Pendidikan dan Kesehatan)",
      desc: "Bertanggung jawab dalam penyelenggaraan pelayanan pendidikan dan kesehatan di kecamatan, termasuk pengelolaan sekolah dan fasilitas kesehatan.",
    },
    {
      id: 10,
      title: "DESA (Kelurahan atau Desa)",
      desc: "merupakan unit terkecil dari wilayah kecamatan dan bertanggung jawab dalam penyelenggaraan pelayanan masyarakat di tingkat desa, termasuk pelayanan administrasi, kesehatan, dan pendidikan.",
    },
  ];
  const [berita, setBerita] = React.useState([]);
  const [loadBerita, setLoadBerita] = React.useState(true);

  const getBerita = async () => {
    try {
      getApi(`berita`).then((val) => {
        setBerita(val.data.data);
        setLoadBerita(false);
      });
    } catch (error) {
      console.log(error);
      setLoadBerita(false);
    }
  };

  React.useEffect(() => {
    getBerita();
  }, []);
  return (
    <>
      <div className="pt-[100px]  w-full">
        <div className="2xl:px-16 lg:px-6 px-0">
          {/* Section */}
          <div className="mt-20 flex justify-center lg:px-0 px-10">
            <div className=" rounded-full px-10 py-3 bg-[#3C903C] cursor-default">
              <h1 className="font-bold 2xl:text-4xl lg:text-xl text-center text-white">
                STRUKTUR ORGANISASI KECAMATAN JONGGOL
              </h1>
            </div>
          </div>
          {/* Section */}
          <div className="mt-20 flex justify-center mb-10">
            <div
              style={{ backgroundImage: `url(${SO})` }}
              className="w-[1308px] lg:h-[759px] h-[300px] bg-cover bg-center rounded-xl"
            ></div>
          </div>
          {/* top */}
          <div className="divider flex gap-x-2 justify-center items-center mb-16 ">
            <div className="border-b-4 border-[#CACACA] lg:w-1/6 w-1/4 rounded"></div>
            <div className="p-2 bg-[#CACACA] rounded-full"></div>
            <div className="border-b-4 border-[#CACACA] lg:w-1/6 w-1/4 rounded"></div>
          </div>
          <div className="flex justify-center lg:px-0 px-10">
            <h1 className="lg:w-3/4">
              Susunan Struktur Organisasi Kecamatan Jonggol Kabupaten Bogor
              sebagaimana tertuang dalam Peraturan Bupati Bogor Nomor 98 Tahun
              2020, Susunan Organisasi, Tugas dan Fungsi serta Tata Kerja
              Kecamatan Jonggol Kabupaten Bogor adalah sebagai berikut :
            </h1>
          </div>
          <div className="divider flex gap-x-5 justify-center items-center mb-20 mt-16">
            <div className="border-b-4 border-[#CACACA] lg:w-1/6 w-1/4 rounded"></div>
            <h1 className="font-bold lg:text-3xl text-xl text-[#727272]">
              UTJ
            </h1>
            <div className="border-b-4 border-[#CACACA] lg:w-1/6 w-1/4 rounded"></div>
          </div>
          {/* top */}
          {/* Center */}
          <div className="grid lg:grid-cols-5 grid-cols-1 2xl:gap-10 gap-5 2xl:w-3/4 lg:w-full w-3/4 justify-center items-center mx-auto mb-20 ">
            {data.map((i, key) => (
              <Card key={key} i={i} />
            ))}
          </div>
          {/* Center */}
          {/* Bottom */}
          <div className="flex justify-between 2xl:w-3/4 lg:w-full w-3/4 gap-x-10 mx-auto mb-20 ">
            <div className="left lg:w-3/4 ">
              <p>
                Kecamatan Jonggol Kabupaten Bogor adalah unsur pelayanan
                terhadap masyarakat yang dipimpin oleh seorang Camat yang
                bertanggungjawab kepada Kepala Daerah melalui Sekretaris Daerah
                Kabupaten Bogor. Dengan menerapkan prinsip integrasi, simplikasi
                dan sinkronisasi serta dengan memberdayakan Sekretaris Camat dan
                Kepala Seksi yang ada di bawahnya. Tugas pokok adalah
                melaksanakan kewenangan pemerintahan yang dilimpahkan oleh
                Bupati untuk menangani sebagian otonomi daerah. Untuk
                pelaksanaan tugas tersebut Camat mempunyai fungsi :
              </p>
              <ol
                style={{ listStyleType: "number" }}
                className="pl-4 mt-5 flex flex-col gap-y-5"
              >
                <li>Pengoordinasian kegiatan pemberdayaan masyarakat</li>
                <li>
                  Pengoordinasian upaya penyelenggaraan ketentraman dan
                  ketertiban umum
                </li>
                <li>
                  Pengoordinasian penerapan dan penegakan peraturan
                  perundang-undangan
                </li>
                <li>
                  Pengoordinasian pemeliharaan prasarana dan fasilitas pelayanan
                  umum
                </li>
                <li>
                  Pengoordinasian penyelenggaraan kegiatan pemerintah di tingkat
                  kecamatan
                </li>
                <li>Pembinaan penyelenggaraan pemerintahan kelurahan</li>
                <li>
                  Pelaksanaan pelayanan masyarakat yang menjadi ruang lingkup
                  tugasnya dan atau yang belum dapat dilaksanakan pemerintah
                  kelurahan
                </li>
                <li>Pengelolaan urusan ketatausahaan</li>
                <li>
                  Pelaksanaan tugas lain yang diberikan oleh Walikota sesuai
                  bidang tugas dan fungsinya
                </li>
                <li>
                  Pelaporan dan pertanggungjawaban atas pelaksanaan tugas dan
                  fungsinya kepada Bupati melalui Sekretaris Daerah Kabupaten
                  sesuai standar yang ditetapkan
                </li>
              </ol>
            </div>
            <div className="right 2xl:w-1/3 w-1/2 bg-white lg:flex hidden flex-col px-10 py-8 rounded-[20px] gap-y-5">
              <h1 className="font-bold text-xl">Berita Terbaru</h1>
              {!loadBerita ? (
                berita
                  .slice(0, 4)
                  .map((i, key) =>
                    key == 0 ? (
                      <TopCard key={key} i={i} />
                    ) : (
                      <MiniCard key={key} i={i} />
                    )
                  )
              ) : (
                <div className="right  bg-white lg:flex hidden flex-col  rounded-[20px] gap-y-5">
                  <div className="card-top flex flex-col mt-5 gap-y-2 animate-pulse">
                    <div className="h-[300px] rounded-[15px] bg-gray-300"></div>
                    <div className="text-xs font-bold h-4 w-1/2 bg-gray-500 rounded-full"></div>
                    <div className="text-xs font-bold h-4 w-1/4 bg-gray-500 rounded-full"></div>
                  </div>
                  <BottomCardLoader />
                  <BottomCardLoader />
                </div>
              )}
            </div>
          </div>
          {/* Bottom */}
        </div>
      </div>
    </>
  );
}

function BottomCardLoader(params) {
  return (
    <>
      <div className="card-bottom flex justify-between gap-x-1">
        <div className="h-[100px] bg-cover bg-center rounded-xl w-1/3 bg-gray-300"></div>
        <div className="w-3/5 flex flex-col gap-y-2 animate-pulse">
          <div className="text-xs font-bold h-4 w-3/4 bg-gray-500 rounded-full"></div>
          <div className="text-xs font-bold h-4 w-1/2 bg-gray-500 rounded-full"></div>

          <div className="bottom font-semibold text-xs flex gap-x-3">
            <div className="text-xs font-bold h-4 w-1/2 bg-gray-500 rounded-full"></div>
            <div className="text-xs font-bold h-4 w-1/4 bg-gray-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </>
  );
}

function TopCard({ i }) {
  const navigate = useNavigate();
  const timeAgo = moment(i.createdAt).fromNow();
  return (
    <>
      <div
        onClick={() => {
          navigate(`/berita/${i.slug}`);
        }}
        className="card-top flex flex-col mt-5 gap-y-2 cursor-pointer"
      >
        <div
          style={{ backgroundImage: `url(${i.thumbnail})` }}
          className="rounded-[15px] 2xl:min-h-[300px] 2xl:max-h-[300px] bg-cover bg-center  min-h-[200px] max-h-[200px]"
        ></div>
        <h1 className="font-bold anti-blos 2xl:text-base text-sm">{i.judul}</h1>
        <div className="text-xs flex gap-x-2">
          <p className="text-[#FF5252CC] capitalize">{i.author.username}</p>{" "}
          <p>{timeAgo}</p>
        </div>
      </div>
    </>
  );
}

function MiniCard({ i }) {
  const navigate = useNavigate();

  const timeAgo = moment(i.createdAt).fromNow();

  return (
    <>
      <div
        onClick={() => {
          navigate(`/berita/${i.slug}`);
        }}
        className="flex justify-between gap-x-1 cursor-pointer"
      >
        <div
          style={{ backgroundImage: `url(${i.thumbnail})` }}
          className="h-[100px] bg-cover bg-center rounded-xl w-1/3"
        ></div>
        <div className="w-3/5 flex flex-col gap-y-2 justify-between h-11/12">
          {" "}
          <h1 className="anti-blos3 font-bold 2xl:text-base text-sm ">
            {i.judul}
          </h1>
          <div className="bottom font-semibold text-xs flex 2xl:flex-row flex-col gap-x-3">
            <p className="anti-blos2 text-[#FF5252CC] capitalize">
              {i.author.username}
            </p>
            <p>{timeAgo}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Card({ i }) {
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
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
        className={`card flex flex-col gap-y-5 bg-white 2xl:h-[350px] lg:h-[350px] h-[300px] w-full 2xl:px-4 lg:px-3 px-4 py-5 rounded-[20px] cursor-pointer transition-all ${
          isHovering && "-translate-y-1 -translate-x-1 shadow-xl transition-all"
        }`}
      >
        <h1 className="font-bold 2xl:text-base lg:text-sm">{i.title}</h1>
        <p className="2xl:text-base lg:text-sm">{i.desc}</p>
      </div>
    </>
  );
}

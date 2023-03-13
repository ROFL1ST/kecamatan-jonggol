import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getApi } from "../../API/restApi";
import Logoutama from "../../assets/logo/logo-utama.png";
import Spiritual from "../../assets/logo/spiritual.png";
import Kinerja from "../../assets/logo/kinerja.png";
import Ekonomi from "../../assets/logo/kinerja.png";

export default function VisiMisi() {
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

  const data = [
    {
      id: 1,
      logo: Spiritual,
    },
    {
      id: 2,
      logo: Kinerja,
    },
    {
      id: 3,
      logo: Ekonomi,
    },
  ];
  return (
    <>
      <div className="w-screen pt-[100px]">
        <div className="2xl:px-28 lg:px-6 px-5 pb-20">
          {/* Section */}
          <div className="mt-20 flex justify-center lg:px-0 px-10">
            <div className=" rounded-full px-10 py-3 bg-[#3C903C] cursor-default">
              <h1 className="font-bold 2xl:text-4xl lg:text-xl text-center text-white">
                VISI & MISI
              </h1>
            </div>
          </div>
          {/* Section */}
          <div className="flex mt-20 justify-between w-full items-center">
            <div className="right flex justify-center items-center 2xl:w-1/5 lg:w-1/3 ">
              <img
                src={Logoutama}
                draggable="false"
                className="w-full"
                alt=""
              />
            </div>
            <div className="left w-1/2 flex flex-col gap-y-10">
              <h1 className="text-4xl font-bold">Kecamatan Jonggol</h1>
              <p className="text-lg font-semibold">
                Kecamatan Jonggol adalah salah satu kecamatan yang terletak di
                Kabupaten Bogor, Provinsi Jawa Barat, Indonesia. Kecamatan ini
                memiliki luas wilayah sekitar 152,32 km² dan berpenduduk sekitar
                260.000 jiwa. Wilayah Jonggol terdiri dari 19 desa dan 2
                kelurahan dengan mayoritas penduduknya bermata pencaharian
                sebagai petani, pedagang, dan pekerja pabrik. Kondisi
                infrastruktur di Kecamatan Jonggol terbilang cukup baik dengan
                tersedianya jalan-jalan raya yang menghubungkan desa-desa di
                dalam kecamatan. Namun, masih terdapat beberapa wilayah yang
                sulit dijangkau karena belum tersedianya jalan yang memadai.
                Oleh karena itu, perlu adanya perbaikan infrastruktur untuk
                meningkatkan perekonomian dan kesejahteraan masyarakat.
              </p>
            </div>
          </div>
          <div className="mt-10 flex justify-between">
            <div className="flex justify-between gap-x-20 mx-auto mb-20 ">
              <div className="left lg:w-3/4 ">
                <p>
                  Selain itu, kecamatan Jonggol juga perlu fokus pada
                  peningkatan kualitas pendidikan dan kesehatan masyarakat agar
                  dapat mencapai visi dan misi yang telah ditetapkan. Berikut
                  visi & misinya :
                </p>
                <div className="flex flex-col justify-center items-center mt-20">
                  {/* visi */}
                  <div className="flex flex-col items-center gap-y-5">
                    <h1 className="text-xl font-bold">
                      Visi Kecamatan Jonggol
                    </h1>
                    <p>
                      KECAMATAN JONGGOL TERDEPAN DALAM PELAYANAN MENUJU
                      MASYARAKAT SEJAHTERA
                    </p>
                  </div>
                  {/* visi */}
                  {/* misi */}
                  <div className="flex flex-col justify-center items-center mt-20">
                    <h1 className="text-xl font-bold">
                      Misi Kecamatan Jonggol
                    </h1>
                    <div className="mt-10 grid grid-cols-3">
                        {data.map((i, key) => (
                            <></>
                        ))}
                    </div>
                  </div>
                  {/* misi */}
                </div>
              </div>
              {berita.length != 0 && (
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
              )}
            </div>
          </div>
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

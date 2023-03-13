import React from "react";
import Map from "../../assets/images/wilayah-jonggol.png";
import Wilayah from "../../assets/images/kawedangan.png";
import Kawe from "../../assets/images/fotoKawe.jpg";
import { getApi } from "../../API/restApi";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export default function Sejarah() {
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
      <div className="w-screen pt-[100px]">
        <div className="2xl:px-28 lg:px-6 px-5 pb-20">
          {/* Section */}
          <div className="mt-20 flex justify-center lg:px-0 px-10">
            <div className=" rounded-full px-10 py-3 bg-[#3C903C] cursor-default">
              <h1 className="font-bold 2xl:text-4xl lg:text-xl text-center text-white">
                SEJARAH JONGGOL
              </h1>
            </div>
          </div>
          {/* Section */}
          <div className="mt-20 flex lg:flex-row flex-col justify-between gap-x-10 w-full">
            <div className="left lg:w-1/3 h-full">
              <div
                style={{ backgroundImage: `url(${Map})` }}
                className="lg:h-[600px] h-[400px] min-w-full bg-cover bg-center rounded-2xl"
              ></div>
            </div>
            <div className="right lg:w-[60%] flex flex-col gap-y-10">
              <h1 className="font-bold text-4xl">Kecamatan Jonggol</h1>
              <p className="font-semibold text-lg">
                Jonggol adalah sebuah kecamatan yang terletak di bagian timur
                Kabupaten Bogor, Jawa Barat, Indonesia. Kawasan ini dikenal
                strategis karena menjadi penghubung antara wilayah Bogor,
                Jakarta, Bekasi dengan Cianjur, Purwakarta bahkan Bandung.
                Jonggol memiliki potensi wisata yang sangat besar, dan sekarang
                dikenal sebagai salah satu kawasan wisata terbesar di
                Jabodetabek dengan banyak obyek wisata didalamnya. Bahkan
                Jonggol dijuluki Bhutan Van Java, karena keindahannya menyerupai
                Negara Bhutan di Asia Selatan.
              </p>
              <p className="font-semibold text-lg">
                Jonggol memiliki banyak obyek wisata yang menarik untuk
                dikunjungi, seperti Gunung Bunder, Cimory Riverside, Bukit
                Halimun, Puncak Karet, dan Taman Wisata Matahari. Selain itu,
                ada juga beberapa tempat wisata yang menyajikan edukasi, seperti
                Taman Mini Indonesia Indah Jonggol dan Taman Wisata Alam Angke
                Kapuk. Kawasan ini juga memiliki sejumlah resort dan villa yang
                cocok untuk liburan keluarga.
              </p>
              <p className="font-semibold text-lg">
                Meskipun Jonggol memiliki potensi wisata yang besar, namun
                secara infrastruktur Kawasan Jonggol masih sangat tertinggal
                dibandingkan kawasan lain di Jabodetabek. Hal ini terlihat dari
                kondisi jalan dan transportasi yang masih kurang memadai.
                Sebagai kawasan yang strategis dan berkembang, infrastruktur
                yang baik sangat dibutuhkan agar Jonggol dapat berkembang
                menjadi kawasan yang lebih maju dan modern.
              </p>
            </div>
          </div>
          <div className="mt-20 flex lg:flex-row flex-col justify-between w-full">
            <div className="left lg:w-[40%] ">
              <div
                style={{ backgroundImage: `url(${Wilayah})` }}
                className="bg-cover bg-center min-h-full lg:h-[600px] h-[200px] rounded-2xl min-w-full"
              ></div>
            </div>
            <div className="right lg:w-[50%]">
              <div
                style={{ backgroundImage: `url(${Kawe})` }}
                className="bg-cover bg-center min-h-full lg:h-[600px] h-[200px] lg:mt-0 mt-10 rounded-2xl min-w-full"
              ></div>
            </div>
          </div>
          <p className="mt-20 font-semibold text-lg">
            Sejarah penamaan Kawedanan Jonggol ini sempat mengalami beberapa
            kali perubahan. Pada awalnya, wilayah ini dinamakan Rawa Jaha,
            kemudian berganti menjadi Kemudian Rawalo, Tjibaroesa hingga
            Jonggol. Perubahan nama ini terjadi beralasan mulai dari pemindahan
            pusat Kawedanan hingga kebijakan dari pemerintah Kolonial Belanda.
            Pusat Kawedanan sempat berpindah tempat beberapa kali, mulai dari
            Dayeuh yang sekarang bagian dari Desa Sukanegara di Kecamatan
            Jonggol, kemudian Kauman yang sekarang merupakan wilayah Desa
            Cileungsi, selanjutnya Kampung Babakan yang sekarang termasuk bagian
            dari Desa Cibarusah Kota, hingga yang terakhir Kampung Pojok
            Salak/Rawa Jaha yang sekarang menjadi alun-alun Jonggol.
          </p>
          <div className="flex justify-between mt-20 gap-x-10 mb-20 ">
            <div className="left lg:w-3/4 ">
              <p className="font-semibold text-lg">
                Sebelum tahun 1990-an, Jonggol merupakan kecamatan terbesar
                Kabupaten Bogor. Wilayah Kawedanan Jonggol saat ini telah
                terpecah menjadi bagian dari beberapa daerah antara lain
                Kabupaten Bogor, meliputi Jonggol, Cileungsi, Gunung Putri,
                Cariu, Klapanunggal, Sukamakmur, dan Tanjungsari. Kabupaten
                Bekasi dan Kota Bekasi, meliputi Cibarusah, Serang Baru,
                Bojongmangu, dan Jatisampurna. Kota Depok, meliputi Cimanggis.
                Jakarta Timur, meliputi Ciracas, dan Cipayung. Kabupaten
                Karawang, meliputi Tegalwaru, dan Pangkalan. Seiring dengan
                perkembangan zaman, Jonggol mengalami banyak perubahan dan
                perkembangan. Pada tahun 1970-an, Jonggol masih merupakan daerah
                yang relatif terpencil dan belum terlalu berkembang. Namun, pada
                tahun 1980-an, pemerintah mulai membangun infrastruktur di
                daerah Jonggol, seperti jalan tol dan jalan raya. Pada tahun
                1990-an, Jonggol mulai berkembang pesat dan menjadi salah satu
                kawasan strategis di wilayah Jabodetabek. Saat ini, Jonggol
                dikenal sebagai kawasan wisata terbesar di wilayah Jabodetabek
                dengan banyak obyek wisata menarik, seperti Gunung Pancar, Taman
                Buah Mekarsari, Kebun Raya Bogor, dan masih banyak lagi. Namun,
                di balik potensi wisata yang besar, infrastruktur di Jonggol
                masih sangat tertinggal dibandingkan dengan kawasan lain di
                Jabodetabek. Masih banyak jalan yang rusak dan tidak layak
                dilalui, serta fasilitas publik yang kurang memadai. Hal ini
                menjadi perhatian pemerintah setempat untuk memperbaiki dan
                meningkatkan infrastruktur di Jonggol agar bisa menunjang
                perkembangan pariwisata dan ekonomi di daerah tersebut. Selain
                sebagai kawasan wisata, Jonggol juga memiliki potensi sebagai
                kawasan industri dan pertanian. Terdapat beberapa kawasan
                industri di Jonggol, seperti Kawasan Industri Jonggol dan
                Kawasan Industri Gunung Putri. Selain itu, Jonggol juga memiliki
                lahan pertanian yang cukup luas dan subur, sehingga menjadi
                salah satu penghasil buah-buahan dan sayuran terbesar di wilayah
                Bogor. Secara demografi, masyarakat Jonggol mayoritas berasal
                dari suku Sunda. Bahasa yang digunakan sehari-hari adalah Bahasa
                Sunda, meskipun Bahasa Indonesia juga dipahami oleh kebanyakan
                penduduk. Sebagian besar penduduk Jonggol bermata pencaharian
                sebagai petani, namun seiring dengan perkembangan kawasan wisata
                dan industri, banyak penduduk Jonggol yang bekerja di sektor
                pariwisata dan industri. Secara keseluruhan, Jonggol merupakan
                daerah yang memiliki potensi besar sebagai kawasan wisata,
                industri, dan pertanian. Perlu adanya perhatian dan dukungan
                dari pemerintah dan masyarakat setempat untuk memperbaiki
                infrastruktur dan mengoptimalkan potensi yang ada agar Jonggol
                dapat berkembang lebih pesat dan memberikan manfaat yang lebih
                besar bagi masyarakat.
              </p>
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

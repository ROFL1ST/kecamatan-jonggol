import React from "react";
import { useNavigate } from "react-router-dom";
import { getApi } from "../../API/restApi";
import Renkes from "../../assets/images/renkes.jpg";
import moment from "moment";
import { Import } from "iconsax-react";
export default function Strategis() {
  const [berita, setBerita] = React.useState([]);
  const [loadBerita, setLoadBerita] = React.useState(true);

  const getBerita = async () => {
    try {
      await getApi(`berita`).then((val) => {
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
      <div className="pt-[100px] w-full">
        <div className="2xl:px-28 lg:px-6 px-5">
          {/* Section */}
          <div className="mt-20 flex justify-center lg:px-0 px-10">
            <div className=" rounded-full px-10 py-3 bg-[#3C903C] cursor-default">
              <h1 className="font-bold 2xl:text-4xl lg:text-xl text-center text-white">
                RENCANA STRATEGIS
              </h1>
            </div>
          </div>
          {/* Section */}
          {/* top */}
          <div className="mt-20 flex justify-between w-full gap-x-10 ">
            <div className="left lg:w-3/5">
              <img src={Renkes} className="w-full" draggable="false" alt="" />
            </div>
            {berita.length != 0 && (
              <div className="right 2xl:w-1/3 w-1/2 bg-white lg:flex hidden flex-col h-[50vh] px-10 py-8 rounded-[20px] gap-y-5">
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
          {/* top */}
          {/* center */}
          <div className="mt-20 flex flex-col gap-y-10 mb-40">
            <p>
              Dalam RKO Kecamatan Jonggol, terdapat berbagai program yang
              dicanangkan untuk meningkatkan kualitas infrastruktur dan
              pelayanan publik di wilayah tersebut. Selain itu, RKO juga
              menekankan pentingnya pemberdayaan masyarakat melalui
              program-program yang membantu meningkatkan kesejahteraan
              masyarakat, seperti program pengembangan usaha mikro dan kecil
              serta program kesehatan masyarakat. Dengan demikian, RKO Kecamatan
              Jonggol diharapkan mampu memberikan dampak positif bagi
              perkembangan wilayah dan kesejahteraan masyarakat setempat.
            </p>
            <ul className="flex flex-col gap-y-5">
              <li className="flex gap-x-2">
                <Import /> RENSTRA 2018-2023 KECAMATAN JONGGOL
              </li>
              <li className="flex gap-x-2">
                <Import /> RENSTRA 2018-2023 KECAMATAN JONGGOL
              </li>
              <li className="flex gap-x-2">
                <Import /> RENSTRA 2018-2023 KECAMATAN JONGGOL
              </li>
              <li className="flex gap-x-2">
                <Import /> RENSTRA 2018-2023 KECAMATAN JONGGOL
              </li>
            </ul>
          </div>
          {/* center */}
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

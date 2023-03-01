import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getApi } from "../../../API/restApi";
import moment from "moment";
export default function Detail() {
  const { id } = useParams();
  const { pathname } = useLocation();

  //   console.log(id);
  const [loadDetail, setLoadDetail] = React.useState(true);
  const [detail, setDetail] = React.useState();
  const getDetail = async () => {
    try {
      getApi(`berita/${id}`).then((val) => {
        setDetail(val.data.data);
        setLoadDetail(false);
      });
    } catch (error) {
      console.log(error);
      setLoadDetail(false);
    }
  };
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
    getDetail();
    getBerita();
    if (pathname) {
      setLoadBerita(true);
      setLoadDetail(true);
    }
  }, [pathname]);
  return (
    <>
      <div className="w-screen pt-[100px]">
        <div className="2xl:px-16 px-8 lg:py-24 py-10 ">
          {!loadDetail && !loadBerita ? (
            <div className="flex justify-between w-full gap-x-5">
              <div className="left lg:w-3/4 w-full">
                {/* cover */}
                <div
                  style={{ backgroundImage: `url(${detail.thumbnail})` }}
                  className="2xl:h-[659px] lg:h-[500px] h-[300px] bg-cover bg-center rounded-xl lg:mb-10 mb-0"
                >
                  <div className="h-full w-full bg-black bg-opacity-60 rounded-xl flex flex-col justify-end lg:p-8 p-4">
                    {/* title for dektop */}
                    <h1 className="title-font lg:text-4xl text-white lg:flex hidden text-xl mb-4 font-medium w-3/4">
                      {detail.judul}
                    </h1>
                    {/* title for dektop */}
                  </div>
                </div>
                {/* cover */}
                {/* title for mobile */}
                <h1 className="flex title-font text-3xl mb-4 font-bold pt-5 pb-2 ">
                  {detail.judul}
                </h1>
                {/* title for mobile */}

                <div className=" text-base pb-10">
                  <p>{detail.konten}</p>
                </div>
              </div>
              <div className="right 2xl:w-1/4 w-1/4 bg-white lg:flex hidden flex-col 2xl:px-10 px-5 py-8 rounded-[20px] gap-y-5 relative">
                <h1 className="font-bold text-xl">Berita Terbaru</h1>
                {berita
                  .filter((berita) => berita._id != id)
                  .slice(0, 5)
                  .map((i, key) =>
                    key == 0 ? (
                      <TopCard i={i} key={key} />
                    ) : (
                      <MiniCard key={key} i={i} />
                    )
                  )}
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-between w-full gap-x-5">
                <div className="left hidden lg:flex flex-col w-3/4 h-96 rounded-2xl bg-gray-300 animate-pulse ">
                  {/* cover for dekstop */}
                  <div className="space-y-2 pt-72 px-10">
                    <div className="text-xs font-bold h-4 w-1/2 bg-gray-500 rounded-full"></div>
                    <div className="text-xs font-bold h-4 w-1/4 bg-gray-500 rounded-full"></div>
                  </div>
                  {/* cover for dekstop */}

                  <div className="space-y-2  animate-pulse mt-20">
                    <div className="text-xs font-bold h-4  bg-gray-500 rounded-full"></div>
                    <div className="text-xs font-bold h-4 w-3/4 bg-gray-500 rounded-full"></div>
                    <div className="text-xs font-bold h-4  bg-gray-500 rounded-full"></div>
                    <div className="text-xs font-bold h-4 w-1/4 bg-gray-500 rounded-full"></div>
                  </div>
                </div>

                <div className="right 2xl:w-1/3 w-1/2 bg-white lg:flex hidden flex-col px-10 py-8 rounded-[20px] gap-y-5">
                  <div className="card-top flex flex-col mt-5 gap-y-2 animate-pulse">
                    <div className="h-[300px] rounded-[15px] bg-gray-300"></div>
                    <div className="text-xs font-bold h-4 w-1/2 bg-gray-500 rounded-full"></div>
                    <div className="text-xs font-bold h-4 w-1/4 bg-gray-500 rounded-full"></div>
                  </div>
                  <BottomCardLoader />
                  <BottomCardLoader />
                </div>
              </div>
              <div className="lg:hidden flex flex-col gap-y-5">
                {/* cover for mobile */}
                <div className=" w-full h-96 rounded-2xl bg-gray-300 animate-pulse"></div>

                <div className="space-y-2 animate-pulse w-full pb-5">
                  <div className="text-xs font-bold h-4 w-3/4 bg-gray-300 rounded-full"></div>
                  <div className="text-xs font-bold h-4 w-1/2  bg-gray-300 rounded-full"></div>
                </div>
                {/* cover for mobile */}
              </div>
            </>
          )}
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
  const create = "2023-02-28T10:30:00Z";
  const timeAgo = moment(i.createdAt).fromNow();
  return (
    <>
      <div
        onClick={() => {
          navigate(`/berita/${i._id}`);
        }}
        className="card-top flex flex-col mt-5 gap-y-2 cursor-pointer"
      >
        <div
          style={{ backgroundImage: `url(${i.thumbnail})` }}
          className="rounded-[15px] 2xl:min-h-[300px] 2xl:max-h-[300px] bg-cover bg-center  min-h-[200px] max-h-[200px]"
        ></div>
        <h1 className="font-bold anti-blos 2xl:text-base text-sm">{i.judul}</h1>
        <div className="text-xs flex gap-x-2">
          <p className="text-[#FF5252CC]">Berita OPD</p> <p>{timeAgo}</p>
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
          navigate(`/berita/${i._id}`);
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
            <p className="anti-blos2 text-[#FF5252CC]">Berita OPD</p>
            <p>{timeAgo}</p>
          </div>
        </div>
      </div>
    </>
  );
}

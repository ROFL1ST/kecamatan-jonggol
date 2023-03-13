/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getApi } from "../../../API/restApi";
import moment from "moment";
import parse from "html-react-parser";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FloatButton } from "antd";
import { Share } from "iconsax-react";

export default function Detail() {
  const { slug } = useParams();
  const { pathname } = useLocation();

  //   console.log(id);
  const [loadDetail, setLoadDetail] = React.useState(true);
  const [detail, setDetail] = React.useState();
  const getDetail = async () => {
    try {
      await getApi(`berita/${slug}`).then((val) => {
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
    getDetail();
    getBerita();
    if (pathname) {
      setLoadBerita(true);
      setLoadDetail(true);
    }
  }, [pathname]);

  React.useEffect(() => {
    if (detail) {
      document.title = detail.judul;
    }
  }, [detail]);
  // console.log(berita.filter((berita) => berita.slug != slug).length);
  // console.log(window.location.href);
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
                  className="2xl:h-[659px] lg:h-[500px] h-[300px] bg-cover bg-center rounded-xl lg:mb-8 mb-0"
                >
                  <div className="h-full w-full bg-black bg-opacity-60 rounded-xl lg:flex hidden  flex-col justify-end lg:p-8 p-4">
                    {/* title for dektop */}
                    <div className="flex flex-col text-white">
                      <h1 className="title-font lg:text-4xl  flex  text-xl mb-4 font-medium w-3/4">
                        {detail.judul}
                      </h1>
                      <div className=" flex  gap-x-2 text-sm">
                        <p className="text-[#FF5252CC] capitalize">
                          {detail.author.username}
                        </p>
                        <p>{moment(detail.createdAt).fromNow()}</p>
                      </div>
                    </div>
                    {/* title for dektop */}
                  </div>
                </div>
                {/* cover */}
                <ShareSection title={detail.judul} />
                {/* title for mobile */}
                <h1 className="lg:hidden flex title-font text-2xl font-bold pt-5 pb-2 ">
                  {detail.judul}
                </h1>
                <div className=" lg:hidden flex gap-x-2 text-sm  mb-5">
                  <p className="text-[#FF5252CC] capitalize">
                    {detail.author.username}
                  </p>
                  <p>{moment(detail.createdAt).fromNow()}</p>
                </div>
                {/* title for mobile */}

                <div className=" text-base pb-10">
                  <Isi text={detail.konten} />
                </div>
              </div>
              {berita.filter((berita) => berita.slug != slug).length != 0 && (
                <div className="right 2xl:w-1/4 w-1/4 bg-white lg:flex hidden flex-col 2xl:px-10 px-5 py-8 rounded-[20px] gap-y-5 h-3/4">
                  <h1 className="font-bold text-xl">Berita Terbaru</h1>
                  {berita
                    .filter((berita) => berita.slug != slug)
                    .slice(0, 5)
                    .map((i, key) =>
                      key == 0 ? (
                        <TopCard i={i} key={key} />
                      ) : (
                        <MiniCard key={key} i={i} />
                      )
                    )}
                </div>
              )}
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
      {!loadDetail && (
        <FloatButton.Group
          trigger="click"
          type="default"
          style={{
            right: 24,
            bottom: 30,
            // color: "#007100"
          }}
          className="lg:hidden block "
          icon={
            <div className="flex justify-center">
              <Share className="" />
            </div>
          }
        >
          <FloatButton
            icon={
              <div className="flex justify-center">
                <FacebookShareButton
                  url={window.location.href}
                  quote={detail.judul}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#1771e6"
                      d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131c.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                    />
                  </svg>
                </FacebookShareButton>
              </div>
            }
          />
          <FloatButton
            icon={
              <div className="flex justify-center">
                <TwitterShareButton
                  url={window.location.href}
                  title={detail.judul}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      fill="#1d9bf0"
                      d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4c0 146.8-111.8 315.9-316.1 315.9c-63 0-121.4-18.3-170.6-49.8c9 1 17.6 1.4 26.8 1.4c52 0 99.8-17.6 137.9-47.4c-48.8-1-89.8-33-103.8-77c17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35c25.1-4.7 49.1-14.1 70.5-26.7c-8.3 25.7-25.7 47.4-48.8 61.1c22.4-2.4 44-8.6 64-17.3c-15.1 22.2-34 41.9-55.7 57.6z"
                    />
                  </svg>
                </TwitterShareButton>
              </div>
            }
          />
          <FloatButton
            icon={
              <div className="flex justify-center">
                <WhatsappShareButton
                  url={window.location.href}
                  title={detail.judul}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#3cda58"
                      d="m2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1a1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413c.409.902 1.082 1.857 1.971 2.742c.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231a4.83 4.83 0 0 0 .383-.22s.043-.028.125-.09c.135-.1.218-.171.33-.288c.083-.086.155-.187.21-.302c.078-.163.156-.474.188-.733c.024-.198.017-.306.014-.373c-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041a.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13a1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536c-.28-.684-.57-1.365-.868-2.041c-.059-.134-.234-.23-.393-.249c-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z"
                    />
                  </svg>
                </WhatsappShareButton>
              </div>
            }
          />
        </FloatButton.Group>
      )}
    </>
  );
}

function ShareSection({ title }) {
  return (
    <>
      <div className="share lg:flex hidden mb-5">
        <div className="flex items-center gap-x-4 px-5 py-3 bg-white rounded-full">
          <p className="font-bold">Bagikan :</p>
          <div className="flex flex-row gap-x-3">
            <FacebookShareButton url={window.location.href} quote={title}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8"
                viewBox="0 0 16 16"
              >
                <path
                  // className="bg-[#1771e6]"
                  fill="#1771e6"
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131c.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                />
              </svg>
            </FacebookShareButton>
            <TwitterShareButton url={window.location.href} title={title}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="#1d9bf0"
                  d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4c0 146.8-111.8 315.9-316.1 315.9c-63 0-121.4-18.3-170.6-49.8c9 1 17.6 1.4 26.8 1.4c52 0 99.8-17.6 137.9-47.4c-48.8-1-89.8-33-103.8-77c17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35c25.1-4.7 49.1-14.1 70.5-26.7c-8.3 25.7-25.7 47.4-48.8 61.1c22.4-2.4 44-8.6 64-17.3c-15.1 22.2-34 41.9-55.7 57.6z"
                />
              </svg>
            </TwitterShareButton>
            <WhatsappShareButton url={window.location.href} title={title}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#3cda58"
                  d="m2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1a1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413c.409.902 1.082 1.857 1.971 2.742c.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231a4.83 4.83 0 0 0 .383-.22s.043-.028.125-.09c.135-.1.218-.171.33-.288c.083-.086.155-.187.21-.302c.078-.163.156-.474.188-.733c.024-.198.017-.306.014-.373c-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041a.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13a1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536c-.28-.684-.57-1.365-.868-2.041c-.059-.134-.234-.23-.393-.249c-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z"
                />
              </svg>
            </WhatsappShareButton>
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
        title={i.judul}
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
        title={i.judul}
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
          <div className="text-xs flex gap-x-2">
            <p className="text-[#FF5252CC] capitalize">{i.author.username}</p>{" "}
            <p>{timeAgo}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Isi({ text }) {
  const reactElement = parse(`${text}`);
  return reactElement;
}

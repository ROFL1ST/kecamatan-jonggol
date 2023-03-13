import { Calendar, Location } from "iconsax-react";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { getApi } from "../../../API/restApi";

export default function DetailAgenda() {
  const { slug } = useParams();
  const { pathname } = useLocation();
  const [loadDetail, setLoadDetail] = React.useState(true);
  const [detail, setDetail] = React.useState();
  const getDetail = async () => {
    try {
      await getApi(`agenda/${slug}`).then((val) => {
        setDetail(val.data.data);
        setLoadDetail(false);
      });
    } catch (error) {
      console.log(error);
      setLoadDetail(false);
    }
  };
  React.useEffect(() => {
    getDetail();
  }, [pathname]);

  var months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "May",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  return (
    <>
      <div className="w-screen pt-[100px]">
        <div className="2xl:px-16 px-8 lg:py-24 py-10">
          {!loadDetail ? (
            <div>
              {/* cover */}
              <div
                style={{
                  backgroundImage: `url(${detail.thumbnail})`,
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
                    {detail.nama_agenda}
                  </h1>
                  <div className="flex font-bold gap-x-3 items-center text-[#6D6D6D]">
                    <Location size="22" color="#6D6D6D" />
                    <p>{detail.tempat}</p>
                  </div>
                </div>
                <div className="right flex flex-col gap-y-4  h-full items-end">
                  <Waktu start={detail.start} end={detail.end} />
                  <div className="flex  text-[#6D6D6D] gap-x-3 font-bold text-sm">
                    <Calendar size="22" color="#6D6D6D" />
                    <Tanggal tanggal={detail.tanggal} />
                  </div>
                </div>
              </div>
              {/* title */}
              {/* Content */}
              <div className="pt-10">
                <p>{detail.deskripsi}</p>
              </div>
              {/* Content */}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

function Waktu({ start, end }) {
  const [hoursStart, minutesStart] = start.split(":");
  const formatedStart = `${hoursStart}:${minutesStart}`;
  const [hoursEnd, minutesEnd] = end.split(":");
  const formatedEnd = `${hoursEnd}:${minutesEnd}`;
  return (
    <>
      <p className="font-bold">
        {formatedStart} - {formatedEnd}
      </p>
    </>
  );
}

function Tanggal({ tanggal }) {
  const date = new Date(tanggal);
  console.log(date);
  var months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "May",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  var monthName = months[date.getMonth()];
  return (
    <>
      <p>
        {date.getDate()} {monthName} {date.getFullYear()}
      </p>
    </>
  );
}

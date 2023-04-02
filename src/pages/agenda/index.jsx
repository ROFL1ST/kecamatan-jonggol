import { Calendar, Location } from 'iconsax-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getApi } from '../../API/restApi';
import Loading from '../../component/Loading';
import Lottie from 'lottie-react';
import NotFound from '../../assets/json/93134-not-found.json';
import ErrorIndicator from '../../assets/json/98642-error-404.json';
import AnimatedButton2 from '../../component/animatedButton2';


export default function Agenda() {
  const [hoverButton2, setHoverButton2] = React.useState(false);

  const handleMouseOver2 = () => {
    setHoverButton2(true);
  };

  const handleMouseOut2 = () => {
    setHoverButton2(false);
  };
  const [limit, setLimit] = React.useState(9);

  const [agenda, setAgenda] = React.useState([]);
  const [loadAgenda, setLoadAgenda] = React.useState(true);
  const [agendaError, setAgendaError] = React.useState(false);

  const load = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const getAgenda = async () => {
    try {
      await getApi(`agenda?limit=${limit}`).then((res) => {
        console.log(res);
        setAgenda(res.data.data);
        setLoadAgenda(false);
      });
    } catch (error) {
      console.log(error);
      setLoadAgenda(false);
      setAgendaError(true);
    }
  };

  React.useEffect(() => {
    getAgenda();
  }, [limit]);

  React.useEffect(() => {
    document.title = 'Agenda';
  });
  return (
    <>
      <div className="w-screen pt-[100px]">
        <div className="lg:px-24 px-10">
          <div className="mt-20 flex justify-center ">
            <div className=" rounded-full px-10 py-3 bg-[#3C903C] cursor-default">
              <h1 className="font-bold text-4xl text-white">Agenda</h1>
            </div>
          </div>
          <div
            className={` mb-20 gap-y-10 gap-x-10 mt-20 ${
              loadAgenda
                ? 'grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1'
                : agenda.length == 0 || agendaError
                ? ''
                : 'grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1'
            }`}
          >
            {!loadAgenda ? (
              agenda.length != 0 ? (
                agenda.map((i, key) => <Card key={key} data={i} />)
              ) : agendaError ? (
                <>
                  <div className="flex flex-col justify-center items-center">
                    <Lottie animationData={ErrorIndicator} />
                    <h1 className="font-bold">Terjadi Kesalahan</h1>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col justify-center items-center">
                    <Lottie animationData={NotFound} />
                    <h1 className="font-bold">Agenda Tidak Tersedia</h1>
                  </div>
                </>
              )
            ) : (
              load.map((i, key) => <CardAgendaLoading />)
            )}
          </div>
          {agenda.length < 9 ? (
            <></>
          ) : (
            <div className=" flex justify-center items-center mb-32">
              <button
                disabled={loadAgenda ? true : false}
                onClick={() => setLimit(limit + 9)}
                onMouseEnter={handleMouseOver2}
                onMouseLeave={handleMouseOut2}
                className={` px-5 py-2 2xl:py-3 rounded-full lg:text-sm 2xl:text-base font-semibold ${
                  hoverButton2 || !loadAgenda
                    ? 'bg-[#3C903C] text-white transition-all border-2 border-[#3C903C]'
                    : 'border-[#3C903C] border-2  text-[#3C903C] transition-all'
                }`}
              >
                {loadAgenda ? (
                  <>
                    <div className="mx-auto ">
                      <Loading />
                    </div>
                  </>
                ) : (
                  'Selengkapnya'
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function CardAgendaLoading(params) {
  return (
    <>
      <div className="bg-gray-100 w-full h-80 flex flex-col rounded-2xl py-10 px-5 border-blue-300 animate-pulse">
        <div className="flex justify-between flex-col h-full">
          <div>
            <div className="flex justify-between w-full">
              <div className="left w-1/4 h-4 bg-gray-300 rounded-full"></div>
              <div className="left w-1/5 h-4 bg-gray-300 rounded-full"></div>
            </div>
            <div className="space-y-2 mt-7">
              <div className="text-xs font-bold h-4 w-3/4 bg-gray-300 rounded-full"></div>
              <div className="text-xs font-bold h-4 w-1/4 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          <div className="flex justify-between w-full items-end">
            <div className="left w-1/4 h-10 bg-gray-300 rounded-full"></div>
            <div className="left w-1/5 h-4 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </>
  );
}

function Card({ data }) {
  const navigate = useNavigate();
  const date = new Date(data.tanggal);
  var months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'May',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
  var monthName = months[date.getMonth()];

  const [hoursStart, minutesStart] = data.start.split(':');
  const formatedStart = `${hoursStart}:${minutesStart}`;
  const [hoursEnd, minutesEnd] = data.end.split(':');
  const formatedEnd = `${hoursEnd}:${minutesEnd}`;

  return (
    <>
      <div className="2xl:h-[350px] lg:h-[350px] h-[300px] w-full bg-white rounded-2xl px-6 py-5 shadow-xl">
        {/* top */}
        <div className="flex justify-between w-full  items-center mb-8">
          <p className="font-bold">
            {formatedStart} - {formatedEnd}
          </p>
          <div className="flex font-bold gap-x-3 items-center text-[#6D6D6D]">
            <Location size="22" color="#6D6D6D" />
            <p>{data.tempat}</p>
          </div>
        </div>
        {/* top */}
        {/* Center */}
        <div className="flex flex-col justify-between h-4/5">
          <h1 className="font-bold text-2xl 2xl:w-3/4">{data.nama_agenda}</h1>
          <div className="flex justify-between w-full items-end">
            {/* <button
              onClick={() => {
                navigate(`/agenda/${data.slug}`);
              }}
              className="px-7 py-3 font-bold bg-[#3C903C] text-white rounded-2xl text-xl"
            >
              Detail
            </button> */}
            <AnimatedButton2
              onClick={() => {
                navigate(`/agenda/${data.slug}`);
              }}
              label={'Detail'}
              styleButton={'bg-hijauPrimary after:bg-kuningPrimary rounded-xl'}
              styleP={
                'px-8 py-4 text-white text-[18px] tracking-wider hover:text-black'
              }
            />
            <div className="flex text-[#6D6D6D] gap-x-3 font-bold text-sm">
              <Calendar size="22" color="#6D6D6D" />
              <p>
                {date.getDate()} {monthName} {date.getFullYear()}
              </p>
            </div>
          </div>
        </div>
        {/* Center */}
        {/* Bottom */}

        {/* Bottom */}
      </div>
    </>
  );
}

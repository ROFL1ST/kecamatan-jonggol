import { useKeenSlider } from "keen-slider/react";
import React from "react";
import "keen-slider/keen-slider.min.css";
import {
  Arrow,
  ArrowLeft2,
  ArrowRight2,
  Calendar,
  Location,
} from "iconsax-react";
import { getApi } from "../../../API/restApi";
import { useNavigate } from "react-router-dom";
export default function Agendacard() {
  const [weekNum, setWeekNum] = React.useState(1); // state untuk nomor minggu
  const [days, setDays] = React.useState([]); // state untuk list hari
  const date = new Date(); // tanggal saat ini

  // console.log(moment());
  // fungsi untuk mengambil dan menampilkan list hari dalam satu minggu
  const getDaysInWeek = (weekNum) => {
    const start = new Date(); // tanggal saat ini
    console.log(start);
    // start.setDate(1); // set tanggal ke 1 untuk menghindari bug di akhir bulan
    const diff = (weekNum - 1) * 7; // hitung selisih hari
    start.setDate(start.getDate() - start.getDay() + diff); // set tanggal awal minggu
    const result = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(start);
      date.setDate(date.getDate() + i); // tambah i hari
      const day = date.toLocaleDateString("id-ID", { weekday: "short" }); // nama hari dalam bahasa Inggris
      result.push({ date: date.getDate(), day }); // tambahkan ke array
    }
    return result;
  };

  // fungsi untuk menampilkan daftar hari

  // fungsi untuk menangani klik tombol "next"

  // set state days pada render pertama
  React.useState(() => {
    setDays(getDaysInWeek(weekNum));
  }, []);


  // hari ini
  const dateToday = date.getDate();
  const [selectedDay, setSelectedDay] = React.useState(dateToday);


  // slider

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      
      perView: 4,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
        
      },
      created() {
        setLoaded(true);
      },
      spacing: 15,
    },
  });

  // console.log(selectedDay);

  // data agenda

  const [agenda, setAgenda] = React.useState([]);
  const [loadAgenda, setLoadAgenda] = React.useState(true);
  const [agendaError, setAgendaError] = React.useState(false);

  const getAgenda = async () => {
    try {
      await getApi(`agenda?limit=9`).then((res) => {
        console.log(selectedDay);
        const filteredAgenda = res.data.data.filter(
          (i) => new Date(i.tanggal).getDate() == selectedDay
        );
        console.log(filteredAgenda);
        setAgenda(filteredAgenda);
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
  }, [selectedDay]);
  return (
    <>
      <div className="w-full h-full py-[18px] px-5 text-white">
        <div className="flex flex-col">
          <div className="top flex flex-col">
            <h1 className="text-xl leading-8 font-bold">
              Agenda Kecamatan Jonggol
            </h1>
            <p class="text-xs leading-5">
              Dapatkan informasi terkait semua kegiatan yang dilakukan di
              Kecamatan Jonggol.
            </p>
          </div>
          <div className="content rounded-md  flex-grow bg-white mt-3 border border-blue-gray-50 overflow-hidden text-black">
            <div className="bg-white flex flex-col gap-6 px-3 py-5">
              {/* Calendar */}
              <div className="top flex flex-col ">
                <h1 className="font-roboto font-medium mb-1">
                  {date.toLocaleDateString("id-ID", {
                    month: "long",
                    year: "numeric",
                  })}
                </h1>
                <h1 className="text-xs text-gray-500">Minggu ke {weekNum}</h1>
              </div>
              <div className="flex gap-x-3 items-center">
                <ArrowLeft2
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  className="cursor-pointer"
                />
                <div ref={sliderRef} className="flex keen-slider text-white">
                  {loaded && instanceRef.current && <></>}
                  {days.map((day, index) => (
                    <div
                      onClick={() => {
                        setSelectedDay(day.date);
                      }}
                      className={`keen-slider__slide group cursor-pointer flex flex-col justify-center items-center w-12 h-12 rounded flex-shrink-0 flex-grow-0
                      transition-colors ease-brand duration-250 ${
                        selectedDay == day.date
                          ? "bg-green-700 hover:bg-green-800"
                          : "text-black"
                      }`}
                      key={index}
                    >
                      <div
                        className="uppercase leading-3 mb-1 font-bold "
                        style={{ fontSize: "10px" }}
                      >
                        {day.day}
                      </div>
                      <div className="font-roboto font-medium leading-none  ">
                        {day.date}
                      </div>
                    </div>
                  ))}
                </div>
                <ArrowRight2
                  className="cursor-pointer"
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                />
              </div>
              {/* Calendar */}
              <div className="h-[370px] md:h-[280px] xl:h-[370px] bg-white flex flex-col items-center justify-start overflow-hidden ml-5 mr-4">
                <div className="w-full flex flex-col flex-grow overflow-y-auto pt-1 pr-2 md:pr-4">
                  {agenda.map((i, key) => (
                    <Card key={key} data={i} />
                  ))}
                </div>
              </div>
              {/* <button onClick={handleNext}>Next</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Card({ data }) {
  const navigate = useNavigate();

  const date = new Date(data.tanggal);
  const [hoursStart, minutesStart] = data.start.split(":");
  const formatedStart = `${hoursStart}:${minutesStart}`;
  const [hoursEnd, minutesEnd] = data.end.split(":");
  const formatedEnd = `${hoursEnd}:${minutesEnd}`;
  return (
    <>
      <div className="flex gap-2 w-full px-3 py-2 rounded-lg transition-colors ease-brand duration-250 bg-green-50 bg-opacity-50 border border-green-700">
        {/* {date} */}
        <div className="flex flex-col gap-2 w-full justify-center">
          <p className="line-clamp-1 text-sm font-roboto font-medium text-green-700 anti-blos">
            {data.nama_agenda}
          </p>
          <p className="line-clamp-1 text-xs px-2 py-1 rounded-md self-start capitalize text-green-700 bg-green-100 bg-opacity-40 flex gap-x-2 items-center">
            <Location size="18" /> {data.tempat}
          </p>
          <div className="flex justify-between">
            <p className="line-clamp-1 text-xs whitespace-nowrap text-green-700">
              {formatedStart} - {formatedEnd} WIB
            </p>{" "}
            <p
              onClick={() => {
                navigate(`/agenda/${data.slug}`);
              }}
              className="cursor-pointer line-clamp-1 text-xs whitespace-nowrap text-green-700"
            >
              Detail
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

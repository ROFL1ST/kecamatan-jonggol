import { ArrowLeft2, ArrowRight2, Location } from "iconsax-react";
import { useKeenSlider } from 'keen-slider/react';
import React from 'react';
import 'keen-slider/keen-slider.min.css';
import { useNavigate } from "react-router-dom";
import UnderButton3 from "./underButton3";
import { getApi } from "../../../API/restApi";
import { startOfMonth, startOfWeek, addWeeks, differenceInCalendarWeeks } from 'date-fns';

import NoAgenda from '../../../assets/json/68258-empty-animation.json';
import Lottie from 'lottie-react';


export default function AgendaForMobile() {
    const navigate = useNavigate();
    const [weekNum, setWeekNum] = React.useState(1); // state untuk nomor minggu
    const [days, setDays] = React.useState([]); // state untuk list hari
    const date = new Date(); // tanggal saat ini
  
  
    function getWeekCountInMonth(year, month) {
      const today = new Date();
      const startOfCurrentMonth = startOfMonth(today);
      const startOfFirstWeek = startOfWeek(startOfCurrentMonth);
      const currentWeekStart = addWeeks(startOfFirstWeek, differenceInCalendarWeeks(today, startOfFirstWeek));
      const weekNumber = differenceInCalendarWeeks(currentWeekStart, startOfFirstWeek) + 1;
      return weekNumber;
    }
    // console.log(moment());
    // fungsi untuk mengambil dan menampilkan list hari dalam satu minggu
    const getDaysInWeek = (weekNum) => {
      const start = new Date(); // tanggal saat ini
      // console.log(start);
      // start.setDate(1); // set tanggal ke 1 untuk menghindari bug di akhir bulan
      const diff = (weekNum - 1) * 7; // hitung selisih hari
      start.setDate(start.getDate() - start.getDay() + diff); // set tanggal awal minggu
      const result = [];
      for (let i = 0; i < 7; i++) {
        const date = new Date(start);
        date.setDate(date.getDate() + i); // tambah i hari
        const day = date.toLocaleDateString('id-ID', { weekday: 'short' }); // nama hari dalam bahasa Inggris
        result.push({ date: date.getDate(), day }); // tambahkan ke array
      }
      return result;
    };
  
    // fungsi untuk menampilkan daftar hari
  
    // fungsi untuk menangani klik tombol "next"
  
    // set state days pada render pertama
    React.useState(() => {
      setWeekNum(getWeekCountInMonth())
      setDays(getDaysInWeek(weekNum));
    }, []);
  
    // hari ini
    const dateToday = date.getDate();
    const [selectedDay, setSelectedDay] = React.useState(dateToday);
  
    // slider
  
    // get the index of the slide that contains the current date
    const [initialSlide, setInitialSlide] = React.useState(0);
    const [indexSlide, setIndexSlide] = React.useState(0);
    // set the current slide to the index that contains the current date
  
    const [loaded, setLoaded] = React.useState(false);
  
    const [sliderRef, instanceRef] = useKeenSlider({
      slides: {
        perView: 4,
        created() {
          setLoaded(true);
        },
        spacing: 15,
      },
      initial: initialSlide,
      slideChanged(slider) {
        if (slider) {
          setIndexSlide(slider.track.details.rel);
          console.log(
            initialSlide
          );
          // console.log(
          //   indexSlide === instanceRef.current.track.details.slides.length
          // );
        }
      },
    });
  
    React.useEffect(() => {
      const timeoutId = setTimeout(() => {
        const currentSlide = days.findIndex((day) => day.date === dateToday);
  
        setInitialSlide(currentSlide);
      }, 3000);
  
      return () => clearTimeout(timeoutId);
    }, [days, dateToday]);
  
    // console.log(dateToday);
    // console.log(days.filter((i) => i.date == dateToday));
    // days.findIndex((day) => day.date === dateToday)
    // data agenda
  
    const [agenda, setAgenda] = React.useState([]);
    const [loadAgenda, setLoadAgenda] = React.useState(true);
    const [agendaError, setAgendaError] = React.useState(false);
  
    const getAgenda = async () => {
      try {
        await getApi(`agenda?limit=9`).then((res) => {
          // console.log(selectedDay);
          const filteredAgenda = res.data.data.filter(
            (i) => new Date(i.tanggal).getDate() == selectedDay
          );
          // console.log(filteredAgenda);
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
      if (selectedDay) {
        setLoadAgenda(true);
      }
    }, [selectedDay]);
  return (
    <>
      <div className="content rounded-bl-lg rounded-br-lg  flex-grow bg-white  border border-blue-gray-50 overflow-hidden text-black">
        {!loaded && (
          <div className="bg-white flex flex-col gap-6 px-6 py-5">
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
                className={`cursor-pointer ${
                  indexSlide == 0 && "text-gray-400"
                }`}
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
                    key={day.date}
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
                className={`cursor-pointer ${
                  indexSlide ===
                    instanceRef.current?.track.details.slides.length - 1 &&
                  "text-gray-400"
                }`}
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
              />
            </div>
            {/* Calendar */}
            <div
              className={`h-[370px] md:h-[280px] xl:h-[370px] bg-white flex flex-col items-center ${
                agenda.length != 0 && !loadAgenda
                  ? "justify-start"
                  : "justify-center"
              } overflow-hidden ml-5 mr-4`}
            >
              <div
                className={`w-full flex flex-col ${
                  !loadAgenda && agenda.length != 0
                    ? "flex-grow pt-1 pr-2 md:pr-4 overflow-y-auto"
                    : ""
                }  `}
              >
                {!loadAgenda ? (
                  agenda.length != 0 ? (
                    agenda.map((i, key) => <Card key={key} data={i} />)
                  ) : (
                    <>
                      <div className="flex flex-col text-center justify-center items-center">
                        <Lottie
                          className="w-1/2 mx-auto"
                          animationData={NoAgenda}
                        />
                        <div class="w-full font-lato leading-6 text-center">
                          <p class="text-base font-bold text-blue-gray-500 max-w-[20ch] mx-auto mb-2">
                            Tidak ada kegiatan/event di hari ini
                          </p>{" "}
                          <p class="text-xs text-gray-600">
                            Silakan lihat ke tanggal
                            <span class="text-gray-800">sebelumnya</span> atau
                            <span class="text-gray-800">selanjutnya</span>
                          </p>
                        </div>
                      </div>
                    </>
                  )
                ) : (
                  <></>
                )}
              </div>
              {!loadAgenda && agenda.length != 0 && (
                <>
                  <div className="flex justify-center py-5 border-t border-gray-100">
                    <div
                      onClick={() => {
                        navigate(`/agenda`);
                      }}
                      className="flex justify-between gap-[12px] cursor-pointer"
                    >
                      {/* <p className="text-sm">Lihat Semua Agenda</p>
                          <div className="flex justify-center items-center">
                            <ArrowCircleRight2 className="h-5" />
                          </div> */}
                      <UnderButton3 />
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* <button onClick={handleNext}>Next</button> */}
          </div>
        )}
      </div>
    </>
  );
}

function Card({ data }) {
    const navigate = useNavigate();
  
    const date = new Date(data.tanggal);
    const [hoursStart, minutesStart] = data.start.split(':');
    const formatedStart = `${hoursStart}:${minutesStart}`;
    const [hoursEnd, minutesEnd] = data.end.split(':');
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
              </p>{' '}
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
  
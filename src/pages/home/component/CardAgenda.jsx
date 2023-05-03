import { useKeenSlider } from "keen-slider/react";
import React from "react";
import "keen-slider/keen-slider.min.css";
import {
  startOfMonth,
  startOfWeek,
  addWeeks,
  differenceInCalendarWeeks,
} from "date-fns";

import {
  Arrow,
  ArrowCircleLeft2,
  ArrowCircleRight2,
  ArrowLeft2,
  ArrowRight2,
  Calendar,
  Location,
  Send2,
} from "iconsax-react";
import { getApi } from "../../../API/restApi";
import { useNavigate } from "react-router-dom";
import NoAgenda from "../../../assets/json/68258-empty-animation.json";
import Lottie from "lottie-react";
import UnderButton3 from "./underButton3";
import AgendaContent from "./AgendaContent";

export default function Agendacard() {
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
          <AgendaContent />
        </div>
      </div>
    </>
  );
}

import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./component/navbar";
import Profile from "./pages/profile";
import Footer from "./component/footer";
// import Video from "./pages/video";
// import DetailVideo from "./pages/video/detail";
import Foto from "./pages/foto";
import Struktur from "./pages/struktur";
import Berita from "./pages/berita";
import Detail from "./pages/berita/detail";
import Agenda from "./pages/agenda";
import DetailAgenda from "./pages/agenda/detail";
import Kerja from "./pages/rencana-kerja";
import Strategis from "./pages/rencana-strategis";
import Aplikasi from "./pages/aplikasi";
import DetailAplikasi from "./pages/aplikasi/detail";
import Sejarah from "./pages/sejarah";
import VisiMisi from "./pages/visi-misi";
import { putViwes } from "./API/restApi";
import DetailSekolah from "./pages/profile/component/detailSekolah";

function App() {
  const { pathname } = useLocation();
  // load
  const [loading, setLoading] = React.useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  React.useEffect(() => {
    document.title = "Kecamatan Jonggol";
  }, [pathname]);

  const putViews = async () => {
    try {
      await putViwes("traffic/create").then((res) => {
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    putViews();
  }, []);
  return (
    !loading && (
      <>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="berita" element={<Berita />} />
          <Route path="berita/:slug" element={<Detail />} />
          <Route path="profile" element={<Profile />} />
          <Route path="foto" element={<Foto />} />
          <Route path="struktur-organisasi" element={<Struktur />} />
          <Route path="agenda" element={<Agenda />} />
          <Route path="agenda/:slug" element={<DetailAgenda />} />
          <Route path="rencana-kerja" element={<Kerja />} />
          <Route path="rencana-strategis" element={<Strategis />} />
          <Route path="aplikasi" element={<Aplikasi />} />
          <Route path="aplikasi/:slug" element={<DetailAplikasi />} />
          <Route path="sejarah-jonggol" element={<Sejarah />} />
          <Route path="visi-misi" element={<VisiMisi />} />
          <Route path="sekolah/:slug" element={<DetailSekolah />} />
          {/* <Route path="video" element={<Video />} />
          <Route path="video/:id" element={<DetailVideo />} /> */}
        </Routes>
        <Footer />
      </>
    )
  );
}

export default App;

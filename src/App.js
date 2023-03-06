import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./component/navbar";
import Profile from "./pages/profile";
import Footer from "./component/footer";
import Video from "./pages/video";
import DetailVideo from "./pages/video/detail";
import Foto from "./pages/foto";
import Struktur from "./pages/struktur";
import Berita from "./pages/berita";
import Detail from "./pages/berita/detail";
import Agenda from "./pages/agenda";
import DetailAgenda from "./pages/agenda/detail";

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
          <Route path="agenda/:id" element={<DetailAgenda />} />
          {/* <Route path="video" element={<Video />} />
          <Route path="video/:id" element={<DetailVideo />} /> */}
        </Routes>
        <Footer />
      </>
    )
  );
}

export default App;

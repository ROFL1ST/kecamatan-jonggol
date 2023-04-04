import React from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { putViwes } from './API/restApi';
import Navbar from './component/navbar';
import LogRocket from 'logrocket';
import Footer from './component/footer';
import {
  Agenda,
  Aplikasi,
  Berita,
  Detail,
  DetailAgenda,
  DetailAplikasi,
  DetailDesa,
  DetailSekolah,
  Foto,
  Home,
  Kerja,
  Profile,
  Sejarah,
  Strategis,
  Struktur,
  VisiMisi,
} from './pages';
import TopBarLoading from './component/loadBar';


function App() {
  const { pathname } = useLocation();
  // load
  const [loading, setLoading] = React.useState(true);
  const spinner = document.getElementById('spinner');
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = 'none';
      setLoading(false);
    }, 2000);
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  React.useEffect(() => {
    document.title = 'Kecamatan Jonggol';
  }, [pathname]);

  const putViews = async () => {
    try {
      await putViwes('traffic/create').then((res) => {
        // console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    putViews();
  }, []);

  // IP
  const [ipAddress, setIpAddress] = React.useState('');
  const [loadIp, setLoadIP] = React.useState(true);
  React.useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then((res) => res.json())
      .then((data) => {
        setIpAddress(data.ip);
        // console.log(data);
        setLoadIP(false);
      })
      .catch((er) => console.log(er));
  }, []);

  if (!loadIp) {
    LogRocket.identify(ipAddress);
  }
  return (
    !loading && (
      <>
        <Navbar></Navbar>
        <TopBarLoading />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="berita" element={<Berita />} />
          <Route path="berita/:slug" element={<Detail />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/desa/:slug" element={<DetailDesa />} />
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

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/root.css";
import "../assets/css/client/beranda.css";
import Header from "../features/Header";
import Navigasi from "../features/Navigasi";

const Beranda = () => {
  const navigate = useNavigate();

  const [komiks, setKomiks] = useState([]);

  const handleLogout = (e) => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const getall = async () => {
    await axios
      .get("http://localhost:3001/komik")
      .then((response) => setKomiks(response.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getall();
  }, []);

  return (
    <>
      <Navigasi logout={handleLogout} />
      <Header />
      <main className="beranda">
        <legend>Rekomendasi</legend>
        <section>
          {komiks.map((data, index) => (
            <article key={index}>
              <img src={data.thumb} alt="aaaa" />
              <a href={`/detail/${data.seriesKode}`}>{data.judul}</a>
            </article>
          ))}
        </section>
				<legend>HOT</legend>
      </main>
      <h1>ini beranda</h1>
    </>
  );
};

export default Beranda;

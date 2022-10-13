import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/root.css";
const Detail = () => {
  const params = useParams();
  const [series, setSeries] = useState(null);
  const [chapter, setChapter] = useState(null);

  const getDetail = () => {
    const seriesURL = `http://localhost:3001/komik/${params.kode}`;
    axios.get(seriesURL).then((response) => {
      setSeries(response.data);
    });
  };

  const getChapter = () => {
    const chapterURL = `http://localhost:3001/chapter?seriesKode=${params.kode}`;
    axios.get(chapterURL).then((response) => {
      setChapter(response.data);
    });
  };
  useEffect(() => {
    // mendapatkan id detail menggunakan params
    // console.log(params);
    getDetail();
    getChapter();
  });
  if (!series) return null;

  return (
    <div>
      <h1>ini detail</h1>
      <h1>{series.seriesKode}</h1>

      <h1>{series.judul}</h1>
      <h1>{series.detail}</h1>
      {series.genres.map((data, index) => (
        <ul key={index}>
          <li>{data.genre}</li>
        </ul>
      ))}
      
      {chapter.map((val, i) => (
        <ul key={`index :${i}`}>
          <li>
						{JSON.stringify(chapter)}
						<h1>{val.episode}</h1>
            <a href={`/chapter/${val._id}`}>{val.judul}</a>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Detail;

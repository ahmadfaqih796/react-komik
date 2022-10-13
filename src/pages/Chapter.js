import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/root.css";
const Chapter = () => {
  const params = useParams();
  const [chapter, setChapter] = useState(null);

  const getChapter = () => {
    const chapterURL = `http://localhost:3001/chapter/${params.id}`;
    axios.get(chapterURL).then((response) => {
      setChapter(response.data);
    });
  };
  useEffect(() => {
    // mendapatkan id detail menggunakan params
    // console.log(params);
    getChapter();
  }, []);
  if (!chapter) return null;

  return (
    <div>
      <h1>ini chapter</h1>
			<h1>{chapter.thumb}</h1>
			<img src={chapter.thumb} alt="" />
    </div>
  );
};

export default Chapter;

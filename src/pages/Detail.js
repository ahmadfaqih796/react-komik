import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import '../assets/css/root.css'
const Detail = ({id}) => {
  const [series, setSeries] = useState(null);
  const baseURL = "http://localhost:3001/komik/6344464765d239a972e95d6b";
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setSeries(response.data);
    });
  }, []);

  if (!series) return null;

  return (
    <div>
      <h1>{id}</h1>
      <h1>{series.judul}</h1>
      <h1>{series.detail}</h1>
    </div>
  );
}

export default Detail
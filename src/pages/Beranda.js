import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import '../assets/css/root.css'
import Navigasi from '../features/Navigasi';
const Beranda = () => {
  const navigate = useNavigate();

  const [komiks, setKomiks] = useState([]);

  const handleLogout = (e) => {
    localStorage.removeItem("token")
    navigate("/login")
  }
  const getall = async () => {
    await axios
      .get('http://localhost:3001/komik')
      .then((response) => setKomiks(response.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getall();
  }, []);

  return (
    <>
      <Navigasi />
      <h1>ini beranda</h1>
      <table border={1}>
        <thead>
        <tr>
          <th>helo</th>
        </tr>
        </thead>
        <tbody>
        {komiks.map((val, index) => (
          <tr key={index}>
            <td>
              <a href={`/detail/${val._id}`} >{val.judul}</a>  
            </td>
            <td><img src={val.thumb} alt="" /></td>
            <td>
              {
                val.genres.map((person, index) => (
                  <ul key={index}>
                    <li>{person.genre}</li>
                  </ul>
                ))
              }
            </td>
            <td>{val.creator}</td>
            <td>{}</td>
          </tr>
        ))}
        </tbody>
      </table>
      <button onClick={handleLogout} className="tombol">Logout</button>
    </>
  )
}

export default Beranda
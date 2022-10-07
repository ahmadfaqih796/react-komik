import { useNavigate } from 'react-router-dom'
import '../assets/css/root.css'
const Beranda = () => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    localStorage.removeItem("token")
    navigate("/login")
  }
  return (
    <>
      <h1>ini beranda</h1>
      <button onClick={handleLogout} className="tombol">Logout</button>
    </>
  )
}

export default Beranda
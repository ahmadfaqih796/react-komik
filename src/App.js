import { useState } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Beranda from './pages/Beranda';
import Login from './pages/Login';

const Protected = () => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("token"))
  return <>
      {isAuthenticated ? <Outlet />: <Login />}
    </>
};

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Protected />}>
          <Route index element={<Beranda />} />
          {/* <Route path="/transaksi" element={<TransaksiPage />} /> */}
          
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

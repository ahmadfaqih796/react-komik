import { useState } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Beranda from './pages/Beranda';
import Chapter from './pages/Chapter';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Register from './pages/Register';

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
          <Route path='/detail/:kode' element={<Detail />} />
          <Route path='/chapter/:id' element={<Chapter />} />
          {/* <Route path="/transaksi" element={<TransaksiPage />} /> */}
          
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

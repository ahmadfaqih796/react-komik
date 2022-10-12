import "../assets/css/client/navigasi.css";

const navClick = (e) => {
	const nav = document.querySelector('nav ul');
	nav.classList.toggle('slide');
	// console.log('hello')
}
const Navigasi = ({logout}) => {
  return (
    <>
			<nav>
        <div className="menu-toggle">
          <input onClick={navClick} type="checkbox"/>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="logo">
          QihToon
        </div>
        <ul>
          <li><a href="#beranda">Beranda</a></li>
          <li><a href="#tentang">Tentang</a></li>
          <li><a href="#projek">Rekomendasi</a></li>
          <li><a href="/login" className="out" onClick={logout}>Logout</a></li>
        </ul>
				<form action="" method="POST">
          <input
            type="search"
            name="search"
            className="search-data"
            placeholder="cari komik"
            required
            autocomplete="off"
          />
          <button type="submit" name="submit" className="fas fa-search"></button>
        </form>
      </nav>
    </>
  );
};
export default Navigasi;

import "../assets/css/client/navigasi.css";

const Navigasi = () => {
  const navClick = (e) => {
    const nav = document.querySelector("nav ul");
    nav.classList.toggle("slide");
    // console.log('hello')
  };
  return (
    <>
      <nav>
        <div class="menu-icon">
          <span class="fas fa-bars"></span>
        </div>
        <div class="logo">
          <div class="wrapper"></div>
          <div class="logo-text" data-text="HIMATK">
            HIMATK
          </div>
        </div>
        <div class="nav-items">
          <li>
            <a href="<?= base_url() ?>/Beranda">Beranda</a>
          </li>
          <li>
            <a href="<?= base_url() ?>/Seminar">Seminar</a>
          </li>
          <li>
            <a href="<?= base_url() ?>/Berita">Berita</a>
          </li>
          <li>
            <a href="<?= base_url() ?>/Pengurus">Pengurus</a>
          </li>
        </div>
        <div class="search-icon">
          <span class="fas fa-search"></span>
        </div>
        <div class="cancel-icon">
          <span class="fas fa-times"></span>
        </div>
        <form action="Berita" method="POST">
          <input
            type="search"
            name="kunci"
            class="search-data"
            placeholder="cari berita"
            required
            autocomplete="off"
          />
          <button type="submit" name="submit" class="fas fa-search"></button>
        </form>
      </nav>
    </>
  );
};
export default Navigasi;

import "../assets/css/client/header.css";
import gambar from "../assets/gambar/svg-header.png";

const Header = () => {
  return (
    <>
      <header>
				<h1>QihToon</h1>
        <img src={gambar} alt="Logo" />
      </header>
    </>
  );
};
export default Header;

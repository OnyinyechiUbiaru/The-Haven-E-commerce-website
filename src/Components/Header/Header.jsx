import frameImage from '../Assets/Frame 3.svg';
import "./Header.css";

const Header = () => {
  return (
    <section className="hero-section">
      <img src={frameImage} alt="Background" className="background-image" />
      <div className="header-content">
        <h1>New Arrivals!!!</h1>
        <h3>Sleep like Royalty: Introducing our New Luxury Bed Collection.</h3>
        <h5>Limited time offer!! Shop our new bed arrivals and enjoy 15% off your first purchase.</h5>
        <button>Shop now</button>
      </div>
    </section>
  );
}

export default Header;

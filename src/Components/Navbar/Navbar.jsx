import "./Navbar.css";
import logo from "../Assets/logo.svg"
import search from "../Assets/search-normal.svg"
import user from "../Assets/user.svg"
import cart from "../Assets/Group 3.svg"


const Navbar = () => {

  return (
    <div className='navbar'>
     <div className="list">
        <ul>Type<hr/></ul>
        <ul>Hot Deals</ul>
        <ul>Brand</ul></div>
        <div className="logo">
        <img src={logo} alt="" />
        </div>
 <div className="img">
  <div className="search"><img src={search} alt="" /></div>
  <div className="user"><img src={user} alt="" /></div>
  <div className="cart"><img src={cart} alt="" /></div>
 </div>
    </div>
    
  )
}

export default Navbar;

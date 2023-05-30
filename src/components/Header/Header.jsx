import './Header.css';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { NavLink } from "react-router-dom";



const Header = () => {
  return (
    <header className="left">
        <h1>GREENMIND</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </nav>
      <div className="right">
          <a href="/cart">
            <FaShoppingCart />
          </a>
          <a href="/profile">
            <FaUser />
          </a>
      </div>
    </header>
  );
}

export default Header
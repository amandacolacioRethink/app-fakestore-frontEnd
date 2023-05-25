import './Header.css';
import { FaShoppingCart, FaUser } from 'react-icons/fa';


const Header = () => {
  return (
    <header className="left">
        <h1>GREENMIND</h1>
        <nav>
          <a href="/" className="active">Home</a>
          <a href="/products">Products</a>
          <a href="/contacts">Contacts</a>
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
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">ShopEZ</h2>

      <input
        className="search"
        type="text"
        placeholder="Search Electronics, Fashion, Mobiles..."
      />

      <Link to="/login">
        <button className="login-btn">Login</button>
      </Link>
    </nav>
  );
}

export default Navbar;
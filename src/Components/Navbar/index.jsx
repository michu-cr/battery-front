import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/signup">
        <p> Signup</p>
      </Link>
      <Link to="/login">
        <p>Login</p>
      </Link>
      <Link to="/">
        <p>Logout</p>
      </Link>
    </div>
  );
};
export default Navbar;

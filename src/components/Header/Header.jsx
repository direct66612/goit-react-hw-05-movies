import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Movies</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

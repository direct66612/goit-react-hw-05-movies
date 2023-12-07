import { NavLink } from 'react-router-dom';
import Container from './Header.styled';
const Header = () => {
  return (
    <Container>
      <nav>
        <div className="header__content">
          <ul className="header__list">
            <li>
              <NavLink className="header__link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="header__link" to="/movies">
                Movies
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </Container>
  );
};

export default Header;

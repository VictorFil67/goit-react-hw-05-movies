import { NavLink, Outlet } from 'react-router-dom';
import s from './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <nav className={s.nav}>
        <NavLink className={s.link} to="/">
          Home
        </NavLink>
        <NavLink className={s.link} to="/movies">
          Movies
        </NavLink>
        {/* <NavLink to="/movies/:movieId">MovieDetails</NavLink> */}
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};
export default Layout;

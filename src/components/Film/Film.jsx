// import { Link } from 'react-router-dom';
import s from './Film.module.css';

export const Film = ({
  id,
  title,
  //   backdrop_path,
  //   overview,
  //   poster_path,
  //   popularity,
}) => {
  return (
    <li>
      {/* <Link to={id}> */}
      <p className={s.itemTitle}>{title}</p>
      {/* </Link> */}
      {/* <h2>{title}</h2> */}
      {/* <img src={backdrop_path} alt={title} />
      <p>{overview}</p>
      <img src={poster_path} alt={title} />
      <p>{popularity}</p> */}
    </li>
  );
};

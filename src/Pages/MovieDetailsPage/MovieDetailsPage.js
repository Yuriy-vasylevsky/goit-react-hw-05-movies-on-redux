import './MovieDetailsPage.scss';
import { useEffect } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
// import axios from 'axios';
import Container from '../../Components/Container/Container';
import Cards from '../../Components/Cards/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { fetchdetalisMovi } from '../../redux/movie/movie-operation';

export default function MovieDetailsPage() {
  const { moviId } = useParams();
  const dispatch = useDispatch();
  const detalisMovi = useSelector(state => state.movie.detalisMovi);

  useEffect(() => {
    dispatch(fetchdetalisMovi(moviId));
  }, [moviId, dispatch]);

  return (
    <main
      className="bg"
      style={{
        backgroundImage: `linear-gradient(
      rgba(11, 16, 36, 0.904),
      rgba(61, 61, 61, 0.4)
    ),url(https://image.tmdb.org/t/p/original/${detalisMovi.backdrop_path})`,
      }}
    >
      <Container>
        {/* <button type="button" onClick={goBack}>
        Назад
      </button> */}
        <section className="MovieDetails">
          <div className="MovieDetails__photo">
            <Cards options={detalisMovi} />
          </div>

          <div className="MovieDetails__description">
            <h1>{detalisMovi.title}</h1>
            <p>
              Компании
              {detalisMovi &&
                detalisMovi.production_companies.map(compani => {
                  return <li key={compani.id}>{compani.name}</li>;
                })}
            </p>
            <p> Продолжительность: {detalisMovi.runtime} минут</p>
            <p> Девиз: {detalisMovi.tagline}</p>
            <p> Рейтинг: {detalisMovi.vote_average}</p>
            <h2>Описание</h2>
            <p>{detalisMovi.overview}</p>
          </div>
        </section>
        <section>
          <NavLink to="cast" className="link">
            Cast
          </NavLink>

          <NavLink to="reviews" className="link">
            Reviews
          </NavLink>

          <Outlet />
        </section>
      </Container>
    </main>
  );
}

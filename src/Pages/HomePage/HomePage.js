// import axios from 'axios';
import './HomePage.scss';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import GridCards from '../../Components/GridCards/GridCards';
import Container from '../../Components/Container/Container';
import { fetchTrendMovie } from '../../redux/movie/movie-operation';
import { useDispatch, useSelector } from 'react-redux';

export default function HomePage() {
  const dispath = useDispatch();
  const trendMovi = useSelector(state => state.movie.trendMovie);

  useEffect(() => {
    dispath(fetchTrendMovie());
  }, [dispath]);

  return (
    <main className="main-bg">
      <Container>
        <section className="">
          <ul className="grid ">
            {trendMovi &&
              trendMovi.map(movi => {
                return (
                  <li className="item">
                    <Link
                      to={`/movies/${movi.id}`}
                      key={movi.id}
                      className="link"
                    >
                      <GridCards options={movi} />
                    </Link>
                  </li>
                );
              })}
          </ul>
        </section>
      </Container>
    </main>
  );
}

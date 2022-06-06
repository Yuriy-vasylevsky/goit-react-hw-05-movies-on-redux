import './Cast.css';
import { useEffect } from 'react';
import defaultImgActor from '../../images/defaultImgActor.png';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieCast } from '../../redux/movie/movie-operation';

export default function Cast() {
  const { moviId } = useParams();
  const dispatch = useDispatch();
  const movicast = useSelector(state => state.movie.movieCast);

  useEffect(() => {
    dispatch(fetchMovieCast(moviId));
  }, [moviId, dispatch]);

  return (
    <div className="">
      <ul className="grid">
        {movicast &&
          movicast.map(cast => {
            return (
              <li key={cast.id} className="item">
                <Card className="card">
                  <Card.Img
                    variant="top"
                    src={
                      cast.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                        : defaultImgActor
                    }
                  />
                  <Card.Body>
                    <Card.Title>{cast.original_name}</Card.Title>
                  </Card.Body>
                </Card>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

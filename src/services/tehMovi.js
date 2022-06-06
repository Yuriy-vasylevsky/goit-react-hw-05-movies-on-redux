import axios from 'axios';

function ApiTehMovi() {
  return axios
    .get(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=d2ada567dc639d858047ccd57be2d062',
    )
    .then(res => res.data.results);
}

const Api = {
  ApiTehMovi,
};

export default Api;

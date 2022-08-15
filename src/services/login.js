import axios from 'axios';

async function login({ email, password }) {
  return axios
    .post('http://challenge-react.alkemy.org', { email, password })
    .then((res) => {
      const jwt = res.data.token;
      return jwt;
    })
    .catch((error) => {
      if (error.response) {
        if (error.response.status >= 500) {
          throw new Error('Error interno del servidor');
        } else {
          throw new Error('Los datos ingresados no son válidos');
        }
      } else if (error.request) {
        throw new Error('Ha ocurrido un error');
      }
    });
}

export default login;

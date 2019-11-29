import axios from 'axios';
const API_URL = 'http://localhost:8000'; //'https://aeroplatzi.ivchip.now.sh';
const API_KEY_TOKEN = 'b3ab68daf45caaa690457b8b9d1b2dd6743147611b8f3fab0079e32fc127a1e5';

export const loginRequest = payload => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = payload => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const setError = payload => ({
  type: 'SET_ERROR',
  payload,
});

export const registerRequest = payload => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const searchRequest = payload => ({
  type: 'SEARCH_REQUEST',
  payload,
});

export const registerUser = (payload, redirecUrl) => {
  return (dispatch) => {
    axios.post(`${API_URL}/api/auth/sign-up`, payload)
      .then(({ data }) => dispatch(registerRequest(data)))
      .then(() => {
        window.location.href = redirecUrl;
      })
      .catch(err => dispatch(setError(err)));
  };
};

export const loginUser = ({ email, password }, redirecUrl) => {
  return (dispatch) => {
    axios({
      url: `${API_URL}/api/auth/sign-in`,
      method: 'post',
      auth: {
        username: email,
        password,
      },
      data: {
        apiKeyToken: API_KEY_TOKEN,
      },
    })
      .then(({ data }) => {
        document.cookie = `email=${data.user.email}`;
        document.cookie = `name=${data.user.name}`;
        document.cookie = `id=${data.user.id}`;
        document.cookie = `token=${data.token}`;
        dispatch(loginRequest(data.user));
      })
      .then(() => {
        window.location.href = redirecUrl;
      })
      .catch(err => dispatch(setError(err)));
  };
};

export const searchFligths = (payload, redirectUrl) => {
  return (dispatch) => {
    axios.get(`${API_URL}/api/flights?from=${payload.from}&to=${payload.to}&startDate=${payload.startDate}&endDate=${payload.endDate}`)
      .then(({ data }) => {
        dispatch(searchRequest(data.data));
      })
      .then(() => {
        window.location.href = redirectUrl;
      })
      .catch(err => dispatch(setError(err)));
  };
};

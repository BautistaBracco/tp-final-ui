import axios from 'axios';

const baseURL = 'https://preguntados-api.vercel.app/api';

const getDifficulty = () =>
   axios.get(`${baseURL}/difficulty`).then((res) => res.data);

const getQuestions = (difficulty) =>
   axios
      .get(`${baseURL}/questions?difficulty=${difficulty}`)
      .then((res) => res.data);

const sendAnswer = (body) =>
   axios.post(`${baseURL}/answer`, body).then((res) => res.data);

export default {
   getDifficulty,
   getQuestions,
   sendAnswer,
};

import api from './api';

const insertPost = async (newPost) => {
  const { data } = await api.post('/careers/', newPost).catch((e) => e.response);
  return data;
};

export default insertPost;

import api from './api';

const getPosts = async () => {
  const { data: { results } } = await api.get('/careers/');
  return results;
};

export default getPosts;

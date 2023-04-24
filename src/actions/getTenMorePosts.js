import api from './api';

const getTenMorePosts = async (offset) => {
  const { data: { results } } = await api.get(`/careers/?format=json&limit=10&offset=${offset}`);
  return results;
};

export default getTenMorePosts;

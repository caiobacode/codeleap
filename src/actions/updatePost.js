import api from './api';

const updatePost = async (newPost, id) => {
  const { data } = await api.patch(`/careers/${id}/`, newPost).catch((e) => e.response);
  return data;
};

export default updatePost;

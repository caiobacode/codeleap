import api from './api';

const deletePost = async (id) => {
  await api.delete(`/careers/${id}/`).catch((e) => e.response);
};

export default deletePost;

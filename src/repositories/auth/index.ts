import axios from 'src/lib/axios';
import Repository from 'src/interfaces/repository';

const apiPath = 'admins/auth';

interface Post extends Repository {
  payload: {
    email: string;
    password: string;
  };
}

const post = ({ dispatch, payload }: Post) => {
  return axios({
    dispatch,
    request: {
      url: `${apiPath}/password`,
      method: 'post',
      data: { data: payload },
    },
  });
};

export default { post };

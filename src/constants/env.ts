import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

interface Env {
  API_HOST: string;
}

const env: Env = {
  ...publicRuntimeConfig,
};

export default env;

const DEV = 'development';
const env = process.env.NODE_ENV || DEV;

const urls = {
  development: 'http://localhost:1337/graphql',
  test: 'http://localhost:3000',
  production: 'http://localhost:3000',
};

export const API_URL = urls[env];

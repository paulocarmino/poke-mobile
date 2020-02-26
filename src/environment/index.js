const DEV = 'development';
const env = process.env.NODE_ENV || DEV;

const urls = {
  development: 'http://192.168.0.102:1337/graphql',
  test: 'http://localhost:3000',
  production: 'http://192.168.0.102:1337/graphql',
};

export const API_URL = urls[env];

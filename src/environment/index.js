const DEV = 'development';
const env = process.env.NODE_ENV || DEV;

const urls = {
  development: 'https://poke-api.paulocarmino.com/graphql',
  test: 'https://poke-api.paulocarmino.com/graphql',
  production: 'https://poke-api.paulocarmino.com/graphql',
};

export const API_URL = urls[env];

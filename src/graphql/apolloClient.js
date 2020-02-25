import ApolloClient from 'apollo-boost';

import { API_URL } from '~/environment';

export default new ApolloClient({
  uri: API_URL,
});

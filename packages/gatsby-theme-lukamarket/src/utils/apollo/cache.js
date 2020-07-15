import { InMemoryCache } from '@apollo/client';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        localState: {
          read() {
            return localStateVar();
          },
        },
      },
    },
  },
});

const localStateValue = {
  modalOpen: false,
  cartOpen: false,
  menuOpen: false,
};

export const localStateVar = cache.makeVar(localStateValue);

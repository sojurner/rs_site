import { createContext } from 'react';

const initialLoadContext = createContext(false);
const InitialLoadProvider = initialLoadContext.Provider;
const InitialLoadConsumer = initialLoadContext.Consumer;

export { InitialLoadProvider, InitialLoadConsumer };

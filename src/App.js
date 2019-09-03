import React from 'react';

import { StateProvider, InitialState } from '../app/components/GlobalStateManager';

import Chat from '../app/pages/Chat';
import ChatReducer from '../app/pages/Chat/reducers';

import './App.scss';

const App = () => {

  return (
    <StateProvider initialState={InitialState} reducer={ChatReducer}>
      <Chat />
    </StateProvider>
  );
}

export default App;

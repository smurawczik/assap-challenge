import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { initialState } from './initialState';

export const StateContext = createContext();

export const InitialState = initialState;

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
  initialState: PropTypes.shape({}).isRequired,
  reducer: PropTypes.func.isRequired
};

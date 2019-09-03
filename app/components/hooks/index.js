import { useContext } from 'react';

import { StateContext } from '../GlobalStateManager';

export const useGlobalState = () => useContext(StateContext);
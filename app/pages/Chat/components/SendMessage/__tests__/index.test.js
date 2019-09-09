import React from 'react';
import { shallow } from 'enzyme';

import { StateProvider, InitialState } from '../../../../../components/GlobalStateManager';

import SendMessage from '../index';
import reducer from '../../../reducers';

const getComponent = (initialState) => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <SendMessage />
    </StateProvider>
  );
}

describe("<SendMessage> component", () => {
  let defaultInitialState;
  beforeEach(() => {
    defaultInitialState = InitialState;
  });

  afterEach(() => {
    defaultInitialState = null;
  });

  it('renders without crashing', () => {
    const component = shallow(getComponent(defaultInitialState));
    expect(component.find(".send-message").exists()).toBeTruthy();
  });
});
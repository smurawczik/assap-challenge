import React from 'react';
import { shallow } from 'enzyme';

import { StateProvider, InitialState } from '../../../../../components/GlobalStateManager';

import MessageStatus from '../index';
import reducer from '../../../reducers';

const getComponent = (initialState) => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <MessageStatus />
    </StateProvider>
  );
}

describe("<MessageStatus> component", () => {
  let defaultInitialState;
  beforeEach(() => {
    defaultInitialState = InitialState;
  });

  afterEach(() => {
    defaultInitialState = null;
  });

  it('renders without crashing', () => {
    const component = shallow(getComponent(defaultInitialState));
    expect(component.find(".message-status").exists()).toBeTruthy();
  });
});
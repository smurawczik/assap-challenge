import React from 'react';
import { shallow } from 'enzyme';

import { StateProvider, InitialState } from '../../../../../components/GlobalStateManager';

import UserTyping from '../index';
import reducer from '../../../reducers';

const getComponent = (initialState) => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <UserTyping />
    </StateProvider>
  );
}

describe("<UserTyping> component", () => {
  let defaultInitialState;
  beforeEach(() => {
    defaultInitialState = InitialState;
  });

  afterEach(() => {
    defaultInitialState = null;
  });

  it('renders without crashing', () => {
    const component = shallow(getComponent(defaultInitialState));
    expect(component.find(".user-typing").exists()).toBeTruthy();
  });
});
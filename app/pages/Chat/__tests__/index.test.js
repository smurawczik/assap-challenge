import React from 'react';
import { shallow, mount } from 'enzyme';

import { StateProvider, InitialState } from '../../../components/GlobalStateManager';

import Chat from '../index';
import ChatReducer from '../reducers';

const getComponent = (initialState) => {
  return (
    <StateProvider initialState={initialState} reducer={ChatReducer}>
      <Chat />
    </StateProvider>
  );
}

describe("<Chat> page", () => {
  let defaultInitialState;
  beforeEach(() => {
    defaultInitialState = InitialState;
  });

  afterEach(() => {});

  it('renders without crashing', () => {
    shallow(getComponent(defaultInitialState));
  });
  
  it('should have only 1 chat view', () => {
    defaultInitialState.room.users.admin = null;
    const ChatPage = mount(getComponent(defaultInitialState));

    expect(ChatPage.find("ChatView").length).toBe(1);
  });
});
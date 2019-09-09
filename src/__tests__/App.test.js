import React from 'react';
import { mount } from 'enzyme';
import { render, fireEvent } from '@testing-library/react'
import App from '../App';


describe('<App>', () => {
  it('renders without crashing', () => {
    mount(<App />);
  });

  it('should send a message', () => {
    const { queryAllByText } = render(<App />);

    expect(queryAllByText(/aca un mensajito extra/gi).length).toBe(0);
    fireEvent.change(document.querySelector("input"), { target: { value: "aca un mensajito extra" } });
    fireEvent.click(document.querySelector("button"));

    expect(queryAllByText(/aca un mensajito extra/gi).length).toBe(2);
  });
  
  it('should send a message with "enter" key', () => {
    const { queryAllByText } = render(<App />);

    expect(queryAllByText(/aca un mensajito extra/gi).length).toBe(0);
    fireEvent.change(document.querySelector("input"), { target: { value: "aca un mensajito extra" } });
    fireEvent.keyDown(document.querySelector("input"), { keyCode: 13 });

    expect(queryAllByText(/aca un mensajito extra/gi).length).toBe(2);
  });
  
  it('should NOT send any message', () => {
    const { queryAllByText } = render(<App />);

    expect(queryAllByText(/aca un mensajito extra/gi).length).toBe(0);
    fireEvent.change(document.querySelector("input"), { target: { value: "" } });
    fireEvent.click(document.querySelector("button"));

    expect(queryAllByText(/aca un mensajito extra/gi).length).toBe(0);
  });
  
  it('should focus on 2nd chat and set message as seen on 1st chat', () => {
    render(<App />);
    const status = document.querySelector(".chat-view:nth-child(1) .messages .message-status");
    expect(status.textContent).toBe("SEND");
    fireEvent.click(document.querySelectorAll(".chat-view")[1]);

    expect(status.textContent).toBe("SEEN");
  });
  
  it('should show "Laura" is typing', () => {
    render(<App />);
    const input = document.querySelectorAll(".chat-view")[0].querySelector(".send-message input");
    fireEvent.keyDown(input, { target: { keyCode: "" } })
    const lauraIsTyping = document.querySelectorAll(".chat-view")[1].querySelector(".user-typing")

    expect(lauraIsTyping.textContent).toBe("Laura is writing...");
  });
});
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

const TestHook = ({ callback }) => {
  callback();
  return null;
};

export const testHook = (callback) => {
  const div = document.createElement('div');
  act(() => {
    ReactDOM.render(<TestHook callback={callback} />, div);
  });
};

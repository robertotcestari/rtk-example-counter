import { render, screen } from '@testing-library/react';
import Counter from './Counter';
import { configureStore } from '@reduxjs/toolkit';
import countReducer from './counterSlice';
import { Provider } from 'react-redux';

import userEvent from '@testing-library/user-event';

describe('Counter Test', () => {
  beforeEach(() => {});
  it('starts with count 0', () => {
    const store = configureStore({
      reducer: countReducer,
    });
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const countEl = screen.getByRole('heading', {
      level: 3,
      name: /count: 0/i,
    });

    expect(countEl).toBeInTheDocument();
  });

  it('increase by 1 when button clicked', () => {
    const store = configureStore({
      reducer: countReducer,
    });
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const buttonEl = screen.getByRole('button', { name: 'Increment' });
    userEvent.click(buttonEl);
    userEvent.click(buttonEl);
    userEvent.click(buttonEl);

    const countEl = screen.getByRole('heading', {
      level: 3,
      name: /count: 3/i,
    });

    expect(countEl).toBeInTheDocument();
  });

  it('decrease by 1 when button clicked', () => {
    const store = configureStore({
      reducer: countReducer,
    });
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const buttonEl = screen.getByRole('button', { name: 'Decrement' });

    userEvent.click(buttonEl);

    const countEl = screen.getByRole('heading', {
      level: 3,
      name: /count: -1/i,
    });

    expect(countEl).toBeInTheDocument();
  });
});

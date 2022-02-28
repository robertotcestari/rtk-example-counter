import { screen } from '@testing-library/react';
import Counter from './Counter';
import renderWithReducer from '../../test-utils';
import userEvent from '@testing-library/user-event';



describe('Counter Test', () => {
 
  it('starts with count 0', () => {
    renderWithReducer(<Counter/>, {preloadedState: {count: 0}})
    const countEl = screen.getByRole('heading', {
      level: 3,
      name: /count: 0/i,
    });

    expect(countEl).toBeInTheDocument();
  });

  it('increase by 1 when button clicked', () => {
    renderWithReducer(<Counter/>)


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
    renderWithReducer(<Counter/>)

    const buttonEl = screen.getByRole('button', { name: 'Decrement' });

    userEvent.click(buttonEl);

    const countEl = screen.getByRole('heading', {
      level: 3,
      name: /count: -1/i,
    });

    expect(countEl).toBeInTheDocument();
  });

  it('increase by amount on form', () => {
    renderWithReducer(<Counter/>)

    const formEl = screen.getByRole('textbox')
    userEvent.clear(formEl)
    userEvent.type(formEl, "15")
    const buttonEl = screen.getByRole('button', { name: /Increment by/i });
    userEvent.click(buttonEl);

    const countEl = screen.getByRole('heading', {
      level: 3,
      name: /count: 15/i,
    });

    expect(countEl).toBeInTheDocument();
  });
});

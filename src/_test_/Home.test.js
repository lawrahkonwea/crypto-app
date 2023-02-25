import React from 'react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import store from '../redux/configureStore';
import Home from '../components/Home';

it('Testing Home Component', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Home />
      </Provider>
      ,
    </MemoryRouter>,
  );
  expect(screen.getByTestId('cryptest')).toBeInTheDocument();
});

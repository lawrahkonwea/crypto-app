import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { waitFor, render, screen } from '@testing-library/react';
import store from '../redux/configureStore';
import Details from '../components/Details';

test('To test for Detailspage render', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Details />
      </Provider>
    </MemoryRouter>,
  );
  waitFor(() => expect(screen.getAllByText(/Description:/)).toBeInTheDocument());
});

test('expect Details component to match snapshot', () => {
  const view = renderer.create(
    <MemoryRouter>
      <Provider store={store}>
        <Details />
      </Provider>
    </MemoryRouter>,
  ).toJSON();
  expect(view).toMatchSnapshot();
});

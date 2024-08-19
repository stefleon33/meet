/* eslint-disable testing-library/no-node-access */
// src/__tests__/App.test.js

/*import { render, screen } from '@testing-library/react';
import App from '../App';

describe('<App /> component', () => {
    test('renders list of events', () => {
        render(<App />);
        expect(screen.getByTestId('event-list')).toBeInTheDocument();
      });
    test('render CitySearch', () => {
        render(<App />);
        expect(screen.getByTestId('city-search')).toBeInTheDocument();
    });
});*/

import { render } from '@testing-library/react';
import App from '../App';

describe('<App /> component', () => {
  let AppDOM;
  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild;
  })

  test('renders list of events', () => {
    expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
  });

  test('render CitySearch', () => {
    expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
  });
});
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-render-in-setup */
// src/__tests__/Event.test.js

import Event from '../components/Event';
import mockData from "../mock-data";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

describe('<Event /> component', () => {
    let EventComponent;
    const event = mockData[0];
    beforeEach(() => {
      EventComponent = render(<Event event={event}/>);
    })

      test('render event component', () => { 
        expect(EventComponent).toBeTruthy();
      });

      test('event details are hidden by default', () => {
        const eventsDetails = EventComponent.container.querySelector('.details');
        expect(eventsDetails).not.toBeInTheDocument();
      });

      test('renders event title', () => {
        expect(EventComponent.queryByText(mockData[0].summary)).toBeInTheDocument();
      });

      test('renders event location', () => {
        expect(EventComponent.queryByText(mockData[0].location)).toBeInTheDocument();
      });     

      test('render events details button with title ("Show details")', () => {
        expect(EventComponent.queryByText('Show Details')).toBeInTheDocument();
      });

     
});
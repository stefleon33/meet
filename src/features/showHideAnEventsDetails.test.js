/* eslint-disable testing-library/no-node-access */
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        let AppComponent;
        given('user opens the app', () => {
            AppComponent = render(<App />);
        });

        when('the list of events are rendered', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
      
            await waitFor(() => {
              const EventListItems = within(EventListDOM).queryAllByRole('listitem');
              expect(EventListItems.length).toBe(32);
            });
      
          });

        then('the event details should not be shown', () => {
            const AppDOM = AppComponent.container.firstChild;
            const eventDetails = AppDOM.querySelector('.details');
            expect(eventDetails).not.toBeInTheDocument();
            });
        });
    });

    test('User can expand an event to see details.', ({ given, when, then }) => {
        given('user sees the events rendered', () => {

        });

        when('user clicks the Show Details button to view a description for the event', () => {

        });

        then('event details should be displayed', () => {

        });
    });

    test('User can collapse an event to hide details.', ({ given, when, then }) => {
        given('the user has clicked the Show Details button for the event', () => {

        });

        when('the user clicks the Hide Details button', () => {

        });

        then('the event details should be hidden', () => {

        });
    });
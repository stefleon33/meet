/* eslint-disable testing-library/prefer-screen-queries */
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
        let AppDOM;
        given('user opens the app', () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
        });

        when('the list of events are rendered', async () => {
            const EventListDOM = AppDOM.querySelector('#event-list');
      
            await waitFor(() => {
              const EventListItems = within(EventListDOM).queryAllByRole('listitem');
              expect(EventListItems.length).toBe(32);
            });
          });

        then('the event details should not be shown', () => {
            const eventDetails = AppDOM.querySelector('.details');
            expect(eventDetails).not.toBeInTheDocument();
            });
        });


    test('User can expand an event to see details.', ({ given, when, then }) => {
        let EventComponent;
        let allEvents;
        given('user sees the events rendered', async() => {
            allEvents = await getEvents();
            EventComponent = render(<Event event={allEvents[0]} />);
            
              expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
            });

        when('user clicks the Show Details button to view a description for the event', async () => {
            const user = userEvent.setup();

            const showDetails = EventComponent.queryByText('Show Details');
            await user.click(showDetails);
        });

        then('event details should be displayed', async() => {
            const eventDetails = EventComponent.container.querySelector('.details');
            expect(eventDetails).toBeInTheDocument();
        });
    });

    test('User can collapse an event to hide details.', ({ given, when, then }) => {
        let EventComponent;
        let allEvents;
        given('the user has clicked the Show Details button for the event', async() => {
            allEvents = await getEvents();
            EventComponent = render(<Event event={allEvents[0]} />);
        });

        when('the user clicks the Hide Details button', async () => {
            const user = userEvent.setup();

            const hideDetails = EventComponent.queryByText('hide Details');
            await user.click(hideDetails);
        });

        then('the event details should be hidden', async() => {
            const eventDetails = EventComponent.container.querySelector('.details');
            expect(eventDetails).not.toBeInTheDocument();
        });
    });
});
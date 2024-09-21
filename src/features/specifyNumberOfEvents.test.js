/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import NumberofEvents from '../components/NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    let AppComponent;
    let AppDOM;
    let NumberOfEventsComponent;

    test('When user hasn\'t specified a number, 32 events are shown by default.', ({ given, and, when, then }) => {
        given('the user opens the app', () => {
            AppComponent = render(<App />);
        });

        and('the user has not specified the number of events to display', () => {

        });

        when('the user opens the event list', () => {
            AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            NumberOfEventsComponent = render(<NumberofEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />, { container: EventListDOM});
            expect(NumberOfEventsComponent).toBeTruthy();
        });

        then('32 events should be displayed', () => {
            expect(NumberOfEventsComponent.getByRole('textbox')).toHaveValue('32'); 
        });
    });

    test('User can change the number of events displayed.', ({ given, and, when, then }) => {
        given('the user is on the events page', () => {
            AppComponent = render(<App />).container.firstChild;
        });

        and('the user has specified the number of events to display as 10', async() => {
            const EventListDOM = AppComponent.querySelector('#event-list');
            NumberOfEventsComponent = render(<NumberofEvents setCurrentNOE={() => { }} setErrorAlert={() => { }}/>, { container: EventListDOM }); 
            const user = userEvent.setup();
            const numberOfEvents = NumberOfEventsComponent.getByRole('textbox');
            await user.type(numberOfEvents, '{backspace}{backspace}10'); 
        });

        when('the user changes the number of events to display to 10', async() => {
            const user = userEvent.setup();
            const numberOfEvents = NumberOfEventsComponent.getByRole('textbox');
            await user.type(numberOfEvents, '{backspace}{backspace}10');   
        });

        then('10 events should be displayed', () => {
            expect(NumberOfEventsComponent.getByRole('textbox')).toHaveValue('10'); 
        });
    });
});
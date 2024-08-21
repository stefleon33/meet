/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-render-in-setup */
import { render } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />)
    })

    test('number of events has the role of textbox', () => {
        const input = NumberOfEventsComponent.queryByRole('textbox');
        expect(input).toBeInTheDocument();
    });

    test('default number of events is 32', ( )=> {
        expect(NumberOfEventsComponent.getByRole('textbox')).toHaveValue('32');
    });

    test('textbox value changes when a user types', async () => {
        const numberOfEvents =NumberOfEventsComponent.getByRole('textbox');
        const user = userEvent.setup();
        await user.type(numberOfEvents, '{backspace}{backspace}10');

        const allEvents = await getEvents();
        NumberOfEventsComponent.rerender(<NumberOfEvents setCurrentNOE={allEvents} setErrorAlert={() => {}} />)
        expect(numberOfEvents).toHaveValue('10');
    })
});
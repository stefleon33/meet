/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-render-in-setup */
import { render } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />)
    })

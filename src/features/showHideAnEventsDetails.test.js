/* eslint-disable testing-library/no-node-access */
import { loadFeature, defineFeature } from 'jest-cucumber';
const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        given('user sees all events for a city', () => {

        });

        when('the user selects an event from the list', () => {

        });

        then('the event details should be displayed', () => {

        });
    });

    test('User can expand an event to see details.', ({ given, when, then }) => {
        given('user is on an event', () => {

        });

        when('user clicks a button to view more details for the event', () => {

        });

        then('more information should be displayed for the event', () => {

        });
    });

    test('User can collapse an event to hide details.', ({ given, when, then }) => {
        given('the user is viewing the details for the event', () => {

        });

        when('the user wants to hide the event details', () => {

        });

        then('the event details should be hidden and the user should just see the initial event details', () => {

        });
    });
});
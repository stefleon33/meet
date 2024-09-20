/* eslint-disable testing-library/no-node-access */
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        given('user opens the app', () => {

        });

        when('the list of events are rendered', () => {

        });

        then('the event details should not be shown', () => {

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
});
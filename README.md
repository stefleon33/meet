# Meet - Event Discovery App

Meet is a React-based event discovery app that allows users to browse and explore upcoming events across various cities. The app is designed for a seamless user experience, offering features like filtering events by city, showing or hiding event details, and specifying the number of events displayed. Meet supports offline access, providing cached event data when the user is not connected to the internet. Additionally, the app can be installed as a shortcut on the home screen, and it includes visual data representations through charts that help users make informed decisions about their event attendance.

## Tech Stack

- Serverless
- Google Calendar API
- React
- Jest
- Puppeteer
- Recharts

## Live Link

[View Meet Online](https://stefleon33.github.io/meet/)

## Feature 1: Filter events by city

    User Story-
        As a user,
        I should be able to filter events by city
        So that I can see a list of events taking place in that city.

    SCENARIO 1: When user hasn’t searched for a specific city, show upcoming events from all cities.

        Given: user hasn’t searched for any city;
        When: the user opens the app;
        Then: the user should see a list of upcoming events.

    SCENARIO 2: User should see a list of suggestions when they search for a city.

        Given: the main page is open;
        When: user starts typing in the city textbox;
        Then: the user should receive a list of cities (suggestions) that match what they’ve typed.

    SCENARIO 3: User can select a city from the suggested list.

        Given: user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
        When: the user selects a city (e.g., “Berlin, Germany”) from the list;
        Then: their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

## Feature 2: Show/Hide Event Details

    User Story-
        As a user,
        I should be able to show or hide event details
        So that I can see more information about selected events.

    SCENARIO 1: An event element is collapsed by default.

        Given: the user opens the app;
        When: the list of events are rendered;
        Then: the event details should not be shown.

    SCENARIO 2: User can expand an event to see details.

        Given: user sees the events rendered;
        When: user clicks the "Show Details" button to view a description for the event;
        Then: event details should be displayed.

    SCENARIO 3: User can collapse an event to hide details.

        Given: the user has clicked the "Show Details" button for the event;
        When: the user clicks the "Hide Details" button;
        Then: the event details should be hidden.

## Feature 3: Specify Number of Events

    User Story-
        As a user,
        I should be able to specify how many events are presented
        So that I can see more or less events.

    SCENARIO 1: When user hasn't specified a number, 32 events are shown by default.

        Given: the user opens the app;
        And: the user has not specified the number of events to display
        When: the user opens the event list;
        Then: "32" events should be displayed.

    SCENARIO 2: User can change the number of events displayed.

        Given: the user is on the events page;
        And: the user has specified the number of events to display as "10"
        When: the user changes the number of events to display to "10";
        Then: "10" events should be displayed.

## Feature 4: Use the App When Offline

    User Story-
        As a user,
        I should be able to use the app offline
        So that the app is always available.

    SCENARIO 1: Show caches data when there's no internet connection.

        Given: the user has used the app before;
        When: they open the app while disconnected from the internet;
        Then: they should be able mto access the information stored in cache.

    SCENARIO 2: Show error when user changes search settings (city, number of events)

        Given: the user has changed search settings (city, number of events);
        When: there is no interent connection;
        Then: they should receive an error message.

## Feature 5: Add an App Shortcut to the Home Screen

    User Story-
        As a user,
        I should be able to add an app shortcut to the home screen
        So that I can access the app from the home screen.

    SCENARIO 1:

        Given: the user is on the app;
        When: they want to add a shortcut to the home screen;
        Then: the app should be installed as a shortcut for easy access.

## Feature 6: Display Charts Visualizing Event Details

    User Story-
        As a user,
        I should be able to view a chart with event details
        So that I can visualize the event details.

    SCENARIO 1: Show a chart with the number of upcoming events in each city.

        Given: a user is viewing the events page;
        When: they navigate to the chart section;
        Then: they should view a chart with the number of upcoming events in each city.

## Development and Deployment

### CI/CD Practices

The development process for Meet utilizes CI/CD (Continuous Integration and Continuous Delivery) practices to ensure the app is always in a deployable state. Automated tests run frequently to catch issues early, and deployment to the production environment is streamlined for quick and reliable updates.

### Key Technologies Used

- **React**: For building the user interface.
- **Bootstrap**: For responsive design and UI components.
- **PWA Support**: To allow the app to be installed as a shortcut on mobile devices.
- **Jest and Puppeteer**: For automated testing and end-to-end test coverage.

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/mayyinandprojects/meet.git

   ```

2. Navigate into the project directory:

   ```bash
   cd meet

   ```

3. Run the app:
   ```bash
   npm start
   ```

## Testing

1. Unit and Integration Tests: Run using Jest.

   ```bash
   npm run test

   ```

2. End-to-End Tests: Run using Puppeteer (Switch headless mode to true in EndtoEnd.tests.js).
   ```bash
   npm run test
   ```

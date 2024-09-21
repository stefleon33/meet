Feature: Specify Number of Events
    Scenario: When user hasn't specified a number, 32 events are shown by default.
        Given the user opens the app
        And the user has not specified the number of events to display
        When the user opens the event list
        Then 32 events should be displayed

    Scenario: User can change the number of events displayed.
        Given the user is on the events page
        And the user has specified the number of events to display as 10
        When the user changes the number of events to display to 10
        Then 10 events should be displayed
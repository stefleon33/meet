Feature: Show/Hide Event Details
    Scenario: An event element is collapsed by default.
        Given user sees all events for a city
        When the user selects an event from the list
        Then the event details should be displayed

    Scenario: User can expand an event to see details.
        Given user is on an event
        When user clicks a button to view more details for the event
        Then more information should be displayed for the event

    Scenario: User can collapse an event to hide details.
        Given the user is viewing the details for the event
        When the user wants to hide the event details
        Then the event details should be hidden and the user should just see the initial event details

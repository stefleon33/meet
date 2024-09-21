Feature: Show/Hide Event Details
    Scenario: An event element is collapsed by default.
        Given user opens the app
        When the list of events are rendered
        Then the event details should not be shown

    Scenario: User can expand an event to see details.
        Given user sees the events rendered
        When user clicks the Show Details button to view a description for the event
        Then event details should be displayed

    Scenario: User can collapse an event to hide details.
        Given the user has clicked the Show Details button for the event
        When the user clicks the Hide Details button
        Then the event details should be hidden
Feature: Login to Application

    As a valid user
    I want to login into application

    Scenario: Valid Login
        Given I open login page
        When I type username
        And I type password
        And I clicks on the button login
        Then I should see homepage
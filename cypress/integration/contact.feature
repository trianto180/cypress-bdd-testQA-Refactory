Feature: Login to Application

    As a valid user
    I want to login into application

    Scenario: Valid Login
        Given I open a page
        When I type username
        Then I should see homepage
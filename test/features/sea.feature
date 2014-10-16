Feature: Sea of directives

  Scenario: Add stormy and heavy rain to docks conditions
    When I browse to the "/"
    And I select option "stormy" in "docks.availableConditions"
    And I click "docks.updateButton"
    Then I should see "docks.stormyImg"
    And I select option "heavy rain" in "docks.availableConditions"
    And I click "docks.updateButton"
    Then I should see "docks.HeavyRainImg"

  Scenario: Central sloop during cloudy weather can put the sails
    When I browse to the "/"
    And I select option "cloudy" in "docks.availableConditions"
    And I click "docks.updateButton"
    And I select option "Sloop" for "1" ship
    And I click "port.checkButton" for "1" ship
    Then I should see "docks.cloudyImg"
    And I should see "Set sails!" message for "1" ship

  Scenario: Ship and towboat during heavy rain can put the sails, sloop can not
    When I browse to the "/"
    And I select option "heavy rain" in "docks.availableConditions"
    And I click "docks.updateButton"
    And I select option "Ship" for "0" ship
    And I select option "Towboat" for "1" ship
    And I select option "Sloop" for "2" ship
    And I click "port.checkButton" for "0" ship
    And I click "port.checkButton" for "1" ship
    And I click "port.checkButton" for "2" ship
    Then I should see "Set sails!" message for "0" ship
    And I should see "Set sails!" message for "1" ship
    And I should not see message for "2" ship


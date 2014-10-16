Feature: ng-repeat and $index, $event, $log

  Scenario: On application start
    When I browse to the "/"
    Then I should see "1" in "rank" column in row "1" of "fifa" table
    Then I should see "2" in "rank" column in row "2" of "fifa" table
    Then I should see "3" in "rank" column in row "3" of "fifa" table
    Then the "fifa" table should have "5" rows
    Then I should not see "6" row of "fifa" table
    Then I should not see "type"

  Scenario: Click "Where is Poland?" button
    When I browse to the "/"
    And I click "button"
    Then I should see "click" in "type"
    Then the "fifa" table should have "6" rows
    Then I should see "41" in "rank" column in row "6" of "fifa" table
    Then I should see "Poland" in "team" column in row "6" of "fifa" table
    Then I should see "680" in "totalPoints" column in row "6" of "fifa" table

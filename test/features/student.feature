Feature : Search students in Students book
  Scenario: First Name
    When I browse to the "/"
    When I enter "goo" into "input.first" field
    Then I should see "Good" in "firstName"
  Scenario: Last Name
    When I browse to the "/"
    When I enter "rya" into "input.last" field
    Then i should see "Ryan" into "input.first" field
  Scenario: Age
    When I browse to the "/"
    When I enter "2" into "input.age" field
    Then I should see "Bauer" and "Good" and "Chang" and "Gutierrez" and "Maxine" and "Gray" in "firstName"
  Scenario: Phone
    When I browse to the "/"
    When I enter "57" into "input.number" field
    Then I should see "austin.harvey@undefined.org" into "email"
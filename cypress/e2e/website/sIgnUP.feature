Feature: Crear una cuenta de usuario en DemoBlaze

  Scenario: : Crear una cuenta de usuario con éxito
    Given ingreso a DemoBlaze
    When hago clic en "Sign up" ubicado en el navbar
    And me registro con username: "TestBaufest010", password: "Bauf3st123"
    And hago clic en "Log in" ubicado en el navbar
    Then ingreso username: "TestBaufest010", password: "Bauf3st123"

Feature: Iniciar sesión y cerrar sesión en DemoBlaze

  Scenario: : Iniciar y cerrar sesión con éxito
    Given ingreso a DemoBlaze
    When hago clic en "Log in" ubicado en el navbar
    And ingreso username: "TestBaufest342345", password: "Bauf3st123"
    And hago clic en "Log out" ubicado en el navbar
    Then veo cierre de sesión exitoso

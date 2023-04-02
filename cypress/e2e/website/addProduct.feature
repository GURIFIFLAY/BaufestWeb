Feature: Agregar productos al carrito de compras de DemoBlaze

  Scenario: : Agregar una laptop al carrito y comprobar que se agregó
    Given ingreso a DemoBlaze
    When hago clic en "Laptops" para ver la lista de laptops disponibles
    And elijo una "MacBook air" para comprar
    And hago clic en el boton "Add to cart".
    Then debería ver un mensaje de confirmación de que la laptop se agregó correctamente al carrito
    And la cantidad de productos en el carrito debería incrementar en 1

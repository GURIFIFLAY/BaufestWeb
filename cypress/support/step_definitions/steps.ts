import {Given, Then, When} from '@badeball/cypress-cucumber-preprocessor';


Given('ingreso a DemoBlaze', () => {
    cy.goToWebsite();
});


Then(/^debería ver la página de inicio de DemoBlaze$/, function () {
    cy.get('#nava').should('include.text', 'PRODUCT STORE')

});

When('hago clic en {string} ubicado en el navbar', (text: string) => {
    cy.clickInNavbar(text);
});

When("ingreso username: {string}, password: {string}", (username: string, password: string) => {
    cy.login({name: username, password: password});
});

When("me registro con username: {string}, password: {string}", (username: string, password: string) => {
    cy.singup({name: username, password: password})
});
Then("me logeo correctamente", function () {
    cy.on('window:alert', (txt) => {
        cy.get('button:contains("Aceptar")').click();
    })
});

When("hago clic en {string} para ver la lista de laptops disponibles", (categories: string) => {
    cy.selectCategories("Laptops");
});
When("elijo una {string} para comprar", (model: string) => {
    cy.contains('a', model).click();
    cy.contains('h2', model).should("be.visible");
    cy.get("#tbodyid > h3")
        .invoke('text')
        .then(precioProducto => {
            cy.wrap(precioProducto).as('precioProducto');
        });
    ;
});

When("hago clic en el boton {string}.", (button: string) => {
    cy.contains('a', button).should("be.visible").click();
});
Then(/^debería ver un mensaje de confirmación de que la laptop se agregó correctamente al carrito$/, function () {
    cy.on('window:alert', (txt) => {
        expect(txt).to.contains('Product added');
    })
});
Then(/^la cantidad de productos en el carrito debería incrementar en (\d+)$/, function () {
    cy.clickInNavbar("Cart");
    cy.get("#tbodyid > tr > td:nth-child(1) > img").should("be.visible");
    cy.get("#totalp")
        .invoke("text")
        .then(precioCarrito => {
            cy.get('@precioProducto')
                .should('include', precioCarrito);

        })
});
Then(/^veo cierre de sesión exitoso$/, function () {
    cy.getCookie('session').should('not.exist');
});
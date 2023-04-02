// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('goToWebsite', () => {
    cy.visit(`index.html`);
});


class User {
    name: string;
    password: string
}

Cypress.Commands.add('login', (user) => {
    const {name, password} = user;

    cy.wrap(null, {timeout: 10000})
        .then(() => {
            cy.get("#logInModal > div > div > div.modal-body").should("be.visible");

            cy.get('#loginusername', {timeout: 10000})
                .should("be.visible")
                .type(name, {delay: 0});

            cy.get('#loginpassword', {timeout: 10000})
                .should("be.visible")
                .type(password, {delay: 0.5});

            cy.get('#logInModal > div > div > div.modal-footer > button.btn.btn-primary')
                .click();

            cy.get("#nameofuser").invoke('text')
                .should('equal', "Welcome " + name);
        })
            ;
        });


    Cypress.Commands.add('singup', (user) => {
        const {name, password} = user;

        cy.wrap(null, {timeout: 10000})
            .then(() => {
                cy.get("#signInModal > div > div > div.modal-body").should("be.visible");

                cy.get('#sign-username', {timeout: 10000})
                    .should("be.visible")
                    .type(name, {delay: 0});

                cy.get('#sign-password', {timeout: 10000})
                    .should("be.visible")
                    .type(password, {delay: 0.5});

                cy.get("#signInModal > div > div > div.modal-footer > button.btn.btn-primary")
                    .click();

                cy.on('window:alert', (txt) => {
                    expect(txt).to.contains('Sign up successful.');
                })
            });
    });


    Cypress.Commands.add("clickInNavbar", (text: string) => {
        switch (text) {
            case "Home":
                cy.get("#navbarExample > ul > li:nth-child(1) > a").click();
                break;
            case "Contact":
                cy.get("#navbarExample > ul > li:nth-child(2) > a").click();
                break;
            case "About us":
                cy.get("#navbarExample > ul > li:nth-child(3) > a").click();
                break;
            case "Cart":
                cy.get("#navbarExample > ul > li:nth-child(4) > a").click();
                break;
            case "Log in":
                cy.get("#login2").click();
                break;
            case "Log out":
                cy.get("#navbarExample > ul > li:nth-child(6) > a").click();
                break;
            case "Sign up":
                cy.get("#signin2").click();
                break;

            default:
                console.log("Invalid option");
                break;
        }
    });

    Cypress.Commands.add("selectCategories", (text: string) => {
        switch (text) {
            case "Phones":
                cy.get('a[onclick="byCat(' + "'phone'" + ')"]').click();
                break;
            case "Laptops":
                cy.get('a[onclick="byCat(' + "'notebook'" + ')"]').click();
                break;
            case "Monitors":
                cy.get('a[onclick="byCat(' + "'monitor'" + ')"]').click();
                break;

            default:
                console.log("Invalid option");
                break;
        }
    });
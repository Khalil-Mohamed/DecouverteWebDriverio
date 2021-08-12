const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");

describe("My Login application", () => {
    it("should login with valid credentials", async () => {
        await LoginPage.open();

        await LoginPage.login("tomsmith", "SuperSecretPassword!");
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            "You logged into a secure area!"
        );
    });

    /* TEST SANS POM

    // test deconnexion et affichage du message de deconnexion
    it("deconnexion et verification du message de deconnexion", () => {
        const BouttonDeconnexion = $('a[href="/logout"]'); // element href du boutton logout (css selecteur) 
        const MessageDeconnexion = $("#flash"); // id du message
        BouttonDeconnexion.click(); // action du test (ici cliquer sur le bouton logout)
        expect(MessageDeconnexion).toHaveTextContaining(
            "You logged out of the secure area!"
        );
    }); */

    // AVEC POM

    it("deconnexion et verification du message de deconnexion", () => {
        //const BouttonDeconnexion = $('a[href="/logout"]'); // element href du boutton logout (css selecteur) 
        //const MessageDeconnexion = $("#flash"); // id du message
        SecurePage.BouttonDeconnexion.click(); // action du test (ici cliquer sur le bouton logout)
        expect(SecurePage.MessageDeconnexion).toHaveTextContaining(
            "You logged out of the secure area!"
        );
    }); 
});

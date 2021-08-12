const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () { return $('#flash') }
    get MessageDeconnexion () { return $('#flash') }
    get BouttonDeconnexion () { return $('a[href="/logout"]') }
}

module.exports = new SecurePage();

describe('Page Principale', () => {
    it('verifcation nombre liste', () => {
        browser.url('/'); // redirection url de bae dans le fichier de configuration
        const Listes = $$("ul li"); // recupere toute la liste ($$ = plusieurs elements)
        expect(Listes).toBeElementsArrayOfSize(44); // verification dd'un nombre max de 44 elements
    });
});

describe('ebay main page', () => {
    it('bon titre', () => {
        browser.url('https://www.ebay.fr/');
        expect(browser).toHaveTitle('eBay : high-tech, maison, jardin, auto-moto et bien plus');
    });

    it('rechercher un produit et verifer le texte de recherche', () => {
        browser.url('https://www.ebay.fr/');
        const BarreDeRecherche = $('#gh-ac');
        const BouttonRecherche = $('#gh-btn');

        BarreDeRecherche.addValue('Ordinateur Asus');
        BouttonRecherche.click();

        expect(BarreDeRecherche).toHaveValue('Ordinateur Asus')
        
    });
});
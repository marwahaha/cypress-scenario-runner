const pages = Cypress.env('pages');

const assertions = {

	isOnPage: function(page) {
		let path = pages[page];
		let comparator = path instanceof RegExp ? 'match' : 'eq';
		cy.location('pathname').should(comparator, path);
	},

	isNotOnPage: function(page) {
		let path = pages[page];
		let comparator = path instanceof RegExp ? 'not.match' : 'not.eq';
		cy.location('pathname').should(comparator, path);
	},

	isVisible: function(name) {
		cy.getElem(name).should('be.visible').and('not.empty');
	},

	isNotVisible: function(name) {
		cy.getElem(name).should('not.be.visible');
	},

	hasCount: function(count, name) {
		cy.getElem(name).should('have.length', count);
	},

	hasText: function(name, value) {
		cy.getElem(name).should($element => expect($element.text().trim()).to.eq(value));
	},

	doesNotHaveText: function(name, value) {
		cy.getElem(name).should($element => expect($element.text().trim()).not.to.eq(value));
	},

	containsText: function(name, value) {
		cy.getElem(name).should('contain', value);
	},

	doesNotContainText: function(name, value) {
		cy.getElem(name).should('not.contain', value);
	},

};

Cypress.env('assertions', assertions);
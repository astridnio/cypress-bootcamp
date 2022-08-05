describe('Exercise 1', () => {
	it('should load books website', () => {
		cy.visit('https://books.toscrape.com/index.html', { timeout: 10000 });
		cy.url().should('include', 'index.html');
		cy.log('run 1');
		cy.reload();
		cy.log('run 2');
	});
	it('should count the correct number of categories', () => {
		cy.get('.side_categories > ul >li >ul >li ').its('length').should('eq', 50);
	});
	it('test start rating', () => {
		cy.get(':nth-child(1) > .product_pod > .star-rating > .icon-star')
			.its('length')
			.should('eq', 5);
	});
	it('test  all start rating display', () => {
		cy.get('.product_pod > .star-rating > .icon-star')
			.its('length')
			.should('eq', 100);
	});
	it('should click on poetry category', () => {
		cy.get('a').contains('Poetry').click();
		cy.get('h1').contains('Poetry');
	});
	it('should display the correct number of books on poetry', () => {
		cy.get('.product_pod').its('length').should('eq', 19);
	});
	it('click on olio book', () => {
		cy.get('a').contains('Olio').click();
		cy.get('.product_main > h1').contains('Olio');
	});
	it('Verify olio book value', () => {
		cy.get('.product_main > .price_color').contains('£23.88');
	});
});

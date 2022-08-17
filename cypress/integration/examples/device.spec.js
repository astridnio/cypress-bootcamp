describe('device test', () => {
	//TODO
	it('720 p', () => {
		cy.viewport(1280, 720);
		cy.visit('http://example.com');
		cy.wait(3000);
	});
	it('1080 p', () => {
		cy.viewport(1980, 1080);
		cy.visit('http://example.com');
		cy.wait(3000);
	});
	it('Iphone X', () => {
		cy.viewport('iphone-x');
		cy.visit('http://example.com');
		cy.wait(3000);
	});
	it('Ipad Mini', () => {
		cy.viewport('ipad-mini');
		cy.visit('http://example.com');
		cy.wait(3000);
	});
	it('Macbook 15', () => {
		cy.viewport('macbook-15');
		cy.visit('http://example.com');
		cy.wait(3000);
	});
});

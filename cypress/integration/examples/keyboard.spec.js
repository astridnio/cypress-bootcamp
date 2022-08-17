describe('Keyboard press simulation', () => {
	it('should submit searchbox with pressing enter', () => {
		cy.visit('http://zero.webappsecurity.com/', { timeout: 10000 });
		cy.get('#searchTerm').type('Just some text {enter}');
	});
});

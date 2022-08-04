describe('Browser Action', () => {
	it('should load correct URL', () => {
		cy.visit('https://example.com/', { timeout: 10000 });
	});
});

describe('custom commands', () => {
	it('should login to app using cypress custom commands', () => {
		cy.visit('http://zero.webappsecurity.com/login.html');
		cy.login('username', 'password');
	});
});

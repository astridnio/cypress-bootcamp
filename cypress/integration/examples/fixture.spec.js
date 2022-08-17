describe('Login with fixtures data', () => {
	it('should try to login', () => {
		cy.visit('http://zero.webappsecurity.com/login.html', {
			timeout: 10000,
		});
		cy.fixture('user').then(user => {
			const username = user.username;
			const password = user.password;
			cy.get('#user_login').as('username');
			cy.get('@username').clear();
			cy.get('@username').type(username);
			cy.get('#user_password').as('password');
			cy.get('@password').clear();
			cy.get('@password').type(password);
			cy.contains('Sign in').click();
		});
	});
});

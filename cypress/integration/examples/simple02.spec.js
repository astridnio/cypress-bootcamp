describe('working with inputs', () => {
	it('should load login page', () => {
		cy.visit('http://zero.webappsecurity.com/login.html', {
			timeout: 10000,
		});
		cy.url().should('include', 'login.html');
	});
	it('should fill username', () => {
		cy.get('#user_login').clear();
		cy.get('#user_login').type('some invalid username', { delay: 50 });
	});
	it('should fill password', () => {
		cy.get('#user_password').clear();
		cy.get('#user_password').type('some invalid password', { delay: 50 });
	});
	it('should mark checkbox', () => {
		cy.get('input[type=checkbox]').click();
		cy.wait(3000);
	});
	it('should submit form', () => {
		cy.contains('Sign in').click();
	});
	it('should display error message', () => {
		//TODO alert-error
		cy.get('.alert-error').should('be.visible');
	});
});

//* http://zero.webappsecurity.com/login.html

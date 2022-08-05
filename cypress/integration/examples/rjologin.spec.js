describe('QA Log in on HRVYST', () => {
	it('Visit login page', () => {
		cy.visit('https://qas-eastus-hrvyst-app.azurewebsites.net/login', {
			timeout: 10000,
		});
		cy.url().should('include', 'qas-eastus-hrvyst');
	});
	it('Click on Log in', () => {
		cy.get('[data-testid="login-button"] > span').click();
	});
});

//* https://qas-eastus-hrvyst-app.azurewebsites.net/login

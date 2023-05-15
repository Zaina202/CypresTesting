describe('Observe',()=>{
    beforeEach(()=>{
        cy.visit('https://goal-dev.mdx.ac.uk/');
        cy.get('#id_username').type('Zaina');
        cy.get('#id_password').type('zozo12345');
        cy.get('select[name="login_as"]').select('staff');
        cy.get('form[action="/login/"]> button[type="submit"]').click();
        cy.get('a[href="/staff/34"]').click();
        cy.visit('https://goal-dev.mdx.ac.uk/staff/34/goals/');
    });
    it('Open Goals page',()=>{
        cy.get('.navbar').should('exist');
        cy.get('.container-fluid').should('exist');
        cy.get('.row').should('exist');
        cy.get('.col-sm-8').should('exist');
        cy.get('#goal_filter').should('exist');
        cy.get('.col-2').should('exist');
        cy.get('#observer_table_div').should('exist');
    });
    it('Reapplaying filter after observe', () => {
        cy.get('input[name="level_filter"]').check({ force: true });
        cy.get('input[name="groups_filter"]').check({ force: true }); 
        cy.get('input[name="all_goals"]').check({ force: true }); 
        cy.get('button[type="button"]').contains('Apply filters').click();
        cy.get('button[onclick="observeAll(\'add\', this)"]').click();
        cy.get('button[type="button"]').contains('Apply filters').click();
        cy.get('#observe_goals_container > div > div > div.col-8.p-0 > form > ul').should('exist');
    });
    it('Test observe on goal', () => {
        cy.get('input[name="level_filter"]').check({ force: true });
        cy.get('input[name="groups_filter"]').check({ force: true }); 
        cy.get('input[name="all_goals"]').check({ force: true }); 
        cy.get('button[type="button"]').contains('Apply filters').click();
        cy.get('#observer_table_div button').eq(0).click();
        cy.get('.late_False.observer_result.align-self-center.col-5 select[name="grade"]').select('3');
        cy.get('#snackbar').should('contain', 'The goal has been graded successfully.');
    });
    it('Test undo grad', () => {
        cy.get('input[name="level_filter"]').check({ force: true });
        cy.get('input[name="groups_filter"]').check({ force: true }); 
        cy.get('input[name="all_goals"]').check({ force: true }); 
        cy.get('button[type="button"]').contains('Apply filters').click();
        cy.get('#observer_table_div button').eq(0).click();
        cy.contains('button.btn.btn-danger', 'Undo').click();
        cy.get('#observer_table_div button').eq(0).should('exist');
        cy.get('.late_False.observer_result.align-self-center.col-5 select[name="grade"]').select('3');
        cy.get('#snackbar').should('contain', 'The goal has been graded successfully.');
    });
})
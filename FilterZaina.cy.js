
describe('Applay Filter',()=>{

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
    it('applaying filter for all data', () => {
        cy.get('input[name="level_filter"]').check({ force: true });
        cy.get('input[name="groups_filter"]').check({ force: true }); 
        cy.get('input[name="all_goals"]').check({ force: true }); 
        cy.get('button[type="button"]').contains('Apply filters').click();
        cy.get('#observe_goals_container > div > div > div.col-8.p-0 > form').should('exist');
    });
    it('applaying filter without group', () => {
        cy.get('input[name="level_filter"]').check({ force: true });
        cy.get('#group_None').check({ force: true });
        cy.get('input[name="all_goals"]').check({ force: true }); 
        cy.get('button[type="button"]').contains('Apply filters').click();
        cy.get('img[src="/static/images/noDataAva.png"]').should('exist');
    });
    it('applaying filter without data', () => {
        cy.get('button[type="button"]').contains('Apply filters').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please selet a goal'); 
          });
    });
    it('Test applaying filtter with valid data',()=>{
        cy.get('#topic_188').check({force: true});
        cy.get('.topic_188').each(($el) => { 
            cy.wrap($el).check({force: true}); 
          });
        cy.get('#all_levels').check();
        cy.get('input[name="groups_filter"]').check({force: true});
        cy.get('input[name="level_filter"]').check({force: true});
        cy.get('button[type="button"]').contains('Apply filters').click();
        cy.get('#observe_goals_container > div > div > div.col-8.p-0 > form > ul').should('exist');
    });
    it('Test applaying filtter with invalid data',()=>{
        cy.get('#topic_188').check({force: true});
        cy.get('.topic_188').each(($el) => { 
            cy.wrap($el).check({force: true}); 
          });
        cy.get('#all_levels').check();
        cy.get('input[name="groups_filter"][group="None"]').check({force: true});
        cy.get('input[name="level_filter"]').check({force: true});
        cy.get('button[type="button"]').contains('Apply filters').click();
        cy.get('img[src="/static/images/noDataAva.png"]').should('exist');
    });
    it('filter without selecting goal', () => {
        cy.get('input[name="level_filter"]').check({ force: true });
        cy.get('input[name="groups_filter"]').check({ force: true }); 
        cy.get('button[type="button"]').contains('Apply filters').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please selet a goal'); 
          });
    });


});
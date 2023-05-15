# CypresTesting
Observe Testing 
https://github.com/Zaina202/CypresTesting/assets/92650788/47c3e207-f66f-4d71-b038-a9515a8a7e9c



applay filter testing
https://github.com/Zaina202/CypresTesting/assets/92650788/7c01e7bc-28fb-490e-84cb-8726281564d3



1.Observe
 beforeEach(()=>{
        cy.visit('https://goal-dev.mdx.ac.uk/');
        cy.get('#id_username').type('Zaina');
        cy.get('#id_password').type('zozo12345');
        cy.get('select[name="login_as"]').select('staff');
        cy.get('form[action="/login/"]> button[type="submit"]').click();
        cy.get('a[href="/staff/34"]').click();
        cy.visit('https://goal-dev.mdx.ac.uk/staff/34/goals/');
    });

cy.visit('https://goal-dev.mdx.ac.uk/');: This line tells the test to open a web page with the URL "https://goal-dev.mdx.ac.uk/".
cy.get('#id_username').type('Zaina');: Here, the test looks for an element on the page with the ID "id_username" (presumably an input field for a username) and enters the text "Zaina" into it.
cy.get('#id_password').type('zozo12345');: Similarly, the test finds an element with the ID "id_password" (presumably a password input field) and enters the text "zozo12345" as the password.
cy.get('select[name="login_as"]').select('staff');: This line finds a dropdown menu element with the name attribute "login_as" and selects the option with the value "staff" from the dropdown list. This might be used to specify the role or account type being logged in as.
cy.get('form[action="/login/"]> button[type="submit"]').click();: The test locates a form element with the action attribute "/login/" and clicks on the submit button within that form. This is how it triggers the login process.
cy.get('a[href="/staff/34"]').click();: After logging in, the test clicks on a link that has the href attribute "/staff/34". This link likely navigates to a specific staff member's page or profile.
cy.visit('https://goal-dev.mdx.ac.uk/staff/34/goals/');: Finally, the test visits another URL, "https://goal-dev.mdx.ac.uk/staff/34/goals/", which is probably the goals page for the specific staff member.
By using the beforeEach() hook, these actions will be executed before each test in the test suite. This ensures that each test starts from the same initial state, providing consistent and reliable results


Test applaying filter for all data
 it('applaying filter for all data', () => {
        cy.get('input[name="level_filter"]').check({ force: true });
        cy.get('input[name="groups_filter"]').check({ force: true });
        cy.get('input[name="all_goals"]').check({ force: true });
        cy.get('button[type="button"]').contains('Apply filters').click();
        cy.get('#observe_goals_container > div > div > div.col-8.p-0 > form').should('exist');
    });


it('applying filter for all data', () => { ... }): This line defines a test case with a description "applying filter for all data". The test case contains the following code block.
cy.get('input[name="level_filter"]').check({ force: true });: The test looks for an input element with the name attribute "level_filter" (presumably a checkbox) and checks it forcefully. This means the checkbox will be selected even if it is initially unchecked.
cy.get('input[name="groups_filter"]').check({ force: true });: Similarly, the test finds another input element with the name attribute "groups_filter" (another checkbox) and forcefully checks it.
cy.get('input[name="all_goals"]').check({ force: true });: The test locates an input element with the name attribute "all_goals" (presumably a checkbox) and forcefully checks it as well.
cy.get('button[type="button"]').contains('Apply filters').click();: Next, the test searches for a button element of type "button" and containing the text "Apply filters". It clicks on this button to apply the selected filters.
cy.get('#observe_goals_container > div > div > div.col-8.p-0 > form').should('exist');: After applying the filters, the test verifies that a specific form element exists on the page. The element is located using its ID "observe_goals_container" and its structure within the HTML hierarchy.

Applying filter without group
 it('applaying filter without group', () => {
        cy.get('input[name="level_filter"]').check({ force: true });
        cy.get('#group_None').check({ force: true });
        cy.get('input[name="all_goals"]').check({ force: true });
        cy.get('button[type="button"]').contains('Apply filters').click();
        cy.get('img[src="/static/images/noDataAva.png"]').should('exist');
    });
it('applying filter without group', () => { ... }): This line defines a test case with a description "applying filter without group". The test case contains the following code block.
cy.get('input[name="level_filter"]').check({ force: true });: The test looks for an input element with the name attribute "level_filter" (presumably a checkbox) and forcefully checks it. This indicates that a filter based on the level is being applied.
cy.get('#group_None').check({ force: true });: The test finds an input element with the ID "group_None" (likely a checkbox or radio button) and forcefully checks it. This action indicates that no specific group is being selected for filtering.
cy.get('input[name="all_goals"]').check({ force: true });: Similarly, the test locates an input element with the name attribute "all_goals" (presumably a checkbox) and forcefully checks it as well. This suggests that the "all goals" filter is being applied.
cy.get('button[type="button"]').contains('Apply filters').click();: Next, the test searches for a button element of type "button" that contains the text "Apply filters". It clicks on this button to apply the selected filters.
cy.get('img[src="/static/images/noDataAva.png"]').should('exist');: After applying the filters, the test verifies the existence of a specific image element. The image element is located using its source attribute, which is set to "/static/images/noDataAva.png". This image is likely used to indicate that no data is available after applying the filters

Applying filter without data

    it('applaying filter without data', () => {
        cy.get('button[type="button"]').contains('Apply filters').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please selet a goal');
          });
    });
it('applying filter without data', () => { ... }): This line defines a test case with a description "applying filter without data". The test case contains the following code block.
cy.get('button[type="button"]').contains('Apply filters').click();: The test searches for a button element of type "button" that contains the text "Apply filters". It clicks on this button to apply the filters, even though no data or goals have been selected.
cy.on('window:alert', (str) => { ... });: This line sets up an event listener for the "window:alert" event, which is triggered when an alert dialog is shown on the webpage.
(str) => { ... }: The test defines a callback function that takes the alert message as an argument.
expect(str).to.equal('Please select a goal');: Within the callback function, the test uses the expect statement to assert that the alert message received ("str") is equal to the string "Please select a goal". This means that the test expects an alert to be shown with this specific message.

Test applying filter with valid data

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

it('Test applying filter with valid data', () => { ... }): This line defines a test case with a description "Test applying filter with valid data". The test case contains the following code block.
cy.get('#topic_188').check({ force: true });: The test finds an element with the ID "topic_188" (likely a checkbox) and forcefully checks it. This indicates that a specific topic or category is being selected as part of the filtering process.
cy.get('.topic_188').each(($el) => { ... });: Here, the test selects all elements with the class "topic_188" (presumably a group of checkboxes) using the .each() method. Within the callback function, each checkbox element is forcefully checked one by one using cy.wrap($el).check({ force: true });. This ensures that all checkboxes related to topic 188 are selected.
cy.get('#all_levels').check();: The test locates an element with the ID "all_levels" (likely a checkbox) and checks it. This checkbox represents selecting all levels for filtering.
cy.get('input[name="groups_filter"]').check({ force: true });: Similarly, the test finds an input element with the name attribute "groups_filter" (probably a checkbox) and forcefully checks it. This indicates that a specific group is being selected for filtering.
cy.get('input[name="level_filter"]').check({ force: true });: The test locates an input element with the name attribute "level_filter" (likely a checkbox) and forcefully checks it as well. This checkbox represents selecting a specific level for filtering.
cy.get('button[type="button"]').contains('Apply filters').click();: Next, the test searches for a button element of type "button" that contains the text "Apply filters". It clicks on this button to apply the selected filters.
cy.get('#observe_goals_container > div > div > div.col-8.p-0 > form > ul').should('exist');: After applying the filters, the test verifies the existence of a specific unordered list element within a form. The element is located using its structure within the HTML hierarchy. Its presence confirms that the filtered goals are being displayed correctly

Test applying filter with invalid data

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

it('Test applying filter with invalid data', () => { ... }): This line defines a test case with a description "Test applying filter with invalid data". The test case contains the following code block.
cy.get('#topic_188').check({ force: true });: The test finds an element with the ID "topic_188" (likely a checkbox) and forcefully checks it. This indicates that a specific topic or category is being selected as part of the filtering process.
cy.get('.topic_188').each(($el) => { ... });: Here, the test selects all elements with the class "topic_188" (presumably a group of checkboxes) using the .each() method. Within the callback function, each checkbox element is forcefully checked one by one using cy.wrap($el).check({ force: true });. This ensures that all checkboxes related to topic 188 are selected.
cy.get('#all_levels').check();: The test locates an element with the ID "all_levels" (likely a checkbox) and checks it. This checkbox represents selecting all levels for filtering.
cy.get('input[name="groups_filter"][group="None"]').check({ force: true });: Similarly, the test finds an input element with the name attribute "groups_filter" and the attribute "group" set to "None" (probably a checkbox). It forcefully checks this checkbox. This action indicates that a specific group (None) is being selected for filtering.
cy.get('input[name="level_filter"]').check({ force: true });: The test locates an input element with the name attribute "level_filter" (likely a checkbox) and forcefully checks it as well. This checkbox represents selecting a specific level for filtering.
cy.get('button[type="button"]').contains('Apply filters').click();: Next, the test searches for a button element of type "button" that contains the text "Apply filters". It clicks on this button to apply the selected filters.
cy.get('img[src="/static/images/noDataAva.png"]').should('exist');: After applying the filters, the test verifies the existence of a specific image element. The image element is located using its source attribute, which is set to "/static/images/noDataAva.png". This image is likely used to indicate that no data is available after applying the filters. Its presence confirms that the filtering with the selected invalid data resulted in no matching results

Filter without selecting goal

    it('filter without selecting goal', () => {
        cy.get('input[name="level_filter"]').check({ force: true });
        cy.get('input[name="groups_filter"]').check({ force: true });
        cy.get('button[type="button"]').contains('Apply filters').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please selet a goal');
          });
    });
it('filter without selecting goal', () => { ... }): This line defines a test case with a description "filter without selecting goal". The test case contains the following code block.
cy.get('input[name="level_filter"]').check({ force: true });: The test finds an input element with the name attribute "level_filter" (likely a checkbox) and forcefully checks it. This indicates that a specific level is being selected for filtering.
cy.get('input[name="groups_filter"]').check({ force: true });: Similarly, the test locates an input element with the name attribute "groups_filter" (probably a checkbox) and forcefully checks it. This action indicates that a specific group is being selected for filtering.
cy.get('button[type="button"]').contains('Apply filters').click();: The test searches for a button element of type "button" that contains the text "Apply filters". It clicks on this button to apply the selected filters.
cy.on('window:alert', (str) => { ... });: This line sets up an event listener for the "window:alert" event, which is triggered when an alert dialog is shown on the webpage.
(str) => { ... }: The test defines a callback function that takes the alert message as an argument.
expect(str).to.equal('Please select a goal');: Within the callback function, the test uses the expect statement to assert that the alert message received ("str") is equal to the string "Please select a goal". This means that the test expects an alert to be shown with this specific message.

2.Applaying Filter:
Reapplying filter after observe
    it('Reapplaying filter after observe', () => {
        cy.get('input[name="level_filter"]').check({ force: true });
        cy.get('input[name="groups_filter"]').check({ force: true });
        cy.get('input[name="all_goals"]').check({ force: true });
        cy.get('button[type="button"]').contains('Apply filters').click();
        cy.get('button[onclick="observeAll(\'add\', this)"]').click();
        cy.get('button[type="button"]').contains('Apply filters').click();
        cy.get('#observe_goals_container > div > div > div.col-8.p-0 > form > ul').should('exist');
    });
it('Reapplying filter after observe', () => { ... }): This line defines a test case with a description "Reapplying filter after observe". The test case contains the following code block.
cy.get('input[name="level_filter"]').check({ force: true });: The test finds an input element with the name attribute "level_filter" (likely a checkbox) and forcefully checks it. This indicates that a specific level is being selected for filtering.
cy.get('input[name="groups_filter"]').check({ force: true });: Similarly, the test locates an input element with the name attribute "groups_filter" (probably a checkbox) and forcefully checks it. This action indicates that a specific group is being selected for filtering.
cy.get('input[name="all_goals"]').check({ force: true });: The test finds an input element with the name attribute "all_goals" (likely a checkbox) and forcefully checks it. This checkbox represents selecting all goals for filtering.
cy.get('button[type="button"]').contains('Apply filters').click();: The test searches for a button element of type "button" that contains the text "Apply filters". It clicks on this button to apply the selected filters.
cy.get('button[onclick="observeAll(\'add\', this)"]').click();: After applying the filters, the test searches for a button element that has an onclick attribute set to observeAll('add', this). It clicks on this button, presumably to observe or track the filtered goals.
cy.get('button[type="button"]').contains('Apply filters').click();: The test again searches for a button element of type "button" that contains the text "Apply filters". It clicks on this button to reapply the filters after observing the goals.
cy.get('#observe_goals_container > div > div > div.col-8.p-0 > form > ul').should('exist');: After reapplying the filters, the test verifies the existence of a specific unordered list element within a form. The element is located using its structure within the HTML hierarchy. Its presence confirms that the filtered goals are being displayed correctly

Test observe on goal

    it('Test observe on goal', () => {
        cy.get('input[name="level_filter"]').check({ force: true });
        cy.get('input[name="groups_filter"]').check({ force: true });
        cy.get('input[name="all_goals"]').check({ force: true });
        cy.get('button[type="button"]').contains('Apply filters').click();
        cy.get('#observer_table_div button').eq(0).click();
        cy.get('.late_False.observer_result.align-self-center.col-5 select[name="grade"]').select('3');
        cy.get('#snackbar').should('contain', 'The goal has been graded successfully.');
    });
it('Test observe on goal', () => { ... }): This line defines a test case with a description "Test observe on goal". The test case contains the following code block.
cy.get('input[name="level_filter"]').check({ force: true });: The test finds an input element with the name attribute "level_filter" (likely a checkbox) and forcefully checks it. This indicates that a specific level is being selected for filtering.
cy.get('input[name="groups_filter"]').check({ force: true });: Similarly, the test locates an input element with the name attribute "groups_filter" (probably a checkbox) and forcefully checks it. This action indicates that a specific group is being selected for filtering.
cy.get('input[name="all_goals"]').check({ force: true });: The test finds an input element with the name attribute "all_goals" (likely a checkbox) and forcefully checks it. This checkbox represents selecting all goals for filtering.
cy.get('button[type="button"]').contains('Apply filters').click();: The test searches for a button element of type "button" that contains the text "Apply filters". It clicks on this button to apply the selected filters.
cy.get('#observer_table_div button').eq(0).click();: After applying the filters, the test finds the first button element within the element with the ID "observer_table_div". It clicks on this button, presumably to observe the first goal in the filtered list.
cy.get('.late_False.observer_result.align-self-center.col-5 select[name="grade"]').select('3');: The test locates a select element within an element that has specific classes. It selects the option with the value "3" from the dropdown menu. This action represents grading the observed goal with a value of 3.
cy.get('#snackbar').should('contain', 'The goal has been graded successfully.');: Finally, the test verifies that a specific element with the ID "snackbar" contains the text "The goal has been graded successfully.". This ensures that a confirmation message or notification is displayed indicating the successful grading of the goal.

Test undo grade
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



it('Test undo grad', () => { ... }): This line defines a test case with a description "Test undo grad". The test case contains the following code block.
cy.get('input[name="level_filter"]').check({ force: true });: The test finds an input element with the name attribute "level_filter" (likely a checkbox) and forcefully checks it. This indicates that a specific level is being selected for filtering.
cy.get('input[name="groups_filter"]').check({ force: true });: Similarly, the test locates an input element with the name attribute "groups_filter" (probably a checkbox) and forcefully checks it. This action indicates that a specific group is being selected for filtering.
cy.get('input[name="all_goals"]').check({ force: true });: The test finds an input element with the name attribute "all_goals" (likely a checkbox) and forcefully checks it. This checkbox represents selecting all goals for filtering.
cy.get('button[type="button"]').contains('Apply filters').click();: The test searches for a button element of type "button" that contains the text "Apply filters". It clicks on this button to apply the selected filters.
cy.get('#observer_table_div button').eq(0).click();: After applying the filters, the test finds the first button element within the element with the ID "observer_table_div". It clicks on this button, presumably to observe the first goal in the filtered list.
cy.contains('button.btn.btn-danger', 'Undo').click();: The test searches for a button element that contains the text "Undo" and has the classes "btn" and "btn-danger". It clicks on this button to undo the grade for the observed goal.
cy.get('#observer_table_div button').eq(0).should('exist');: The test verifies that the first button element within the element with the ID "observer_table_div" still exists. This ensures that the undo operation has restored the observed goal without a grade.
cy.get('.late_False.observer_result.align-self-center.col-5 select[name="grade"]').select('3');: The test locates a select element within an element that has specific classes. It selects the option with the value "3" from the dropdown menu. This action represents grading the observed goal with a value of 3.
cy.get('#snackbar').should('contain', 'The goal has been graded successfully.');: Finally, the test verifies that a specific element with the ID "snackbar" contains the text "The goal has been graded successfully.". This ensures that a confirmation message or notification is displayed indicating the successful grading of the goal

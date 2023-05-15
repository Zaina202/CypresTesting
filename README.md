# CypresTesting
# CypresTesting

 1) it ('search for valid staff according upper case, () => {
        cy.get('label'). contains('Search'). should('exist');
        cy.get('input[type="search"]'). type('deema');
        cy.get('tr#staff_Deema'). should('exist');
    });

This case search for staff name by upper case first through the following steps:
1)	Ensure that there is a place to search where the search function is available.
2)	Use the cy.get('label') command to select the label element and use the contains () function with search parameter: contains('Search') and use should('exist') to Ensures that the label element is present on the page.
3)	Locate the input field to search for staff by using cy.get('input[type="search"]') command to specify the element of the input field then Use the type () function and pass 'deema' as a parameter: type('deema').
4)	Use cy.get('tr#staff_Deema') to determine the row in which the staff member is located by using the ID 'staff_Deema' then use should('exist') command to Ensures that the row exists on the page.

2)      it('Add staff with symbols and numbers',()=>{
        cy.get('.toolbar').should('exist');
        cy.get('#new_staff').type('@@@');
        cy.get('.toolbar > .row > :nth-child(2) > .btn').click();
        cy.get('tr#staff_\\@\\@\\@.odd').should('exist');
    });

This test case add staff with symbols and numbers through the following steps:
1)	cy.get('.toolbar') command to select the toolbar element. Then use should('exist') to ensure that the toolbar element exists.
2)	cy.get('#new_staff') to select the input field element then use the type () function and pass '@@' as a parameter: type('@@@').
3)	Use cy.get('.toolbar > .row > :nth-child(2) > .btn') to locate the button within the toolbar element. Then use click () function for Click the button to add the staff. 
4)	Use cy.get('tr#staff_\\@\\@\\@.odd') to locate row (tr element) representing the added staff with id '_staff' then use should('exist') make sure the row is on the page.
                                                                                                                                      


3)  it('edit first name of staff by valid user name',()=>{
        cy.get('@Edit').click({ force: true });
        cy.get('@FirstName')
        .invoke('val', 'tala');
        cy.get('@Save')
        .click({ force: true });
          });

This test case edits first name of staff by valid user name through the following steps:
1)	Use cy.get('@Edit') which it is cy.get('a[onclick="showEditRow(\'Talaa\')"]').as('Edit') in beforeEach to locate the element (<a>) that has an onclick attribute with the value showEditRow('Talaa') and select the element.then use
click({ force: true }) to click on the edit element to initiate the editing process.

2)	Use cy.get('@FirstName') which is cy.get('input[name="first_name"].textinput.textInput.form-control').as('FirstName') in beforeEach to locate the input element with the attribute name set to "first_name" and with the CSS classes "textinput", "textInput", and "form-control" and select the element.

3)	Use .invoke('val', 'tala') to Set the value of the input field to the desired first name, 'tala'.

4)	Use cy.get('@Save') which cy.get('button[type="submit"].btn.btn-primary[onclick="saveEditRow(\'Talaa\')"]').as('Save') in beforeEach to locate the button element by type set to "submit" classes "btn" and "btn-primary" onclick attribute with the value saveEditRow('Talaa') to select the element.

5)	Use click({ force: true }) click on the save element to save the changes.

4)  it('edit email of staff by valid user name',()=>{
            cy.get('@Edit').click({ force: true });
            cy.get('@Email')
            .invoke('val', 'tala@gmail.com');
            cy.get('@Save')
            .click({ force: true });
              });

This test case edits email of staff by valid user name through the following steps:

1)Use cy.get('@Edit') which it is cy.get('a[onclick="showEditRow(\'Talaa\')"]').as('Edit') in beforeEach to locate the element (<a>) that has an onclick attribute with the value showEditRow('Talaa') and select the element. then use click({ force: true }) to click on the edit element to initiate the editing process.
2)use cy.get('@Email') which is cy.get('input[name="email"].textinput.textInput.form-control').as('Email') in beforeEach to locate input element with the attribute name set to "email" and with classes "textinput", "textInput", and "form-control" to select the element.
3) Use .invoke('val', 'tala@gmail.com') to Set the value of the input field to the desired email, 'tala@gmail.com'.
4) Use cy.get('@Save') which cy.get('button[type="submit"].btn.btn-primary[onclick="saveEditRow(\'Talaa\')"]').as('Save') in beforeEach to locate the button element by type set to "submit" classes "btn" and "btn-primary" onclick attribute with the value saveEditRow('Talaa') to select the element.
5) Use click({ force: true }) click on the save element to save the changes.

5)   it('edit last name of staff by valid user name',()=>{
                cy.get('@Edit').click({ force: true });
                cy.get('@LastName').invoke('val', 'barham');
                cy.get('@Save')
                .click({ force: true });
                    }); 
This test case edits last name of staff by valid user name through the following steps:
1)	Use cy.get('@Edit') which it is cy.get('a[onclick="showEditRow(\'Talaa\')"]').as('Edit') in beforeEach to locate the element (<a>) that has an onclick attribute with the value showEditRow('Talaa') and select the element. then use click({ force: true }) to click on the edit element to initiate the editing process.

2)	Use cy.get('@LaststName') which is cy.get('input[name="last_name"].textinput.textInput.form-control').as('LastName') in beforeEach to locate the input element with the attribute name set to "first_name" and with the CSS classes "textinput", "textInput", and "form-control" and select the element.

3)	Use .invoke('val', 'barham') to Set the value of the input field to the desired last name, 'barham'.


4)	Use cy.get('@Save') which cy.get('button[type="submit"].btn.btn-primary[onclick="saveEditRow(\'Talaa\')"]').as('Save') in beforeEach to locate the button element by type set to "submit" classes "btn" and "btn-primary" onclick attribute with the value saveEditRow('Talaa') to select the element.

5)	Use click({ force: true }) click on the save element to save the changes.

6)   it('edit email,first name,last name of staff by valid user  name',()=>{
            cy.get('@Edit').click({ force: true });
            cy.get('@FirstName').invoke('val', 'tala');
            cy.get('@Email').invoke('val', 't@gmail.com');
            cy.get('@LastName').invoke('val', 'barham');
            cy.get('@Save')
            .click({ force: true });
                });
This test case edits first, last name and email of staff by valid user name through the following steps:
1)	Use cy.get('@Edit') which it is cy.get('a[onclick="showEditRow(\'Talaa\')"]').as('Edit') in beforeEach to locate the element (<a>) that has an onclick attribute with the value showEditRow('Talaa') and select the element. then use click({ force: true }) to click on the edit element to initiate the editing process.

2)	Use cy.get('@FirstName') which is cy.get('input[name="first_name"].textinput.textInput.form-control').as('FirstName') in beforeEach to locate the input element with the attribute name set to "first_name" and with the CSS classes "textinput", "textInput", and "form-control" and select the element.

3)	use cy.get('@Email') which is cy.get('input[name="email"].textinput.textInput.form-control').as('Email') in beforeEach to locate input element with the attribute name set to "email" and with classes "textinput", "textInput", and "form-control" to select the element.

4)	Use cy.get('@LaststName') which is cy.get('input[name="last_name"].textinput.textInput.form-control').as('LastName') in beforeEach to locate the input element with the attribute name set to "first_name" and with the CSS classes "textinput", "textInput", and "form-control" and select the element.
5)	Use cy.get('@Save') which cy.get('button[type="submit"].btn.btn-primary[onclick="saveEditRow(\'Talaa\')"]').as('Save') in beforeEach to locate the button element by type set to "submit" classes "btn" and "btn-primary" onclick attribute with the value saveEditRow('Talaa') to select the element.

6)	Use click({ force: true }) click on the save element to save the changes.

7)  it('edit of staff goal permission', () => {
          cy.get('@Edit').click({ force: true });
          cy.get('select[name="permissions_Goals"][form="form_staff_Talaa"] option').should(($option) => {
            expect($option).to.have.length(3);
            expect($option.eq(0)).to.have.value('0');
            expect($option.eq(1)).to.have.value('1');
            expect($option.eq(2)).to.have.value('2');
          });
          cy.get('select[name="permissions_Goals"][form="form_staff_Talaa"]').select('1', { force: true });
          cy.get('@save')
            .click({ force: true });
        });

This test case edits staff goal permission by valid user name through the following steps:
1)	Use cy.get('@Edit') which it is cy.get('a[onclick="showEditRow(\'Talaa\')"]').as('Edit') in beforeEach to locate the element (<a>) that has an onclick attribute with the value showEditRow('Talaa') and select the element. then use click({ force: true }) to click on the edit element to initiate the editing process.

2)	Use  cy.get('select[name="permissions_Goals"][form="form_staff_Talaa"] option') ).should(($option).to locate the <select> element that corresponds to the staff member's goal permission.

3)	Use expect($option).to.have.length(3) to ensure that the number of <option> elements is 3.

4)	expect($option).to.have.length(3);
expect($option.eq(0)).to.have.value('0');
      expect($option.eq(1)).to.have.value('1');
expect($option.eq(2)).to.have.value('2');
ensure that the values of the option elements are as expected.the .eq() function to select each option element by index and the .to.have.value()to check its value.

5)	cy.get('select[name="permissions_Goals"][form="form_staff_Talaa"]').select('1', { force: true }); to Select the desired goal permission value 1, from the select element.

6)	Use cy.get('@Save') which cy.get('button[type="submit"].btn.btn-primary[onclick="saveEditRow(\'Talaa\')"]').as('Save') in beforeEach to locate the button element by type set to "submit" classes "btn" and "btn-primary" onclick attribute with the value saveEditRow('Talaa') to select the element.


7)	Use click({ force: true }) click on the save element to save the changes.
8) it('edit of staff Observe permission', () => {
          cy.get('@Edit').click({ force: true });
          cy.get('select[name="permissions_Observe"][form="form_staff_Talaa"] option').should(($option) => {
            expect($option).to.have.length(3);
            expect($option.eq(0)).to.have.value('0');
            expect($option.eq(1)).to.have.value('1');
            expect($option.eq(2)).to.have.value('2');
          });
          cy.get('select[name="permissions_Observe"][form="form_staff_Talaa"]').select('2', { force: true });
          cy.get('@Save')
            .click({ force: true });
        });
This test case edits staff obsarve permission by valid user name through the following steps:
1)	Use cy.get('@Edit') which it is cy.get('a[onclick="showEditRow(\'Talaa\')"]').as('Edit') in beforeEach to locate the element (<a>) that has an onclick attribute with the value showEditRow('Talaa') and select the element. then use click({ force: true }) to click on the edit element to initiate the editing process.

2)	Use  cy.get('select[name="permissions_Goals"][form="form_staff_Talaa"] option') ).should(($option).to locate the <select> element that corresponds to the staff member's goal permission.

3)	Use expect($option).to.have.length(3) to ensure that the number of <option> elements is 3.

4)	expect($option).to.have.length(3);
expect($option.eq(0)).to.have.value('0');
      expect($option.eq(1)).to.have.value('1');
expect($option.eq(2)).to.have.value('2');
ensure that the values of the option elements are as expected.the .eq() function to select each option element by index and the .to.have.value()to check its value.

5)	cy.get('select[name=" permissions_Observe "][form="form_staff_Talaa"]').select('2', { force: true }); to Select the desired goal permission value 2, from the select element.

6)	Use cy.get('@Save') which cy.get('button[type="submit"].btn.btn-primary[onclick="saveEditRow(\'Talaa\')"]').as('Save') in beforeEach to locate the button element by type set to "submit" classes "btn" and "btn-primary" onclick attribute with the value saveEditRow('Talaa') to select the element.


7)	Use click({ force: true }) click on the save element to save the changes.



9)  it('edit of staff  permission', () => {
          cy.get('@Edit').click({ force: true });
          cy.get('select[name="permissions_Staff"][form="form_staff_Talaa"] option').should(($option) => {
            expect($option).to.have.length(3);
            expect($option.eq(0)).to.have.value('0');
            expect($option.eq(1)).to.have.value('1');
            expect($option.eq(2)).to.have.value('2');
          });
          cy.get('select[name="permissions_Staff"][form="form_staff_Talaa"]').select('2', { force: true });
          cy.get('@Save')
            .click({ force: true });
        });

1) This test case edits staff permission by valid user name through the following steps:
1)	Use cy.get('@Edit') which it is cy.get('a[onclick="showEditRow(\'Talaa\')"]').as('Edit') in beforeEach to locate the element (<a>) that has an onclick attribute with the value showEditRow('Talaa') and select the element. then use click({ force: true }) to click on the edit element to initiate the editing process.

2)	Use  cy.get('select[name="permissions_Goals"][form="form_staff_Talaa"] option') ).should(($option).to locate the <select> element that corresponds to the staff member's goal permission.

3)	Use expect($option).to.have.length(3) to ensure that the number of <option> elements is 3.

4)	expect($option).to.have.length(3);
expect($option.eq(0)).to.have.value('0');
      expect($option.eq(1)).to.have.value('1');
expect($option.eq(2)).to.have.value('2');
ensure that the values of the option elements are as expected.the .eq() function to select each option element by index and the .to.have.value()to check its value.

5)	cy.get('select[name="permissions_Staff"][form="form_staff_Talaa"]').select('2', { force: true });to Select the desired staff permission value 2, from the select element.

6)	Use cy.get('@Save') which cy.get('button[type="submit"].btn.btn-primary[onclick="saveEditRow(\'Talaa\')"]').as('Save') in beforeEach to locate the button element by type set to "submit" classes "btn" and "btn-primary" onclick attribute with the value saveEditRow('Talaa') to select the element.


7)	Use click({ force: true }) click on the save element to save the changes.

10) it('cancel edit',()=>{
       cy.get('@Edit').click({ force: true });
        cy.get('@Email')
        .invoke('val', 'ttt@gmail.com');
         cy.get('button[type="reset"].btn.btn-   danger[onclick="cancelEditRow(\'Talaa\')"]')
          .click({ force: true });
            });

1)	Use cy.get('@Edit') which it is cy.get('a[onclick="showEditRow(\'Talaa\')"]').as('Edit') in beforeEach to locate the element (<a>) that has an onclick attribute with the value showEditRow('Talaa') and select the element. then use click({ force: true }) to click on the edit element to initiate the editing process.

2)	use cy.get('@Email') which is cy.get('input[name="email"].textinput.textInput.form-control').as('Email') in beforeEach to locate input element with the attribute name set to "email" and with classes "textinput", "textInput", and "form-control" to select the element.

3)	Use .invoke('val', 'ttt@gmail.com') to Set the value of the input field to the desired email, 'tala@gmail.com'.

4)	Use cy.get('button[type="reset"].btn.btn-   danger[onclick="cancelEditRow(\'Talaa\')"]') to locate the button element that triggers the cancel action to discard the changes made during editing.
5)	Use click({ force: true }) click on the save element to save the changes.



vidio link
https://drive.google.com/file/d/1wD_DNVT0ICZLDFrMh-yZEdM_-B60Cx8B/view?usp=share_link
 













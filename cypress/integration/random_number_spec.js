describe('Build #1 Tests', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains a button with id #generate', ()=>{
            cy.get('button#generate').should('be.visible');
        });
    
        it('contains a <p> with the id #random-num', ()=>{
            cy.get('p#random-num').should('be.empty');
        });
    });
    
    describe('Random number generator', ()=>{
        it('should generate a random number when button is clicked', ()=>{
            cy.get('button#generate').click();
            cy.get('p#random-num').should('not.be.empty');
        });
    });
});
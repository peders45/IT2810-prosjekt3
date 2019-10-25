describe('The Home Page', function() {
    it('successfully loads', function() {
      cy.visit('/')
    })
  })

  context("Search", () => {
    beforeEach(() => {
      cy.visit("/");
    });

  it("successfully search light", () => {
    cy.get("input[type=text]").type("light");

    cy.get("input[type=button]").click();

    cy.wait(2000)

    cy.window().its('store').invoke('getState').its('menus').should('deep.equal', [{"_id":"5d9c9344073574a3f332d423","Item":"Egg_White_Delight","Category":"Breakfast","score":null,"Calories":250,"Carbohydrates":30,"Protein":18,"Total_Fat":8,"Saturated_Fat":3,"Sugars":3,"Total_Fat_percentage_Daily_Value":12,"Cholesterol_percentage_Daily_Value":8,"Sodium_percentage_Daily_Value":32,"Calcium_percentage_Daily_Value":25,"__typename":"Menu"}])


  });

  it("successfully check Desserts box", () => {

    cy.get("input[value=Desserts]").click({ force: true });

    cy.wait(2000)

    cy.window().its('store').invoke('getState').its('menus').should('deep.equal', [{"_id":"5d9c9344073574a3f332d489","Item":"Baked_Apple_Pie","Category":"Desserts","score":null,"Calories":250,"Carbohydrates":32,"Protein":2,"Total_Fat":13,"Saturated_Fat":7,"Sugars":13,"Total_Fat_percentage_Daily_Value":19,"Cholesterol_percentage_Daily_Value":0,"Sodium_percentage_Daily_Value":7,"Calcium_percentage_Daily_Value":2,"__typename":"Menu"},{"_id":"5d9c9344073574a3f332d48a","Item":"Chocolate_Chip_Cookie","Category":"Desserts","score":3.75,"Calories":160,"Carbohydrates":21,"Protein":2,"Total_Fat":8,"Saturated_Fat":3.5,"Sugars":15,"Total_Fat_percentage_Daily_Value":12,"Cholesterol_percentage_Daily_Value":3,"Sodium_percentage_Daily_Value":4,"Calcium_percentage_Daily_Value":2,"__typename":"Menu"},{"_id":"5d9c9344073574a3f332d48b","Item":"Oatmeal_Raisin_Cookie","Category":"Desserts","score":null,"Calories":150,"Carbohydrates":22,"Protein":2,"Total_Fat":6,"Saturated_Fat":2.5,"Sugars":13,"Total_Fat_percentage_Daily_Value":9,"Cholesterol_percentage_Daily_Value":3,"Sodium_percentage_Daily_Value":6,"Calcium_percentage_Daily_Value":2,"__typename":"Menu"},{"_id":"5d9c9344073574a3f332d48c","Item":"Kids_Ice_Cream_Cone","Category":"Desserts","score":null,"Calories":45,"Carbohydrates":7,"Protein":1,"Total_Fat":1.5,"Saturated_Fat":1,"Sugars":6,"Total_Fat_percentage_Daily_Value":2,"Cholesterol_percentage_Daily_Value":2,"Sodium_percentage_Daily_Value":1,"Calcium_percentage_Daily_Value":4,"__typename":"Menu"},{"_id":"5d9c9344073574a3f332d48d","Item":"Hot_Fudge_Sundae","Category":"Desserts","score":null,"Calories":330,"Carbohydrates":53,"Protein":8,"Total_Fat":9,"Saturated_Fat":7,"Sugars":48,"Total_Fat_percentage_Daily_Value":14,"Cholesterol_percentage_Daily_Value":8,"Sodium_percentage_Daily_Value":7,"Calcium_percentage_Daily_Value":25,"__typename":"Menu"},{"_id":"5d9c9344073574a3f332d48e","Item":"Hot_Caramel_Sundae","Category":"Desserts","score":null,"Calories":340,"Carbohydrates":60,"Protein":7,"Total_Fat":8,"Saturated_Fat":5,"Sugars":43,"Total_Fat_percentage_Daily_Value":12,"Cholesterol_percentage_Daily_Value":10,"Sodium_percentage_Daily_Value":6,"Calcium_percentage_Daily_Value":25,"__typename":"Menu"},{"_id":"5d9c9344073574a3f332d48f","Item":"Strawberry_Sundae","Category":"Desserts","score":null,"Calories":280,"Carbohydrates":49,"Protein":6,"Total_Fat":6,"Saturated_Fat":4,"Sugars":45,"Total_Fat_percentage_Daily_Value":10,"Cholesterol_percentage_Daily_Value":8,"Sodium_percentage_Daily_Value":4,"Calcium_percentage_Daily_Value":20,"__typename":"Menu"}])


  });

  it("successfully click next page", () => {

    cy.get("input[value=Desserts]").click({ force: true });

    cy.wait(2000)

    cy.window().its('store').invoke('getState').its('menus').should('deep.equal', [{"_id":"5d9c9344073574a3f332d489","Item":"Baked_Apple_Pie","Category":"Desserts","score":null,"Calories":250,"Carbohydrates":32,"Protein":2,"Total_Fat":13,"Saturated_Fat":7,"Sugars":13,"Total_Fat_percentage_Daily_Value":19,"Cholesterol_percentage_Daily_Value":0,"Sodium_percentage_Daily_Value":7,"Calcium_percentage_Daily_Value":2,"__typename":"Menu"},{"_id":"5d9c9344073574a3f332d48a","Item":"Chocolate_Chip_Cookie","Category":"Desserts","score":3.75,"Calories":160,"Carbohydrates":21,"Protein":2,"Total_Fat":8,"Saturated_Fat":3.5,"Sugars":15,"Total_Fat_percentage_Daily_Value":12,"Cholesterol_percentage_Daily_Value":3,"Sodium_percentage_Daily_Value":4,"Calcium_percentage_Daily_Value":2,"__typename":"Menu"},{"_id":"5d9c9344073574a3f332d48b","Item":"Oatmeal_Raisin_Cookie","Category":"Desserts","score":null,"Calories":150,"Carbohydrates":22,"Protein":2,"Total_Fat":6,"Saturated_Fat":2.5,"Sugars":13,"Total_Fat_percentage_Daily_Value":9,"Cholesterol_percentage_Daily_Value":3,"Sodium_percentage_Daily_Value":6,"Calcium_percentage_Daily_Value":2,"__typename":"Menu"},{"_id":"5d9c9344073574a3f332d48c","Item":"Kids_Ice_Cream_Cone","Category":"Desserts","score":null,"Calories":45,"Carbohydrates":7,"Protein":1,"Total_Fat":1.5,"Saturated_Fat":1,"Sugars":6,"Total_Fat_percentage_Daily_Value":2,"Cholesterol_percentage_Daily_Value":2,"Sodium_percentage_Daily_Value":1,"Calcium_percentage_Daily_Value":4,"__typename":"Menu"},{"_id":"5d9c9344073574a3f332d48d","Item":"Hot_Fudge_Sundae","Category":"Desserts","score":null,"Calories":330,"Carbohydrates":53,"Protein":8,"Total_Fat":9,"Saturated_Fat":7,"Sugars":48,"Total_Fat_percentage_Daily_Value":14,"Cholesterol_percentage_Daily_Value":8,"Sodium_percentage_Daily_Value":7,"Calcium_percentage_Daily_Value":25,"__typename":"Menu"},{"_id":"5d9c9344073574a3f332d48e","Item":"Hot_Caramel_Sundae","Category":"Desserts","score":null,"Calories":340,"Carbohydrates":60,"Protein":7,"Total_Fat":8,"Saturated_Fat":5,"Sugars":43,"Total_Fat_percentage_Daily_Value":12,"Cholesterol_percentage_Daily_Value":10,"Sodium_percentage_Daily_Value":6,"Calcium_percentage_Daily_Value":25,"__typename":"Menu"},{"_id":"5d9c9344073574a3f332d48f","Item":"Strawberry_Sundae","Category":"Desserts","score":null,"Calories":280,"Carbohydrates":49,"Protein":6,"Total_Fat":6,"Saturated_Fat":4,"Sugars":45,"Total_Fat_percentage_Daily_Value":10,"Cholesterol_percentage_Daily_Value":8,"Sodium_percentage_Daily_Value":4,"Calcium_percentage_Daily_Value":20,"__typename":"Menu"}])


  });


});
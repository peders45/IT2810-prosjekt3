describe('The Home Page', function() {
    it('successfully loads', function() {
      cy.visit('/')
    })
  })

  context("Search", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("successfully sort rating high low", () => {

      cy.get('select').select('score_HL')
  
      cy.wait(1000)
  
      cy.window().its('store').invoke('getState').its('menus').should('deep.equal', [
        {
          _id: '5d9c9344073574a3f332d433',
          Item: 'Southern_Style_Chicken_Biscuit_Large_Biscuit',
          Category: 'Breakfast',
          score: 5,
          Calories: 470,
          Carbohydrates: 46,
          Protein: 17,
          Total_Fat: 24,
          Saturated_Fat: 9,
          Sugars: 4,
          Total_Fat_percentage_Daily_Value: 37,
          Cholesterol_percentage_Daily_Value: 10,
          Sodium_percentage_Daily_Value: 54,
          Calcium_percentage_Daily_Value: 8,
          __typename: 'Menu'
        },
        {
          _id: '5d9c9344073574a3f332d427',
          Item: 'Steak_&_Egg_McMuffin',
          Category: 'Breakfast',
          score: 5,
          Calories: 430,
          Carbohydrates: 31,
          Protein: 26,
          Total_Fat: 23,
          Saturated_Fat: 9,
          Sugars: 3,
          Total_Fat_percentage_Daily_Value: 36,
          Cholesterol_percentage_Daily_Value: 100,
          Sodium_percentage_Daily_Value: 40,
          Calcium_percentage_Daily_Value: 30,
          __typename: 'Menu'
        },
        {
          _id: '5d9c9344073574a3f332d44c',
          Item: 'Big_Mac',
          Category: 'Beef_&_Pork',
          score: 5,
          Calories: 530,
          Carbohydrates: 47,
          Protein: 24,
          Total_Fat: 27,
          Saturated_Fat: 10,
          Sugars: 9,
          Total_Fat_percentage_Daily_Value: 42,
          Cholesterol_percentage_Daily_Value: 28,
          Sodium_percentage_Daily_Value: 40,
          Calcium_percentage_Daily_Value: 25,
          __typename: 'Menu'
        },
        {
          _id: '5d9c9344073574a3f332d424',
          Item: 'Sausage_McMuffin',
          Category: 'Breakfast',
          score: 5,
          Calories: 370,
          Carbohydrates: 29,
          Protein: 14,
          Total_Fat: 23,
          Saturated_Fat: 8,
          Sugars: 2,
          Total_Fat_percentage_Daily_Value: 35,
          Cholesterol_percentage_Daily_Value: 15,
          Sodium_percentage_Daily_Value: 33,
          Calcium_percentage_Daily_Value: 25,
          __typename: 'Menu'
        },
        {
          _id: '5d9c9344073574a3f332d476',
          Item: 'Premium_Bacon_Ranch_Salad_without_Chicken',
          Category: 'Salads',
          score: 5,
          Calories: 140,
          Carbohydrates: 10,
          Protein: 9,
          Total_Fat: 7,
          Saturated_Fat: 3.5,
          Sugars: 4,
          Total_Fat_percentage_Daily_Value: 11,
          Cholesterol_percentage_Daily_Value: 9,
          Sodium_percentage_Daily_Value: 13,
          Calcium_percentage_Daily_Value: 15,
          __typename: 'Menu'
        },
        {
          _id: '5d9c9344073574a3f332d45b',
          Item: 'Premium_Crispy_Chicken_Classic_Sandwich',
          Category: 'Chicken_&_Fish',
          score: 4,
          Calories: 510,
          Carbohydrates: 55,
          Protein: 24,
          Total_Fat: 22,
          Saturated_Fat: 3.5,
          Sugars: 10,
          Total_Fat_percentage_Daily_Value: 33,
          Cholesterol_percentage_Daily_Value: 16,
          Sodium_percentage_Daily_Value: 41,
          Calcium_percentage_Daily_Value: 15,
          __typename: 'Menu'
        },
        {
          _id: '5d9c9344073574a3f332d426',
          Item: 'Sausage_McMuffin_with_Egg_Whites',
          Category: 'Breakfast',
          score: 4,
          Calories: 400,
          Carbohydrates: 30,
          Protein: 21,
          Total_Fat: 23,
          Saturated_Fat: 8,
          Sugars: 2,
          Total_Fat_percentage_Daily_Value: 35,
          Cholesterol_percentage_Daily_Value: 16,
          Sodium_percentage_Daily_Value: 37,
          Calcium_percentage_Daily_Value: 25,
          __typename: 'Menu'
        },
        {
          _id: '5d9c9344073574a3f332d45d',
          Item: 'Premium_Crispy_Chicken_Club_Sandwich',
          Category: 'Chicken_&_Fish',
          score: 4,
          Calories: 670,
          Carbohydrates: 58,
          Protein: 36,
          Total_Fat: 33,
          Saturated_Fat: 9,
          Sugars: 11,
          Total_Fat_percentage_Daily_Value: 51,
          Cholesterol_percentage_Daily_Value: 29,
          Sodium_percentage_Daily_Value: 59,
          Calcium_percentage_Daily_Value: 30,
          __typename: 'Menu'
        },
        {
          _id: '5d9c9344073574a3f332d462',
          Item: 'Bacon_Clubhouse_Grilled_Chicken_Sandwich',
          Category: 'Chicken_&_Fish',
          score: 4,
          Calories: 590,
          Carbohydrates: 51,
          Protein: 40,
          Total_Fat: 25,
          Saturated_Fat: 8,
          Sugars: 14,
          Total_Fat_percentage_Daily_Value: 39,
          Cholesterol_percentage_Daily_Value: 37,
          Sodium_percentage_Daily_Value: 65,
          Calcium_percentage_Daily_Value: 30,
          __typename: 'Menu'
        }
      ])
  
    });

    it("successfully use Total calories slider", () => {

      cy.get('input[value=1880]').as('range')
      .invoke('val', 508)
      .trigger('change', {force: true})
  
      cy.wait(1000)
  
      cy.window().its('store').invoke('getState').its('menus').should('deep.equal', [
        {
          _id: '5d9c9344073574a3f332d4a4',
          Item: '1percentage_Low_Fat_Milk_Jug',
          Category: 'Beverages',
          score: 2.5,
          Calories: 100,
          Carbohydrates: 12,
          Protein: 8,
          Total_Fat: 2.5,
          Saturated_Fat: 1.5,
          Sugars: 12,
          Total_Fat_percentage_Daily_Value: 4,
          Cholesterol_percentage_Daily_Value: 3,
          Sodium_percentage_Daily_Value: 5,
          Calcium_percentage_Daily_Value: 30,
          __typename: 'Menu'
        },
        {
          _id: '5d9c9344073574a3f332d422',
          Item: 'Egg_McMuffin',
          Category: 'Breakfast',
          score: 3.15,
          Calories: 300,
          Carbohydrates: 31,
          Protein: 17,
          Total_Fat: 13,
          Saturated_Fat: 5,
          Sugars: 3,
          Total_Fat_percentage_Daily_Value: 20,
          Cholesterol_percentage_Daily_Value: 87,
          Sodium_percentage_Daily_Value: 31,
          Calcium_percentage_Daily_Value: 25,
          __typename: 'Menu'
        },
        {
          _id: '5d9c9344073574a3f332d424',
          Item: 'Sausage_McMuffin',
          Category: 'Breakfast',
          score: 5,
          Calories: 370,
          Carbohydrates: 29,
          Protein: 14,
          Total_Fat: 23,
          Saturated_Fat: 8,
          Sugars: 2,
          Total_Fat_percentage_Daily_Value: 35,
          Cholesterol_percentage_Daily_Value: 15,
          Sodium_percentage_Daily_Value: 33,
          Calcium_percentage_Daily_Value: 25,
          __typename: 'Menu'
        },
        {
          _id: '5d9c9344073574a3f332d425',
          Item: 'Sausage_McMuffin_with_Egg',
          Category: 'Breakfast',
          score: 2.7857142857142856,
          Calories: 450,
          Carbohydrates: 30,
          Protein: 21,
          Total_Fat: 28,
          Saturated_Fat: 10,
          Sugars: 2,
          Total_Fat_percentage_Daily_Value: 43,
          Cholesterol_percentage_Daily_Value: 95,
          Sodium_percentage_Daily_Value: 36,
          Calcium_percentage_Daily_Value: 30,
          __typename: 'Menu'
        },
        {
          _id: '5d9c9344073574a3f332d426',
          Item: 'Sausage_McMuffin_with_Egg_Whites',
          Category: 'Breakfast',
          score: 4,
          Calories: 400,
          Carbohydrates: 30,
          Protein: 21,
          Total_Fat: 23,
          Saturated_Fat: 8,
          Sugars: 2,
          Total_Fat_percentage_Daily_Value: 35,
          Cholesterol_percentage_Daily_Value: 16,
          Sodium_percentage_Daily_Value: 37,
          Calcium_percentage_Daily_Value: 25,
          __typename: 'Menu'
        },
        {
          _id: '5d9c9344073574a3f332d427',
          Item: 'Steak_&_Egg_McMuffin',
          Category: 'Breakfast',
          score: 5,
          Calories: 430,
          Carbohydrates: 31,
          Protein: 26,
          Total_Fat: 23,
          Saturated_Fat: 9,
          Sugars: 3,
          Total_Fat_percentage_Daily_Value: 36,
          Cholesterol_percentage_Daily_Value: 100,
          Sodium_percentage_Daily_Value: 40,
          Calcium_percentage_Daily_Value: 30,
          __typename: 'Menu'
        },
        {
          _id: '5d9c9344073574a3f332d428',
          Item: '"Bacon',
          Category: 'Breakfast',
          score: 3,
          Calories: 150,
          Carbohydrates: 54,
          Protein: 3,
          Total_Fat: 230,
          Saturated_Fat: 40,
          Sugars: 7,
          Total_Fat_percentage_Daily_Value: 26,
          Cholesterol_percentage_Daily_Value: 250,
          Sodium_percentage_Daily_Value: 1300,
          Calcium_percentage_Daily_Value: 8,
          __typename: 'Menu'
        },
        {
          _id: '5d9c9344073574a3f332d429',
          Item: '"Bacon',
          Category: 'Breakfast',
          score: null,
          Calories: 164,
          Carbohydrates: 59,
          Protein: 4,
          Total_Fat: 270,
          Saturated_Fat: 47,
          Sugars: 12,
          Total_Fat_percentage_Daily_Value: 30,
          Cholesterol_percentage_Daily_Value: 250,
          Sodium_percentage_Daily_Value: 1410,
          Calcium_percentage_Daily_Value: 8,
          __typename: 'Menu'
        },
        {
          _id: '5d9c9344073574a3f332d42a',
          Item: '"Bacon',
          Category: 'Breakfast',
          score: null,
          Calories: 153,
          Carbohydrates: 54,
          Protein: 3,
          Total_Fat: 180,
          Saturated_Fat: 32,
          Sugars: 7,
          Total_Fat_percentage_Daily_Value: 20,
          Cholesterol_percentage_Daily_Value: 35,
          Sodium_percentage_Daily_Value: 1300,
          Calcium_percentage_Daily_Value: 8,
          __typename: 'Menu'
        }
      ])
  
    });

  it("successfully search light", () => {
    cy.get("input[type=text]").type("light");

    cy.get("input[type=button]").click();

    cy.wait(1000)

    cy.window().its('store').invoke('getState').its('menus').should('deep.equal', [{"_id":"5d9c9344073574a3f332d423","Item":"Egg_White_Delight","Category":"Breakfast","score":null,"Calories":250,"Carbohydrates":30,"Protein":18,"Total_Fat":8,"Saturated_Fat":3,"Sugars":3,"Total_Fat_percentage_Daily_Value":12,"Cholesterol_percentage_Daily_Value":8,"Sodium_percentage_Daily_Value":32,"Calcium_percentage_Daily_Value":25,"__typename":"Menu"}])


  });

  it("successfully check Desserts box", () => {

    cy.get("input[value=Desserts]").click({ force: true });

    cy.wait(1000)

    cy.window().its('store').invoke('getState').its('menus').should('deep.equal', [{"_id":"5d9c9344073574a3f332d489","Item":"Baked_Apple_Pie","Category":"Desserts","score":null,"Calories":250,"Carbohydrates":32,"Protein":2,"Total_Fat":13,"Saturated_Fat":7,"Sugars":13,"Total_Fat_percentage_Daily_Value":19,"Cholesterol_percentage_Daily_Value":0,"Sodium_percentage_Daily_Value":7,"Calcium_percentage_Daily_Value":2,"__typename":"Menu"},{"_id":"5d9c9344073574a3f332d48a","Item":"Chocolate_Chip_Cookie","Category":"Desserts","score":3.75,"Calories":160,"Carbohydrates":21,"Protein":2,"Total_Fat":8,"Saturated_Fat":3.5,"Sugars":15,"Total_Fat_percentage_Daily_Value":12,"Cholesterol_percentage_Daily_Value":3,"Sodium_percentage_Daily_Value":4,"Calcium_percentage_Daily_Value":2,"__typename":"Menu"},{"_id":"5d9c9344073574a3f332d48b","Item":"Oatmeal_Raisin_Cookie","Category":"Desserts","score":null,"Calories":150,"Carbohydrates":22,"Protein":2,"Total_Fat":6,"Saturated_Fat":2.5,"Sugars":13,"Total_Fat_percentage_Daily_Value":9,"Cholesterol_percentage_Daily_Value":3,"Sodium_percentage_Daily_Value":6,"Calcium_percentage_Daily_Value":2,"__typename":"Menu"},{"_id":"5d9c9344073574a3f332d48c","Item":"Kids_Ice_Cream_Cone","Category":"Desserts","score":null,"Calories":45,"Carbohydrates":7,"Protein":1,"Total_Fat":1.5,"Saturated_Fat":1,"Sugars":6,"Total_Fat_percentage_Daily_Value":2,"Cholesterol_percentage_Daily_Value":2,"Sodium_percentage_Daily_Value":1,"Calcium_percentage_Daily_Value":4,"__typename":"Menu"},{"_id":"5d9c9344073574a3f332d48d","Item":"Hot_Fudge_Sundae","Category":"Desserts","score":null,"Calories":330,"Carbohydrates":53,"Protein":8,"Total_Fat":9,"Saturated_Fat":7,"Sugars":48,"Total_Fat_percentage_Daily_Value":14,"Cholesterol_percentage_Daily_Value":8,"Sodium_percentage_Daily_Value":7,"Calcium_percentage_Daily_Value":25,"__typename":"Menu"},{"_id":"5d9c9344073574a3f332d48e","Item":"Hot_Caramel_Sundae","Category":"Desserts","score":null,"Calories":340,"Carbohydrates":60,"Protein":7,"Total_Fat":8,"Saturated_Fat":5,"Sugars":43,"Total_Fat_percentage_Daily_Value":12,"Cholesterol_percentage_Daily_Value":10,"Sodium_percentage_Daily_Value":6,"Calcium_percentage_Daily_Value":25,"__typename":"Menu"},{"_id":"5d9c9344073574a3f332d48f","Item":"Strawberry_Sundae","Category":"Desserts","score":null,"Calories":280,"Carbohydrates":49,"Protein":6,"Total_Fat":6,"Saturated_Fat":4,"Sugars":45,"Total_Fat_percentage_Daily_Value":10,"Cholesterol_percentage_Daily_Value":8,"Sodium_percentage_Daily_Value":4,"Calcium_percentage_Daily_Value":20,"__typename":"Menu"}])


  });

  it("successfully click next page", () => {

    cy.wait(1000)

    cy.get("#nextButton").click({ force: true });

    cy.wait(1000)

    cy.window().its('store').invoke('getState').its('menus').should('deep.equal', [
      {
        _id: '5d9c9344073574a3f332d42b',
        Item: '"Bacon',
        Category: 'Breakfast',
        score: null,
        Calories: 167,
        Carbohydrates: 59,
        Protein: 4,
        Total_Fat: 220,
        Saturated_Fat: 38,
        Sugars: 12,
        Total_Fat_percentage_Daily_Value: 25,
        Cholesterol_percentage_Daily_Value: 35,
        Sodium_percentage_Daily_Value: 1420,
        Calcium_percentage_Daily_Value: 8,
        __typename: 'Menu'
      },
      {
        _id: '5d9c9344073574a3f332d42c',
        Item: 'Sausage_Biscuit_Regular_Biscuit',
        Category: 'Breakfast',
        score: null,
        Calories: 430,
        Carbohydrates: 34,
        Protein: 11,
        Total_Fat: 27,
        Saturated_Fat: 12,
        Sugars: 2,
        Total_Fat_percentage_Daily_Value: 42,
        Cholesterol_percentage_Daily_Value: 10,
        Sodium_percentage_Daily_Value: 45,
        Calcium_percentage_Daily_Value: 6,
        __typename: 'Menu'
      },
      {
        _id: '5d9c9344073574a3f332d42d',
        Item: 'Sausage_Biscuit_Large_Biscuit',
        Category: 'Breakfast',
        score: null,
        Calories: 480,
        Carbohydrates: 39,
        Protein: 11,
        Total_Fat: 31,
        Saturated_Fat: 13,
        Sugars: 3,
        Total_Fat_percentage_Daily_Value: 48,
        Cholesterol_percentage_Daily_Value: 10,
        Sodium_percentage_Daily_Value: 50,
        Calcium_percentage_Daily_Value: 8,
        __typename: 'Menu'
      },
      {
        _id: '5d9c9344073574a3f332d42e',
        Item: 'Sausage_Biscuit_with_Egg_Regular_Biscuit',
        Category: 'Breakfast',
        score: null,
        Calories: 510,
        Carbohydrates: 36,
        Protein: 18,
        Total_Fat: 33,
        Saturated_Fat: 14,
        Sugars: 2,
        Total_Fat_percentage_Daily_Value: 50,
        Cholesterol_percentage_Daily_Value: 83,
        Sodium_percentage_Daily_Value: 49,
        Calcium_percentage_Daily_Value: 10,
        __typename: 'Menu'
      },
      {
        _id: '5d9c9344073574a3f332d42f',
        Item: 'Sausage_Biscuit_with_Egg_Large_Biscuit',
        Category: 'Breakfast',
        score: null,
        Calories: 570,
        Carbohydrates: 42,
        Protein: 18,
        Total_Fat: 37,
        Saturated_Fat: 15,
        Sugars: 3,
        Total_Fat_percentage_Daily_Value: 57,
        Cholesterol_percentage_Daily_Value: 83,
        Sodium_percentage_Daily_Value: 53,
        Calcium_percentage_Daily_Value: 10,
        __typename: 'Menu'
      },
      {
        _id: '5d9c9344073574a3f332d430',
        Item: 'Sausage_Biscuit_with_Egg_Whites_Regular_Biscuit',
        Category: 'Breakfast',
        score: null,
        Calories: 460,
        Carbohydrates: 34,
        Protein: 18,
        Total_Fat: 27,
        Saturated_Fat: 12,
        Sugars: 3,
        Total_Fat_percentage_Daily_Value: 42,
        Cholesterol_percentage_Daily_Value: 11,
        Sodium_percentage_Daily_Value: 49,
        Calcium_percentage_Daily_Value: 8,
        __typename: 'Menu'
      },
      {
        _id: '5d9c9344073574a3f332d431',
        Item: 'Sausage_Biscuit_with_Egg_Whites_Large_Biscuit',
        Category: 'Breakfast',
        score: null,
        Calories: 520,
        Carbohydrates: 40,
        Protein: 18,
        Total_Fat: 32,
        Saturated_Fat: 13,
        Sugars: 3,
        Total_Fat_percentage_Daily_Value: 49,
        Cholesterol_percentage_Daily_Value: 11,
        Sodium_percentage_Daily_Value: 54,
        Calcium_percentage_Daily_Value: 8,
        __typename: 'Menu'
      },
      {
        _id: '5d9c9344073574a3f332d432',
        Item: 'Southern_Style_Chicken_Biscuit_Regular_Biscuit',
        Category: 'Breakfast',
        score: null,
        Calories: 410,
        Carbohydrates: 41,
        Protein: 17,
        Total_Fat: 20,
        Saturated_Fat: 8,
        Sugars: 3,
        Total_Fat_percentage_Daily_Value: 31,
        Cholesterol_percentage_Daily_Value: 10,
        Sodium_percentage_Daily_Value: 49,
        Calcium_percentage_Daily_Value: 6,
        __typename: 'Menu'
      },
      {
        _id: '5d9c9344073574a3f332d433',
        Item: 'Southern_Style_Chicken_Biscuit_Large_Biscuit',
        Category: 'Breakfast',
        score: 5,
        Calories: 470,
        Carbohydrates: 46,
        Protein: 17,
        Total_Fat: 24,
        Saturated_Fat: 9,
        Sugars: 4,
        Total_Fat_percentage_Daily_Value: 37,
        Cholesterol_percentage_Daily_Value: 10,
        Sodium_percentage_Daily_Value: 54,
        Calcium_percentage_Daily_Value: 8,
        __typename: 'Menu'
      }
    ])
  });

  it("successfully click next then previous page", () => {

    cy.wait(1000)

    cy.get('#nextButton').click({ force: true });

    cy.wait(1000)

    cy.get("#prevButton").click({ force: true });

    cy.wait(1000)

    cy.window().its('store').invoke('getState').its('menus').should('deep.equal', [{"_id":"5d9c9344073574a3f332d4a4","Item":"1percentage_Low_Fat_Milk_Jug","Category":"Beverages","score":2.5,"Calories":100,"Carbohydrates":12,"Protein":8,"Total_Fat":2.5,"Saturated_Fat":1.5,"Sugars":12,"Total_Fat_percentage_Daily_Value":4,"Cholesterol_percentage_Daily_Value":3,"Sodium_percentage_Daily_Value":5,"Calcium_percentage_Daily_Value":30,"__typename":"Menu"},{"_id":"5d9c9344073574a3f332d422","Item":"Egg_McMuffin","Category":"Breakfast","score":3.15,"Calories":300,"Carbohydrates":31,"Protein":17,"Total_Fat":13,"Saturated_Fat":5,"Sugars":3,"Total_Fat_percentage_Daily_Value":20,"Cholesterol_percentage_Daily_Value":87,"Sodium_percentage_Daily_Value":31,"Calcium_percentage_Daily_Value":25,"__typename":"Menu"},{"_id":"5d9c9344073574a3f332d424","Item":"Sausage_McMuffin","Category":"Breakfast","score":5,"Calories":370,"Carbohydrates":29,"Protein":14,"Total_Fat":23,"Saturated_Fat":8,"Sugars":2,"Total_Fat_percentage_Daily_Value":35,"Cholesterol_percentage_Daily_Value":15,"Sodium_percentage_Daily_Value":33,"Calcium_percentage_Daily_Value":25,"__typename":"Menu"},{"_id":"5d9c9344073574a3f332d425","Item":"Sausage_McMuffin_with_Egg","Category":"Breakfast","score":2.7857142857142856,"Calories":450,"Carbohydrates":30,"Protein":21,"Total_Fat":28,"Saturated_Fat":10,"Sugars":2,"Total_Fat_percentage_Daily_Value":43,"Cholesterol_percentage_Daily_Value":95,"Sodium_percentage_Daily_Value":36,"Calcium_percentage_Daily_Value":30,"__typename":"Menu"},{"_id":"5d9c9344073574a3f332d426","Item":"Sausage_McMuffin_with_Egg_Whites","Category":"Breakfast","score":4,"Calories":400,"Carbohydrates":30,"Protein":21,"Total_Fat":23,"Saturated_Fat":8,"Sugars":2,"Total_Fat_percentage_Daily_Value":35,"Cholesterol_percentage_Daily_Value":16,"Sodium_percentage_Daily_Value":37,"Calcium_percentage_Daily_Value":25,"__typename":"Menu"},{"_id":"5d9c9344073574a3f332d427","Item":"Steak_&_Egg_McMuffin","Category":"Breakfast","score":5,"Calories":430,"Carbohydrates":31,"Protein":26,"Total_Fat":23,"Saturated_Fat":9,"Sugars":3,"Total_Fat_percentage_Daily_Value":36,"Cholesterol_percentage_Daily_Value":100,"Sodium_percentage_Daily_Value":40,"Calcium_percentage_Daily_Value":30,"__typename":"Menu"},{"_id":"5d9c9344073574a3f332d428","Item":"\"Bacon","Category":"Breakfast","score":3,"Calories":150,"Carbohydrates":54,"Protein":3,"Total_Fat":230,"Saturated_Fat":40,"Sugars":7,"Total_Fat_percentage_Daily_Value":26,"Cholesterol_percentage_Daily_Value":250,"Sodium_percentage_Daily_Value":1300,"Calcium_percentage_Daily_Value":8,"__typename":"Menu"},{"_id":"5d9c9344073574a3f332d429","Item":"\"Bacon","Category":"Breakfast","score":null,"Calories":164,"Carbohydrates":59,"Protein":4,"Total_Fat":270,"Saturated_Fat":47,"Sugars":12,"Total_Fat_percentage_Daily_Value":30,"Cholesterol_percentage_Daily_Value":250,"Sodium_percentage_Daily_Value":1410,"Calcium_percentage_Daily_Value":8,"__typename":"Menu"},{"_id":"5d9c9344073574a3f332d42a","Item":"\"Bacon","Category":"Breakfast","score":null,"Calories":153,"Carbohydrates":54,"Protein":3,"Total_Fat":180,"Saturated_Fat":32,"Sugars":7,"Total_Fat_percentage_Daily_Value":20,"Cholesterol_percentage_Daily_Value":35,"Sodium_percentage_Daily_Value":1300,"Calcium_percentage_Daily_Value":8,"__typename":"Menu"}])


  });


});
/*-------------------------------------------------------------------------------------------------------
Task 1. Dish in a menu
Create an array named “dishes” with 3 objects. Each object should represent a dish
and have the following fields:

  “dishID”, which is a unique identifier of the dish
  “dishName”
  “dishPrice”
  “ingredients”, which is an array with ingredients to create that dish

*/

const dishes = [
  {
    dishID: 0001,
    dishName: "Beef Enchiladas",
    dishPrice: 169,
    ingredients: ["ingredient1", "ingredient2", "ingredient3", "ingredient4"],
  },
  {
    dishID: 0002,
    dishName: "Beer and Brown Sugar Kielbasa & Sauerkraut",
    dishPrice: 149,
    ingredients: ["ingredient1", "ingredient2", "ingredient3", "ingredient4"],
  },
  {
    dishID: 0003,
    dishName: "Coconut Shrimp with Mango Dipping Sauce",
    dishPrice: 199,
    ingredients: ["ingredient1", "ingredient2", "ingredient3", "ingredient4"],
  },
  {
    dishID: 0004,
    dishName: "Crab Cakes with Remoulade Sauce",
    dishPrice: 169,
    ingredients: ["ingredient1", "ingredient2", "ingredient3", "ingredient4"],
  },
];

//console.log(dishes);

/* --------------------------------------------------------------------------------------------------------------
Task 2. A restaurant menu

Create an object which represents a menu. It should have the following fields:
“restaurantName”
“dishes”, which is an array from task 1
“displayRestaurantName”, an object method that displays the restaurant name
“displayMenu”, an object method that displays information about each dish
After running the code, you should get a result that looks like the following:

  Name of the restaurant

  Dish, ₱500
  Contains ingredient, ingredient, ingredient.
  Dish, ₱500
  Contains ingredient, ingredient, ingredient.
  Dish, ₱500
  Contains ingredient, ingredient, ingredient.
  */

const restaurantMenu = {
  restaurantName: "Restaurant of AWESOMENESS😎",
  dishes: [
    {
      dishID: 0001,
      dishName: "Beef Enchiladas",
      dishPrice: 169,
      ingredients: ["ingredient1", "ingredient2", "ingredient3", "ingredient4"],
    },
    {
      dishID: 0002,
      dishName: "Beer and Brown Sugar Kielbasa & Sauerkraut",
      dishPrice: 149,
      ingredients: ["ingredient1", "ingredient2", "ingredient3", "ingredient4"],
    },
    {
      dishID: 0003,
      dishName: "Coconut Shrimp with Mango Dipping Sauce",
      dishPrice: 199,
      ingredients: ["ingredient1", "ingredient2", "ingredient3", "ingredient4"],
    },
    {
      dishID: 0004,
      dishName: "Crab Cakes with Remoulade Sauce",
      dishPrice: 269,
      ingredients: ["ingredient1", "ingredient2", "ingredient3", "ingredient4"],
    },
  ],
  displayRestuarantName: function () {
    console.log(`<--${this.restaurantName}-->\n`);
  },
  displayMenu: function () {
    for (menus of this.dishes) {
      console.log(`${menus.dishName}, \u20B1${menus.dishPrice}`);
      console.log(`Contains ${menus.ingredients} \n`);
    }
  },
};

restaurantMenu.displayRestuarantName();
restaurantMenu.displayMenu();

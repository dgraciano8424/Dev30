//Meal Maker Project
//
//Step 1 Created empty object named "menu"
var menu = {
  //Step 2 Created a "courses" property, that has an empty object inside of it, inside my "menu" object.
  courses: {
    //Step 3 Created three properties called: "appetizers", "mains" and "desserts" w
    appetizers: [],
    mains: [],
    desserts: [],
  },

  //Step 4 && 5
  // Created a function called "addDishToCourse" with parameters "courseName", "dishName" and "dishPrice". This function creates a "dish" object with "name" and "price" properties. Then it pushes the "dish" object to the corresponding location with this.courses[courseName].push(dish). "this" being the current object you're calling this function on, "courses" being the property you looked for in the object. Then "courseName" being property we are looking for and where we are pushing our "dish" to.
  addDishToCourse: function (courseName, dishName, dishPrice) {
    var dish = {
      name: dishName,
      price: dishPrice,
    };
    this.courses[courseName].push(dish);
  },
  //Step 6 && 7
  // Created "getRandomDishFromCourse" function with "courseName" parameter. The function contains 2 variables, "dishes" and "randomNum".
  // "dishes" contains the path to the given array we're using. this(the object the function is being ran on).
  // "randomNum" contains an equation of Math.random() * the length of the dishes array we created with "dishes" variable. It is then floored with Math.floor()
  // Then we return dishes[randomNum] which indexes randomly into "dishes" array which is whatever array you are running this function on.
  getRandomDishFromCourse: function (courseName) {
    var dishes = this.courses[courseName];
    var randomNum = Math.floor(Math.random() * dishes.length);
    return dishes[randomNum];
  },
};

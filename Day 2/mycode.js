// var n = 1;

// while (n <= 12) {
//     console.log(9 * n);
//     n = n + 1;
// }

// for (var i = 1; i <= 12; i++) {
//     if (i === 6) {
//     console.log("I hate the nuber 6");
//     break;
//     }

//     console.log(9*1);
// }

// for (var i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }

// var favouriteFoods = ['pizza', 'chicken', 'cheese', 'watermelon', 'peach'];
// console.log(favouriteFoods.length);

// var aFood = favouriteFoods[2];
// console.log(aFood);
// favouriteFoods[2] = 'asparagus';
// favouriteFoods.push('grapes');
// console.log(favouriteFoods);

// for (var i = 0; i < favouriteFoods.length; i++) {
//     console.log(favouriteFoods[i]);
// }

var favouriteRecipie = {
    recipeTitle: 'Banana Bread',
    recipeDescription: 'food to enjoy during breakfast or whatever',
    ingredients: ['banana, bread'],
    directions: 'Make banana bread',
    rating: 4,
    cookTime: 20,
    letsCook: function() {
        console.log("I'm hungry, let's cook " + recepieTitle);
    }
};

// var recipieDirection = favouriteRecipie.directions;

// favouriteRecipie.servings = 2;
// favouriteRecipie.rating = 3;
// delete favouriteRecipie.cookTime;

// var movies = [
//     {name: 'Black Panther', rating: 5},
//     {name: 'Snowpiercer',  rating: -16}
// ];

// for (var i = 0; i < movies.length; i++) {
//     var movie = movies[i];
//     console.log('I give ' + movie.name + ' ' + movie.rating + ' stars.');
// }


// function describeUser(user) {
//     console.log('You are ' + user.age + ' years old with ' + user.hairColor + ' hair.');
// }

// describeUser(jolene);
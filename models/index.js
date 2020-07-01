const Person = require('./person');
const Recipe = require('./recipe');
//YOUR CODE HERE

Person.hasMany(Recipe);
Recipe.belongsTo(Person);

Recipe.findWithRecipes = function(){
    return Person.findAll({
        include: Recipe
    })
}

Person.prototype.writeRecipe = function(obj){
    return Recipe.create({
    })
}

module.exports = { Person, Recipe };

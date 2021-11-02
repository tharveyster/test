const User = require('./User');
const Recipe = require('./Recipe');

User.hasMany(Recipe, {
  foreignKey: 'origin'
});

Recipe.belongsTo(User, {
  foreignKey: 'origin'
});

module.exports = { User, Recipe };
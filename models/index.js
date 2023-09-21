const User = require('./User'); 
const Blog = require('./Blog'); 
// TODO: require Comment model


Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// TODO: set up associations for Comment model


// TODO: export Comment model
module.exports = { User, Blog };  
const User = require('./User'); 
const Blog = require('./Blog'); 
const Comment = require('./Comment'); 
// TODO: require Comment model


Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// TODO: set up associations for Comment model
Comment.belongsTo(Blog, {
    foreignKey: 'blog_id',
});

Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
});

// TODO: export Comment model
module.exports = { User, Blog, Comment };  
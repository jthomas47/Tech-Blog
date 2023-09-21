const router = require('express').Router();
const { Blog, User } = require('../models');
// TODO: create and require withAuth helper


// Get route to view all posts
router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        
        const blogs = blogData.map((blog) => blog.get({ plain: true }));

        res.render('homepage', {
            blogs
        });
    } catch (err) {
        res.status(500).json(err);
    }
});






module.exports = router;
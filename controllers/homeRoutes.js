const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
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
                {
                  model: Comment,
                }
            ],
        });
        
        const blogs = blogData.map((blog) => blog.get({ plain: true }));
        console.log(blogs); 
        res.render('homepage', {
            blogs,
            logged_in: req.session.logged_in 
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/dashboard', async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Blog }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('dashboard', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
  });
  






module.exports = router;
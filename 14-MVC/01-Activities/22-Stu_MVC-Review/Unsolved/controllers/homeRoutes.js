const router = require('express').Router();
const { User } = require('../models');
const { withAuth} = require('../utils/auth');

router.get('/', async (req, res) => {
  // TODO: Render template with Sequelize data
  try {
    const userData = await User.findAll({
      include: [
        {
          attributes: ['id', 'name', 'email', 'password'],
        },
      ],
    });
    const users = userDara.map((user) => 
      user.get({ plain: true})
    );
    res.render('homepage', {
      users, 
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

module.exports = router;

const { registerDecorator } = require("handlebars");

const withAuth = (req, res, next) => {
  // TODO: If the user is not logged in, redirect the user to the login page
  // TODO: If the user is logged in, allow them to view the paintings
  if (!req.session.logginIn){
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
// next ends the function in middleware
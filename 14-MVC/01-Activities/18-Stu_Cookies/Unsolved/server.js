const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// TODO: Explain what is being initialized
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// TODO: Add comments describing the implementation of sessions
// creates a new session. 

const sess = {
  secret: 'Super secret secret',
  // TODO: Add comments describing the implementation of cookies
  // nothing is inside the cookies until you start adding things
  // nothing will resafe?
  //  
  cookie: {},
  resave: false,
  saveUninitialized: true,
  // TODO: Add comments describing the implementation of the store
  // Stores it into a db called sequelize
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

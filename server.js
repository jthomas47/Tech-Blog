const path = require('path');
const express = require('express');
// TODO: require express-session
const exphbs = require('express-handlebars');
const routes = require('./controllers');
// TODO: create and require helpers

const sequelize = require('./config/connection');
// TODO: setup sequelizeStore


const app = express();
const PORT = process.env.PORT || 3001;

// TODO: pass in helpers
const hbs = exphbs.create();

// TODO: setup sess

// TODO: use session


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening at http://localhost:' + PORT));
});

/*
 * External NPM modules
 */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
/*
 * Internal modules
 */
const authController = require('./controllers/auth.controller');
const skillsController = require('./controllers/skills.controller');
/*
 * Initializing express App
 */
const app = express();

/*
 * Support JSON-encoded bodies
 */
app.use(bodyParser.json({
	limit: '5mb'
}));

/*
 * Routes
 */
app.post('/login', authController.login);
app.get('/logout', authController.logout);
app.get('/skills', skillsController.getSkills);
app.use(express.static(path.resolve(__dirname, './../dist')));

/*
 * Starting server
 */
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('App listening on port 3000!'))


const express = require('express');

const OrgController = require('./controllers/OrgController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/session', SessionController.create)

routes.get('/ongs', OrgController.index);
routes.post('/ongs', OrgController.create);

routes.get('/profile', ProfileController.index)

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
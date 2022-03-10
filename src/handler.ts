import express, { json } from 'express';
import helmet from 'helmet';
import serverlessHttp from 'serverless-http';

import {
  createPerson,
  getPeople,
  getPersonId,
  updatePerson,
  deletePerson,
} from './controllers/peopleController';
import {
  createPlanet,
  getPlanetId,
  getPlanets,
  updatePlanet,
  deletePlanet,
} from './controllers/planetsController';
import { CeratePersonRequest } from './model/CreatePersonRequest';
import { CreatePlanetRequest } from './model/CreatePlanetRequest';
import { DeletePersonRequest } from './model/DeletePersonRequest';
import { DeletePlanetRequest } from './model/DeletePlanetRequest';
import { GetPeopleRequest } from './model/GetPeopleRequest';
import { GetPersonIdRequest } from './model/GetPersonIdRequest';
import { GetPlanetIdRequest } from './model/GetPlanetIdRequest';
import { GetPlanetsRequest } from './model/GetPlanetsRequest';
import { UpdatePersonRequest } from './model/UpdatePersonRequest';
import { UpdatePlanetRequest } from './model/UpdatePlanetRequest';

const app = express();
app.use(json());
app.use(helmet());

app.get('/people', (req, res) => {
  const requestModel = new GetPeopleRequest(req);
  const responseModel = getPeople(requestModel);
  res.json(responseModel);
});

app.get('/people/:id', (req, res) => {
  const requestModel = new GetPersonIdRequest(req);
  const responseModel = getPersonId(requestModel);
  res.json(responseModel);
});

app.post('/people', (req, res) => {
  const requestModel = new CeratePersonRequest(req);
  const responseModel = createPerson(requestModel);
  res.json(responseModel);
});

app.put('/people/:id', (req, res) => {
  const requestModel = new UpdatePersonRequest(req);
  const responseModel = updatePerson(requestModel);
  res.json(responseModel);
});

app.delete('/people/:id', (req, res) => {
  const requestModel = new DeletePersonRequest(req);
  const responseModel = deletePerson(requestModel);
  res.json(responseModel);
});

app.get('/planets', (req, res) => {
  const requestModel = new GetPlanetsRequest(req);
  const responseModel = getPlanets(requestModel);
  res.json(responseModel);
});

app.get('/planets/:id', (req, res) => {
  const requestModel = new GetPlanetIdRequest(req);
  const responseModel = getPlanetId(requestModel);
  res.json(responseModel);
});

app.post('/planets', (req, res) => {
  const requestModel = new CreatePlanetRequest(req);
  const response = createPlanet(requestModel);
  res.json(response);
});

app.put('/planets/:id', (req, res) => {
  const requestModel = new UpdatePlanetRequest(req);
  const responseModel = updatePlanet(requestModel);
  res.json(responseModel);
});

app.delete('/planets/:id', (req, res) => {
  const requestModel = new DeletePlanetRequest(req);
  const responseModel = deletePlanet(requestModel);
  res.json(responseModel);
});

app.use((_, res, _2) => {
  res.status(404).json({ error: 'NOT FOUND' });
});

export const handler = serverlessHttp(app);

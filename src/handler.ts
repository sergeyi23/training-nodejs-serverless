import express, { json } from 'express';
import helmet from 'helmet';
import serverlessHttp from 'serverless-http';

import { createPerson, deletePerson, getPeople, getPerson, updatePerson } from './controllers/peopleController';
import { createPlanet, deletePlanet, getPlanet, getPlanets, updatePlanet } from './controllers/planetsController';
import { CeratePersonRequest } from './model/people/CreatePersonRequest';
import { DeletePersonRequest } from './model/people/DeletePersonRequest';
import { GetPeopleRequest } from './model/people/GetPeopleRequest';
import { GetPersonRequest } from './model/people/GetPersonRequest';
import { UpdatePersonRequest } from './model/people/UpdatePersonRequest';
import { CreatePlanetRequest } from './model/planets/CreatePlanetRequest';
import { DeletePlanetRequest } from './model/planets/DeletePlanetRequest';
import { GetPlanetRequest } from './model/planets/GetPlanetRequest';
import { GetPlanetsRequest } from './model/planets/GetPlanetsRequest';
import { UpdatePlanetRequest } from './model/planets/UpdatePlanetRequest';

const app = express();
app.use(json());
app.use(helmet());

// PEOPLE API
app.get('/people', (req, res) => {
  const requestModel = new GetPeopleRequest(req);
  const responseModel = getPeople(requestModel);
  res.json(responseModel);
});

app.get('/people/:id', (req, res) => {
  const requestModel = new GetPersonRequest(req);
  const responseModel = getPerson(requestModel);
  console.log(responseModel)
  res.json(responseModel);
});

app.post('/people', (req, res) => {
  const requestModel = new CeratePersonRequest(req);
  const reponse = createPerson(requestModel);
  res.json(reponse);
});

app.put('/people/:id', (req, res) => {
  const requestModel = new UpdatePersonRequest(req);
  const response = updatePerson(requestModel);
  res.json(response);
});

app.delete('/people/:id', (req, res) => {
  const requestModel = new DeletePersonRequest(req);
  const response = deletePerson(requestModel);
  res.json(response);
});


// PLANETS API
app.get('/planets', (req, res) => {
  const requestModel = new GetPlanetsRequest(req);
  const responseModel = getPlanets(requestModel);
  res.json(responseModel);
});

app.get('/planets/:id', (req, res) => {
  const requestModel = new GetPlanetRequest(req);
  const responseModel = getPlanet(requestModel);
  res.json(responseModel);
});

app.post('/planets', (req, res) => {
  const requestModel = new CreatePlanetRequest(req);
  const reponse = createPlanet(requestModel);
  res.json(reponse);
});

app.put('/planets/:id', (req, res) => {
  const requestModel = new UpdatePlanetRequest(req);
  const response = updatePlanet(requestModel);
  console.log(response, "UPDATE!!!!")
  res.json(response);
});

app.delete('/planets/:id', (req, res) => {
  const requestModel = new DeletePlanetRequest(req);
  const response = deletePlanet(requestModel);
  res.json(response);
});

// DEFAULT
app.use((_, res, _2) => {
  res.status(404).json({ error: 'NOT FOUND' });
});

export const handler = serverlessHttp(app);

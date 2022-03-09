import express, { json } from 'express';
import helmet from 'helmet';
import serverlessHttp from 'serverless-http';

import { createPerson, deletePerson, getPeople, getPerson, updatePerson } from "./controllers/peopleController";
import { CreatePersonRequest } from './model/people/CreatePerson';
import { GetPeopleRequest } from './model/people/GetPeople';
import { GetPersonRequest } from "./model/people/GetPerson";
import { DeletePersonRequest } from "./model/people/DeletePerson";
import { UpdatePersonRequest } from "./model/people/UpdatePerson";
import { GetPlanetsRequest } from "./model/planets/GetPlanets";
import { createPlanet, deletePlanet, getPlanet, getPlanets, updatePlanet } from "./controllers/planetsController";
import { GetPlanetRequest } from "./model/planets/GetPlanet";
import { DeletePlanetRequest } from "./model/planets/DeletePlanet";
import { UpdatePlanetRequest } from "./model/planets/UpdatePlanet";
import { CreatePlanetRequest } from "./model/planets/CreatePlanet";

const app = express();
app.use(json());
app.use(helmet());

app.get('/people', (req, res) => {
  const requestModel = new GetPeopleRequest(req);
  const responseModel = getPeople(requestModel);
  res.json(responseModel);
});

app.get('/people/:id', (req, res) => {
  const requestModel = new GetPersonRequest(req);
  const responseModel = getPerson(requestModel);
  res.json(responseModel);
});

app.delete('/people/:id', (req, res) => {
  const requestModel = new DeletePersonRequest(req);
  const responseModel = deletePerson(requestModel);
  res.json(responseModel);
});

app.post('/people', (req, res) => {
  const requestModel = new CreatePersonRequest(req);
  const response = createPerson(requestModel);
  res.json(response);
});

app.put('/people/:id', (req, res) => {
  const requestModel = new UpdatePersonRequest(req);
  const response = updatePerson(requestModel);
  res.json(response);
});


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

app.delete('/planets/:id', (req, res) => {
  const requestModel = new DeletePlanetRequest(req);
  const responseModel = deletePlanet(requestModel);
  res.json(responseModel);
});

app.post('/planets', (req, res) => {
  const requestModel = new CreatePlanetRequest(req);
  const response = createPlanet(requestModel);
  res.json(response);
});

app.put('/planets/:id', (req, res) => {
  const requestModel = new UpdatePlanetRequest(req);
  const response = updatePlanet(requestModel);
  res.json(response);
});

app.use((_, res, _2) => {
  res.status(404).json({ error: 'NOT FOUND' });
});

export const handler = serverlessHttp(app);

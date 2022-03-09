import express, { json } from 'express';
import helmet from 'helmet';
import serverlessHttp from 'serverless-http';

import {
  createPerson,
  deletePerson,
  getPeople,
  getPersonById,
} from './controllers/peopleController';
import { CeratePersonRequest } from './model/CreatePersonRequest';
import { DeletePersonRequest } from './model/DeletePersonRequest';
import { GetPeopleRequest } from './model/GetPeopleRequest';
import { GetPersonByIdRequest } from './model/GetPersonByIdRequest';

const app = express();
app.use(json());
app.use(helmet());

app.get('/people', (req, res) => {
  const requestModel = new GetPeopleRequest(req);
  const responseModel = getPeople(requestModel);
  res.json(responseModel);
});

app.get('/people/:id', (req, res) => {
  const requestModel = new GetPersonByIdRequest(req);
  const responseModel = getPersonById(requestModel);
  res.json(responseModel);
});

app.post('/people', (req, res) => {
  const requestModel = new CeratePersonRequest(req);
  const response = createPerson(requestModel);
  res.json(response);
});

app.put('/people/:id', (req, res) => {
  res.json(req.body);
});

app.delete('/people/:id', (req, res) => {
  const requestModel = new DeletePersonRequest(req);
  const responseModel = deletePerson(requestModel);
  res.json(responseModel);
});

app.use((_, res, _2) => {
  res.status(404).json({ error: 'NOT FOUND' });
});

export const handler = serverlessHttp(app);

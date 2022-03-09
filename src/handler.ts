import express, { json } from 'express';
import helmet from 'helmet';
import serverlessHttp from 'serverless-http';

import {
  createPerson,
  getPeople,
  getPerson,
  deletePerson,
  UdpatePerson,
} from './controllers/peopleController';
import { CreatePersonRequest } from './model/CreatePersonRequest';
import { GetPeopleRequest } from './model/GetPeopleRequest';
import { GetPersonIdRequest } from './model/GetPersonIdRequest';
import { UpdatePersonRequest } from './model/UpdatePersonRequest';

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
  const responseModel = getPerson(requestModel);
  res.json(responseModel);
});

app.delete('/people/:id', (req, res) => {
  const requestModel = new GetPersonIdRequest(req);
  const responseModel = deletePerson(requestModel);
  res.json(responseModel);
});

app.post('/people', (req, res) => {
  const requestModel = new CreatePersonRequest(req);
  const reponse = createPerson(requestModel);
  res.json(reponse);
});

app.put('/people/:id', (req, res) => {
  const requestModel = new UpdatePersonRequest(req);
  const responseModel = UdpatePerson(requestModel);
  res.json(responseModel);
});

app.use((_, res, _2) => {
  res.status(404).json({ error: 'NOT FOUND' });
});

export const handler = serverlessHttp(app);

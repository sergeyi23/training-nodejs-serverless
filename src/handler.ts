import express, { json } from 'express';
import helmet from 'helmet';
import serverlessHttp from 'serverless-http';

import { createPerson, getPeople } from './controllers/peopleController';
import { CeratePersonRequest } from './model/CreatePersonRequest';
import { GetPeopleRequest } from './model/GetPeopleRequest';

const app = express();
app.use(json());
app.use(helmet());

app.get('/people', (req, res) => {
  const requestModel = new GetPeopleRequest(req);
  const responseModel = getPeople(requestModel);
  res.json(responseModel);
});

app.get('/people/:id', (req, res) => {
  res.json({
    id: req.params.id,
    name: 'Ivan Ivanov',
  });
});

app.post('/people', (req, res) => {
  const requestModel = new CeratePersonRequest(req);
  const reponse = createPerson(requestModel);
  res.json(reponse);
});

app.put('/people/:id', (req, res) => {
  res.json(req.body);
});

app.use((_, res, _2) => {
  res.status(404).json({ error: 'NOT FOUND' });
});

export const handler = serverlessHttp(app);

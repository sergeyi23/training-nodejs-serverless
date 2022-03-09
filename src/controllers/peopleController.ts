import {
  createPersonInDb,
  getAllPeople,
  getPersonByIdInDb,
} from 'src/core/db/repositories/peopleRepository';
import { CeratePersonRequest } from 'src/model/CreatePersonRequest';
import { CreatePersonResponse } from 'src/model/CreatePersonResponse';
import { GetPeopleRequest } from 'src/model/GetPeopleRequest';
import { GetPeopleResponse } from 'src/model/GetPeopleResponse';
import { GetPersonByIdRequest } from 'src/model/GetPersonByIdRequest';
import { GetPersonByIdResponse } from 'src/model/GetPersonByIdResponse';

export function getPeople(_request: GetPeopleRequest): GetPeopleResponse {
  const peopleEntity = getAllPeople();
  return new GetPeopleResponse(peopleEntity);
}

export function createPerson(
  request: CeratePersonRequest
): CreatePersonResponse {
  const newPerson = createPersonInDb(request.name, request.active);
  return new CreatePersonResponse(newPerson);
}

export function getPersonById(
  request: GetPersonByIdRequest
): GetPersonByIdResponse {
  const person = getPersonByIdInDb(request.id);
  return new GetPersonByIdResponse(person);
}

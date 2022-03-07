import {
  createPersonInDb,
  getAllPeople,
} from 'src/core/db/repositories/peopleRepository';
import { CeratePersonRequest } from 'src/model/CreatePersonRequest';
import { CreatePersonResponse } from 'src/model/CreatePersonResponse';
import { GetPeopleRequest } from 'src/model/GetPeopleRequest';
import { GetPeopleResponse } from 'src/model/GetPeopleResponse';

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

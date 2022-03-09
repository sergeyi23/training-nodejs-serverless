import {
  createPersonInDb,
  getAllPeople,
  getPersonByID,
  deletePersonInDb,
  updatePersonInDb,
} from 'src/core/db/repositories/peopleRepository';
import { CreatePersonRequest } from 'src/model/CreatePersonRequest';
import { CreatePersonResponse } from 'src/model/CreatePersonResponse';
import { GetPeopleRequest } from 'src/model/GetPeopleRequest';
import { GetPeopleResponse } from 'src/model/GetPeopleResponse';
import { GetPersonIdRequest } from 'src/model/GetPersonIdRequest';
import { GetPersonResponse } from 'src/model/GetPersonResponse';
import { UpdatePersonRequest } from 'src/model/UpdatePersonRequest';

export function getPeople(_request: GetPeopleRequest): GetPeopleResponse {
  const peopleEntity = getAllPeople();
  return new GetPeopleResponse(peopleEntity);
}

export function getPerson(request: GetPersonIdRequest): GetPersonResponse {
  const personEntity = getPersonByID(request.id);
  return new GetPersonResponse(personEntity);
}

export function deletePerson(request: GetPersonIdRequest): GetPeopleResponse {
  const peopleEntity = deletePersonInDb(request.id);
  return new GetPeopleResponse(peopleEntity);
}

export function UdpatePerson(request: UpdatePersonRequest): GetPeopleResponse {
  const personEntity = updatePersonInDb(
    request.id,
    request.name,
    request.active
  );
  return new GetPeopleResponse(personEntity);
}

export function createPerson(
  request: CreatePersonRequest
): CreatePersonResponse {
  const newPerson = createPersonInDb(request.id, request.name, request.active);
  return new CreatePersonResponse(newPerson);
}

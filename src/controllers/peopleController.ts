import {
  createPersonInDb,
  deletePersonFromDB,
  getAllPeople,
  getPersonFromDB,
  updatePersonInDB
} from 'src/core/db/repositories/peopleRepository';
import { CeratePersonRequest } from 'src/model/people/CreatePersonRequest';
import { CreatePersonResponse } from 'src/model/people/CreatePersonResponse';
import { DeletePersonRequest } from 'src/model/people/DeletePersonRequest';
import { DeletePersonResponse } from 'src/model/people/DeletePersonResponse';
import { GetPeopleRequest } from 'src/model/people/GetPeopleRequest';
import { GetPeopleResponse } from 'src/model/people/GetPeopleResponse';
import { GetPersonRequest } from 'src/model/people/GetPersonRequest';
import { GetPersonResponse } from 'src/model/people/GetPersonResponse';
import { UpdatePersonRequest } from 'src/model/people/UpdatePersonRequest';
import { UpdatePersonResponse } from 'src/model/people/UpdatePersonResponse';

export function getPeople(_request: GetPeopleRequest): GetPeopleResponse {
  const peopleEntity = getAllPeople();
  return new GetPeopleResponse(peopleEntity);
}

export function getPerson(request: GetPersonRequest): GetPersonResponse {
  const peopleEntity = getPersonFromDB(request.id);
  console.log(request.id)
  return new GetPersonResponse(peopleEntity);
}

export function createPerson(request: CeratePersonRequest): CreatePersonResponse {
  const newPerson = createPersonInDb(request.name, request.active);
  return new CreatePersonResponse(newPerson);
}

export function updatePerson(request: UpdatePersonRequest): UpdatePersonResponse {
  const person = updatePersonInDB(request.id, request.name, request.active);
  return new UpdatePersonResponse(person);
}

export function deletePerson(request: DeletePersonRequest): DeletePersonResponse {
  const person = deletePersonFromDB(request.id);
  return new DeletePersonResponse(person);
}

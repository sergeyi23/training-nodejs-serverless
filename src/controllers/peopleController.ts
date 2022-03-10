import {
  createPersonInDb,
  getAllPeople,
  getPersonIdInDb,
  updatePersonInDb,
  deletePersonInDb,
} from 'src/core/db/repositories/peopleRepository';
import { CeratePersonRequest } from 'src/model/CreatePersonRequest';
import { CreatePersonResponse } from 'src/model/CreatePersonResponse';
import { DeletePersonRequest } from 'src/model/DeletePersonRequest';
import { GetPeopleRequest } from 'src/model/GetPeopleRequest';
import { GetPeopleResponse } from 'src/model/GetPeopleResponse';
import { GetPersonIdRequest } from 'src/model/GetPersonIdRequest';
import { GetPersonIdResponse } from 'src/model/GetPersonIdResponse';
import { UpdatePersonRequest } from 'src/model/UpdatePersonRequest';
import { UpdatePersonResponse } from 'src/model/UpdatePersonResponse';

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

export function getPersonId(request: GetPersonIdRequest): GetPersonIdResponse {
  const person = getPersonIdInDb(request.id);
  return new GetPersonIdResponse(person);
}

export function deletePerson(request: DeletePersonRequest): any {
  const person = deletePersonInDb(request.id);
  return person;
}

export function updatePerson(
  request: UpdatePersonRequest
): UpdatePersonResponse {
  const updatedPerson = updatePersonInDb(
    request.id,
    request.name,
    request.active
  );
  return new UpdatePersonResponse(updatedPerson);
}

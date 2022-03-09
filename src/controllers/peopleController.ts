import { createPersonInDb, getAllPeople, getPersonById, deletePersonById, updatePersonInDb } from 'src/core/db/repositories/peopleRepository';
import { CreatePersonRequest, CreatePersonResponse } from 'src/model/people/CreatePerson';
import { GetPeopleRequest,GetPeopleResponse } from 'src/model/people/GetPeople';
import { GetPersonRequest, GetPersonResponse } from "../model/people/GetPerson";
import { DeletePersonRequest, DeletePersonResponse } from "../model/people/DeletePerson";
import { UpdatePersonRequest, UpdatePersonResponse } from "../model/people/UpdatePerson";

export function getPeople(_request: GetPeopleRequest): GetPeopleResponse {
  const peopleEntity = getAllPeople();
  return new GetPeopleResponse(peopleEntity);
}

export function getPerson(request: GetPersonRequest): any {
  const personEntity = getPersonById(request.id);
  if (personEntity === null)
    return { "error": "Person not found" };
  return new GetPersonResponse(personEntity);
}

export function deletePerson(request: DeletePersonRequest): any {
  const personEntity = deletePersonById(request.id);
  if (personEntity === null)
    return { "error": "Person not found" };
  return new DeletePersonResponse(personEntity);
}

export function createPerson(request: CreatePersonRequest): CreatePersonResponse {
  const newPerson = createPersonInDb(request.name, request.active);
  return new CreatePersonResponse(newPerson);
}

export function updatePerson(request: UpdatePersonRequest): any {
  const updatedPerson = updatePersonInDb(request.id, request.name, request.active);
  if (updatedPerson === null)
    return { "error": "Person not found" };
  return new UpdatePersonResponse(updatedPerson);
}

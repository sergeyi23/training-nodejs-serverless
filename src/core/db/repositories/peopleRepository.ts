import fs from 'fs';

import { PersonEntity } from '../entities/PersonEntity';

function readPeopleFromFile(): PersonEntity[] {
  const peopleText = fs.readFileSync(
    './src/core/db/repositories/people.json',
    'utf-8'
  );
  console.log(peopleText);
  return JSON.parse(peopleText) as PersonEntity[];
}

function writePeoleToFile(people: PersonEntity[]) {
  fs.writeFileSync(
    './src/core/db/repositories/people.json',
    JSON.stringify(people),
    'utf-8'
  );
}

export function getAllPeople(): PersonEntity[] {
  const people = readPeopleFromFile();
  console.log(JSON.stringify(people));
  return people;
}

export function getPersonByID(PersonId: number): PersonEntity {
  const people = readPeopleFromFile();
  const person =
    people.find(({ id }) => id == PersonId) ||
    new PersonEntity(11, 'Nan', false, Date.now());
  return person;
}

export function deletePersonInDb(PersonId: number): PersonEntity[] {
  const people = readPeopleFromFile();
  const newPeople = people.filter((person) => person.id != PersonId);
  writePeoleToFile(newPeople);
  return newPeople;
}

export function updatePersonInDb(
  id: number,
  name: string,
  active: boolean
): PersonEntity[] {
  const people = readPeopleFromFile();
  const updatePeople = people.map((person) => {
    if (person.id == id) {
      person.name = name;
      person.active = active;
    }
    return person;
  });
  writePeoleToFile(updatePeople);
  return updatePeople;
}

export function createPersonInDb(
  id: number,
  name: string,
  active: boolean
): any {
  const people = readPeopleFromFile();
  people.push(new PersonEntity(id, name, active, Date.now()));
  writePeoleToFile(people);
  return people[people.length - 1];
}

import fs from "fs";
import { PersonEntity } from "../entities/PersonEntity";

const uuid = require('uuid');

function readPeopleFromFile(): PersonEntity[] {
  const peopleText = fs.readFileSync(
    './src/core/db/repositories/people.json',
    'utf-8'
  );
  return JSON.parse(peopleText) as PersonEntity[];
}

function writePeopleToFile(people: PersonEntity[]) {
  fs.writeFileSync(
    './src/core/db/repositories/people.json',
    JSON.stringify(people, null, '\t'),
    'utf-8'
  );
}

export function getAllPeople(): PersonEntity[] {
  return readPeopleFromFile();
}

export function getPersonById(id: string): any {
  const people = readPeopleFromFile();
  const person = people.findIndex(person => person.id == id);
  if (person === -1)
    return null;
  return people[person];
}

export function updatePersonInDb(id: string, name: string, active: boolean): any {
  const people = readPeopleFromFile();
  const person = people.findIndex(person => person.id == id);
  if (person === -1)
    return null;
  // @ts-ignore
  people[person].name = name;
  // @ts-ignore
  people[person].active = active;
  // @ts-ignore
  people[person].createTimestamp = Date.now();
  writePeopleToFile(people);
  return people[person];
}

export function deletePersonById(id: string): any {
  const people = readPeopleFromFile();
  const index = people.findIndex(person => person.id == id);
  const removedPerson = people[index];
  if (index === -1)
    return null;
  people.splice(index, 1);
  writePeopleToFile(people);
  return removedPerson;
}

export function createPersonInDb(name: string, active: boolean): any {
  const people = readPeopleFromFile();
  people.push(new PersonEntity(uuid.v4(), name, active, Date.now()));
  writePeopleToFile(people);
  return people[people.length - 1];
}

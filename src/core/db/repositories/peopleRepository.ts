import fs from 'fs';
// import { Person } from 'src/model/Person';

import { PersonEntity } from '../entities/PersonEntity';

function readPeopleFromFile(): PersonEntity[] {
  const peopleText = fs.readFileSync(
    './src/core/db/repositories/people.json',
    'utf-8'
  );
  console.log(peopleText);
  return JSON.parse(peopleText) as PersonEntity[];
}

function writePeopleToFile(people: PersonEntity[]) {
  fs.writeFileSync(
    './src/core/db/repositories/people.json',
    JSON.stringify(people, null, 2),
    'utf-8'
  );
}

export function getAllPeople(): PersonEntity[] {
  const people = readPeopleFromFile();
  console.log(JSON.stringify(people));
  return people;
}

export function getPersonFromDB(id: number): any {
  const people = readPeopleFromFile();
  console.log(people, id)
  return people.filter(e => e.id == id)[0];
}

export function updatePersonInDB(id: number, name: string, active: boolean): any {
  const people = readPeopleFromFile();
  console.log(JSON.stringify(people, null, 2), id, name);
  let person = people.find(person => person.id == id) ?? new PersonEntity(id, name, active, Date.now());
  person.name = name;
  person.active = active;
  console.log(people, "UPDATED");
  writePeopleToFile(people);
  return person;
}

export function deletePersonFromDB(id: number): any {
  const people = readPeopleFromFile();
  console.log(JSON.stringify(people));
  const person = people.find(p => p.id == id)
  console.log(JSON.stringify(people.filter(p => p.id != id), null, 2), "DELETE");
  writePeopleToFile(people.filter(p => p.id != id));
  return person;
}

export function createPersonInDb(name: string, active: boolean): any {
  const people = readPeopleFromFile();
  console.log(Math.max(...people.map(p => {return p.id})), "MAX")
  console.log(JSON.stringify(people));
  people.push(new PersonEntity(Math.max(...people.map(p => {return p.id})) + 1, name, active, Date.now()));
  writePeopleToFile(people);
  console.log(JSON.stringify(people));
  return people[people.length - 1];
}

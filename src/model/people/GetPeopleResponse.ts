import { PersonEntity } from 'src/core/db/entities/PersonEntity';

import { Person } from './Person';

export class GetPeopleResponse {
  public people: Person[];

  constructor(people: PersonEntity[]) {
    this.people = people.map((pe) => new Person(pe.name, pe.active));
  }
}

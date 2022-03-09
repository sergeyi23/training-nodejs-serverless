import { PersonEntity } from 'src/core/db/entities/PersonEntity';

import { Person } from './Person';

export class CreatePersonResponse {
  public person: Person;

  constructor(person: PersonEntity) {
    this.person = new Person(person.id, person.name, person.active);
  }
}

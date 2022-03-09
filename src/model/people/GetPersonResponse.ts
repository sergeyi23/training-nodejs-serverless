import { PersonEntity } from 'src/core/db/entities/PersonEntity';

import { Person } from './Person';

export class GetPersonResponse {
  public person: Person;

  constructor(person: PersonEntity) {
    this.person = new Person(person.name, person.active);
  }
}

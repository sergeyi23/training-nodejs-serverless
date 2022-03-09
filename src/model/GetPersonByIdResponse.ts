import { PersonEntity } from 'src/core/db/entities/PersonEntity';

import { Person } from './Person';

export class GetPersonByIdResponse {
  public person: Person | string;

  constructor(person: PersonEntity | undefined) {
    if (person === undefined) {
      this.person = 'NOT FOUNDED';
    } else {
      this.person = new Person(person.name, person.active);
    }
  }
}

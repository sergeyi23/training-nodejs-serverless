import { PersonEntity } from 'src/core/db/entities/PersonEntity';

import { Person } from './Person';

export class GetPersonIdResponse {
  public person: Person | string;

  constructor(person: PersonEntity | undefined) {
    if (person === undefined) {
      this.person = '404';
    } else {
      this.person = new Person(person.name, person.active);
    }
  }
}

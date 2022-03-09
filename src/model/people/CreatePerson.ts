import { PersonEntity } from 'src/core/db/entities/PersonEntity';

import { Person } from './Person';

export class CreatePersonRequest {
  public name: string;

  public active: boolean;

  constructor(req: any) {
    this.name = req.body.name;
    this.active = req.body.active;
  }
}

export class CreatePersonResponse {
  public person: Person;

  constructor(person: PersonEntity) {
    this.person = new Person(person.name, person.active);
  }
}

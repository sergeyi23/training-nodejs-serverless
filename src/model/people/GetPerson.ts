import { PersonEntity } from 'src/core/db/entities/PersonEntity';
import { Person } from './Person';

export class GetPersonRequest {
  public id: string;

  constructor(req: any) {
      this.id = req.params.id;
  }
}

export class GetPersonResponse {
  public person: Person;

  constructor(person: PersonEntity) {
    this.person = new Person(person.name, person.active);
  }
}
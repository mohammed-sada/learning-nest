export class CreateBookDto {
  name: string;
  age: number;
  type: string;
}

export class UpdateBookDto {
  name: string;
  age: number;
  type: string;
}

export class ListAllEntities {
  limit: number;
}

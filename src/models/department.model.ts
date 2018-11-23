import { Entity, model, property } from '@loopback/repository';

@model()
export class Department extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  dept_id: number;

  @property({
    type: 'string',
    required: true,
  })
  name?: string;

  constructor(data?: Partial<Department>) {
    super(data);
  }
}

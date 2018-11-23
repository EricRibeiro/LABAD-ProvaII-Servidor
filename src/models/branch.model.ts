import {Entity, model, property} from '@loopback/repository';

@model()
export class Branch extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  branch_id: number;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'string',
  })
  city?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  state?: string;

  @property({
    type: 'string',
  })
  zip_code?: string;

  constructor(data?: Partial<Branch>) {
    super(data);
  }
}

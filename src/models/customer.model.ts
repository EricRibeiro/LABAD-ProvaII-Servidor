import { Entity, model, property } from '@loopback/repository';

@model()
export class Customer extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  cust_id: number;

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
  cust_type_cd: string;

  @property({
    type: 'string',
    required: true,
  })
  fed_id: string;

  @property({
    type: 'string',
  })
  postal_code?: string;

  @property({
    type: 'string',
  })
  state?: string;

  constructor(data?: Partial<Customer>) {
    super(data);
  }
}

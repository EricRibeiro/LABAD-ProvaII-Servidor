import {Entity, model, property} from '@loopback/repository';

@model()
export class Customer extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  custId: number;

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
  custTypeCd: string;

  @property({
    type: 'string',
    required: true,
  })
  fedId: string;

  @property({
    type: 'string',
  })
  postalCode?: string;

  @property({
    type: 'string',
  })
  state?: string;

  constructor(data?: Partial<Customer>) {
    super(data);
  }
}

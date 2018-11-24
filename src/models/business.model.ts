import {Entity, model, property} from '@loopback/repository';

@model()
export class Business extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  cust_id: number;

  @property({
    type: 'date',
  })
  incorp_date?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  state_id: string;

  constructor(data?: Partial<Business>) {
    super(data);
  }
}

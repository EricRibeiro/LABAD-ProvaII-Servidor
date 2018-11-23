import { Entity, model, property, belongsTo } from '@loopback/repository';
import { Customer } from './customer.model';

@model()
export class Individual extends Entity {
  @property({
    type: 'date',
  })
  birth_date?: string;

  @property({
    type: 'string',
    required: true,
  })
  first_name: string;

  @property({
    type: 'string',
    required: true,
  })
  last_name?: string;

  @property({
    type: 'number',
    id: true,
    required: true,
  })
  cust_id: number;

  constructor(data?: Partial<Individual>) {
    super(data);
  }
}

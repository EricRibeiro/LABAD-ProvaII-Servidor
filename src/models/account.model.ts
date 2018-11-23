import { Entity, model, property, belongsTo } from '@loopback/repository';
import { Customer } from '.';
import { Branch } from './branch.model';
import { Employee } from './employee.model';
import { Product } from './product.model';

@model()
export class Account extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  account_id: number;

  @property({
    type: 'number',
  })
  avail_balance?: number;

  @property({
    type: 'date',
  })
  close_date?: string;

  @property({
    type: 'date',
  })
  last_activity_date?: string;

  @property({
    type: 'date',
    required: true,
  })
  open_date: string;

  @property({
    type: 'number',
  })
  pending_balance?: number;

  @property({
    type: 'string',
  })
  status?: string;

  @belongsTo(() => Customer)
  cust_id?: number;

  @belongsTo(() => Branch)
  open_branch_id: number;

  @belongsTo(() => Employee)
  open_emp_id: number;

  @belongsTo(() => Product)
  product_cd: string;

  constructor(data?: Partial<Account>) {
    super(data);
  }
}

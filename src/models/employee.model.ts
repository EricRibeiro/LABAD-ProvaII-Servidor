import { Entity, model, property, belongsTo } from '@loopback/repository';
import { Branch } from './branch.model';
import { Department } from './department.model';

@model()
export class Employee extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  emp_id: number;

  @property({
    type: 'date',
  })
  end_date?: string;

  @property({
    type: 'string',
    required: true,
  })
  first_name: string;

  @property({
    type: 'string',
    required: true,
  })
  last_name: string;

  @property({
    type: 'date',
    required: true,
  })
  start_date: string;

  @property({
    type: 'string',
  })
  title?: string;

  @belongsTo(() => Branch)
  assigned_branch_id?: number;

  @belongsTo(() => Department)
  dept_id?: number;

  @belongsTo(() => Employee)
  superior_emp_id?: number;

  constructor(data?: Partial<Employee>) {
    super(data);
  }
}

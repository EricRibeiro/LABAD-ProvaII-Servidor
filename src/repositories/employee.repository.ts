import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Employee} from '../models';
import {DatabaseDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EmployeeRepository extends DefaultCrudRepository<
  Employee,
  typeof Employee.prototype.emp_id
> {
  constructor(
    @inject('datasources.database') dataSource: DatabaseDataSource,
  ) {
    super(Employee, dataSource);
  }
}

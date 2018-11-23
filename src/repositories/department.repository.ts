import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Department} from '../models';
import {DatabaseDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DepartmentRepository extends DefaultCrudRepository<
  Department,
  typeof Department.prototype.dept_id
> {
  constructor(
    @inject('datasources.database') dataSource: DatabaseDataSource,
  ) {
    super(Department, dataSource);
  }
}

import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Branch} from '../models';
import {DatabaseDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BranchRepository extends DefaultCrudRepository<
  Branch,
  typeof Branch.prototype.branch_id
> {
  constructor(
    @inject('datasources.database') dataSource: DatabaseDataSource,
  ) {
    super(Branch, dataSource);
  }
}

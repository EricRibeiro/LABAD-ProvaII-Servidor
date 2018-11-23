import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Individual } from '../models';
import { DatabaseDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class IndividualRepository extends DefaultCrudRepository<
  Individual,
  typeof Individual.prototype.cust_id
  > {
  constructor(
    @inject('datasources.database') dataSource: DatabaseDataSource,
  ) {
    super(Individual, dataSource);
  }
}

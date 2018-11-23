import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Customer } from '../models';
import { DatabaseDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.cust_id
  > {
  constructor(
    @inject('datasources.database') dataSource: DatabaseDataSource,
  ) {
    super(Customer, dataSource);
  }
}

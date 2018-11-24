import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Business} from '../models';
import {DatabaseDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BusinessRepository extends DefaultCrudRepository<
  Business,
  typeof Business.prototype.cust_id
> {
  constructor(
    @inject('datasources.database') dataSource: DatabaseDataSource,
  ) {
    super(Business, dataSource);
  }
}

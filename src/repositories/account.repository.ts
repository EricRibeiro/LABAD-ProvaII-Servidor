import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Account} from '../models';
import {DatabaseDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AccountRepository extends DefaultCrudRepository<
  Account,
  typeof Account.prototype.account_id
> {
  constructor(
    @inject('datasources.database') dataSource: DatabaseDataSource,
  ) {
    super(Account, dataSource);
  }
}

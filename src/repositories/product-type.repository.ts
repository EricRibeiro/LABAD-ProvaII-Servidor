import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {ProductType} from '../models';
import {DatabaseDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProductTypeRepository extends DefaultCrudRepository<
  ProductType,
  typeof ProductType.prototype.product_type_cd
> {
  constructor(
    @inject('datasources.database') dataSource: DatabaseDataSource,
  ) {
    super(ProductType, dataSource);
  }
}

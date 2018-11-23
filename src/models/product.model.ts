import { Entity, model, property, belongsTo } from '@loopback/repository';
import { ProductType } from './product-type.model';

@model()
export class Product extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  product_cd: string;

  @property({
    type: 'date',
  })
  date_offered?: string;

  @property({
    type: 'date',
  })
  date_retired?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @belongsTo(() => ProductType)
  product_type_cd?: string;

  constructor(data?: Partial<Product>) {
    super(data);
  }
}

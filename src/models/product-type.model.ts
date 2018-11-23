import { Entity, model, property } from '@loopback/repository';

@model()
export class ProductType extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  product_type_cd: string;

  @property({
    type: 'string',
  })
  name?: string;

  constructor(data?: Partial<ProductType>) {
    super(data);
  }
}

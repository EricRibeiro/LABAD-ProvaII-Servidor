import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  del,
  requestBody,
} from '@loopback/rest';
import {ProductType} from '../models';
import {ProductTypeRepository} from '../repositories';

export class ProductTypeController {
  constructor(
    @repository(ProductTypeRepository)
    public productTypeRepository : ProductTypeRepository,
  ) {}

  @post('/product-types', {
    responses: {
      '200': {
        description: 'ProductType model instance',
        content: {'application/json': {schema: {'x-ts-type': ProductType}}},
      },
    },
  })
  async create(@requestBody() productType: ProductType): Promise<ProductType> {
    return await this.productTypeRepository.create(productType);
  }

  @get('/product-types/count', {
    responses: {
      '200': {
        description: 'ProductType model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(ProductType)) where?: Where,
  ): Promise<Count> {
    return await this.productTypeRepository.count(where);
  }

  @get('/product-types', {
    responses: {
      '200': {
        description: 'Array of ProductType model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': ProductType}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(ProductType)) filter?: Filter,
  ): Promise<ProductType[]> {
    return await this.productTypeRepository.find(filter);
  }

  @patch('/product-types', {
    responses: {
      '200': {
        description: 'ProductType PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() productType: ProductType,
    @param.query.object('where', getWhereSchemaFor(ProductType)) where?: Where,
  ): Promise<Count> {
    return await this.productTypeRepository.updateAll(productType, where);
  }

  @get('/product-types/{id}', {
    responses: {
      '200': {
        description: 'ProductType model instance',
        content: {'application/json': {schema: {'x-ts-type': ProductType}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<ProductType> {
    return await this.productTypeRepository.findById(id);
  }

  @patch('/product-types/{id}', {
    responses: {
      '204': {
        description: 'ProductType PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() productType: ProductType,
  ): Promise<void> {
    await this.productTypeRepository.updateById(id, productType);
  }

  @del('/product-types/{id}', {
    responses: {
      '204': {
        description: 'ProductType DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.productTypeRepository.deleteById(id);
  }
}

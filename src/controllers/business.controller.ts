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
import {Business} from '../models';
import {BusinessRepository} from '../repositories';

export class BusinessController {
  constructor(
    @repository(BusinessRepository)
    public businessRepository : BusinessRepository,
  ) {}

  @post('/businesses', {
    responses: {
      '200': {
        description: 'Business model instance',
        content: {'application/json': {schema: {'x-ts-type': Business}}},
      },
    },
  })
  async create(@requestBody() business: Business): Promise<Business> {
    return await this.businessRepository.create(business);
  }

  @get('/businesses/count', {
    responses: {
      '200': {
        description: 'Business model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Business)) where?: Where,
  ): Promise<Count> {
    return await this.businessRepository.count(where);
  }

  @get('/businesses', {
    responses: {
      '200': {
        description: 'Array of Business model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Business}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Business)) filter?: Filter,
  ): Promise<Business[]> {
    return await this.businessRepository.find(filter);
  }

  @patch('/businesses', {
    responses: {
      '200': {
        description: 'Business PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() business: Business,
    @param.query.object('where', getWhereSchemaFor(Business)) where?: Where,
  ): Promise<Count> {
    return await this.businessRepository.updateAll(business, where);
  }

  @get('/businesses/{id}', {
    responses: {
      '200': {
        description: 'Business model instance',
        content: {'application/json': {schema: {'x-ts-type': Business}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Business> {
    return await this.businessRepository.findById(id);
  }

  @patch('/businesses/{id}', {
    responses: {
      '204': {
        description: 'Business PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() business: Business,
  ): Promise<void> {
    await this.businessRepository.updateById(id, business);
  }

  @del('/businesses/{id}', {
    responses: {
      '204': {
        description: 'Business DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.businessRepository.deleteById(id);
  }
}

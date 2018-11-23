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
import {Individual} from '../models';
import {IndividualRepository} from '../repositories';

export class IndividualController {
  constructor(
    @repository(IndividualRepository)
    public individualRepository : IndividualRepository,
  ) {}

  @post('/individuals', {
    responses: {
      '200': {
        description: 'Individual model instance',
        content: {'application/json': {schema: {'x-ts-type': Individual}}},
      },
    },
  })
  async create(@requestBody() individual: Individual): Promise<Individual> {
    return await this.individualRepository.create(individual);
  }

  @get('/individuals/count', {
    responses: {
      '200': {
        description: 'Individual model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Individual)) where?: Where,
  ): Promise<Count> {
    return await this.individualRepository.count(where);
  }

  @get('/individuals', {
    responses: {
      '200': {
        description: 'Array of Individual model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Individual}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Individual)) filter?: Filter,
  ): Promise<Individual[]> {
    return await this.individualRepository.find(filter);
  }

  @patch('/individuals', {
    responses: {
      '200': {
        description: 'Individual PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() individual: Individual,
    @param.query.object('where', getWhereSchemaFor(Individual)) where?: Where,
  ): Promise<Count> {
    return await this.individualRepository.updateAll(individual, where);
  }

  @get('/individuals/{id}', {
    responses: {
      '200': {
        description: 'Individual model instance',
        content: {'application/json': {schema: {'x-ts-type': Individual}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Individual> {
    return await this.individualRepository.findById(id);
  }

  @patch('/individuals/{id}', {
    responses: {
      '204': {
        description: 'Individual PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() individual: Individual,
  ): Promise<void> {
    await this.individualRepository.updateById(id, individual);
  }

  @del('/individuals/{id}', {
    responses: {
      '204': {
        description: 'Individual DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.individualRepository.deleteById(id);
  }
}

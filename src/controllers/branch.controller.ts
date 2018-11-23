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
import {Branch} from '../models';
import {BranchRepository} from '../repositories';

export class BranchController {
  constructor(
    @repository(BranchRepository)
    public branchRepository : BranchRepository,
  ) {}

  @post('/branches', {
    responses: {
      '200': {
        description: 'Branch model instance',
        content: {'application/json': {schema: {'x-ts-type': Branch}}},
      },
    },
  })
  async create(@requestBody() branch: Branch): Promise<Branch> {
    return await this.branchRepository.create(branch);
  }

  @get('/branches/count', {
    responses: {
      '200': {
        description: 'Branch model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Branch)) where?: Where,
  ): Promise<Count> {
    return await this.branchRepository.count(where);
  }

  @get('/branches', {
    responses: {
      '200': {
        description: 'Array of Branch model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Branch}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Branch)) filter?: Filter,
  ): Promise<Branch[]> {
    return await this.branchRepository.find(filter);
  }

  @patch('/branches', {
    responses: {
      '200': {
        description: 'Branch PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() branch: Branch,
    @param.query.object('where', getWhereSchemaFor(Branch)) where?: Where,
  ): Promise<Count> {
    return await this.branchRepository.updateAll(branch, where);
  }

  @get('/branches/{id}', {
    responses: {
      '200': {
        description: 'Branch model instance',
        content: {'application/json': {schema: {'x-ts-type': Branch}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Branch> {
    return await this.branchRepository.findById(id);
  }

  @patch('/branches/{id}', {
    responses: {
      '204': {
        description: 'Branch PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() branch: Branch,
  ): Promise<void> {
    await this.branchRepository.updateById(id, branch);
  }

  @del('/branches/{id}', {
    responses: {
      '204': {
        description: 'Branch DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.branchRepository.deleteById(id);
  }
}

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
import {Department} from '../models';
import {DepartmentRepository} from '../repositories';

export class DepartmentController {
  constructor(
    @repository(DepartmentRepository)
    public departmentRepository : DepartmentRepository,
  ) {}

  @post('/departments', {
    responses: {
      '200': {
        description: 'Department model instance',
        content: {'application/json': {schema: {'x-ts-type': Department}}},
      },
    },
  })
  async create(@requestBody() department: Department): Promise<Department> {
    return await this.departmentRepository.create(department);
  }

  @get('/departments/count', {
    responses: {
      '200': {
        description: 'Department model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Department)) where?: Where,
  ): Promise<Count> {
    return await this.departmentRepository.count(where);
  }

  @get('/departments', {
    responses: {
      '200': {
        description: 'Array of Department model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Department}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Department)) filter?: Filter,
  ): Promise<Department[]> {
    return await this.departmentRepository.find(filter);
  }

  @patch('/departments', {
    responses: {
      '200': {
        description: 'Department PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() department: Department,
    @param.query.object('where', getWhereSchemaFor(Department)) where?: Where,
  ): Promise<Count> {
    return await this.departmentRepository.updateAll(department, where);
  }

  @get('/departments/{id}', {
    responses: {
      '200': {
        description: 'Department model instance',
        content: {'application/json': {schema: {'x-ts-type': Department}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Department> {
    return await this.departmentRepository.findById(id);
  }

  @patch('/departments/{id}', {
    responses: {
      '204': {
        description: 'Department PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() department: Department,
  ): Promise<void> {
    await this.departmentRepository.updateById(id, department);
  }

  @del('/departments/{id}', {
    responses: {
      '204': {
        description: 'Department DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.departmentRepository.deleteById(id);
  }
}

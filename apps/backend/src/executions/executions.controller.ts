import {Controller, Get} from '@nestjs/common'
import {ExecutionsService} from './executions.service'
import {Execution} from './types/execution'

@Controller('executions')
export class ExecutionsController {
    constructor(private readonly executionsService: ExecutionsService) {}

    @Get()
    getExecutions(): Promise<Execution[]> {
        return this.executionsService.getExecutions()
    }
}
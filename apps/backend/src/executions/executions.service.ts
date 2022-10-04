import {Injectable} from '@nestjs/common';
import { Execution } from './types/execution';

@Injectable()
export class ExecutionsService {
    async getExecutions(): Promise<Execution[]> {
        return []
    }
}
import {Controller, Get} from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { Profile } from './types/profile';

@Controller('profiles')
export class ProfilesController {
    constructor(private readonly profilesService: ProfilesService) {}

    @Get()
    getProfiles(): Promise<Profile[]> {
        return this.profilesService.getProfiles();
    }
}
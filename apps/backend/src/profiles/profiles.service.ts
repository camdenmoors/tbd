import {Injectable} from '@nestjs/common';
import { Profile } from './types/profile';

var glob = require("glob")
const fs = require('fs')

@Injectable()
export class ProfilesService {
    async getProfiles(): Promise<Profile[]> {
        // Get all profiles
        const profiles = glob.sync('../../profiles/**/*.json')

        // Read all profiles
        const profileData: Profile[] = profiles.map((profile: string) => {
            return JSON.parse(fs.readFileSync(profile, 'utf-8')) as Profile
        })

        return profileData
    }
}
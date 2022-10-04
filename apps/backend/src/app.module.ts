import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './config/config.service';
import { ExecutionsController } from './executions/executions.controller';
import { ExecutionsService } from './executions/executions.service';
import { ProfilesController } from './profiles/profiles.controller';
import { ProfilesService } from './profiles/profiles.service';

@Module({
  imports: [],
  controllers: [AppController, ProfilesController, ExecutionsController],
  providers: [AppService, ProfilesService, ExecutionsService, ConfigService],
})

export class AppModule {}

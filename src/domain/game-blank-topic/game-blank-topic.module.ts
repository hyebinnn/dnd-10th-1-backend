import { Module } from '@nestjs/common';
import { GameBlankTopicService } from './game-blank-topic.service';
import { GameBlankTopicController } from './game-blank-topic.controller';

@Module({
  providers: [GameBlankTopicService],
  controllers: [GameBlankTopicController]
})
export class GameBlankTopicModule {}

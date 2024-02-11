import { Test, TestingModule } from '@nestjs/testing';
import { GameBlankTopicController } from './game-blank-topic.controller';

describe('GameBlankTopicController', () => {
  let controller: GameBlankTopicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameBlankTopicController],
    }).compile();

    controller = module.get<GameBlankTopicController>(GameBlankTopicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

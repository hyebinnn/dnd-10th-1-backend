import { Test, TestingModule } from '@nestjs/testing';
import { GameBlankTopicService } from './game-blank-topic.service';

describe('GameBlankTopicService', () => {
  let service: GameBlankTopicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameBlankTopicService],
    }).compile();

    service = module.get<GameBlankTopicService>(GameBlankTopicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

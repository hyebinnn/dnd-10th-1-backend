import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GameBlankTopicService } from './game-blank-topic.service';
import { Response } from 'express';

@ApiTags('Blank Topic API')
@Controller('game/blank-topic')
export class GameBlankTopicController {
        constructor(private readonly gameBlankTopicService: GameBlankTopicService) {}

        @ApiOperation({
                summary: '빈칸 주제 질문지 조회하기 API',
                description: '빈칸 주제 게임의 질문지를 조회합니다.',
        })
        @ApiResponse({
                status: 200,
                description: '빈칸 주제 질문지 조회 성공',
        })
        @Get()
        async getBlankTopic(@Res() res: Response) {
                const question = await this.gameBlankTopicService.getBlankQuestion();
                return res.status(HttpStatus.OK).json(question);
        }
}

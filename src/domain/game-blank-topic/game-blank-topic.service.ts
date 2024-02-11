import { PrismaService } from '@/shared-service/prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GameBlankTopicService {
        constructor(private readonly prismaService: PrismaService) {}

        async getBlankQuestion() {
                let lastQId = 0; // 임시 question id
                // NOTE: 각 방마다 마지막으로 진행한 question id 필드 필요성 논의 필요 -> room id를 전달받아서 question id를 필터링 해야 할 것 같음
                const question = this.prismaService.gameBlankTopic.findMany({
                        select: { id: true, description: true },
                        where: { id: lastQId + 1 },
                });
                return question;
        }
}

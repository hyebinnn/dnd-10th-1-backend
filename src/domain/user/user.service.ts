import { PrismaService } from '@/shared-service/prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
        constructor(private readonly prismaService: PrismaService) {}

        async setUserProfile(nickName: string, profileImage: string, roomId: string) {
                let user;
                if (roomId === '') {
                        user = await this.prismaService.user.create({
                                data: {
                                        displayName: nickName,
                                        profileImage: profileImage,
                                        role: 'Owner',
                                },
                        });
                } else {
                        user = await this.prismaService.user.create({
                                data: {
                                        displayName: nickName,
                                        profileImage: profileImage,
                                        role: 'Participant',
                                },
                        });
                }

                return user;
        }
}

import { PrismaService } from '@/shared-service/prisma';
import { Injectable } from '@nestjs/common';
import { Role } from '@prisma/client';

@Injectable()
export class UserService {
        constructor(private readonly prismaService: PrismaService) {}

        async findOneById(id: number) {
                const userInfo = await this.prismaService.user.findUnique({
                        select: {
                                id: true,
                                displayName: true,
                                profileImage: true,
                                role: true,
                                status: true,
                        },
                        where: { id },
                });
                return userInfo;
        }

        async updatePermission(data: { userId: number; roomId: string; role: Role }) {
                const { userId, roomId, role } = data;

                const _updateUserPermission = await this.prismaService.user.update({
                        data: {
                                role: role,
                                roomId: roomId,
                        },
                        where: {
                                id: userId,
                        },
                });

                return;
        }

        async updateMbti(data: { userId: number; mbti: string }) {
                const { userId, mbti } = data;
                const mbtiNickname = await this.prismaService.gameMbti.findUnique({
                        select: { mbtiNickname: true },
                        where: { mbti: mbti },
                });

                const _updateUserMbti = await this.prismaService.user.update({
                        where: {
                                id: Number(userId),
                        },
                        data: {
                                mbti,
                                mbtiNickname: mbtiNickname.mbtiNickname,
                        },
                });

                return;
        }

        async countMbtiByRoomId(roomId: string) {
                const userMbtiNullCount = await this.prismaService.user.count({
                        where: { roomId, mbti: null },
                });

                return userMbtiNullCount;
        }

        async updateUserRoomStatus(data: { userId: number; status: string }) {
                const { userId, status } = data;

                const _updateUserRoomStatus = await this.prismaService.user.updateMany({
                        where: {
                                id: userId,
                        },
                        data: {
                                status,
                        },
                });

                return;
        }

        async updateUsersRoomStatus(data: { userId: number[]; status: string }) {
                const { userId, status } = data;

                const _updateUsersRoomStatus = await this.prismaService.user.updateMany({
                        where: {
                                id: {
                                        in: userId,
                                },
                        },
                        data: {
                                status,
                        },
                });

                return;
        }

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
                                        roomId: roomId,
                                },
                        });
                }

                return user;
        }
}

import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateUserInfoDto } from './dto/create-user-info.dto'
import { UpdateUserInfoDto } from './dto/update-user-info.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserInfo } from './entities/user-info.entity'

@Injectable()
export class UserInfoService {
  constructor(
    @InjectRepository(UserInfo)
    private userInfoRepository: Repository<UserInfo>,
  ) {
    // TODO
  }

  async create(createUserInfoDto: CreateUserInfoDto): Promise<UserInfo> {
    const user = this.userInfoRepository.create(createUserInfoDto)
    return this.userInfoRepository.save(user)
  }

  async findAll(): Promise<UserInfo[]> {
    return this.userInfoRepository.find()
  }

  async findOne(id: string): Promise<UserInfo> {
    const user = await this.userInfoRepository.findOneBy({ id })
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`)
    }
    return user
  }

  async update(
    id: string,
    updateUserInfoDto: UpdateUserInfoDto,
  ): Promise<UserInfo> {
    await this.userInfoRepository.update(id, updateUserInfoDto)
    return this.findOne(id)
  }

  async remove(id: string): Promise<void> {
    await this.userInfoRepository.delete(id)
  }
}

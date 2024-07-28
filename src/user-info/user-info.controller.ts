import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { UserInfoService } from './user-info.service'
import { CreateUserInfoDto } from './dto/create-user-info.dto'
import { UpdateUserInfoDto } from './dto/update-user-info.dto'
import { UserInfo } from './entities/user-info.entity'

@Controller('user-info')
export class UserInfoController {
  constructor(private readonly userInfoService: UserInfoService) {
    // TODO
  }

  @Post()
  async create(
    @Body() createUserInfoDto: CreateUserInfoDto,
  ): Promise<UserInfo> {
    return this.userInfoService.create(createUserInfoDto)
  }

  @Get()
  async findAll(): Promise<UserInfo[]> {
    return this.userInfoService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserInfo> {
    return this.userInfoService.findOne(id)
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserInfoDto: UpdateUserInfoDto,
  ): Promise<UserInfo> {
    return this.userInfoService.update(id, updateUserInfoDto)
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.userInfoService.remove(id)
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { CategoryInfoService } from './category-info.service'
import { CreateCategoryInfoDto } from './dto/create-category-info.dto'
import { UpdateCategoryInfoDto } from './dto/update-category-info.dto'
import { CategoryInfo } from './entities/category-info.entity'

@Controller('category-info')
export class CategoryInfoController {
  constructor(private readonly categoryInfoService: CategoryInfoService) {
    // TODO
  }

  @Post()
  async create(
    @Body() createCategoryInfoDto: CreateCategoryInfoDto,
  ): Promise<CategoryInfo> {
    return this.categoryInfoService.create(createCategoryInfoDto)
  }

  @Get()
  async findAll(): Promise<CategoryInfo[]> {
    return this.categoryInfoService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CategoryInfo> {
    return this.categoryInfoService.findOne(id)
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCategoryInfoDto: UpdateCategoryInfoDto,
  ): Promise<CategoryInfo> {
    return this.categoryInfoService.update(id, updateCategoryInfoDto)
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.categoryInfoService.remove(+id)
  }
}

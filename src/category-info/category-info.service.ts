import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateCategoryInfoDto } from './dto/create-category-info.dto'
import { UpdateCategoryInfoDto } from './dto/update-category-info.dto'
import { CategoryInfo } from './entities/category-info.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class CategoryInfoService {
  constructor(
    @InjectRepository(CategoryInfo)
    private categoryInfoRepository: Repository<CategoryInfo>,
  ) {
    // TODO
  }

  async create(
    createCategoryInfoDto: CreateCategoryInfoDto,
  ): Promise<CategoryInfo> {
    const category = this.categoryInfoRepository.create(createCategoryInfoDto)
    return this.categoryInfoRepository.save(category)
  }

  async findAll(): Promise<CategoryInfo[]> {
    return this.categoryInfoRepository.find()
  }

  async findOne(id: string): Promise<CategoryInfo> {
    const category = await this.categoryInfoRepository.findOneBy({ id })
    if (!category) {
      throw new NotFoundException(`User with ID ${id} not found`)
    }
    return category
  }

  async update(
    id: string,
    updateCategoryInfoDto: UpdateCategoryInfoDto,
  ): Promise<CategoryInfo> {
    await this.categoryInfoRepository.update(id, updateCategoryInfoDto)
    return this.findOne(id)
  }

  async remove(id: number): Promise<void> {
    await this.categoryInfoRepository.delete(id)
  }
}

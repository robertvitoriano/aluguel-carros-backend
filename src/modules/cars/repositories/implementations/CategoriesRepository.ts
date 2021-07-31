import { Category } from '../../entities/Category'
import { ICategoriesRepository, ICreateCategoryDTO } from '../ICategoriesRepository'

import { getRepository, Repository} from 'typeorm'

class CategoriesRepository implements ICategoriesRepository {
  
  constructor () {

    this.repository = getRepository(Category)

  }

  private repository: Repository<Category>

  async create ({name, description}: ICreateCategoryDTO ): Promise<void> {
    console.log('criar categoria')

    const category = this.repository.create({
      description,
      name
    })
  
   await this.repository.save(category)
     
  }

  async list(): Promise<Category[]>{

    const categories =  await this.repository.find()

    return categories

  }

  async findByName (name: String):Promise<Category>{

    const category =  await this.repository.findOne({name:name})

    return category
    
  }

}

export { CategoriesRepository }
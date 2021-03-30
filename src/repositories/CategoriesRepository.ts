import { Category } from './../models/Category'
import { ICreateCategoriesRepository } from './ICategoriesRepository'

// DTO Data transfer object

interface ICreateCategoryDTO{
  name: string
  description: string
}
class CategoriesRepository implements ICreateCategoriesRepository {

  private categories: Array<Category> = []

  constructor (){

    this.categories = []

  }

  create ({name, description}: ICreateCategoryDTO ): void {
    const category = new Category()

    Object.assign(category,{
      name, 
      description,
      created_at: new Date()
    })
     
    this.categories.push(category)
  }

  list(): Category[]{

    return this.categories
  }



  findByName (name: String):Category{
    const category = this.categories.find((category)=>category.name === name)

    return category
  }

}

export { CategoriesRepository }
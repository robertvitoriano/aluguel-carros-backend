import { Category } from './../models/Category'

// DTO Data transfer object

interface ICreateCategoryDTO{
  name: string
  description: string
}
class CategoriesRepository {

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




}

export { CategoriesRepository }
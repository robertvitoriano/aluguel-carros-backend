import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";



const createCategory = () =>{
  console.log('create category')
  const categoriesRepository =  new CategoriesRepository()
  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
  const createCategoryController = new CreateCategoryController(createCategoryUseCase)
  
  return createCategoryController
}
export default createCategory
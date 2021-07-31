import { ListCategoriesController } from "./listCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

export default () => {
  const categoriesRepository = new CategoriesRepository()
  const listCategoryUseCase = new ListCategoriesUseCase(categoriesRepository);
  const listCategoriesController = new ListCategoriesController(listCategoryUseCase)

  return listCategoriesController

}





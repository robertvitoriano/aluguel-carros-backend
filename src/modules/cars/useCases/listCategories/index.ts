import {ListCategoriesController} from "./listCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";
import { CategoriesRepository } from "./../../repositories/CategoriesRepository";

const categoriesRepository = new CategoriesRepository();

const listCategoryUseCase = new ListCategoriesUseCase(categoriesRepository);

const listCategoriesController = new ListCategoriesController(listCategoryUseCase)


export {listCategoryUseCase, listCategoriesController }
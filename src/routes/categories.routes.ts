import {Router} from 'express'
import { CreateCategoryUseCase } from '../modules/cars/useCases/createCategory/CreateCategoryUseCase'
import {CategoriesRepository} from '../modules/cars/repositories/CategoriesRepository'

import { createCategoryController } from './../modules/cars/useCases/createCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'

const categoriesRoutes = Router()



categoriesRoutes.post("/",createCategoryController.handle)

categoriesRoutes.get("/",listCategoriesController.handle)


export { categoriesRoutes }
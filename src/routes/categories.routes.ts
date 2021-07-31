import {Router} from 'express'
import multer from 'multer'
import { CreateCategoryUseCase } from '../modules/cars/useCases/createCategory/CreateCategoryUseCase'
import {CategoriesRepository} from '../modules/cars/repositories/implementations/CategoriesRepository'

import { createCategoryController } from './../modules/cars/useCases/createCategory'
import { importCategoryController } from './../modules/cars//useCases/importCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'

const categoriesRoutes = Router()

const upload = multer({
  dest:"./tmp"
})



categoriesRoutes.post("/",createCategoryController.handle)

categoriesRoutes.get("/",listCategoriesController.handle)

categoriesRoutes.post('/import', upload.single( "file" ), importCategoryController.handle )

export { categoriesRoutes }
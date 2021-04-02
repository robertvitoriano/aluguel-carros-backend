import {Router} from 'express'
import { CreateCategoryUseCase } from '../modules/cars/useCases/createCategory/CreateCategoryUseCase'
import {CategoriesRepository} from '../modules/cars/repositories/CategoriesRepository'

import { createCategoryController } from './../modules/cars/useCases/createCategory'
const categoriesRoutes = Router()

const categoriesRepository = new CategoriesRepository()


categoriesRoutes.post("/",createCategoryController.handle)

categoriesRoutes.get("/", (request, response)=>{
  
  const categories =  categoriesRepository.list()

  return response.status(200).json(categories)

})


export { categoriesRoutes }
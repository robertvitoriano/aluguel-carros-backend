import {Router} from 'express'
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService'
import {CategoriesRepository} from '../modules/cars/repositories/CategoriesRepository'

const categoriesRoutes = Router()

const categoriesRepository = new CategoriesRepository()


categoriesRoutes.post("/", (request, response)=>{
  
  const{ name, description} = request.body

  const createCategoryService = new CreateCategoryService(categoriesRepository)

  try{
    createCategoryService.execute({name, description})

  }catch(e){
    console.log('Error',e)
    return response.status(400).json({error:e.message})


  }

  return response.status(201).send()

})

categoriesRoutes.get("/", (request, response)=>{
  
  const categories =  categoriesRepository.list()

  return response.status(200).json(categories)

})


export { categoriesRoutes }
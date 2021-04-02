import { request, Router } from 'express'
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService'
import { SpecificationRepository} from './../modules/cars/repositories/SpecificationRepository'
const specificationRoutes = Router()
const specificationRepository = new SpecificationRepository()
specificationRoutes.get("/",(reques, response)=>{

  const { name, description } = request.body
  const createSpecificationService = new CreateSpecificationService(specificationRepository)
  createSpecificationService.execute({name, description})

  return response.status(200).send();

})

export { specificationRoutes }
import { request, Router } from 'express'
import { CreateSpecificationService } from '../modules/cars/useCases/createSpecification/CreateSpecificationUseCase'
import { SpecificationRepository} from '../modules/cars/repositories/implementations/SpecificationRepository'
const specificationRoutes = Router()
const specificationRepository = new SpecificationRepository()
specificationRoutes.post("/",(request, response)=>{

  const { name, description } = request.body
  const createSpecificationService = new CreateSpecificationService(specificationRepository)
  createSpecificationService.execute({name, description})

  return response.status(200).send();

})


specificationRoutes.get("/",(request, response)=>{

  const { name } = request.query
  const createSpecificationService = new CreateSpecificationService(specificationRepository)

  const specification = specificationRepository.findByName(String(name))

  if(!specification)   return response.status(400).send();

  return response.status(200).json(specification);

})
export { specificationRoutes }
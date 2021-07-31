import { Router } from 'express'
import createSpecificationController from './../modules/cars/useCases/createSpecification/'
const specificationRoutes = Router()

specificationRoutes.post("/", createSpecificationController().handle)


specificationRoutes.get("/",)
export { specificationRoutes }
import { Router, Request, Response } from 'express'
import { CreateSpecificationController }from './../modules/cars/useCases/createSpecification/CreateSpecificationController'
const specificationRoutes = Router()

const createSpecificationController = new CreateSpecificationController()

specificationRoutes.post("/", createSpecificationController.handle)

specificationRoutes.get("/")
export { specificationRoutes }
import { Router, Request, Response } from 'express'
import createSpecificationController from './../modules/cars/useCases/createSpecification/'
const specificationRoutes = Router()

specificationRoutes.post("/", (request:Request, response:Response)=>createSpecificationController().handle(request, response))

specificationRoutes.get("/")
export { specificationRoutes }
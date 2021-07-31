import { Request, Response } from 'express'
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'
class CreateSpecificationController {

  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) { }

  handle = async (request: Request, response: Response): Promise<Response> => {

    const { name, description } = request.body

    await this.createSpecificationUseCase.execute({ name, description })

    return response.status(200).send();

  }
}

export { CreateSpecificationController }
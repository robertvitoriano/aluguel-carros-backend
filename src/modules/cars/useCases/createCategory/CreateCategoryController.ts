import { Request, Response } from 'express'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

class CreateCategoryController {

  constructor(private createCategoryUseCase: CreateCategoryUseCase) {

  }
  handle = async (request: Request, response: Response) => {
    const { name, description } = request.body

    try {

     await this.createCategoryUseCase.execute({ name, description })

    } catch (e) {
      console.error('Error', e)
      return response.status(400).json({ error: e.message })
    }

    return response.status(201).send()

  }
}
export { CreateCategoryController }
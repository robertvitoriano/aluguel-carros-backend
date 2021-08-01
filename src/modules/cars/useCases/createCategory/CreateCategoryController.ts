import { Request, Response } from 'express'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

import { container } from 'tsyringe'
class CreateCategoryController {


  handle = async (request: Request, response: Response) => {
    const { name, description } = request.body

    try {

      const createCategoryUseCase = container.resolve(CreateCategoryUseCase)

     await createCategoryUseCase.execute({ name, description })

    } catch (e) {
      console.error('Error', e)
      return response.status(400).json({ error: e.message })
    }

    return response.status(201).send()

  }
}
export { CreateCategoryController }
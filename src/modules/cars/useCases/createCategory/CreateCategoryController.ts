import { Request, Response } from 'express'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

import { container } from 'tsyringe'
class CreateCategoryController {


  handle = async (request: Request, response: Response) => {
    const { name, description } = request.body

    try {

      const createCategoryUseCase = container.resolve(CreateCategoryUseCase)

      const category = await createCategoryUseCase.execute({ name, description })

      return response.status(201).send({category})

    } catch (e) {
      console.error('Error', e)
      return response.status(400).json({ error: e.message })
    }


  }
}
export { CreateCategoryController }
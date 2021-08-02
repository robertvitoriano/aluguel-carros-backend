import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListCategoriesUseCase} from './ListCategoriesUseCase'
class ListCategoriesController {


  handle = async (request: Request, response: Response): Promise<Response> =>{

    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase)

    const allCategories =  await listCategoriesUseCase.execute()

    return response.status(200).json(allCategories)

  }

}

export {ListCategoriesController}
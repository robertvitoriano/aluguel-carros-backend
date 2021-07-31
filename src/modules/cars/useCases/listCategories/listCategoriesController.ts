import { Request, Response } from 'express'
import { ListCategoriesUseCase} from './ListCategoriesUseCase'
class ListCategoriesController {

  constructor( private listCategoriesUseCase: ListCategoriesUseCase){}

  handle = async (request: Request, response: Response): Promise<Response> =>{

    const allCategories =  this.listCategoriesUseCase.execute()

    return response.status(200).json(allCategories)

  }

}

export {ListCategoriesController}
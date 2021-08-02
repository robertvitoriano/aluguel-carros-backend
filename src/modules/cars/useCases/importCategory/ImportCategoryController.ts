import { Response, Request } from 'express'
import { container } from 'tsyringe'

import {ImportCategoryUseCase} from './importCategoryUseCase'
class ImportCategoryController {

  handle = async (request: Request, response: Response): Promise<Response> => {

    const { file } = request

    const importCategoryUseCase = container.resolve(ImportCategoryUseCase)

    const categories =  await importCategoryUseCase.execute(file)


    return response.send(categories)


  }

}

export { ImportCategoryController }    
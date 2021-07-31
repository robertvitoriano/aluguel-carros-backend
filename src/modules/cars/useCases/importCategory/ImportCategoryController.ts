import { Response, Request } from 'express'

import {ImportCategoryUseCase} from './importCategoryUseCase'
class ImportCategoryController {

   constructor(private importCategoryUseCase: ImportCategoryUseCase){


   }

  handle = async (request: Request, response: Response): Promise<Response> => {

    const { file } = request

    await this.importCategoryUseCase.execute(file)


    return response.send(file)


  }

}

export { ImportCategoryController }    
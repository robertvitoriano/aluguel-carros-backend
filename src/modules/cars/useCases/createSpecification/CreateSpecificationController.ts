import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'

class CreateSpecificationController {

  handle = async (request: Request, response: Response): Promise<Response> => {

    const { name, description } = request.body
    
    const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase)

    try{

      const specification =  await createSpecificationUseCase.execute({ name, description })
      
      return response.status(200).send({specification});
    }catch(e){
      console.error(e)
      return response.status(400).send({error:e.message});

    }

  }
}

export { CreateSpecificationController }
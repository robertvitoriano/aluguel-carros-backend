
import {Request, Response} from 'express'
import CreateCourseService from './CreateCourseService'
export function createCourse (request: Request, response: Response){

    CreateCourseService.execute({name:'NODE JS',duration:56,educator:'Robert'})



    return response.json({msg:'it works'})

}
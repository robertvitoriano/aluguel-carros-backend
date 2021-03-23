import express from 'express'
import { createCourse } from './routes'


const app = express()


app.post('/courses',(request, response)=>{
    const {name} = request.body

    console.log('NAME', name)

})
app.listen(3000,()=>{
    console.log('My app is running')
})
import express from 'express'
import { createCourse } from './routes'


const app = express()


app.get('/',createCourse)

app.listen(3000,()=>{
    console.log('My app is running')
})
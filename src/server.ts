import express from 'express'
import { categoriesRoutes } from './routes/categories.routes'
import {specificationRoutes } from './routes/specifications.routes'

import morgan from 'morgan'
const app = express()


app.use(express.json())
app.use(morgan('common'))
app.use("/categories", categoriesRoutes)
app.use("/specifications", specificationRoutes)

app.listen(3000,()=>{
    console.log('My app is running')
})
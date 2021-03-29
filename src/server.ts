import express from 'express'
import { categoriesRoutes } from './routes/categories.routes'
import morgan from 'morgan'
const app = express()


app.use(express.json())
app.use(morgan('common'))
app.use("/categories",categoriesRoutes)

app.listen(3000,()=>{
    console.log('My app is running')
})
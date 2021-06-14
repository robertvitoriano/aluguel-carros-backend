import express from 'express'
import { categoriesRoutes } from './routes/categories.routes'
import { router } from './routes'
import swaggerUi from  'swagger-ui-express'
import swaggerConfig from "./swagger.json" 
import morgan from 'morgan'
const app = express()


app.use(express.json())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig))
app.use(morgan('common'))
app.use(router)


app.listen(3000,()=>{
    console.log('My')
    
})

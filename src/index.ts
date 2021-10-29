import express from 'express'
import UserRoutes from './routes/UserRoutes'
import ProductRoutes from './routes/ProductRoutes'
import PurchaseRoutes from './routes/PurchaseRoutes'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', UserRoutes)
app.use('/products', ProductRoutes)
app.use('/purchases', PurchaseRoutes)

const port = ((process.env as any).PORT !== undefined) ? (process.env as any).PORT : 3000

app.listen(port, () => {
  console.log(`it's alive on http://localhost:${String(port)}`)
})

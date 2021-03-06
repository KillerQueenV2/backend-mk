import mongoose from '../database'

const PedidosSchema = new mongoose.Schema({
  endereco: {
    type: String,
    required: true
  },
  telefone: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  selectedProductIds: {
    type: String,
    required: true
  },
  selectedProductQtds: {
    type: String,
    required: true
  }
})

export default mongoose.model('pedidos', PedidosSchema)
